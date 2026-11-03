# Renders /tmp/pro/pro.html → page JPGs + spread PDF. Fails on text overflow.
import asyncio, os, glob, pymupdf
from playwright.async_api import async_playwright
DARK = os.environ.get('DARK') == '1'
OUT = 'public/assets/magazine_pro_dark' if DARK else 'public/assets/magazine_pro'
async def main():
    os.makedirs(OUT, exist_ok=True)
    for f in glob.glob(OUT + '/*.jpg'): os.remove(f)
    async with async_playwright() as p:
        b = await p.chromium.launch(headless=True)
        pg = await b.new_page(viewport={"width": 1191, "height": 1685}, device_scale_factor=2)
        await pg.goto('file:///tmp/pro/pro.html'); await pg.wait_for_load_state('networkidle')
        await pg.evaluate('document.fonts.ready')
        bad = await pg.evaluate('''[...document.querySelectorAll('.page')].map((p,i)=>{const r=p.getBoundingClientRect();const lim=r.bottom-(p.querySelector('.ft')?110:0);
          const over=[...p.querySelectorAll('p,li,div,article,blockquote,h1,h2,h3')].some(el=>!el.closest('.ft')&&el.getBoundingClientRect().bottom>lim+1);return over?i+1:0}).filter(Boolean)''')
        print('overflow pages:', bad)
        for i, el in enumerate(await pg.query_selector_all('.page')):
            await el.screenshot(path=f'{OUT}/page-{i+1:02d}.jpg', type='jpeg', quality=90)
        await b.close()
asyncio.run(main())
files = sorted(glob.glob(OUT + '/*.jpg'))
out = pymupdf.open(); W, H = 842, 595
gold = (0.79, 0.65, 0.29)
def put(pg, rect, f): pg.insert_image(rect, filename=f, keep_proportion=True)
R = pymupdf.Rect(W/2, 0, W, H); L = pymupdf.Rect(0, 0, W/2, H)
p = out.new_page(width=W, height=H)
if DARK: p.draw_rect(p.rect, color=None, fill=(11/255,39/255,25/255))
put(p, R, files[0])
lw = W/2*0.6; lh = lw*620/940
p.insert_image(pymupdf.Rect(W/4-lw/2, H/2-lh/2, W/4+lw/2, H/2+lh/2), filename='scripts/magazine/logo.png' if DARK else 'scripts/magazine/snb-logo-color.png')
p.draw_line((W/2, 0), (W/2, H), color=gold, width=1)
for i in range(1, len(files), 2):
    p = out.new_page(width=W, height=H)
    if DARK: p.draw_rect(p.rect, color=None, fill=(11/255,39/255,25/255))
    put(p, R, files[i])
    if i+1 < len(files): put(p, L, files[i+1])
    p.draw_line((W/2, 0), (W/2, H), color=gold, width=1)
out.save('public/downloads/Majid_Al-Sofyani_CV_Magazine_Pro_Dark_Book.pdf' if DARK else 'public/downloads/Majid_Al-Sofyani_CV_Magazine_Pro.pdf', garbage=4, deflate=True)
print(len(files), 'pages,', len(out), 'sheets')
if not DARK:
    a4 = pymupdf.open()
    for f in files:
        pg = a4.new_page(width=595, height=842); put(pg, pg.rect, f)
    a4.save('public/downloads/Majid_Al-Sofyani_CV_Magazine_Pro_A4.pdf', garbage=4, deflate=True)
