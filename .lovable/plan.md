# إعادة ترتيب صفحات المجلة

نفس التصميم (أخضر داكن + ذهبي) ونفس بيانات السيرة فقط، مع الترتيب الجديد:

1. الغلاف (بدون تغيير)
2. الملخص + الهدف المهني + المؤهل العلمي، وتحته **أبرز الإنجازات**
3. **مميز** — صفحة كاملة للتكريمات الأربعة (ومنها SURGE CUP 2026) بصور أكبر
4. **الخبرات المهنية** ← أخصائي تحصيل ديون
5. **الخبرات المهنية** ← منفذ عمليات ساما
6. **الشهادات المهنية** — دمج المهنية والتخصصية (مع زمالة المصرفية الإسلامية ومحاورها)
7. **المهارات** + **الجوائز والتكريمات**
8. **الدورات التدريبية**
9. **المشاريع والابتكار** ← إطار شخصيات التحصيل (CPF)
10. الغلاف الخلفي (التواصل)

يصبح عدد الصفحات 10 بدل 12.

## Technical details
- Rebuild the HTML generator + Playwright renderer (previous /tmp scripts were wiped), render 10 JPGs into public/assets/magazine_previews/, delete page-11/12.
- TOTAL_PAGES 12 → 10 in FullScreenMagazineViewer and MagazinePreviewModal; update "12 صفحة" strings.
- Rebuild public/downloads/Majid_Al-Sofyani_CV_Magazine.pdf from the new JPGs.
- Check every page for overflow / empty space before finishing.
