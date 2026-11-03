# إرجاع المهارات بنصها الحرفي

## ما وجدته
- كل المهارات موجودة وبالعدد الصحيح: 12 مهارة في «أخصائي تحصيل ديون الأفراد» و13 مهارة في «منفذ عمليات ساما».
- لكن حذفت المصطلحات الإنجليزية التي بين قوسين من 6 مهارات، وهذا خطأ مني:
  - (Bad Debt Collection & Recovery)
  - (Aged & Delinquent Debt Collection)
  - (Judicial Banking Operations)
  - (SAMA Execution Requests)
  - (Account & Balance Attachment)
  - (Attachment Release Processing)
- وحذفت النقطة في نهاية كل مهارة.

## ما سأفعله
1. أكتب كل مهارة كما أرسلتها بالحرف، مع المصطلح الإنجليزي والنقطة.
2. أطبق ذلك في الموقع وفي كل المجلات وملفات التحميل وصفحة نسخ النص.
3. أعيد بناء كل الملفات وأتأكد أن النص يطابق ما أرسلته، وأن لا شيء يخرج عن حدود الصفحة.

## Technical
- Update skillsList in src/data/resumeData.ts and src/data/magazineText.json verbatim from the two uploaded .md files.
- Re-run gen.ts + render.py (dark/light), pro.py + pro_render.py (light/dark), rebuild all PDFs and previews; verify with a string diff against the uploads.
