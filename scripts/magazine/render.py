import asyncio,os
from playwright.async_api import async_playwright
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(headless=True)
        pg = await b.new_page(viewport={"width":1191,"height":1685},device_scale_factor=2)
        await pg.goto("file:///tmp/mag/"+("mag-light.html" if os.environ.get("THEME")=="light" else "mag.html"))
        await pg.wait_for_selector("body[data-ready]", timeout=30000)
        print(await pg.evaluate("[...document.querySelectorAll('.content')].map(c=>getComputedStyle(c).getPropertyValue('--fs')+' '+(c.scrollHeight>c.clientHeight+1?'OVER':'ok'))"))
        for i, el in enumerate(await pg.query_selector_all(".page"), 1):
            await el.screenshot(path=f"/tmp/mag/{os.environ.get('THEME','')}page-{i}.jpg", type="jpeg", quality=88)
        await b.close()
asyncio.run(main())
