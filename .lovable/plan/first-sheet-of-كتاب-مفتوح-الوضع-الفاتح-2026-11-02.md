## First sheet of «كتاب مفتوح – الوضع الفاتح»

Right now the cover sits alone in the middle of the first sheet. Change it to look like the rest of the book:

- **Split in half:** the first sheet gets the same thin gold line down the middle as the other sheets.
- **Right half:** the cover page, same size and spot as the pages on the other sheets.
- **Left half (the empty page):** plain white page with the Saudi National Bank logo you sent (SNB + «البنك الأهلي السعودي») centered, in its original green colors. Only the logo is used — the gold frame and grey background from your picture are cropped out.

Sheets 2 to 5 and all other downloads stay the same.

### Technical details
- Crop the logo from the upload to a transparent PNG and save it in scripts/magazine/ so it persists.
- In the light book PDF builder (PyMuPDF), sheet 1: insert cover into the right-half rect, logo centered in the left-half rect, draw the gold center line.
- Rebuild public/downloads light book PDF, render sheet 1 to an image and check it.
