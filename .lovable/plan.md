# Even text size and no empty gaps in the executive magazine

## Why it happened
- **Experience pages:** long paragraphs (over a set length) were automatically split into two narrow columns, so in «أخصائي تحصيل ديون الأفراد» the text looks smaller and denser than in «منفذ عمليات ساما». The font size itself is the same, but the layout makes it look different.
- **Projects pages:** the project parts were placed in fixed pairs — two parts per page, no matter how much space was left. That is why page 16 ends after «مؤشر Persona Score» with empty space, and page 17 ends after «التحصيل المخصص» instead of continuing with «المنصة التشغيلية».

## What will change (executive magazine only, light and dark)
1. All paragraphs in «المهام والمسؤوليات» for both jobs shown the same way: one full-width column, the same font size as the rest of the magazine. No font will be made smaller anywhere.
2. Projects section: parts flow one after another — each page is filled with the next part as long as it fits completely; a part moves to the next page only when it does not fit. No empty half pages.
3. If the experience text then needs more room, it continues on the following page at the same size (no shrinking, no added labels like «تتمة»).
4. No wording changes; all text stays exactly as you wrote it.
5. Rebuild the page-flip view and the three downloads (A4 pages, light book, dark book), keeping the print order for stapling; update the page count.

## Checks
- Same measured font size for paragraphs on both job pages.
- No text runs off any page; no page in the projects section left with a large empty area when the next part could fit.
- View the experience and projects pages in light and dark.

## Technical details
- `scripts/magazine/pro.py`: `para()` stops adding the `cols` class; delete the leftover `.xc` CSS.
- Replace the fixed `PSPLIT` pairs with automatic packing: render a measuring pass in Playwright (same CSS/page box) to get each section's height, then greedily fill pages up to the content height; same approach for the experience page if it overflows.
- Update `COUNT` in `src/components/ProFlipbook.tsx`; re-upload the Pro PDFs to lovable-assets as before.
