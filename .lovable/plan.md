# New cover in every magazine

Replace page 1 (the cover) in every magazine with the picture you sent, and add your personal photo on the right side, blended into the background with no frame.

## What changes
- The new cover is your picture as-is: the SNB logo at the top, the city at night, the name «ماجد عامر السفياني» / «MAJED ALSUFYANI» and the three titles at the bottom. I won't add any text of my own.
- Your photo (white thobe, red shemagh) goes on the right side of the page, with its edges fading into the dark background.
- Applies to all magazines and every way they download:
  - Regular magazine: dark (single pages and open book) and light (single pages and open book).
  - Executive magazine: page-flip view, single A4 pages, light open book and dark open book.
- The same dark cover is used in the light versions too, because the picture itself is dark.
- The other pages stay the same.

## Checks
- Look at the cover in every version and check that your photo doesn't cover the name or the titles.
- Rebuild every download file and the page-flip view.

## Technical details
- Save the upload as scripts/magazine/cover-new.jpeg. Build one combined cover image (the picture, plus cover-photo.jpeg on the right with a gradient mask), sized to each page format (1191x1685 for the regular magazine, the Pro page size for pro.py).
- gen.ts: the cover page (dark + light) becomes a full-bleed image. pro.py: same for its cover (light + DARK).
- Re-run render.py, the book builders, pro_render.py (light then dark), and update the previews. The page count stays the same, so ProFlipbook COUNT doesn't change.
