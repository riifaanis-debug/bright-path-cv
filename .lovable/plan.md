# Light-mode magazine: white pages instead of beige

## What changes
- Every page in the light-mode magazine gets a pure white background instead of the off-white/beige.
- Everything else stays the same: green see-through boxes, gold headings, dark text, the building behind the name on the cover.

## Downloads affected
- «الوضع الفاتح» (single pages)
- «كتاب مفتوح – الوضع الفاتح» (open book, A4 sheets)
- The dark-mode downloads don't change.

## Technical details
- In scripts/magazine/gen.ts, change the light theme page background (#faf6ec and any beige tints used for page/cover backgrounds and fades) to #ffffff.
- Re-render the light pages, rebuild both light PDFs, and visually check the cover and one inner page.
