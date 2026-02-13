/**
 * 下载并缓存景点图片到 trip-ui/assets/images/，并生成 trip-ui/image-manifest.js
 *
 * 使用：
 *   node .\scripts\cache_trip_images.mjs
 *
 * 说明：
 * - 只要 manifest 命中，前端就不会再去百度百科/Wikipedia/Unsplash 搜图
 * - 这里优先用 Wikipedia（更稳定、无 JSONP）
 */

import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import crypto from "node:crypto";

const ROOT = process.cwd();
const TRIP_UI_DIR = path.join(ROOT, "trip-ui");
const ITINERARY_PATH = path.join(TRIP_UI_DIR, "itinerary.js");
const OUT_DIR = path.join(TRIP_UI_DIR, "assets", "images");
const MANIFEST_PATH = path.join(TRIP_UI_DIR, "image-manifest.js");

function normalizePlaceName(name) {
  return String(name || "")
    .replace(/\(.*?\)/g, "")
    .replace(/\b[A-Z]{2,4}\b/g, "")
    .replace(/[·•]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function isAirportStop(rawName) {
  const raw = String(rawName || "");
  const base = normalizePlaceName(raw);
  const rawLower = raw.toLowerCase();
  if (base.includes("机场")) return true;
  if (rawLower.includes("airport") || rawLower.includes("aéroport") || rawLower.includes("aeroport"))
    return true;
  if (/\b(cdg|nce|fco|mxp|lin)\b/i.test(raw)) return true;
  return false;
}

function sha1(text) {
  return crypto.createHash("sha1").update(text).digest("hex").slice(0, 12);
}

function safeFileBase(text) {
  const base = normalizePlaceName(text)
    .replace(/[<>:"/\\|?*\u0000-\u001F]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 60);
  const hash = sha1(text);
  return `${base || "place"}-${hash}`;
}

function loadItinerary() {
  const code = fs.readFileSync(ITINERARY_PATH, "utf-8");
  const context = { window: {} };
  vm.createContext(context);
  vm.runInContext(code, context, { filename: "itinerary.js" });
  const data = context.window.ITINERARY;
  if (!Array.isArray(data)) throw new Error("Failed to load window.ITINERARY from trip-ui/itinerary.js");
  return data;
}

async function fetchJson(url) {
  const res = await fetch(url, { redirect: "follow" });
  if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText} for ${url}`);
  return await res.json();
}

async function fetchWikipediaThumb(query, lang) {
  const api = `https://${lang}.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=pageimages&piprop=thumbnail&pithumbsize=800&titles=${encodeURIComponent(
    query
  )}`;
  const data = await fetchJson(api);
  const pages = data?.query?.pages;
  if (!pages) return null;
  const firstKey = Object.keys(pages)[0];
  return pages?.[firstKey]?.thumbnail?.source || null;
}

async function resolveImageUrl(query) {
  // 先中文维基，再英文维基（简单策略；你也可以在 itinerary.js 里用英文别名提高命中）
  const base = normalizePlaceName(query);
  if (!base) return null;
  return (
    (await fetchWikipediaThumb(base, "zh").catch(() => null)) ||
    (await fetchWikipediaThumb(base, "en").catch(() => null))
  );
}

async function downloadToFile(url, filePath) {
  const res = await fetch(url, { redirect: "follow" });
  if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText} for ${url}`);
  const arrayBuffer = await res.arrayBuffer();
  fs.writeFileSync(filePath, Buffer.from(arrayBuffer));
}

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function extFromUrl(url) {
  try {
    const u = new URL(url);
    const ext = path.extname(u.pathname).toLowerCase();
    if (ext === ".jpg" || ext === ".jpeg" || ext === ".png" || ext === ".webp") return ext;
  } catch {}
  return ".jpg";
}

async function main() {
  ensureDir(OUT_DIR);

  const itinerary = loadItinerary();
  const queries = new Set();
  itinerary.forEach((day) => {
    (day.stops || [])
      .filter((s) => !isAirportStop(s?.name))
      .forEach((s) => {
        const q = normalizePlaceName(s?.name);
        if (q) queries.add(q);
      });
  });

  const manifest = {};
  const list = Array.from(queries);
  for (let i = 0; i < list.length; i += 1) {
    const q = list[i];
    const key = normalizePlaceName(q);
    const existing = manifest[key];
    if (existing) continue;

    process.stdout.write(`[${i + 1}/${list.length}] ${key} ... `);
    const url = await resolveImageUrl(key);
    if (!url) {
      process.stdout.write("MISS\n");
      continue;
    }
    const base = safeFileBase(key);
    const ext = extFromUrl(url);
    const filename = `${base}${ext}`;
    const fullPath = path.join(OUT_DIR, filename);
    if (!fs.existsSync(fullPath)) {
      try {
        await downloadToFile(url, fullPath);
      } catch (e) {
        process.stdout.write(`FAIL (${String(e.message || e)})\n`);
        continue;
      }
    }
    manifest[key] = `./assets/images/${filename}`;
    process.stdout.write("OK\n");
  }

  const content =
    "// 本地图片清单（由 scripts/cache_trip_images.mjs 生成）\n" +
    "window.IMAGE_MANIFEST = " +
    JSON.stringify(manifest, null, 2) +
    ";\n";
  fs.writeFileSync(MANIFEST_PATH, content, "utf-8");

  console.log(`\nDone. Saved manifest: ${path.relative(ROOT, MANIFEST_PATH)}`);
  console.log(`Images dir: ${path.relative(ROOT, OUT_DIR)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

