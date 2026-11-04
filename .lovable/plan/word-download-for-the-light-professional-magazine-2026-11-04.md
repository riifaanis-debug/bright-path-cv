# Word download for the light professional magazine

## What you get
- A new choice in the download window: «مجلة احترافية – الوضع الفاتح (وورد)».
- It downloads an editable Word file (.docx) of the light professional executive magazine, same pages, order and text as now (text taken word for word, nothing added).
- Text is real Word text you can edit: titles in gold, body text dark, Cairo font, right-to-left.
- Every photo (cover photo, bank building, logo, «مميز» photos) is a normal Word picture you can resize and move.
- Off-white page background and thin green/gold lines like the current light version; each magazine page starts a new Word page.

## Note
Word cannot copy the designed magazine pixel for pixel (fading photo edges, layered effects). The layout will be as close as possible, and the PDF downloads stay unchanged.

## Technical details
- New standalone script scripts/magazine/pro_docx.mjs (docx-js), reading the same source text the Pro magazine uses (src/data/magazineText.json) and the same local images; pictures as floating, movable images; colors from the light theme.
- Validate the file, convert to PDF and check every page visually.
- Output over 10 MB is uploaded with lovable-assets (src/assets/docs/magazine_Pro_Light.docx.asset.json); otherwise placed in public/downloads.
- Add the new button in DownloadChooser.tsx next to the existing Pro options.
