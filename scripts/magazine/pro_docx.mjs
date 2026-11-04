// Editable Word version of the light Pro magazine. Text verbatim from src/data/magazineText.json.
// Run: NODE_PATH=/tmp/dx/node_modules bun scripts/magazine/pro_docx.mjs
import fs from "fs";
import sharp from "sharp";
import {
  Document, Packer, Paragraph, TextRun, ImageRun, Table, TableRow, TableCell,
  AlignmentType, BorderStyle, WidthType, ShadingType, VerticalAlign, PageBreak,
} from "docx";

const M = "scripts/magazine/";
const pages = JSON.parse(fs.readFileSync("src/data/magazineText.json", "utf8"));
const GOLD = "9A7A2C", TEXT = "1D2A22", GREEN = "0B2719", BG = "FAF6EC";
const FONT = "Cairo";
const CW = 9746; // A4 content width with 0.75" margins (DXA)

async function img(file, w) {
  const buf = await sharp(M + file).resize({ width: 1000, withoutEnlargement: true }).jpeg({ quality: 82 }).toBuffer();
  const meta = await sharp(buf).metadata();
  return new ImageRun({ type: "jpg", data: buf, transformation: { width: w, height: Math.round((w * meta.height) / meta.width) },
    altText: { title: file, description: file, name: file } });
}
const run = (t, o = {}) => new TextRun({ text: t, font: FONT, rightToLeft: true, color: TEXT, size: 24, ...o });
const para = (t, o = {}, p = {}) => new Paragraph({ bidirectional: true, alignment: AlignmentType.RIGHT, spacing: { after: 140, line: 360 }, children: [run(t, o)], ...p });
const line = { bottom: { style: BorderStyle.SINGLE, size: 12, color: GOLD, space: 4 } };
const title = (t) => new Paragraph({ bidirectional: true, alignment: AlignmentType.CENTER, border: line, spacing: { after: 300 },
  children: [run(t, { bold: true, size: 40, color: GOLD })] });
const heading = (t) => new Paragraph({ bidirectional: true, alignment: AlignmentType.RIGHT, spacing: { before: 200, after: 120 },
  border: { right: { style: BorderStyle.SINGLE, size: 24, color: GOLD, space: 8 } },
  children: [run(t, { bold: true, size: 28, color: GREEN })] });
const none = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
const noB = { top: none, bottom: none, left: none, right: none, insideHorizontal: none, insideVertical: none };
const cell = (children, w, fill) => new TableCell({ children, width: { size: w, type: WidthType.DXA }, verticalAlign: VerticalAlign.CENTER,
  margins: { top: 120, bottom: 120, left: 160, right: 160 }, borders: noB,
  ...(fill ? { shading: { fill, type: ShadingType.CLEAR, color: "auto" } } : {}) });
const brk = () => new Paragraph({ children: [new PageBreak()] });

const out = [];
// Cover
const c = pages[0].items;
out.push(new Paragraph({ alignment: AlignmentType.CENTER, children: [await img("bank.jpg", 620)] }));
out.push(new Table({ width: { size: CW, type: WidthType.DXA }, columnWidths: [3600, 6146], borders: noB, visuallyRightToLeft: true, rows: [
  new TableRow({ children: [
    cell([new Paragraph({ alignment: AlignmentType.CENTER, children: [await img("cover-photo.jpeg", 220)] })], 3600),
    cell([
      para(c[0].t, { bold: true, size: 52, color: GREEN }),
      new Paragraph({ alignment: AlignmentType.RIGHT, spacing: { after: 200 }, children: [new TextRun({ text: c[1].t, font: FONT, bold: true, size: 30, color: GOLD })] }),
      ...c.slice(2, 5).map((x) => para("◆ " + x.t, { bold: true, size: 28 }, { spacing: { after: 60 } })),
    ], 6146),
  ] }),
] }));
out.push(para(c[5].t, { size: 24 }, { alignment: AlignmentType.JUSTIFIED, spacing: { before: 240, after: 240, line: 380 } }));
for (const x of c.slice(6)) out.push(x.h ? heading(x.t) : para(x.t));

// Other pages
const honorImgs = ["honors/h1.jpeg", "honors/h2.png", "honors/h3.jpeg", "honors/h4.png"];
for (const p of pages.slice(1)) {
  out.push(brk(), title(p.title));
  if (p.title === "مميز") {
    let k = 0;
    for (let i = 0; i < p.items.length; i += 2) {
      const txt = cell([heading(p.items[i].t), para(p.items[i + 1]?.t || "")], 5546, "EEF0E8");
      const pic = cell([new Paragraph({ alignment: AlignmentType.CENTER, children: [await img(honorImgs[k], 250)] })], 4200);
      out.push(new Table({ width: { size: CW, type: WidthType.DXA }, columnWidths: [4200, 5546], borders: noB, visuallyRightToLeft: true,
        rows: [new TableRow({ children: k % 2 ? [txt, pic] : [pic, txt] })] }), para(""));
      k++;
    }
    continue;
  }
  for (const x of p.items) out.push(x.h ? heading(x.t) : para(x.t));
}

const doc = new Document({
  background: { color: BG },
  styles: { default: { document: { run: { font: FONT, size: 24 } } } },
  sections: [{ properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1080, bottom: 1080, left: 1080, right: 1080 },
    borders: { pageBorderTop: { style: BorderStyle.SINGLE, size: 12, color: GOLD, space: 20 }, pageBorderBottom: { style: BorderStyle.SINGLE, size: 12, color: GOLD, space: 20 },
      pageBorderLeft: { style: BorderStyle.SINGLE, size: 12, color: GOLD, space: 20 }, pageBorderRight: { style: BorderStyle.SINGLE, size: 12, color: GOLD, space: 20 } } } },
    children: out }],
});
fs.mkdirSync("public/downloads", { recursive: true });
fs.writeFileSync("public/downloads/Majid_Al-Sofyani_Pro_Magazine_Light.docx", await Packer.toBuffer(doc));
console.log("ok");
