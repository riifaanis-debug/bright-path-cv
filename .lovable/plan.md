# Use the exact summary text from the picture on the magazine cover

The cover's summary box currently shows the long summary from the site. Replace it with the exact text from your picture, word for word:

> مستشار شرعي معتمد ، حاصل على درجة زمالة المستشار الشرعي في فقه المالية الإسلامية وتسوية المنازعات المصرفية والتمويلية ، وأخصائي ائتمان ومعالجة ديون، وخبير مصرفي بخبرة عملية تتجاوز عشر سنوات في البنك الأهلي السعودي ، أخصائي معتمد في المالية الإسلامية ، وأخصائي معتمد في تسوية المنازعات المالية ، حاصل على الرخصة الدولية لمهارات تقنية المعلومات من أكاديمية كامبردج رقم الاعتماد : JIH421164 TAGSA449 ، وشهادة اتمام برنامج الأمن السيبراني من أكاديمية سيسكو للشبكات

- The text gets a slightly bigger font, since it is shorter.
- The rest of the cover stays as it is. The three achievement cards already match the picture.
- Page 1 and the download PDF are updated.

## Technical
- In scripts/magazine/gen.ts, swap the cover summary for this literal text, re-render page-1.jpg, and rebuild public/downloads PDF.
