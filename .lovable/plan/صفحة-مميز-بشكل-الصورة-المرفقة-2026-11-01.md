# صفحة «مميز» بشكل الصورة المرفقة

إعادة تصميم الصفحة 3 في المجلة لتطابق الصورة:

- عنوان «مميز» مع رقم القسم وسطر إنجليزي: Executive Honors & Leadership Recognition
- أربع بطاقات أفقية فوق بعضها، خلفية فاتحة بإطار ذهبي رفيع:
  - الصورة على اليمين بإطار أخضر داكن
  - العنوان الذهبي على اليسار، وتحته صندوق بيج بخط ذهبي جانبي فيه نص التكريم (الأسماء والجهات بالذهبي)
- البطاقات بالترتيب: المركز الأول لعامين، 7,500,000، شهادة البنك المركزي، SURGE CUP 2026
- النصوص نفسها الموجودة في قسم «مميز» بالموقع
- باقي الصفحات بدون تغيير، وتحديث ملف PDF للتحميل

## Technical details
- Rebuild the page-3 template in /tmp/mag/gen.ts using bottomContent texts from HonorsShowcaseSection.tsx, re-render, replace page-3.jpg, regenerate the PDF.
