## Delete two paragraphs from «المهام والمسؤوليات» in the collection role

Delete these two paragraphs entirely:
1. «أمتلك قدرة عالية على التعامل مع الحسابات المعقدة ... حتى إتمام التحصيل. كما ...»
2. «أمتلك سجلاً مهنياً متميزاً في تجاوز المستهدفات التحصيلية ... والنتائج التحصيلية المتفوقة.»

Where: the website's experience section, all magazine versions, the copy-text page, and the Word file. Nothing else changes.

Then rebuild the professional magazine (light and dark), its PDFs and the Word file, and check that no text runs off a page.

### Technical
- Remove lines 131-132 in `src/data/resumeData.ts` and the matching items in `src/data/magazineText.json` (lines ~153-159).
- Re-run pro.py/pro_render.py (light + DARK=1), upload the Pro PDFs with lovable-assets and delete the local copies, rebuild the docx; update ProFlipbook COUNT if the page count changes.
