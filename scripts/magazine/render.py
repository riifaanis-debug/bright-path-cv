import asyncio
from playwright.async_api import async_playwright
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(headless=True)
        pg = await b.new_page(viewport={"width":1191,"height":1685})
        await pg.goto("file:///tmp/mag/mag.html")
        await pg.wait_for_selector("body[data-ready]", timeout=30000)
        print(await pg.evaluate("[document.body.dataset.pages,[...document.querySelectorAll('.content')].filter(c=>c.scrollHeight>c.clientHeight+1).length]"))
        for i, el in enumerate(await pg.query_selector_all(".page"), 1):
            await el.screenshot(path=f"/tmp/mag/page-{i}.jpg", type="jpeg", quality=88)
        await b.close()
asyncio.run(main())
