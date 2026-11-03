# Professional Magazine generator (independent export style).
# Text comes verbatim from src/data/magazineText.json; only organisational labels are added.
import json, html, os
D = json.load(open('src/data/magazineText.json'))
S = {}
for s in D: S.setdefault(s['title'], []).append(s['items'])
A = os.path.abspath('scripts/magazine')
e = html.escape
def T(items): return [i['t'] for i in items]
def split_sec(items):
    """Split items into {heading: [texts]} with key '' for leading text."""
    out = {'': []}; k = ''
    for i in items:
        if i['h']: k = i['t']; out[k] = []
        else: out[k].append(i['t'])
    return out

cover = T(S['الغلاف'][0])
summ = split_sec(S['الملخص المهني'][0])
honors = S['مميز'][0]
exp1 = split_sec(S['الخبرات المهنية'][0])
exp2 = split_sec(S['الخبرات المهنية'][1])
skills = T(S['المهارات'][0])
courses = T(S['الدورات التدريبية'][0])
proj = split_sec(S['المشاريع والابتكار'][0])
NAME, NAME_EN = cover[0], cover[1]
MAG = 'THE EXECUTIVE'

pages = []
def page(body, cls='', num=True, label=''):
    n = len(pages) + 1
    foot = f'<div class="ft"><span>{MAG}</span><span>{e(label)}</span><span class="pn">{n:02d}</span></div>' if num else ''
    pages.append(f'<section class="page {cls}">{body}{foot}</section>')

def opener(no, title):
    return f'<header class="op"><div class="no">{no}</div><div><div class="kick">القسم {no}</div><h1>{e(title)}</h1></div></header>'

def dropcap(t, cls='cols'):
    return f'<p class="{cls} dc">{e(t)}</p>'
def para(t): return f'<p class="{"cols" if len(t)>520 else ""}">{e(t)}</p>'

# 1 Cover
pages.append(f'''<section class="page cover">
<div class="mast">{MAG}<small>EXECUTIVE LEADERSHIP · BANKING · ISLAMIC FINANCE · 2026</small></div>
<img class="cphoto" src="file://{A}/cover-photo.jpeg">
<div class="cgrad"></div>
<div class="cside">
  <div class="cs"><b>7,500,000</b><span>أعلى مبلغ استرداد خلال عام واحد</span></div>
  <div class="cs"><b>SURGE CUP 2026</b><span>أفضل 10 أفكار من بين 128 فكرة</span></div>
  <div class="cs"><b>المركز الأول</b><span>لعامين متتاليين</span></div>
</div>
<div class="cbottom">
  <div class="ctag">{e(cover[2])} · {e(cover[3])} · {e(cover[4])}</div>
  <h1 class="cname">{e(NAME)}</h1>
  <div class="cen">{e(NAME_EN)}</div>
</div></section>''')

# 2 Contents + cover bio
toc = ['الملخص المهني','الهدف المهني','المؤهل العلمي','الشهادات المهنية','مميز','الخبرات المهنية','المهارات','الدورات التدريبية','المشاريع والابتكار']
page(f'''<div class="tochead"><div class="kick">في هذا العدد</div><h1 class="big">المحتويات</h1></div>
<ol class="toc">{''.join(f'<li><span class="tn">{i+1:02d}</span><span>{e(t)}</span></li>' for i,t in enumerate(toc))}</ol>
<blockquote class="pull sm">{e(cover[5])}</blockquote>''', label='المحتويات')

# 3 Summary
page(opener('01','الملخص المهني') + dropcap(summ[''][0]), label='الملخص المهني')

# 4 Objective + education
page(opener('02','الهدف المهني') + f'<blockquote class="pull lg">{e(summ["الهدف المهني"][0])}</blockquote>'
     + '<div class="rule"></div>' + f'<h2 class="sub">المؤهل العلمي</h2><div class="edu">{e(summ["المؤهل العلمي"][0])}</div>', label='الهدف المهني')

# 5 Certificates
certs = ''.join(f'<div class="cert"><b>{e(c.split(" — ")[0])}</b><span>{e(c.split(" — ")[1])}</span></div>' for c in summ['الشهادات المهنية'])
page(opener('03','الشهادات المهنية') + f'<div class="certs">{certs}</div>', label='الشهادات المهنية')

# 6 Highlights (cover achievements, verbatim)
ach = cover[7:10]; stats = ['01','7,500,000','10 / 128']
page(opener('04','أبرز الإنجازات') + ''.join(f'<div class="stat"><div class="sn">{s}</div><p>{e(t)}</p></div>' for s,t in zip(stats,ach)), label='أبرز الإنجازات')

# 7-8 Honors with photos
imgs = ['h1.jpeg','h2.png','h3.jpeg','h4.png']
H = [(honors[i]['t'], honors[i+1]['t']) for i in range(0,8,2)]
for k in (0,2):
    body = opener('05','مميز') if k==0 else '<div class="kick" style="margin-bottom:30px">مميز — تتمة</div>'
    for j in (k,k+1):
        h,t = H[j]
        body += f'<article class="hon {"rev" if j%2 else ""}"><img src="file://{A}/honors/{imgs[j]}"><div><h3>{e(h)}</h3><p>{e(t)}</p></div></article>'
    page(body, label='مميز')

def role(no, r, c, p):
    return opener(no,'الخبرات المهنية') + f'<div class="role"><h2>{e(r)}</h2><div>{e(c)} · {e(p)}</div></div>'
def bullets(xs, cls='sk'): return f'<ul class="{cls}">' + ''.join(f'<li>{e(x)}</li>' for x in xs) + '</ul>'

# Experience pages (data-driven; works whether or not an achievements block exists)
def exp_pages(r, c, p, exp):
    page(role('06', r, c, p) + '<h2 class="sub">المهام والمسؤوليات</h2>' + dropcap(exp[''][0]) + para(exp[''][1]), label='الخبرات المهنية')
    body = '<h2 class="sub">المهام والمسؤوليات — تتمة</h2>' + ''.join(para(x) for x in exp[''][2:])
    if exp.get('أبرز الإنجازات'):
        body += '<div class="rule"></div><h2 class="sub">أبرز الإنجازات</h2>' + bullets(exp['أبرز الإنجازات'],'ach')
    page(body, label='الخبرات المهنية')
    page('<h2 class="sub">المهارات المكتسبة</h2>' + bullets(exp['المهارات المكتسبة']), label='الخبرات المهنية')
exp_pages('أخصائي تحصيل ديون الأفراد','البنك الأهلي السعودي','يوليو 2022 - الآن', exp1)
exp_pages('منفذ عمليات ساما - الإجراءات المصرفية القضائية','البنك الأهلي السعودي','سبتمبر 2017 - يوليو 2022', exp2)

# Skills
page(opener('07','المهارات') + bullets(skills,'sk big2'), label='المهارات')

# Courses
def course(i,c):
    p = c.split(' — ')
    return f'<div class="crs"><span class="cn">{i:02d}</span><div><b>{e(p[0])}</b>' + ''.join(f'<span>{e(x)}</span>' for x in p[1:]) + '</div></div>'
page(opener('08','الدورات التدريبية') + ''.join(course(i+1,c) for i,c in enumerate(courses[:7])), label='الدورات التدريبية')
page('<div class="kick" style="margin-bottom:30px">الدورات التدريبية — تتمة</div>' + ''.join(course(i+8,c) for i,c in enumerate(courses[7:])), label='الدورات التدريبية')

# Projects
page(opener('09','المشاريع والابتكار') + dropcap(proj[''][0],'lead') + '<h2 class="sub">المشكلة</h2>' + ''.join(para(x) for x in proj['المشكلة']), label='المشاريع والابتكار')
page('<h2 class="sub">الحل</h2>' + ''.join(para(x) for x in proj['الحل']) + '<div class="rule"></div><h2 class="sub">مكونات الإطار</h2>' + bullets(proj['مكونات الإطار'],'ach'), label='المشاريع والابتكار')

# Back cover
pages.append(f'<section class="page back"><img src="file://{A}/logo.png"><h1>{e(NAME)}</h1><div class="cen">{e(NAME_EN)}</div></section>')

CSS = '''
@page{size:1191px 1685px;margin:0}*{box-sizing:border-box;margin:0;padding:0}
body{font-family:'IBM Plex Sans Arabic',sans-serif;color:#1c2620;background:#fff}
.page{width:1191px;height:1685px;position:relative;overflow:hidden;background:#fff;padding:120px 110px 140px;page-break-after:always}
.ft{position:absolute;bottom:56px;left:110px;right:110px;display:flex;justify-content:space-between;border-top:1px solid #c9a54a;padding-top:16px;font:600 17px 'Plus Jakarta Sans',sans-serif;letter-spacing:.2em;color:#0b2719}
.ft span:nth-child(2){font-family:Cairo;letter-spacing:0;color:#8a6d2a}.pn{color:#c9a54a}
.kick{font:700 20px Cairo;color:#a8862f;letter-spacing:.05em}
.op{display:flex;align-items:center;gap:36px;border-bottom:3px double #c9a54a;padding-bottom:30px;margin-bottom:46px}
.op .no{font:400 150px/0.9 'Playfair Display',serif;color:#c9a54a}
.op h1{font:800 66px/1.25 Cairo;color:#0b2719}
p{font-size:26px;line-height:1.95;text-align:justify;margin-bottom:22px}
.cols{column-count:2;column-gap:56px;column-rule:1px solid #e6dcc0}
.lead{font-size:29px;line-height:1.9;color:#0b2719;font-weight:500;margin-bottom:30px}
.dc{border-top:4px solid #0b2719;padding-top:26px}
.sub{font:800 36px Cairo;color:#0b2719;margin:6px 0 26px;padding-right:22px;border-right:8px solid #c9a54a}
.rule{height:1px;background:linear-gradient(90deg,transparent,#c9a54a,transparent);margin:44px 0}
.pull{padding-top:56px!important;font:500 32px/1.85 'IBM Plex Sans Arabic';color:#0b2719;border-top:2px solid #c9a54a;border-bottom:2px solid #c9a54a;padding:40px 30px;position:relative;text-align:justify}
.pull.lg{font-size:30px}
.pull:before{content:'”';position:absolute;top:-86px;right:10px;font:400 150px 'Playfair Display';color:#c9a54a;background:#fff;padding:0 16px;line-height:1}
.edu{background:#0b2719;color:#fff;font:700 32px/1.6 Cairo;padding:40px 46px;border-right:10px solid #c9a54a}
.big{font:800 120px/1 Cairo;color:#0b2719;margin:10px 0 40px}
.toc{list-style:none;margin-bottom:90px}.tochead .big{font-size:96px;margin-bottom:24px}.pull.sm{font-size:25px;padding:34px 24px 26px}.toc li{display:flex;gap:30px;align-items:baseline;font:700 30px Cairo;color:#0b2719;padding:9px 0;border-bottom:1px solid #e6dcc0}
.tn{font:400 40px 'Playfair Display';color:#c9a54a;width:70px}
.certs{display:grid;grid-template-columns:1fr 1fr;gap:28px}
.cert{border:1px solid #d9c690;border-top:6px solid #0b2719;padding:30px 30px 28px;min-height:170px}
.cert b{display:block;font:800 29px/1.5 Cairo;color:#0b2719;margin-bottom:12px}
.cert span{font:600 20px 'Plus Jakarta Sans';color:#a8862f;direction:ltr;display:block;text-align:right}
.stat{display:flex;gap:40px;align-items:flex-start;padding:34px 0;border-bottom:1px solid #e6dcc0}
.sn{font:700 58px/1 'Playfair Display';color:#c9a54a;min-width:290px;text-align:center;border-left:2px solid #0b2719;padding:20px 20px 20px 36px;direction:ltr}
.stat p{margin:0;font-size:26px}
.hon{display:flex;gap:44px;align-items:center;margin-bottom:56px}.hon.rev{flex-direction:row-reverse}
.hon img{width:470px;max-height:560px;object-fit:contain;box-shadow:0 18px 40px rgba(11,39,25,.18)}
.hon h3{font:800 36px/1.5 Cairo;color:#0b2719;margin-bottom:18px;padding-bottom:16px;border-bottom:3px solid #c9a54a}
.hon p{font-size:24px}
.role{background:#0b2719;color:#e9dcb4;padding:34px 44px;margin-bottom:44px;font:600 24px Cairo}
.role h2{color:#fff;font:800 40px/1.5 Cairo;margin-bottom:6px}
ul{list-style:none}
.sk{display:grid;grid-template-columns:1fr 1fr;gap:20px 40px}
.sk li{font:700 26px/1.5 Cairo;color:#0b2719;padding:20px 26px;background:#f6f3ea;border-right:5px solid #c9a54a}
.big2 li{font-size:30px;padding:28px 30px}
.ach li{font-size:25px;line-height:1.9;padding:18px 60px 18px 0;position:relative;border-bottom:1px solid #eee5cc;text-align:justify}
.ach li:before{content:'';position:absolute;right:8px;top:32px;width:20px;height:20px;background:#c9a54a;transform:rotate(45deg)}
.crs{display:flex;gap:34px;padding:24px 0;border-bottom:1px solid #e6dcc0}
.cn{font:400 52px/1 'Playfair Display';color:#c9a54a;min-width:80px}
.crs b{display:block;font:800 29px/1.5 Cairo;color:#0b2719}
.crs span{display:block;font:500 20px/1.6 'Plus Jakarta Sans';color:#6b6b5e;direction:ltr;text-align:right}
.crs span:last-child{color:#a8862f;font-weight:700}
.cover{padding:0;background:#0b2719}
.mast{position:absolute;top:60px;left:0;right:0;text-align:center;font:400 150px/1 'Playfair Display';color:#c9a54a;letter-spacing:.06em;z-index:3}
.mast small{display:block;font:600 19px 'Plus Jakarta Sans';letter-spacing:.35em;color:#fff;margin-top:18px;border-top:1px solid #c9a54a;border-bottom:1px solid #c9a54a;padding:12px 0;margin-left:110px;margin-right:110px}
.cphoto{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 20%}
.cgrad{position:absolute;inset:0;background:linear-gradient(180deg,rgba(11,39,25,.85) 0%,rgba(11,39,25,0) 26%,rgba(11,39,25,0) 52%,rgba(11,39,25,.96) 80%,#0b2719 100%)}
.cside{position:absolute;left:80px;top:520px;width:320px;z-index:3}
.cs{border-top:2px solid #c9a54a;padding:18px 0 30px;color:#fff;text-shadow:0 2px 10px rgba(0,0,0,.6)}
.cs b{display:block;font:800 36px/1.3 Cairo;color:#c9a54a}.cs span{font:600 22px/1.5 Cairo}
.cbottom{position:absolute;bottom:110px;left:110px;right:110px;z-index:3;color:#fff}
.ctag{font:700 26px Cairo;color:#c9a54a;margin-bottom:10px}
.cname{font:900 104px/1.2 Cairo;white-space:nowrap}
.cen{font:400 46px 'Playfair Display';color:#c9a54a;direction:ltr;text-align:right;margin-top:10px}
.back{background:#0b2719;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;text-align:center}
.back img{width:420px;margin-bottom:80px}.back h1{font:800 72px Cairo}.back .cen{text-align:center}
'''
FONTS = "https://fonts.googleapis.com/css2?family=Cairo:wght@500;600;700;800;900&family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=Playfair+Display:wght@400;700&family=Plus+Jakarta+Sans:wght@500;600;700&display=swap"
DARK = os.environ.get('DARK') == '1'
if DARK: CSS += '''
body{color:#eae4d3;background:#0b2719}.page{background:#0b2719}
.page:not(.cover):not(.back):before{content:'';position:absolute;inset:34px;border:1.5px solid rgba(201,165,74,.55);pointer-events:none}
.ft{color:#eae4d3}.ft span:nth-child(2){color:#c9a54a}.kick{color:#c9a54a}
.op h1,.lead,.sub,.pull,.big,.toc li,.cert b,.hon h3,.sk li,.crs b{color:#fff}
.dc{border-top-color:#c9a54a}.cols{column-rule-color:rgba(201,165,74,.3)}
.pull:before{background:#0b2719}
.edu,.role{background:#062014;border:1px solid rgba(201,165,74,.5);border-right:10px solid #c9a54a}
.cert{border-color:rgba(201,165,74,.45);border-top-color:#c9a54a;background:rgba(255,255,255,.03)}
.cert span,.crs span:last-child{color:#d9b95e}.crs span{color:#bdb59f}
.sn{border-left-color:#c9a54a}.stat,.toc li,.crs{border-bottom-color:rgba(201,165,74,.25)}
.ach li{border-bottom-color:rgba(201,165,74,.2)}
.sk li{background:rgba(255,255,255,.05)}
.hon img{box-shadow:0 18px 40px rgba(0,0,0,.45)}
'''
os.makedirs('/tmp/pro', exist_ok=True)
open('/tmp/pro/pro.html','w').write(f'<!doctype html><html dir="rtl" lang="ar"><head><meta charset="utf-8"><link href="{FONTS}" rel="stylesheet"><style>{CSS}</style></head><body>{"".join(pages)}</body></html>')
print(len(pages), 'pages')
