# Fourth download choice: «فتح الملف» with copy buttons

## What you'll see
- The download window gets a fourth button, «فتح الملف».
- It opens a new page with all the magazine's text, in the same order as the magazine: cover and summary, career objective, degree, professional certificates, «مميز», experience, skills, courses, and projects and innovation.
- Every paragraph, bullet point and title has a small copy button next to it. Tapping it copies that piece only and shows «تم النسخ».
- Each section also has a «نسخ القسم» button that copies the whole section at once.
- The page uses the site's dark green and gold look and works on phones.

## Technical details
- New route `src/routes/magazine-text.tsx` with its own head(), built from `src/data/resumeData.ts` plus the magazine-only texts (cover bio, achievements, certificate names and issuers, honors). These are copied into a small shared data module so the page matches the magazine exactly.
- A reusable `CopyButton` that uses `navigator.clipboard.writeText` and shows a short sonner confirmation.
- `DownloadChooser.tsx` gets a fourth option that goes to `/magazine-text`.
