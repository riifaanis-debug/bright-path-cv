# استبدال نص «المشاريع والابتكار» بالكامل

Replace the whole text of the Projects & Innovation section with the user's uploaded text, word for word (no added or changed wording), everywhere it appears.

## Where
- Website: the Projects/Innovation section (data in src/data/collectionPersona.json and the section component).
- Copy-text page (src/data/magazineText.json).
- Professional magazine (scripts/magazine/pro.py): light + dark, A4 + open-book PDFs.
- Word file (scripts/magazine/pro_docx.mjs).
- First-design magazine (gen.ts) projects page: dark, light, book.

## Structure of new text
1. Intro paragraphs (SURGE CUP 2026 … Collection Persona Framework … qualification story) — shown large under the section title.
2. Six titled parts, each as its own heading + paragraph: نشأة الفكرة، الفكرة، الهدف، المشكلة التي تعالجها الفكرة، الحل الابتكاري، الأثر المتوقع.
- All old project content (خلفية المشروع، جوهر الفكرة، محرك اتخاذ القرار، مراحل التنفيذ…) is removed.
- No part split across two pages.

## Then
- Re-render, update flipbook page count, upload the large PDFs, rebuild the Word file, check pages for overflow.
