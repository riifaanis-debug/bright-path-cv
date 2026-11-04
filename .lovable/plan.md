# Update the projects section with the «Collection Persona» text

Replace the project's current text («إطار شخصيات التحصيل المصرفي» with المشكلة / الحل / مكونات الإطار) with the text you sent, word for word, on the website and in every magazine.

## What changes
- **Title:** «مشروع Collection Persona». **Subtitle:** «نموذج التحصيل المصرفي القائم على شخصيات العملاء وتحليل السلوك».
- **The 13 parts in your order:** from «1. خلفية المشروع والمشكلة» to «13. القيمة الاستراتيجية للبنك الأهلي السعودي», then «الرؤية النهائية للمشروع».
  - Each part has a clear heading.
  - Your bulleted lists show as points.
  - I won't add or change any words.
- **Stays as it is:** the competition details (SURGE CUP 2026, البنك الأهلي السعودي), the video and the 8 competition pictures.
- **Where it changes:**
  - The website.
  - The regular magazine: dark and light, single pages and open book.
  - The executive magazine: page-flip view, single A4 pages, light and dark open books.
  - The copy-text page.
- **Page count:** the new text is much longer, so the projects section will take more pages in the magazines.
  - In the executive magazine, the page order still works for printing and stapling.
  - I'll check that no text runs off any page.

## Technical details
- `resumeData.innovativeProject`: new `titleAr`/`subtitle` plus a `sections: {heading, paragraphs[], bullets[]}[]` array holding the user's text verbatim. Remove the old problem/solution/components fields. Render `ProjectCpfSection` from `sections` with the existing styling.
- Rebuild the «المشاريع والابتكار» entry in `src/data/magazineText.json` with headings and items.
- `pro.py`: build the project pages from the sections, split across as many pages as needed, followed by the two gallery pages. Update `COUNT` in ProFlipbook.
- `gen.ts`: build the project pages the same way.
- Re-render everything:
  - Regular magazine: dark and light, both books, previews.
  - Executive magazine: light then dark. Update COUNT if the page count changes.
- Run the overflow check and look at the project pages.
