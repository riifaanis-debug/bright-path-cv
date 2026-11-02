## Why sizes differ now
Each page currently shrinks its own text automatically until it fits, so pages with more content (courses, certificates + skills) end up with smaller text than others. Some boxes (مميز cards, cover achievement cards) also have their own fixed small sizes.

## What will change
1. **One text style everywhere:** all normal text on every page uses the same style as the cover text under the photo — size 27, semi-bold, white, same Arabic font.
2. **One title style everywhere:** all section titles (الملخص المهني، مميز، الخبرات المهنية...) same size and gold color on every page; sub-titles (job titles, certificate names) one shared size in gold.
3. **No automatic shrinking:** text never gets smaller to fit a page.
4. **Extra pages where needed:** since the text becomes larger, pages that can't hold their content will continue onto a second page with the same title (likely: courses, certificates + skills, experience pages, مميز). No content is removed or shortened. The magazine will therefore have more than 9 pages; page numbers and the "X صفحات" label update automatically.
5. Re-render all pages, check nothing is cut off, rebuild the download PDF.

## Technical details
- In scripts/magazine/gen.ts: remove the `fit` shrink loop; set `.content` to fixed 27px/600/#fff/line-height 1.85; replace hard-coded sizes in `.hx`, `.ca p`, `.cr`, `.chips`, `.km p`, `.en2`, `.pv` with `1em`; unify h1/h2/h3 sizes.
- Add overflow-driven pagination: render, measure overflowing pages, split their item lists into continuation pages.
- Update TOTAL_PAGES in FullScreenMagazineViewer.tsx and MagazinePreviewModal.tsx and page-count strings; remove stale page JPGs.
