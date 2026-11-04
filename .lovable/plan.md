## Update SURGE CUP text in «مميز» and add it to «المشاريع والابتكار»

New text (verbatim, from your message):
«تأهل فكرتي ضمن أفضل 10 أفكار من بين 128 فكرة مشاركة، كمرحلة جديدة للابتكار والتنافس لتقديم الأفكار التي تحقق قيمة ملموسة للبنك وتسهم في تشكيل مستقبل SNB، في إنجاز يعكس القدرة على الابتكار وتقديم حلول تطويرية تسهم في صناعة مستقبل البنك.»

1. **«مميز» (4th item, SURGE CUP)**: replace the current description (which begins «البنك الأهلي السعودي SNB ، وتأهل فكرتي...») with the text above, in:
   - the website's «مميز» section
   - all magazine versions (dark, light, professional, Word, and the copy-text page)
   The title «التأهل في مسابقة SURGE CUP 2026» stays.
2. **«المشاريع والابتكار»**: at the very start, directly under the section title, add the same text in a slightly larger font than the normal paragraphs, before the existing project content. Applied in the professional magazine (dark + light) and its Word file.
3. Rebuild all downloads and check the two pages for no overflow.

### Technical
- Edit `HonorsShowcaseSection.tsx`, `scripts/magazine/gen.ts` (h4), `src/data/magazineText.json` (honor text + new lead entry in projects), `scripts/magazine/pro.py` line ~118 (new `.lead-big` paragraph), `pro_docx.mjs`.
- Re-run gen/render, pro.py/pro_render.py, re-upload Pro PDFs as assets; update ProFlipbook COUNT if page count changes.
