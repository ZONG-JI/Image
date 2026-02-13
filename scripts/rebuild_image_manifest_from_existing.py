from __future__ import annotations

import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
TRIP_UI_DIR = ROOT / "trip-ui"
IMAGES_DIR = TRIP_UI_DIR / "assets" / "images"
OUT_PATH = TRIP_UI_DIR / "image-manifest.js"


EXT_PRIORITY = {
    ".webp": 1,
    ".png": 2,
    ".jpg": 3,
    ".jpeg": 4,
    ".gif": 5,
}


def key_from_filename(filename: str) -> str:
    """
    Convert a cached filename to a manifest key:
    - Strip extension
    - Strip trailing "-<hash>" where hash is 8+ hex chars
    """
    stem = Path(filename).stem
    stem = re.sub(r"-[0-9a-fA-F]{8,}$", "", stem).strip()
    return stem


def main() -> int:
    if not IMAGES_DIR.exists() or not IMAGES_DIR.is_dir():
        raise SystemExit(f"images dir not found: {IMAGES_DIR}")

    files: list[Path] = []
    for p in IMAGES_DIR.iterdir():
        if not p.is_file():
            continue
        if p.name == ".gitkeep":
            continue
        if p.suffix.lower() in EXT_PRIORITY:
            files.append(p)

    manifest: dict[str, str] = {}
    chosen_file: dict[str, Path] = {}

    def better(a: Path, b: Path) -> Path:
        pa = EXT_PRIORITY.get(a.suffix.lower(), 999)
        pb = EXT_PRIORITY.get(b.suffix.lower(), 999)
        if pa != pb:
            return a if pa < pb else b
        # stable: shorter filename wins
        return a if len(a.name) <= len(b.name) else b

    for p in files:
        key = key_from_filename(p.name)
        if not key:
            continue
        prev = chosen_file.get(key)
        if not prev:
            chosen_file[key] = p
        else:
            chosen_file[key] = better(prev, p)

    for key in sorted(chosen_file.keys()):
        p = chosen_file[key]
        rel = "./assets/images/" + p.name
        manifest[key] = rel

    out_js = (
        "// 本地图片清单（由 scripts/rebuild_image_manifest_from_existing.py 生成）\n"
        + "window.IMAGE_MANIFEST = "
        + json.dumps(manifest, ensure_ascii=False, indent=2)
        + ";\n"
    )
    OUT_PATH.write_text(out_js, encoding="utf-8")
    print("manifest:", OUT_PATH)
    print("images:", IMAGES_DIR)
    print("count:", len(manifest))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

