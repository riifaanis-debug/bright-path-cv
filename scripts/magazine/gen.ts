// Generates the 9-page CV magazine HTML (/tmp/mag/mag.html) from resumeData.
// Run: mkdir -p /tmp/mag && curl surge image to /dev-server/scripts/magazine/surge.jpg, bun scripts/magazine/gen.ts, python3 scripts/magazine/render.py
import { resumeData as d } from '../../src/data/resumeData.ts';
import { readFileSync, writeFileSync } from 'fs';

const P = '/dev-server/public';
const img = (p: string) => 'file://' + ((p.startsWith('/tmp')||p.startsWith('/dev-server')) ? p : P + p);
const sharia = [...readFileSync('/dev-server/src/components/ShariaFellowshipSection.tsx', 'utf8').matchAll(/^\s{4}title: '([^']+)'/gm)].map(m => m[1]);
const g = (t: string) => `<em>${t}</em>`;
const honors = [
  { src: '/dev-server/scripts/magazine/honors/h1.jpeg', t: 'حاصل على المركز الأول لعامين متتاليين على إدارة تحصيل الأفراد', x: `حصاد الجد والاجتهاد .. حظيت بالتكريم من : ${g('سعادة الأستاذ صالح الصالح رئيس الخدمات المشتركة لمجموعة البنك الأهلي السعودي')} لحصولي على المركز الأول للعام الثاني على التوالي` },
  { src: '/dev-server/scripts/magazine/honors/h2.png', t: 'تحقيق أعلى مبلغ استرداد بقيمة 7,500,000 خلال عام واحد', x: `نجم التحصيل .. حظيت بالتكريم من : ${g('سعادة الأستاذ وائل عرابي رئيس التحصيل بالبنك الأهلي السعودي')} لتحقيق أعلى أداء تحصيلي وكسر حاجز أعلى مبلغ استرداد على مستو إدارة تحصيل الأفراد` },
  { src: '/dev-server/scripts/magazine/honors/h3.jpeg', t: 'شهادة شكر وتقدير من البنك المركزي السعودي', x: `ثمرة جهود مستمرة وحرص على تقديم أفضل أداء تشغيلي .. كل الفخر بحصولي على : ${g('شهادة شكر وتقدير من البنك المركزي السعودي')} تقديراً للتميز في تنفيذ وإنجاز الإجراءات المصرفية القضائية` },
  { src: '/dev-server/scripts/magazine/honors/h4.png', t: 'التأهل في مسابقة SURGE CUP 2026', x: `${g('البنك الأهلي السعودي SNB')}، وتأهل فكرتي ضمن أفضل 10 أفكار من بين 128 فكرة مشاركة، كمرحلة جديدة للابتكار والتنافس لتقديم الأفكار التي تحقق قيمة ملموسة للبنك وتسهم في تشكيل مستقبل SNB، في إنجاز يعكس القدرة على الابتكار وتقديم حلول تطويرية تسهم في صناعة مستقبل البنك.` },
];
const N = 9;
let n = 0;
const page = (kicker: string, title: string, body: string, cls = '') => {
  n++;
  return `<section class="page ${cls}"><header data-n="${String(n).padStart(2, '0')}"><h1>${title}</h1><div class="rule"></div></header>
<div class="content">${body}</div>
<footer><span>${d.personalInfo.name}</span><span dir="ltr">${String(n).padStart(2, '0')} / ${String(N).padStart(2, '0')}</span></footer></section>`;
};
const h2 = (t: string) => `<h2>${t}</h2>`;
const ul = (a: string[]) => `<ul>${a.map(x => `<li>${x}</li>`).join('')}</ul>`;
const pi = d.personalInfo;

// Cover backdrop /dev-server/scripts/magazine/bank.jpg = SNB building cropped from the user's reference design.
const cover = (() => { n++; return `<section class="page cover cv2"><div class="topline"></div>
<div class="hero"><img class="hphoto" src="file:///dev-server/scripts/magazine/cover-photo.jpeg"/>
<div class="hside"><div class="bank" style="background-image:url('${img('/dev-server/scripts/magazine/bank.jpg')}')"></div>
<h1 class="cname">${pi.name}</h1><div class="en">${pi.nameEn}</div><div class="grule"></div>
<ul class="ctitles">${pi.titles.map((t, i) => `<li${i === pi.titles.length - 1 ? ' class="gold"' : ''}>${t}</li>`).join('')}</ul></div></div>
<div class="csum">مستشار شرعي معتمد ، حاصل على درجة زمالة المستشار الشرعي في فقه المالية الإسلامية وتسوية المنازعات المصرفية والتمويلية ، وأخصائي ائتمان ومعالجة ديون، وخبير مصرفي بخبرة عملية تتجاوز عشر سنوات في البنك الأهلي السعودي ، أخصائي معتمد في المالية الإسلامية ، وأخصائي معتمد في تسوية المنازعات المالية ، حاصل على الرخصة الدولية لمهارات تقنية المعلومات من أكاديمية كامبردج رقم الاعتماد : <span dir="ltr">JIH421164 TAGSA449</span> ، وشهادة اتمام برنامج الأمن السيبراني من أكاديمية سيسكو للشبكات</div>
<div class="cach"><h3>أبرز الإنجازات</h3>${[
  { title: 'حاصل على المركز الأول لعامين متتاليين', description: 'حظيت بالتكريم من : سعادة الأستاذ : صالح الصالح رئيس الخدمات المشتركة لمجموعة البنك الأهلي السعودي لحصولي على المركز الأول للعام الثاني على التوالي على مستوى إدارة تحصيل الأفراد بالبنك الأهلي السعودي' },
  { title: 'تحقيق أعلى مبلغ استرداد بقيمة 7,500,000 خلال عام واحد', description: 'حظيت بالتكريم من : سعادة الأستاذ وائل عرابي رئيس التحصيل بالبنك الأهلي السعودي لتحقيق أعلى أداء تحصيلي وكسر حاجز أعلى مبلغ استرداد على مستو إدارة تحصيل الأفراد' },
  { title: 'التأهل في مسابقة SURGE CUP 2026', description: 'التأهل في مسابقة SURGE CUP 2026 - البنك الأهلي السعودي (SNB) واختيار الفكرة ضمن أفضل 10 أفكار من بين 128 فكرة مشاركة لتعزيز الابتكار وتقديم حلول تطويرية تسهم في صناعة مستقبل البنك.' },
].map(m => `<div class="ca"><b>${m.title}</b><p>${m.description}</p></div>`).join('')}</div>
</section>`; })();

const ex = (e: any) => `<div class="role"><div class="rt">${e.roleAr}</div><div class="ren">${e.roleEn}</div><div class="meta">${e.companyAr} · ${e.periodAr}</div></div>
<section class="xs"><div class="xh">المهام والمسؤوليات</div>${e.paragraphs.map((p: string) => `<p>${p}</p>`).join('')}</section>
<section class="xs"><div class="xh">أبرز الإنجازات</div>${ul(e.achievements)}</section>
<section class="xs"><div class="xh">المهارات المكتسبة</div><ul class="g3">${e.skillsList.map((s: string) => `<li>${s}</li>`).join('')}</ul></section>`;

const ip = d.innovativeProject;
const specs = [
  ...d.certifications.specialists.filter(s => !s.titleAr.includes('مصرفية الأفراد')).map(s => ({ titleAr: s.titleAr, titleEn: s.titleEn, provider: '', codeOrDate: '' })),
  ...d.specializedCertifications,
];
const certificateImages = [
  { file: 'finance-specialist.webp', title: 'مستشار المالية الإسلامية', issuer: 'Fadaa Center for Training' },
  { file: 'finance-advisor.webp', title: 'أخصائي المالية الإسلامية', issuer: 'Fadaa Center for Training' },
  { file: 'disputes.webp', title: 'أخصائي تسوية المنازعات المالية', issuer: 'Fadaa Center for Training' },
  { file: 'retail-banking.jpeg', title: 'الاختبار المهني في أساسيات مصرفية الأفراد', issuer: 'The Financial Academy' },
  { file: 'cambridge.png', title: 'الرخصة الدولية لمهارات تقنية المعلومات', issuer: 'Cambridge International' },
  { file: 'cybersecurity.jpeg', title: 'أساسيات الأمن السيبراني', issuer: 'Cisco Networking Academy' },
  { file: 'investment.jpeg', title: 'مقدمة في الأوراق المالية والاستثمار (CME-1)', issuer: 'Investment Academy' },
  { file: 'collection-skills.jpeg', title: 'مهارات التحصيل', issuer: 'ITQAN – Positive Interaction' },
];
const certificateGrid = `<div class="certificate-grid">${certificateImages.map(c => `<figure><span class="cert-dot"></span><figcaption>${c.title}<small class="cert-issuer" dir="ltr">${c.issuer}</small></figcaption></figure>`).join('')}</div>`;
const pages = [
  cover,
  page('PROFILE', 'الملخص المهني', `${d.summary.paragraphs.map(p => `<p>${p}</p>`).join('')}
${h2(d.objective.title)}${d.objective.paragraphs.map(p => `<p>${p}</p>`).join('')}
${h2('المؤهل العلمي')}<div class="edu"><b>${d.education.degree}</b><span>${d.education.institution} · ${d.education.year}</span></div>
${h2('الشهادات المهنية')}${certificateGrid}`),
  page('EXECUTIVE HONORS & LEADERSHIP RECOGNITION', 'مميز', `<div class="hon">${honors.map((h,i) => `<div class="hc${i%2?' rev':''}"><div class="hi"><img src="${img(h.src)}"/></div><div class="ht"><h3>${h.t}</h3><div class="hx">${h.x}</div></div></div>`).join('')}</div>`, 'fixed'),
  page('PROFESSIONAL EXPERIENCE', 'الخبرات المهنية', ex(d.experiences[0])),
  page('PROFESSIONAL EXPERIENCE', 'الخبرات المهنية', ex(d.experiences[1])),
  page('SKILLS', 'المهارات', `<div class="grid2">${d.skillCategories.map(c => `<div class="card"><b>${c.categoryName}</b>${ul(c.skills.slice(0, 2).map(s => s.split(/[:.،(]/)[0].trim()))}</div>`).join('')}</div>`),
  page('TRAINING', 'الدورات التدريبية', `<div class="crs">${d.courses.map((c, i) => `<div class="cr"><i dir="ltr">${String(i + 1).padStart(2, '0')}</i><div><b>${c.titleAr}</b><span class="en2">${c.titleEn}</span><span class="pv">${c.provider}</span></div></div>`).join('')}</div>`),
  page('PROJECTS & INNOVATION', 'المشاريع والابتكار', `<div class="role"><div class="rt">${ip.titleAr}</div><div class="ren">${ip.titleEn}</div><div class="meta">${ip.organization} · ${ip.competition} · ${ip.status}</div></div>
<p>${ip.description}</p>${h2('المشكلة')}${ip.problem.split('\n\n').map(p => `<p>${p}</p>`).join('')}
${h2('الحل')}${ip.solution.split('\n\n').map(p => `<p>${p}</p>`).join('')}
${h2('مكونات الإطار')}${ul(ip.components)}<div class="ach">${ip.achievement}</div>`),
  (() => { n++; return `<section class="page cover back"><div class="cv-in"><div class="brand">CONTACT</div><h1 class="cname">${pi.name}</h1><div class="en">${pi.nameEn}</div>
<div class="titles">${pi.titles.map(t => `<span>${t}</span>`).join('')}</div>
<div class="contact big"><span dir="ltr">${pi.phone}</span><span>${pi.email}</span><span>${pi.location}</span><span>${pi.bankOrganization}</span></div></div></section>`; })(),
];

const css = `
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=Playfair+Display:wght@600&display=swap');
*{box-sizing:border-box;margin:0;padding:0}body{background:#222;font-family:'IBM Plex Sans Arabic',sans-serif}
.cert-issuer{display:block;color:#c9a54a;font-size:.78em;font-weight:600;margin-top:4px;font-family:"Plus Jakarta Sans",sans-serif}
.certificate-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px 24px;margin-bottom:26px}
.certificate-grid figure{min-width:0;margin:0;display:flex;align-items:flex-start;gap:12px;padding:16px 14px;border-top:1px solid rgba(201,165,74,.45)}.cert-dot{flex:0 0 12px;height:12px;margin-top:12px;background:#c9a54a;transform:rotate(45deg)}
.certificate-image{height:220px;display:flex;align-items:center;justify-content:center}
.certificate-image img{width:100%;height:100%;object-fit:contain;display:block}
.certificate-grid figcaption{font-size:20px;font-weight:700;line-height:1.5}
.page{width:1191px;height:1685px;background:#fbf8f1;color:#1d2a22;position:relative;overflow:hidden;display:flex;flex-direction:column;padding:90px 90px 70px}
header .kick{font-family:'Playfair Display';letter-spacing:6px;color:#b08a33;font-size:20px;direction:ltr;text-align:right}
header h1{font-size:46px;color:#0b2719;font-weight:700;margin-top:6px}.rule{height:4px;width:140px;background:#c9a54a;margin:18px 0 30px}
.content{flex:1;overflow:hidden;font-size:var(--fs,22px);line-height:1.75}
.content p{margin-bottom:.7em;text-align:justify}
h2{font-size:1.15em;color:#0b2719;margin:1em 0 .5em;padding-right:16px;border-right:6px solid #c9a54a;line-height:1.3}
ul{padding-right:1.3em}li{margin-bottom:.3em}li::marker{color:#c9a54a}
footer{display:flex;justify-content:space-between;border-top:1px solid #d9c690;padding-top:18px;color:#7c6a3a;font-size:18px}
.role{background:#0b2719;color:#fff;border-radius:14px;padding:.9em 1.2em;margin-bottom:1em;border-right:8px solid #c9a54a}
.rt{font-size:1.5em;font-weight:700;color:#e8cf8a}.ren{direction:ltr;text-align:right;opacity:.8}.meta{margin-top:.3em;color:#d9c690}
.chips{display:flex;flex-wrap:wrap;gap:.45em}.chips span{background:#efe6cf;border:1px solid #d9c690;border-radius:30px;padding:.2em .9em;font-size:.92em}
.chips.num i{font-style:normal;color:#b08a33;font-weight:700;margin-left:.4em}
.edu{background:#fff;border:1px solid #e3d6ae;border-radius:12px;padding:.8em 1.1em;display:flex;flex-direction:column}.edu b{color:#0b2719;font-size:1.1em}
.kms{display:grid;gap:.7em}.km{background:#0b2719;color:#fff;border-radius:12px;padding:.8em 1.1em}.km b{color:#e8cf8a;font-size:1.08em}.km p{margin:.2em 0 0;opacity:.92;font-size:.95em}
.hon{display:grid;grid-template-rows:repeat(4,1fr);gap:26px;height:100%}
.hc{display:flex;border:2px solid #d9c690;border-radius:16px;overflow:hidden;background:#fff;min-height:0}
.hi{width:44%;display:flex;align-items:center}.hi img{width:100%;height:auto;max-height:100%;object-fit:contain;display:block}
.ht{flex:1;padding:22px 28px;display:flex;flex-direction:column;justify-content:center;gap:16px}
.ht h3{color:#b08a33;font-size:26px;line-height:1.45}
.hx{background:#f5efdf;border-right:5px solid #c9a54a;padding:14px 18px;font-size:19px;line-height:1.8;font-weight:600;color:#2b332d}
.hx em{font-style:normal;color:#b08a33;font-weight:700}
.grid2{display:grid;grid-template-columns:1fr 1fr;gap:.7em}.card{background:#fff;border:1px solid #e3d6ae;border-top:4px solid #c9a54a;border-radius:10px;padding:.7em 1em;display:flex;flex-direction:column}
.card b{color:#0b2719}.en2{direction:ltr;text-align:right;color:#5d6a60;font-size:.85em;display:block}.pv{color:#9a7a2c;font-size:.85em}
.fel{background:#0b2719;color:#fff;border-radius:14px;padding:1em 1.2em;margin-bottom:.8em;display:flex;flex-direction:column;border-right:8px solid #c9a54a}.fel b{color:#e8cf8a;font-size:1.25em}.fel span{direction:ltr;text-align:right;opacity:.8}
.tl>div{border-right:3px solid #c9a54a;padding:0 1em .5em}.tl b{color:#0b2719;display:block}.tl p{margin:0}
table{width:100%;border-collapse:collapse}td{padding:.45em .6em;border-bottom:1px solid #e3d6ae;vertical-align:top}td b{display:block;color:#0b2719}td.i{color:#b08a33;font-weight:700;width:3em}td.pv{width:30%}
tr:nth-child(odd){background:#f4eedd}
.xs{border:1.5px solid rgba(201,165,74,.55);background:rgba(255,255,255,.035);border-radius:14px;padding:.55em 1em .6em;margin-top:.8em}.xs p{margin:.35em 0}.xs ul{margin:.3em 0}.xh{display:inline-block;background:#c9a54a;color:#0b2719;font-weight:800;font-size:1.25em;padding:.15em .9em;border-radius:8px;margin-bottom:.35em}
.ach{margin-top:1em;background:#c9a54a;color:#0b2719;font-weight:700;border-radius:12px;padding:.8em 1.1em;text-align:center}
.cover{background:radial-gradient(circle at 50% 30%,#164a30,#0b2719 70%);color:#fff;justify-content:center;align-items:center;text-align:center}
.cover::before{content:'';position:absolute;inset:40px;border:2px solid #c9a54a;border-radius:8px}
.cv-in{display:flex;flex-direction:column;align-items:center;gap:30px;position:relative}
.brand{font-family:'Playfair Display';letter-spacing:6px;color:#c9a54a;font-size:22px;direction:ltr}
.photo{width:420px;height:420px;border-radius:50%;object-fit:cover;border:8px solid #c9a54a}
.cname{font-size:84px;color:#e8cf8a}.en{font-family:'Playfair Display';font-size:34px;opacity:.85;margin-top:-20px}
.titles{display:flex;flex-direction:column;gap:10px;font-size:30px}
.metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;width:960px}.metrics div{border:1px solid #c9a54a;border-radius:12px;padding:18px;font-size:22px;color:#e8cf8a}
.contact{display:flex;gap:30px;font-size:22px;opacity:.9;flex-wrap:wrap;justify-content:center}.contact.big{flex-direction:column;gap:18px;font-size:32px;margin-top:40px}
.page:not(.cover){background:radial-gradient(circle at 50% 30%,#164a30,#0b2719 70%);color:#f3ecd9}
.page:not(.cover)::before{content:'';position:absolute;inset:40px;border:2px solid #c9a54a;border-radius:8px;pointer-events:none}
header h1,h2,.card b,.edu b,td b,.tl b{color:#e8cf8a}footer{color:#d9c690;border-color:#c9a54a66}
.role,.km,.fel{background:#164a30}.edu,.card,.hc{background:#ffffff0d;border-color:#c9a54a88}
.hx{background:#ffffff12;color:#f3ecd9}.ht h3{color:#e8cf8a}.hi{background:none!important;padding:0!important}.hx{color:#fff!important}
.hx{background:none!important}.hc.rev{flex-direction:row-reverse}
.en2{color:#cfc6ad}.pv{color:#d9b866}
ul.g3{display:grid;grid-template-columns:repeat(3,1fr);gap:.2em 1.4em}
.crs{display:grid;grid-template-columns:1fr 1fr;gap:.6em}.cr{display:flex;gap:.7em;align-items:flex-start;background:#ffffff0d;border:1px solid #c9a54a88;border-radius:10px;padding:.6em .9em}
.cr i{font-style:normal;font-weight:700;color:#0b2719;background:#c9a54a;border-radius:50%;min-width:2em;height:2em;display:flex;align-items:center;justify-content:center;font-size:.85em}.cr b{display:block}
.cv2{justify-content:flex-start!important;align-items:stretch!important;text-align:right!important;padding:62px 70px 56px!important;gap:16px}
.cv2 .topline{position:absolute;top:0;left:0;right:0;height:8px;background:linear-gradient(90deg,#c9a54a,#e8cf8a,#c9a54a)}
.chead{display:flex;align-items:flex-end;position:relative}.chead>*{flex:1 1 50%}
.chead b{font-size:32px;color:#fff;border-bottom:2px solid #c9a54a;padding-bottom:14px}.cbank{display:flex;justify-content:flex-end;padding-bottom:6px}.cbank img{height:96px}
.hero{display:flex;gap:28px;position:relative;height:640px}
.hphoto{width:400px;height:640px;object-fit:cover;-webkit-mask-image:linear-gradient(to left,#000 75%,transparent),linear-gradient(#000 80%,transparent);-webkit-mask-composite:source-in;mask-composite:intersect;position:relative;z-index:1}
.hside{flex:1;position:relative;display:flex;flex-direction:column;justify-content:flex-end;padding-bottom:20px}
.bank{position:absolute;top:0;left:-30px;right:-90px;height:46%;background-size:cover;background-position:center;opacity:.95;-webkit-mask-image:linear-gradient(#000 60%,transparent),linear-gradient(to right,transparent,#000 10%,#000 80%,transparent);-webkit-mask-composite:source-in;mask-composite:intersect}
.hside>*:not(.bank){position:relative}
.cv2 .cname{font-family:Cairo,sans-serif;font-weight:800;font-size:64px;white-space:nowrap;color:#fff;line-height:1.15;margin:0;text-shadow:0 4px 18px #000c}.cv2 .en{font-family:Cairo,sans-serif;font-weight:700;font-size:40px;color:#e8cf8a;margin:2px 0 0;opacity:1;direction:ltr;text-align:right;text-shadow:0 3px 12px #000c}
.grule{height:2px;background:#c9a54a;margin:18px 0}
.ctitles{list-style:none;padding:0;margin:0;font-size:38px;font-weight:800;color:#fff;display:flex;flex-direction:column;gap:4px;text-shadow:0 2px 8px rgba(0,0,0,.5)}.ctitles li::before{content:"";display:inline-block;width:16px;height:16px;background:#c9a54a;margin-left:16px;vertical-align:middle}.ctitles li.gold{color:#e8cf8a}
.csum{position:relative;border:0;background:none;padding:20px 0 6px;font-size:27px;font-weight:600;line-height:1.85;color:#fff;text-align:justify;text-shadow:0 2px 8px #0006}
.cach{position:relative;padding:4px 0;margin-top:30px;display:flex;flex-direction:column;gap:20px}
.cach h3{margin:0 0 4px;font-size:34px;font-weight:800;color:#0b2719;background:linear-gradient(90deg,#c9a54a,#e8cf8a);padding:8px 20px;border-radius:6px;width:50%;align-self:flex-start;margin-bottom:10px}
.ca{padding:2px 0 10px;border-bottom:1px solid #c9a54a66}.ca:last-child{border-bottom:0}.ca b{color:#e8cf8a;font-size:27px}.ca p{margin:2px 0 0;font-size:23px;font-weight:600;color:#f3ecd9;line-height:1.6}
.cv2 .contact{position:relative;justify-content:center;font-size:20px;color:#e8cf8a}

`;

const LIGHT = process.env.THEME === 'light' ? `
.page,.page:not(.cover),.cover{background:#ffffff!important;color:#24332a!important}
.page::before{display:none!important}
.page:not(.cover){padding:0 80px 56px!important}
.page:not(.cover) header{margin:0 -80px 34px;padding:58px 80px 30px;background:#0b2719;position:relative;border-bottom:6px solid #b8913a}
.page:not(.cover) header h1{color:#fff!important;font-size:44px}
.page:not(.cover) header .rule{width:110px;height:3px;background:#b8913a;margin:14px 0 0}
.page:not(.cover) header::after{content:attr(data-n);position:absolute;left:80px;top:50%;transform:translateY(-50%);color:#b8913a;font:700 54px 'Playfair Display'}
footer{color:#0b2719!important;border-top:2px solid #b8913a!important;font-weight:600}
h2{color:#0b2719!important;border:0!important;padding:0 0 .25em!important;display:inline-block;border-bottom:3px solid #b8913a!important;font-weight:800}
.content{color:#24332a}
.card b,.edu b,td b,.tl b,.km b,.fel b,.cr b{color:#0b2719!important}
.edu,.card,.cr,.km,.fel,.certificate-grid figure{background:#f3f8f5!important;border:1px solid #cfe0d6!important;border-right:5px solid #0b2719!important;color:#24332a!important;border-radius:10px!important}
.certificate-grid figure{border-top:1px solid #cfe0d6!important}.certificate-grid figcaption{color:#0b2719}.cert-dot{background:#b8913a!important}.cert-issuer{color:#9a7a2c!important}
.role{background:#0b2719!important;color:#fff!important;border-right:8px solid #b8913a!important}.role .rt{color:#e8cf8a!important}.role .ren{color:#fff}.role .meta{color:#d9c690!important}
.xs{background:#f3f8f5!important;border:1px solid #cfe0d6!important;border-right:5px solid #0b2719!important}
.xh{background:none!important;color:#0b2719!important;padding:0 0 .15em!important;border-radius:0!important;border-bottom:3px solid #b8913a}
li::marker{color:#b8913a}
.hc{background:#f3f8f5!important;border:1px solid #cfe0d6!important}.ht h3{color:#0b2719!important}.hx{color:#24332a!important;border-right:4px solid #b8913a!important}.hx em{color:#9a7a2c!important}
.cr i{background:#0b2719!important;color:#e8cf8a!important}.en2{color:#5d6a60!important}.pv{color:#9a7a2c!important}
.ach{background:#0b2719!important;color:#e8cf8a!important}
.cv2{padding:0 70px 50px!important}
.cv2 .topline{display:none}
.cv2 .hero{margin:0 -70px;padding:0;height:700px;background:#0b2719;border-bottom:6px solid #b8913a}
.cv2 .hphoto{height:700px}
.cv2 .bank{left:0!important;right:-120px!important;-webkit-mask-image:linear-gradient(#000 55%,transparent),linear-gradient(to right,transparent,#000 25%,#000 80%,transparent)!important}
.cv2 .hside{padding-left:50px}
.csum{color:#24332a!important;text-shadow:none!important;padding-top:34px!important}
.cach h3{background:#0b2719!important;color:#e8cf8a!important}
.ca{background:#f3f8f5;border:1px solid #cfe0d6!important;border-right:5px solid #0b2719!important;border-radius:10px;padding:12px 18px!important}
.ca b{color:#0b2719!important}.ca p{color:#24332a!important}
.back{background:#0b2719!important;color:#fff!important}.back::before{display:block!important}
` : '';
const OUT = process.env.THEME === 'light' ? '/tmp/mag/mag-light.html' : '/tmp/mag/mag.html';
const fit = `<script>document.fonts.ready.then(()=>{for(const c of document.querySelectorAll('.page:not(.fixed) .content')){let f=34;c.style.setProperty('--fs',f+'px');while(c.scrollHeight>c.clientHeight+1&&f>12){f-=.5;c.style.setProperty('--fs',f+'px')}}document.body.dataset.ready=1})</script>`;
writeFileSync(OUT, `<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><link href="https://fonts.googleapis.com/css2?family=Cairo:wght@700;800&display=swap" rel="stylesheet"><style>${css}${LIGHT}</style></head><body>${pages.join('')}${fit}</body></html>`);
console.log('pages', n);
