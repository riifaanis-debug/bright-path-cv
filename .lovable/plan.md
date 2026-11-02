# Redesign the light-mode magazine

The two light downloads («الوضع الفاتح» and «كتاب مفتوح – الوضع الفاتح») get a full new look. The dark magazine stays as it is.

## Content
No text changes. Every page keeps exactly the text it has now.

## Colors (one set used everywhere)
- Page: pure white.
- Main color: the same dark green as the dark magazine (#0b2719), used for headings, side bars and the cover panel.
- Accent: gold (#b8913a), only for thin lines, numbers and small marks.
- Body text: dark grey-green, easy to read.
- Boxes: very light green tint with a thin green line. No beige anywhere.

## Magazine look on every page
- A dark green band across the top of each page with the section title in white and a gold page number, like a magazine section header.
- A thin gold line at the bottom with your name and the page number.
- Even margins and spacing, same box style on every page.
- Headings bold on a short gold underline, so they read clearly as headings.

## Cover (page 1)
- Fix the photo area: no hard box edge around the building (the line you circled in red). The top half of the cover becomes one full-width dark green panel, edge to edge inside the frame.
- Your photo on the right blends into the green panel, the building with the bank logo on the left fades into it too, with your name, English name and three titles on top in white and gold.
- Below the panel, on white: your bio paragraph, then «أبرز الإنجازات» with the three achievements in clean boxes with a green side line.

## Book version
Rebuilt from the new pages, same layout as now (cover on the right of sheet 1 with the bank logo on the left, then 2-3, 4-5, 6-7, 8-9).

## Checks
Look at every page of both light downloads before finishing, not just one or two.

## Technical notes
- Only the light theme block in scripts/magazine/gen.ts changes, plus the light cover markup overrides.
- Re-render light pages with render.py, rebuild both light PDFs in public/downloads.
