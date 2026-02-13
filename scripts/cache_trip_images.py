"""
下载并缓存景点图片到 trip-ui/assets/images/，并生成 trip-ui/image-manifest.js

使用（Windows / PowerShell）：
  python .\scripts\cache_trip_images.py

效果：
- 生成/覆盖 trip-ui/image-manifest.js
- 前端会优先读取 image-manifest.js，本地命中则不再联网搜图
"""

from __future__ import annotations

import hashlib
import json
import os
import re
import sys
import argparse
import urllib.parse
import urllib.request
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
TRIP_UI_DIR = ROOT / "trip-ui"
ITINERARY_PATH = TRIP_UI_DIR / "itinerary.js"
OUT_DIR = TRIP_UI_DIR / "assets" / "images"
MANIFEST_PATH = TRIP_UI_DIR / "image-manifest.js"


def normalize_place_name(name: str) -> str:
    text = str(name or "")
    # 去掉括号及其内容（英文/中文括号）
    text = re.sub(r"\(.*?\)", "", text)
    text = re.sub(r"（.*?）", "", text)
    text = re.sub(r"\b[A-Z]{2,4}\b", "", text)
    text = re.sub(r"[·•]", " ", text)
    text = re.sub(r"\s+", " ", text)
    return text.strip()

_NOISE_PATTERNS: list[re.Pattern[str]] = [
    re.compile(r"(出发|返回|回到|到达|抵达|离开|入住|退房|停车|取车|还车|补给)"),
    re.compile(r"(周边|附近|一带|动线|线路|示意路线)"),
]


def clean_search_phrase(text: str) -> str:
    """用于“搜索”的关键词清洗：尽量保留地名/景点名，去掉动作/状态词。"""
    base = normalize_place_name(text)
    base = re.sub(r"(市区|老城)$", "", base).strip()
    for p in _NOISE_PATTERNS:
        base = p.sub("", base)
    base = re.sub(r"\s+", " ", base).strip()
    return base


def build_query_candidates(raw: str) -> list[str]:
    """为同一个 stop/name 生成多个搜索候选（中英拆分 + 去噪）。"""
    raw = str(raw or "").strip()
    if not raw:
        return []

    base_key = normalize_place_name(raw)
    cleaned = clean_search_phrase(raw)

    candidates: list[str] = []
    for s in (base_key, cleaned):
        if s:
            candidates.append(s)

    # 常见写法：中文 + 空格 + 英文
    if " " in base_key:
        parts = [p.strip() for p in base_key.split(" ") if p.strip()]
        if parts:
            candidates.append(parts[0])
            if len(parts) >= 2:
                candidates.append(" ".join(parts[1:]))
                candidates.append(parts[-1])

    # 斜杠分隔
    if "/" in base_key:
        for p in base_key.split("/"):
            p = p.strip()
            if p:
                candidates.append(p)

    # 去重保持顺序
    seen: set[str] = set()
    out: list[str] = []
    for c in candidates:
        c = c.strip()
        if not c or c in seen:
            continue
        seen.add(c)
        out.append(c)
    return out


def is_airport_stop(raw_name: str) -> bool:
    raw = str(raw_name or "")
    base = normalize_place_name(raw)
    raw_lower = raw.lower()
    if "机场" in base:
        return True
    if "airport" in raw_lower or "aéroport" in raw_lower or "aeroport" in raw_lower:
        return True
    if re.search(r"\b(cdg|nce|fco|mxp|lin)\b", raw, flags=re.I):
        return True
    return False


def sha1_12(text: str) -> str:
    return hashlib.sha1(text.encode("utf-8")).hexdigest()[:12]


def safe_file_base(text: str) -> str:
    base = normalize_place_name(text)
    base = re.sub(r'[<>:"/\\|?*\x00-\x1F]', "", base)
    base = re.sub(r"\s+", " ", base).strip()[:60]
    return f"{base or 'place'}-{sha1_12(text)}"


def read_itinerary_js() -> list[dict]:
    code = ITINERARY_PATH.read_text(encoding="utf-8")
    # 非严格解析：提取 window.ITINERARY = [ ... ];
    m = re.search(r"window\.ITINERARY\s*=\s*(\[[\s\S]*?\]);", code)
    if not m:
        raise RuntimeError("未能在 trip-ui/itinerary.js 中找到 window.ITINERARY = [...] ;")

    # 这里直接用 Python 执行 JS 不现实，因此采用“取 stops.name 的简单正则扫描”方式生成候选关键词：
    # 规则：匹配 { name: "..." , position: { ... } }
    items = re.findall(r'name:\s*"([^"]+)"\s*,\s*position:\s*\{\s*lat:', m.group(1))
    # 兼容单引号（万一）
    items += re.findall(r"name:\s*'([^']+)'\s*,\s*position:\s*\{\s*lat:", m.group(1))
    # 做成“伪 itinerary”，只为提取 stops
    return [{"stops": [{"name": s} for s in items]}]


def fetch_json(url: str) -> dict:
    req = urllib.request.Request(
        url,
        headers={
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) cache_trip_images.py"
        },
    )
    with urllib.request.urlopen(req, timeout=20) as resp:
        data = resp.read()
    return json.loads(data.decode("utf-8"))

def fetch_baike_image(keyword: str) -> str | None:
    api = "https://baike.baidu.com/api/openapi/BaikeLemmaCardApi"
    url = api + "?" + urllib.parse.urlencode(
        {
            "scope": "103",
            "format": "json",
            "appid": "379020",
            "bk_key": keyword,
            "bk_length": "600",
        }
    )
    try:
        data = fetch_json(url)
    except Exception:
        return None

    image = None
    if isinstance(data, dict):
        if "image" in data:
            img = data.get("image")
            if isinstance(img, list) and img:
                image = img[0]
            elif isinstance(img, str):
                image = img
        if not image and isinstance(data.get("images"), list) and data["images"]:
            first = data["images"][0]
            if isinstance(first, dict) and first.get("image"):
                image = first.get("image")
            elif isinstance(first, str):
                image = first

    if not image or not isinstance(image, str):
        return None
    if image.startswith("//"):
        return "https:" + image
    return image


def fetch_wikipedia_search_title(query: str, lang: str) -> str | None:
    api = (
        f"https://{lang}.wikipedia.org/w/api.php?"
        + urllib.parse.urlencode(
            {
                "action": "query",
                "format": "json",
                "list": "search",
                "srlimit": "1",
                "srsearch": query,
                "origin": "*",
            }
        )
    )
    data = fetch_json(api)
    hits = data.get("query", {}).get("search", [])
    if not hits:
        return None
    title = hits[0].get("title")
    return title if isinstance(title, str) and title.strip() else None


def fetch_wikipedia_thumb(query: str, lang: str) -> str | None:
    api = (
        f"https://{lang}.wikipedia.org/w/api.php?"
        + urllib.parse.urlencode(
            {
                "action": "query",
                "format": "json",
                "prop": "pageimages",
                "piprop": "thumbnail",
                "pithumbsize": "800",
                "titles": query,
                "origin": "*",
            }
        )
    )
    data = fetch_json(api)
    pages = data.get("query", {}).get("pages", {})
    if not pages:
        return None
    first_key = next(iter(pages.keys()))
    thumb = pages.get(first_key, {}).get("thumbnail", {}).get("source")
    return thumb


def resolve_image_url(query: str, query_overrides: dict[str, list[str]] | None = None) -> str | None:
    key = normalize_place_name(query)
    overridden = (query_overrides or {}).get(key) or []
    candidates = overridden + build_query_candidates(query)
    if not candidates:
        return None

    # 1) 百度百科优先（中文命中更高）
    for c in candidates:
        url = fetch_baike_image(c)
        if url:
            return url

    # 2) Wikipedia：先 search 找到 title，再取缩略图
    for lang in ("zh", "en"):
        for c in candidates:
            try:
                title = fetch_wikipedia_search_title(c, lang)
                if not title:
                    continue
                url = fetch_wikipedia_thumb(title, lang)
                if url:
                    return url
            except Exception:
                continue

    return None


def load_existing_manifest() -> dict[str, str]:
    if not MANIFEST_PATH.exists():
        return {}
    text = MANIFEST_PATH.read_text(encoding="utf-8", errors="ignore")
    m = re.search(r"window\.IMAGE_MANIFEST\s*=\s*(\{[\s\S]*?\});", text)
    if not m:
        return {}
    try:
        data = json.loads(m.group(1))
        if isinstance(data, dict):
            return {str(k): str(v) for k, v in data.items()}
    except Exception:
        return {}
    return {}

def parse_overrides_file(path: Path) -> tuple[set[str], dict[str, list[str]]]:
    """
    overrides json（可选）：
    {
      "forceRefresh": ["卢浮宫", "..."],
      "queries": { "塞纳河": ["塞纳河游船", "Bateaux Mouches"] }
    }
    """
    if not path.exists():
        return set(), {}
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
    except Exception:
        return set(), {}
    force = set()
    queries: dict[str, list[str]] = {}
    if isinstance(data, dict):
        fr = data.get("forceRefresh")
        if isinstance(fr, list):
            for x in fr:
                k = normalize_place_name(str(x))
                if k:
                    force.add(k)
        q = data.get("queries")
        if isinstance(q, dict):
            for k, v in q.items():
                nk = normalize_place_name(str(k))
                if not nk:
                    continue
                if isinstance(v, list):
                    queries[nk] = [str(i) for i in v if str(i).strip()]
                elif isinstance(v, str) and v.strip():
                    queries[nk] = [v.strip()]
    return force, queries


def delete_manifest_file_if_any(manifest_value: str) -> None:
    try:
        rel = manifest_value.replace("./", "")
        p = TRIP_UI_DIR / rel
        if p.exists() and p.is_file():
            p.unlink()
    except Exception:
        return


def ext_from_url(url: str) -> str:
    try:
        path_part = urllib.parse.urlparse(url).path
        ext = os.path.splitext(path_part)[1].lower()
        if ext in (".jpg", ".jpeg", ".png", ".webp"):
            return ext
    except Exception:
        pass
    return ".jpg"


def download(url: str, out_path: Path) -> None:
    req = urllib.request.Request(
        url,
        headers={
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) cache_trip_images.py"
        },
    )
    with urllib.request.urlopen(req, timeout=40) as resp:
        data = resp.read()
    out_path.write_bytes(data)


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--refresh",
        default="",
        help="逗号分隔：指定要强制重新缓存的景点名（会做 normalizePlaceName）",
    )
    parser.add_argument(
        "--overrides",
        default=str((ROOT / "scripts" / "image_overrides.json").as_posix()),
        help="可选：json 覆盖文件路径（默认 scripts/image_overrides.json）",
    )
    args = parser.parse_args()

    OUT_DIR.mkdir(parents=True, exist_ok=True)

    pseudo_itinerary = read_itinerary_js()
    queries: set[str] = set()
    for day in pseudo_itinerary:
        for stop in day.get("stops", []):
            name = stop.get("name", "")
            if is_airport_stop(name):
                continue
            q = normalize_place_name(name)
            if q:
                queries.add(q)

    queries_list = sorted(queries)
    manifest: dict[str, str] = load_existing_manifest()

    # 你指定的“需要重下/缺失/不想要”的点位（可通过 --refresh 或 overrides 文件扩展）
    default_force_refresh = {
        "卢浮宫",
        "塞纳河游船",
        "楚格",
        "卢塞恩",
        "哈德昆观景台",
        "Täsch",
        "尼斯",
        "尼斯老城",
        "蒙特卡洛赌场广场",
        "佛罗伦萨",
        "圣母百花大教堂广场",
    }
    force_refresh: set[str] = {
        normalize_place_name(x) for x in default_force_refresh if normalize_place_name(x)
    }

    if args.refresh.strip():
        for raw in args.refresh.split(","):
            k = normalize_place_name(raw)
            if k:
                force_refresh.add(k)

    overrides_path = Path(args.overrides)
    file_force, query_overrides = parse_overrides_file(overrides_path)
    force_refresh |= file_force

    # 常见映射：stop 里可能是“塞纳河（铁塔周边上船）”→ key 为“塞纳河”
    if "塞纳河游船" in force_refresh:
        force_refresh.add("塞纳河")
        query_overrides.setdefault(
            "塞纳河", ["塞纳河游船", "Bateaux Mouches", "Seine cruise"]
        )
    # 圣母百花大教堂：行程里可能写作“圣母百花大教堂群 Duomo”
    query_overrides.setdefault(
        "圣母百花大教堂群 Duomo",
        ["Piazza del Duomo Florence", "Florence Cathedral", "Santa Maria del Fiore"],
    )
    query_overrides.setdefault(
        "圣母百花大教堂广场",
        ["Piazza del Duomo Florence", "Florence Cathedral", "Santa Maria del Fiore"],
    )

    total = len(queries_list)
    for idx, q in enumerate(queries_list, start=1):
        key = normalize_place_name(q)
        if not key:
            continue

        need_refresh = key in force_refresh
        in_manifest = key in manifest

        if in_manifest and not need_refresh:
            rel = manifest[key].replace("./", "")
            if not (TRIP_UI_DIR / rel).exists():
                need_refresh = True
            else:
                print(f"[{idx}/{total}] {key} ... SKIP")
                continue

        if in_manifest and need_refresh:
            delete_manifest_file_if_any(manifest[key])

        print(f"[{idx}/{total}] {key} ... ", end="", flush=True)
        url = resolve_image_url(key, query_overrides=query_overrides)
        if not url:
            print("MISS")
            continue
        filename = safe_file_base(key) + ext_from_url(url)
        full_path = OUT_DIR / filename
        if not full_path.exists():
            try:
                download(url, full_path)
            except Exception as e:
                print(f"FAIL ({e})")
                continue
        manifest[key] = f"./assets/images/{filename}"
        print("OK")

    manifest_js = (
        "// 本地图片清单（由 scripts/cache_trip_images.py 生成）\n"
        + "window.IMAGE_MANIFEST = "
        + json.dumps(manifest, ensure_ascii=False, indent=2)
        + ";\n"
    )
    MANIFEST_PATH.write_text(manifest_js, encoding="utf-8")

    print("\nDone.")
    print("manifest:", MANIFEST_PATH.relative_to(ROOT))
    print("images:", OUT_DIR.relative_to(ROOT))
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except KeyboardInterrupt:
        raise SystemExit(130)

