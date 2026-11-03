# Two new «مجلة احترافية» downloads

Same 20-page professional magazine (same text and layout), added as two new choices in the download window's «مجلة احترافية» section:

1. **صفحات A4 منفردة** — the current white professional magazine, one page per portrait A4 sheet (20 sheets).
2. **كتاب مفتوح – الوضع الداكن** — a dark version (dark green #0b2719 pages, white text, gold headings, matching the dark magazine) laid out as facing pages on sideways A4 sheets: cover on the right of sheet 1 with the bank logo (white) on the left, then pages 2-3, 4-5 … with a thin gold line down the middle.

Existing downloads stay unchanged.

## Technical
- `pro_render.py`: additionally write `Majid_Al-Sofyani_CV_Magazine_Pro_A4.pdf` (each JPG on 595x842 pt).
- `pro.py`: add a dark theme flag (CSS overrides only; text untouched) → render to `public/assets/magazine_pro_dark/` and build `Majid_Al-Sofyani_CV_Magazine_Pro_Dark_Book.pdf`; run overflow check for dark too.
- `DownloadChooser.tsx`: add two buttons under «مجلة احترافية».
- Visually check sample pages of both PDFs.
