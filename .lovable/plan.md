# Certificate names and issuers in the magazine

The new names didn't come through, so this plan cleans up the current names and adds the English issuer under each one in gold.

| Certificate (Arabic) | Issuer (English, gold) |
|---|---|
| مستشار المالية الإسلامية | Fadaa Center for Training |
| أخصائي المالية الإسلامية | Fadaa Center for Training |
| أخصائي تسوية المنازعات المالية | Fadaa Center for Training |
| الاختبار المهني في أساسيات مصرفية الأفراد | The Financial Academy |
| الرخصة الدولية لمهارات تقنية المعلومات | Cambridge International |
| أساسيات الأمن السيبراني | Cisco Networking Academy |
| مقدمة في الأوراق المالية والاستثمار (CME-1) | Investment Academy |
| مهارات التحصيل | ITQAN – Positive Interaction |

- The issuer names are removed from the end of the Arabic names (Cambridge, Cisco) because they now sit underneath.
- Each certificate shows its Arabic name, then a smaller gold line with the issuer in English.
- The same layout goes into all three downloads: dark, «كتاب مفتوح» and «الوضع الفاتح».
- If you send other names, I'll use yours instead.

## Technical details
- In `scripts/magazine/gen.ts`, add an `issuer` field to each entry in `certificateImages`, render it as `<small class="cert-issuer">` (gold, LTR) under the figcaption, then re-render and rebuild all three PDFs.
