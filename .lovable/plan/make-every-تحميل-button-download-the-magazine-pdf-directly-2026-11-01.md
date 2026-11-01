## Make every "تحميل" button download the magazine PDF directly

**Goal:** Pressing any download button saves the new 12-page magazine as a PDF file right away, without opening it in a new tab.

### Buttons covered
- Top of the page (main download button)
- Magazine preview window (both buttons; the "previous version" button is removed since only one magazine exists now)
- Footer download button
- Print instructions window button

### Changes
1. Check that the linked file is the latest 12-page magazine; if not, point all buttons to the latest copy.
2. Add one shared download action: it fetches the PDF and saves it as `Majid_Al-Sofyani_CV_Magazine.pdf`, so it downloads instead of opening in a tab. On phones it shows the "Save to Files" option.
3. Show a short "جاري التحميل..." state on the button while the file is prepared.
4. Test the download in the browser and confirm the saved file is the 12-page magazine.

### Technical details
- New helper `src/lib/downloadMagazine.ts` (fetch to Blob, `deliverFile` with share sheet on touch devices, fallback anchor download).
- Replace the four hardcoded `<a href download>` links with buttons calling the helper; single URL constant imported from the asset pointer.
