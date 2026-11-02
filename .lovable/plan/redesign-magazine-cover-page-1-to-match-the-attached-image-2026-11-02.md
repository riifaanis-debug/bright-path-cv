# Redesign magazine cover (page 1) to match the attached image

## What the new cover will show (top to bottom)
1. Thin gold line at the top; header row: «السيرة الذاتية المهنية التنفيذية» on the right, «البنك الأهلي السعودي (SNB) / المملكة العربية السعودية • 2026» on the left, with a gold divider.
2. Hero area: your photo in a large rounded frame on the right; on the left, over a dimmed green bank-building backdrop: name «ماجد عامر السفياني», English name in gold, a gold line, then three gold-bullet titles (مستشار شرعي معتمد، أخصائي ائتمان ومعالجة الديون، خبير مصرفي بخبرة تتجاوز 10 سنوات).
3. Summary box with the professional summary text (as in the image).
4. «أبرز الإنجازات» box with the three cards: first place two years running, record recovery, SURGE CUP 2026.
5. Everything currently on the cover is kept: the key numbers and contact details are added as a compact row/strip at the bottom so nothing is lost.

## Look
- Whole page stays fully dark green with the gold frame, like now — the light/white boxes in the image become dark-green boxes with gold borders and light text, so the cover is all green.
- Magazine-cover feel: big bold name, layered photo, gold accents.

## Data
- All text is taken from the CV data on the site; the achievement numbers use the same wording already on the site (the image shows 7,000,000+ — I'll use what the CV says).
- If no bank-building picture exists in the site's files, I'll use a soft gold/green pattern instead of inventing one.

## Technical
- Edit the cover template in scripts/magazine/gen.ts, re-render page-1.jpg via render.py, rebuild the 10-page PDF in public/downloads, check for overflow.
