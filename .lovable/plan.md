# المهارات المكتسبة في نفس صفحة المهام

In the professional magazine («الخبرات المهنية»), keep «المهام والمسؤوليات» and «المهارات المكتسبة» of each job on the same page, so the skills never get pushed alone to a following page.

## What changes
- For each of the two jobs (أخصائي تحصيل ديون الأفراد / منفذ عمليات ساما), the tasks and the acquired skills are placed together on one page.
- «أبرز الإنجازات» (if present) moves after them so it doesn't split them apart.
- If they don't fit, I'll tighten spacing/font slightly on those pages only — no text is deleted or added.

## Technical
- `scripts/magazine/pro.py` `exp_pages`: build one combined block (role + tasks + skills) rendered as a single page, then achievements flow after.
- Re-render with `pro_render.py` (dark + light), check overflow, update ProFlipbook COUNT if page count changes, re-upload Pro PDFs as assets, regenerate the Word file.
