## Make every sheet in the «كتاب مفتوح» download A4

Each sheet in the «كتاب مفتوح» file will be one A4 page, turned sideways (landscape) and split down the middle: one magazine page on the right and one on the left, like an open book.

### What changes
- Each sheet becomes landscape A4 (297 × 210 mm). Each half is half of A4 (148.5 × 210 mm). The magazine pages are scaled to fit their half without cropping or stretching.
- The order stays the same: the cover on its own (centred on the first sheet), then pages 2-3, 4-5, 6-7 and 8-9. Right-to-left order: the lower page number sits on the right.
- The thin gold line between the two pages comes back.
- The sharp 300-dpi quality stays.
- The dark download, «الوضع الفاتح» and «فتح الملف» stay the same.

### Technical details
- Rebuild `public/downloads/Majid_Al-Sofyani_CV_Magazine_Book.pdf` from the current page images using PyMuPDF.
- Use page size 842 × 595 pt. Insert each page image into its half rectangle with `keep_proportion`, and draw a gold line at x = 421.
- Check: every page in the PDF is 842 × 595, and spot-render two sheets to confirm nothing is cut off.
