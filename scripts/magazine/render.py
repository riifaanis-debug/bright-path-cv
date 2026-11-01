import asyncio, sys
from playwright.async_api import async_playwright
D = "/tmp/mag-build"
async def m():
  async with async_playwright() as p:
    b = await p.chromium.launch(headless=True, args=["--allow-file-access-from-files"])
    pg = await b.new_page(viewport={"width": 1191, "height": 1685})
    await pg.goto(f"file://{D}/mag.html"); await pg.wait_for_timeout(3000)
    for i, el in enumerate(await pg.query_selector_all(".page")):
      ov = await el.evaluate("e=>{const b=e.querySelector('.bd')||e;return b.scrollHeight-b.clientHeight}")
      print(i + 1, "overflow", ov)
      await el.screenshot(path=f"{D}/out/page-{i+1}.jpg", type="jpeg", quality=88)
    if "--pdf" in sys.argv:
      await pg.add_style_tag(content="body{background:#fff}.page{margin:0!important;break-after:page}")
      await pg.pdf(path=f"{D}/Professional_CV_Magazine_2026.pdf", width="1191px", height="1685px", print_background=True, margin={"top":"0","bottom":"0","left":"0","right":"0"})
    await b.close()
asyncio.run(m())
