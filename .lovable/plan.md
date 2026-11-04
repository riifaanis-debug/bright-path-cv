## حذف الصور من قسم «المشاريع والابتكار» في المجلة الاحترافية

- حذف صفحتي معرض الصور (8 صور) من قسم المشاريع، مع إبقاء كل النصوص كما هي.
- المجلة تصبح 22 صفحة بدل 24.
- إعادة بناء النسخة الداكنة والفاتحة وملفات التحميل (PDF والكتاب المفتوح وملف وورد) وتحديث عارض المجلة في الموقع.

### Technical
- scripts/magazine/pro.py: remove the two `page(gal(...))` calls (lines 123-124).
- Run pro_render.py, upload Pro PDFs as assets, regenerate pro_docx.mjs (drop project images there too), set ProFlipbook COUNT to 22.
