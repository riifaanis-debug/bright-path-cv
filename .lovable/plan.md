## Fix: «كتاب مفتوح – الوضع الفاتح» (Pro magazine) downloads the dark version

**Cause (confirmed):** the file behind this button contains the dark green pages, because the dark build overwrote the light book file. The A4 single-page file is likely affected the same way.

**Fix**
1. Re-render the Pro magazine in light (white) mode, then rebuild the light open-book PDF and the A4 single-page PDF from the light pages.
2. Fix the build script so the dark build writes only the dark file and never touches the light files.
3. Check each file: light book and A4 pages have white backgrounds, dark book stays dark green.

No changes to text, design, or buttons.
