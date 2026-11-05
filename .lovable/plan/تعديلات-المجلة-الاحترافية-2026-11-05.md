# تعديلات المجلة الاحترافية

## What changes
1. **الخبرات المهنية – أخصائي تحصيل ديون الأفراد:** «أبرز الإنجازات» moves under «المهارات المكتسبة» on the same page as the tasks. Spacing is tightened a little if needed; no text removed.
2. **المشاريع والابتكار:** «2. جوهر الفكرة» sits directly under «1. خلفية المشروع والمشكلة» on the same page. Its six points are shown in two columns: three on the right, three on the left.
3. **مميز – second page:** the «مميز» title is repeated at the top, the same as on the first page.
4. **المهارات:** delete «تنفيذ الإجراءات المصرفية القضائية»، «فقه المعاملات المالية الإسلامية»، «التأصيل الشرعي للمعاملات المالية». The remaining 7 skills are re-centred on the page.
5. **New professional skills:** not added yet. I'll add them once you send the exact wording, so I don't write any text of my own.

## Technical
- `scripts/magazine/pro.py`:
  - `exp_pages`: for the collection job, add the achievements to the same single block as tasks + skills (compact spacing); the SAMA job stays as it is.
  - Projects: merge sections 1 and 2 into one block; render the bullet points of section 2 as one `<ul class="ach two">` with a 2-column grid.
  - Honors loop: use `opener('05','مميز')` on both pages.
  - Skills: filter out the three named skills.
- Re-render light + dark (`pro_render.py`), check there's no overflow, update ProFlipbook COUNT if the page count changes, upload the 3 Pro PDFs with `lovable-assets create`, and delete the local copies.
