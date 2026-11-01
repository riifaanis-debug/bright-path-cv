// Generates the CV magazine pages (HTML) from resumeData. Run via scripts/magazine/build.sh
import { resumeData as d } from '../../src/data/resumeData.ts';
import { writeFileSync } from 'fs';

const P = 'file:///dev-server/public';
const DIR = '/tmp/mag-build';
const sharia = [
  'مبادئ المصرفية الإسلامية','مبادئ خدمات شركات الوساطة المالية','مبادئ التأمين التعاوني','مبادئ محاسبة الزكاة',
  'مفهوم الرقابة الشرعية وتطبيقاتها','تطبيقات الاستشارات الشرعية','تطبيقات الصكوك الإسلامية','عقود التمويل الإسلامي',
  'معاملات الخزينة البنكية','تمويل التجارة الدولية','تطوير المنتجات المالية الإسلامية','تطبيقات التقنية المالية',
  'تطبيقات المنازعات المصرفية والتمويلية','التطبيقات القضائية لعقود التمويل','تطبيقات المنازعات في الأوراق المالية',
];
const TOTAL = 12;
let n = 0;
const head = (sec: string) => `<div class="hd"><span class="hn">${d.personalInfo.name} <i>|</i> السيرة الذاتية المهنية</span><span class="hs">${sec}</span></div>`;
const foot = () => `<div class="ft"><span>${d.personalInfo.nameEn} · Executive Profile</span><span class="pn" dir="ltr">${String(n).padStart(2,'0')} / ${TOTAL}</span></div>`;
const page = (sec: string, body: string) => { n++; return `<section class="page">${head(sec)}<div class="bd">${body}</div>${foot()}</section>`; };
const title = (num: string, ar: string, en: string) => `<div class="tt"><span class="num">${num}</span><div><h2>${ar}</h2><p>${en}</p></div></div>`;
const li = (a: string[]) => `<ul>${a.map(x => `<li>${x}</li>`).join('')}</ul>`;
const pi = d.personalInfo;
const pages: string[] = [];

// 1 Cover (executive layout)
n++;
const intro = `${pi.titles[0]}، حاصل على ${d.certifications.fellowship.titleAr}، و${pi.titles[1]}، و${pi.titles[2]} في ${pi.bankOrganization}، ${d.certifications.specialists[0].titleAr} و${d.certifications.specialists[1].titleAr}، حاصل على ${d.specializedCertifications[5].titleAr} من ${d.specializedCertifications[5].provider} برقم الاعتماد <b dir="ltr">${d.specializedCertifications[5].codeOrDate}</b>، وشهادة ${d.specializedCertifications[4].titleAr} من ${d.specializedCertifications[4].provider}.`;
pages.push(`<section class="page cv2">
  <div class="c-gold"></div>
  <div class="c-top"><div class="c-kick">EXECUTIVE CURRICULUM VITAE • SPECIAL MAGAZINE EDITION</div><div class="c-sub">السيرة الذاتية المهنية التنفيذية</div></div>
  <div class="c-hero">
    <div class="c-photo"><img src="${P}${pi.photoUrl}"></div>
    <div class="c-id"><h1>${pi.name}</h1><div class="c-en">${pi.nameEn}</div>
      <div class="c-titles">${pi.titles.map((t,i)=>`<div class="${i===2?'gold':''}">${t}</div>`).join('')}</div></div>
  </div>
  <div class="c-intro">${intro}</div>
  <div class="c-ach">${d.keyMetrics.map((m,i)=>`<div class="c-card"><span class="c-badge">${i+1}</span><div><h3>${m.title}</h3><p>${m.description}</p></div></div>`).join('')}</div>
  <div class="c-sumh"><span></span>${d.summary.title}</div>
  <div class="c-sum">${d.summary.paragraphs[0]}</div>
  <div class="c-foot"><span dir="ltr">${pi.phone}</span><i>◆</i><span>${pi.email}</span><i>◆</i><span>${pi.location}</span><b dir="ltr">01 / ${TOTAL}</b></div>
</section>`);

pages.push(page('الملخص والهدف المهني', `${title('01', d.summary.title, 'Professional Summary')}
<div class="lead">${d.summary.paragraphs[0]}</div>
${title('02', d.objective.title, 'Career Objective')}
<div class="quote">${d.objective.paragraphs[0]}</div>
${title('03', 'المؤهل العلمي', 'Education')}
<div class="edu"><b>${d.education.degree}</b><span>${d.education.institution}</span><em>${d.education.year}</em></div>`));

pages.push(page('الإنجازات والجوائز', `${title('04','أبرز الإنجازات','Key Achievements')}
<div class="metrics">${d.keyMetrics.map((m,i)=>`<div class="mc"><span class="mi">0${i+1}</span><h3>${m.title}</h3><p>${m.description}</p></div>`).join('')}</div>
${title('05','الجوائز والتكريمات','Awards & Recognition')}
<div class="tl">${d.awards.map(a=>`<div class="ti"><div class="dot"></div><div><h4>${a.title}</h4><div class="meta">${a.organization}${a.date?` · ${a.date}`:''}</div><p>${a.description}</p></div></div>`).join('')}</div>`));

const honors = [
  [P+'/assets/aistudio/2b5f7485-e301-46a5-81f5-b7d6e23ff318_d953eee4.jpeg','حاصل على المركز الأول لعامين متتاليين على إدارة تحصيل الأفراد','حصاد الجد والاجتهاد .. حظيت بالتكريم من : <g>سعادة الأستاذ صالح الصالح</g> <g>رئيس الخدمات المشتركة لمجموعة البنك الأهلي السعودي</g> لحصولي على المركز الأول للعام الثاني على التوالي'],
  [P+'/assets/aistudio/_________________757b7be5.png','تحقيق أعلى مبلغ استرداد بقيمة 7,500,000 خلال عام واحد','نجم التحصيل .. حظيت بالتكريم من : <g>سعادة الأستاذ وائل عرابي</g> <g>رئيس التحصيل بالبنك الأهلي السعودي</g> لتحقيق أعلى أداء تحصيلي وكسر حاجز أعلى مبلغ استرداد على مستو إدارة تحصيل الأفراد'],
  [P+'/assets/aistudio/IMG_7282_f95ad64c.jpeg','شهادة شكر وتقدير من البنك المركزي السعودي','ثمرة جهود مستمرة وحرص على تقديم أفضل أداء تشغيلي .. كل الفخر بحصولي على : <g>شهادة شكر وتقدير من البنك المركزي السعودي</g> تقديراً للتميز في تنفيذ وإنجاز الإجراءات المصرفية القضائية'],
  [`file://${DIR}/cert.jpeg`,'التأهل في مسابقة SURGE CUP 2026','<g>البنك الأهلي السعودي SNB</g>، وتأهل فكرتي ضمن أفضل 10 أفكار من بين 128 فكرة مشاركة، كمرحلة جديدة للابتكار والتنافس لتقديم الأفكار التي تحقق قيمة ملموسة للبنك وتسهم في تشكيل مستقبل SNB، في إنجاز يعكس القدرة على الابتكار وتقديم حلول تطويرية تسهم في صناعة مستقبل البنك.'],
];
pages.push(page('مميز', `${title('06','مميز','Executive Honors & Leadership Recognition')}
<div class="honors">${honors.map(([s,t,b])=>`<div class="hc"><div class="hi"><img src="${s}"></div><div class="ht"><h3>${t}</h3><p>${b}</p></div></div>`).join('')}</div>`));

d.experiences.forEach((e,i)=>pages.push(page('الخبرات المهنية', `${title(String(7+i).padStart(2,'0'), e.roleAr, e.roleEn)}
<div class="role"><span>${e.companyAr}</span><span>${e.periodAr}</span></div>
<div class="paras">${e.paragraphs.map(p=>`<p>${p}</p>`).join('')}</div>
<div class="two"><div class="box"><h4>المهارات المكتسبة</h4><div class="chips">${e.skillsList.map(s=>`<span>${s}</span>`).join('')}</div></div>
<div class="box dark"><h4>الإنجازات</h4>${li(e.achievements)}</div></div>`)));

const pr = d.innovativeProject;
pages.push(page('المشروع الابتكاري', `${title('09', pr.titleAr, pr.titleEn)}
<div class="role"><span>${pr.organization}</span><span>${pr.competition}</span></div>
<div class="prj"><img src="file://${DIR}/cert.jpeg"></div>
<div class="lead">${pr.description}</div>
<div class="two"><div class="box"><h4>المشكلة</h4>${pr.problem.split('\n\n').map(p=>`<p>${p}</p>`).join('')}</div>
<div class="box"><h4>الحل</h4>${pr.solution.split('\n\n').map(p=>`<p>${p}</p>`).join('')}</div></div>
<div class="two"><div class="box"><h4>مكونات الإطار</h4>${li(pr.components)}</div><div class="box dark"><h4>الإنجاز</h4><p>${pr.achievement}</p></div></div>`));

pages.push(page('الشهادات المهنية المعتمدة', `${title('10','الشهادات المهنية المعتمدة','Accredited Professional Certifications')}
<div class="fel"><small>الزمالة</small><h3>${d.certifications.fellowship.titleAr}</h3><p>${d.certifications.fellowship.titleEn}</p></div>
<div class="grid3">${d.certifications.specialists.map(c=>`<div class="cc"><h4>${c.titleAr}</h4><p>${c.titleEn}</p></div>`).join('')}</div>
${title('11','برامج زمالة المستشار الشرعي','Sharia Advisor Fellowship Modules')}
<div class="sub">الجمعية العلمية القضائية السعودية (قضاء) · جامعة الإمام محمد بن سعود الإسلامية</div>
<div class="mods">${sharia.map((s,i)=>`<div><span>${String(i+1).padStart(2,'0')}</span>${s}</div>`).join('')}</div>`));

pages.push(page('الشهادات التخصصية', `${title('12','الشهادات التخصصية','Specialized Certifications')}
<div class="specs">${d.specializedCertifications.map((c:any)=>`<div class="sc"><h4>${c.titleAr}</h4><p class="en2">${c.titleEn}</p><div class="meta">${c.provider}${c.codeOrDate?` · ${c.codeOrDate}`:''}</div></div>`).join('')}</div>`));

pages.push(page('الدورات التدريبية', `${title('13','الدورات التدريبية','Training Courses')}
<table class="ct"><thead><tr><th>#</th><th>الدورة</th><th>Course</th><th>الجهة</th></tr></thead><tbody>
${d.courses.map((c,i)=>`<tr><td>${String(i+1).padStart(2,'0')}</td><td><b>${c.titleAr}</b></td><td class="en2">${c.titleEn}</td><td class="meta">${c.provider}</td></tr>`).join('')}</tbody></table>`));

pages.push(page('المهارات', `${title('14','المهارات والكفاءات','Skills & Competencies')}
<div class="skills">${d.skillCategories.map(c=>`<div class="sk"><h4>${c.categoryName}</h4>${li(c.skills.map(s=>s.replace(/\.$/,'')))}</div>`).join('')}</div>`));

n++;
pages.push(`<section class="page cover back">
  <div class="cv-top"><span>EXECUTIVE PROFILE</span><span>2026</span></div>
  <h1>${pi.name}</h1><div class="en">${pi.nameEn}</div>
  <div class="cv-titles">${pi.titles.map(t=>`<span>${t}</span>`).join('')}</div>
  <div class="bc">
    <div><small>الجوال</small><b dir="ltr">${pi.phone}</b></div>
    <div><small>البريد الإلكتروني</small><b>${pi.email}</b></div>
    <div><small>الموقع</small><b>${pi.location}</b></div>
  </div>
  <div class="cv-org">${pi.bankOrganization}</div>
</section>`);

const css = `
*{box-sizing:border-box}body{margin:0;background:#ddd;font-family:'IBM Plex Sans Arabic',sans-serif;color:#1d2a22}
.page{width:1191px;height:1685px;background:#fdfcf8;position:relative;overflow:hidden;padding:0 90px;display:flex;flex-direction:column;margin-bottom:20px}
g{color:#b0821f;font-weight:700}
.hd{display:flex;justify-content:space-between;align-items:center;height:110px;flex-shrink:0;border-bottom:1.5px solid #c9a54a;font-size:15px;font-weight:700}
.hd i{color:#c9a54a;font-style:normal}.hs{color:#b0821f}
.ft{margin-top:auto;height:90px;flex-shrink:0;border-top:1px solid #e3dccb;display:flex;justify-content:space-between;align-items:center;font-size:14px;color:#6b7a70}
.pn{background:#0b2719;color:#e6c26a;padding:6px 14px;border-radius:6px;font-weight:700}
.bd{padding:36px 0 24px;flex:1;min-height:0;display:flex;flex-direction:column;gap:28px;overflow:hidden}
.tt{display:flex;gap:16px;align-items:center}
.num{font-size:38px;font-weight:700;color:#c9a54a;font-family:'Playfair Display',serif;line-height:1}
.tt h2{margin:0;font-size:30px;color:#0b2719}.tt p{margin:2px 0 0;color:#b0821f;font-size:15px;font-weight:600;letter-spacing:.5px}
.lead{font-size:18px;line-height:2.15;text-align:justify}
.quote{font-size:18px;line-height:2.15;text-align:justify;background:#0b2719;color:#f1ead7;padding:26px 30px;border-radius:14px;border-right:5px solid #c9a54a}
.edu{display:flex;gap:20px;align-items:center;border:1.5px solid #c9a54a;border-radius:12px;padding:28px;font-size:20px}
.edu span{color:#556}.edu em{margin-right:auto;font-style:normal;background:#f3ead2;color:#8a6516;padding:4px 14px;border-radius:20px;font-weight:700}
.metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.mc{background:#0b2719;color:#f1ead7;border-radius:14px;padding:24px;border-top:4px solid #c9a54a}
.mi{color:#c9a54a;font-size:30px;font-weight:700}.mc h3{color:#e6c26a;font-size:19px;margin:8px 0;line-height:1.6}.mc p{font-size:15.5px;line-height:1.9;margin:0;opacity:.9}
.tl{border-right:2px solid #c9a54a;padding-right:26px;margin-right:8px;display:flex;flex-direction:column;gap:26px}
.ti{position:relative}.dot{position:absolute;right:-35px;top:8px;width:16px;height:16px;border-radius:50%;background:#c9a54a;border:3px solid #fdfcf8}
.ti h4{margin:0;font-size:21px;color:#0b2719}.ti p{margin:4px 0 0;font-size:17px;line-height:1.8}.meta{color:#b0821f;font-size:14px;font-weight:600}
.honors{display:flex;flex-direction:column;gap:18px}
.hc{display:flex;height:300px;border:1.5px solid #c9a54a;border-radius:14px;overflow:hidden;background:#fff}
.hi{width:380px;background:#0b2719;padding:10px;flex-shrink:0}.hi img{width:100%;height:100%;object-fit:cover;border-radius:6px}
.ht{padding:22px 28px;display:flex;flex-direction:column;justify-content:center}.ht h3{margin:0 0 12px;color:#b0821f;font-size:21px}
.ht p{margin:0;background:#faf6ea;border-right:3px solid #c9a54a;padding:14px 18px;font-size:16.5px;line-height:1.9;font-weight:500}
.role{display:flex;justify-content:space-between;background:#0b2719;color:#e6c26a;padding:14px 22px;border-radius:10px;font-weight:700;font-size:16px}
.paras p{font-size:17.5px;line-height:2.15;text-align:justify;margin:0 0 14px}
.two{display:grid;grid-template-columns:1fr 1fr;gap:18px}
.box{border:1.5px solid #e1d3a8;border-radius:12px;padding:18px 22px;background:#fff}.box h4{margin:0 0 10px;color:#0b2719;font-size:18px;border-bottom:2px solid #c9a54a;display:inline-block;padding-bottom:4px}
.box p{font-size:16px;line-height:2;margin:0 0 8px;text-align:justify}
.box.dark{background:#0b2719;color:#f1ead7;border-color:#0b2719}.box.dark h4{color:#e6c26a}
ul{margin:0;padding-right:20px;font-size:16px;line-height:2}li::marker{color:#c9a54a}
.chips{display:flex;flex-wrap:wrap;gap:7px}.chips span{background:#f5eedb;color:#5b4410;font-size:14.5px;padding:7px 13px;border-radius:20px;font-weight:600}
.prj img{width:100%;height:440px;object-fit:contain;background:#0b2719;padding:12px;border-radius:14px;border:1.5px solid #c9a54a;display:block}
.fel{background:linear-gradient(135deg,#0b2719,#14402a);color:#f1ead7;border-radius:16px;padding:38px;border-right:6px solid #c9a54a}
.fel small{color:#c9a54a;font-weight:700;letter-spacing:1px;font-size:14px}.fel h3{font-size:24px;margin:6px 0;color:#fff;line-height:1.6}.fel p{margin:0;color:#e6c26a;font-size:15px}
.grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.cc{border:1.5px solid #c9a54a;border-radius:12px;padding:26px;background:#fff}.cc h4{margin:0 0 6px;color:#0b2719;font-size:19px;line-height:1.6}.cc p{margin:0;font-size:13.5px;color:#b0821f;font-weight:600}
.sub{color:#556;font-size:15px;margin-top:-8px}
.mods{display:grid;grid-template-columns:1fr 1fr;gap:10px}.mods div{background:#fff;border:1px solid #e6dcc0;border-radius:10px;padding:17px 18px;font-size:17px;font-weight:600;display:flex;gap:12px;align-items:center}
.mods span{color:#c9a54a;font-weight:700;font-size:17px}
.specs{display:grid;grid-template-columns:1fr 1fr;gap:20px}
.sc{background:#fff;border:1.5px solid #e1d3a8;border-top:5px solid #0b2719;border-radius:12px;min-height:300px;padding:36px 30px;display:flex;flex-direction:column;justify-content:center}
.sc h4{margin:0 0 6px;font-size:24px;color:#0b2719}.en2{color:#556;font-size:16px;margin:0 0 12px;direction:ltr;text-align:right}
.ct{width:100%;border-collapse:collapse;font-size:16px}.ct th{background:#0b2719;color:#e6c26a;padding:12px;text-align:right}
.ct td{padding:15px 12px;border-bottom:1px solid #e9e1cc;vertical-align:top}.ct tr:nth-child(even) td{background:#f8f3e5}.ct td:first-child{color:#c9a54a;font-weight:700}
.ct .en2{margin:0;font-size:14.5px}
.skills{display:grid;grid-template-columns:1fr 1fr;gap:20px}.sk{background:#fff;border:1.5px solid #e1d3a8;border-radius:14px;padding:30px}
.sk:last-child{grid-column:span 2}.sk h4{margin:0 0 12px;font-size:20px;color:#0b2719;border-bottom:2px solid #c9a54a;display:inline-block;padding-bottom:4px}.sk ul{font-size:17.5px;line-height:2.25}
.cover{background:radial-gradient(circle at 50% 30%,#14402a,#071a10 75%);color:#f1ead7;align-items:center;text-align:center;padding:70px 90px}
.cv-top{width:100%;display:flex;justify-content:space-between;color:#c9a54a;font-weight:700;letter-spacing:4px;font-size:15px;border-bottom:1px solid #c9a54a55;padding-bottom:18px}
.cover h1{font-size:76px;margin:50px 0 0;color:#fff}.cover .en{font-size:24px;color:#c9a54a;letter-spacing:3px;margin-top:6px;font-weight:600}
.cv-titles{display:flex;gap:12px;margin-top:34px;flex-wrap:wrap;justify-content:center}.cv-titles span{border:1px solid #c9a54a;color:#e6c26a;padding:11px 24px;border-radius:30px;font-size:18px;font-weight:600}
.cv-org{margin-top:22px;color:#c9a54a;font-weight:700;font-size:17px;letter-spacing:1px}
.back{justify-content:center}.back h1{margin-top:auto}.bc{margin-top:70px;display:grid;gap:18px;width:640px}
.bc div{border:1px solid #c9a54a77;border-radius:12px;padding:24px;display:flex;flex-direction:column;gap:4px}.bc small{color:#c9a54a;font-size:14px}.bc b{font-size:24px;color:#fff}
.back .cv-org{margin-top:auto}
/* new cover */
.cv2{background:radial-gradient(ellipse at 80% 0%,#1a4a30 0%,#0d3020 40%,#082416 100%);color:#efe8d4;padding:0 70px 0}
.cv2::before{content:"";position:absolute;inset:22px;border:1px solid #c9a54a40;border-radius:6px;pointer-events:none}
.c-gold{position:absolute;top:0;left:0;right:0;height:8px;background:linear-gradient(90deg,#8a6516,#e6c26a,#f5dd96,#e6c26a,#8a6516)}
.c-top{padding-top:64px;padding-bottom:20px;border-bottom:2px solid;border-image:linear-gradient(90deg,transparent,#c9a54a 30%,#e6c26a 70%,#c9a54a) 1}
.c-kick{color:#d4ad4f;font-weight:700;letter-spacing:4px;font-size:15px;direction:ltr;text-align:right}
.c-sub{font-size:28px;font-weight:700;color:#fff;margin-top:8px}
.c-hero{display:flex;gap:34px;margin-top:30px;align-items:stretch}
.c-photo{width:290px;height:330px;flex-shrink:0;padding:6px;border-radius:16px;background:linear-gradient(145deg,#f5dd96,#b0821f,#e6c26a);box-shadow:0 18px 40px #0008}
.c-photo img{width:100%;height:100%;object-fit:cover;border-radius:11px;display:block;background:#fff}
.c-id{flex:1;display:flex;flex-direction:column;justify-content:center}
.c-id h1{margin:0;font-size:62px;color:#fff;line-height:1.2}
.c-en{color:#e0b858;font-size:24px;font-weight:600;letter-spacing:1px;margin:4px 0 22px}
.c-titles{background:#ffffff0c;border:1px solid #c9a54a50;border-right:5px solid #c9a54a;border-radius:12px;padding:16px 24px;display:flex;flex-direction:column;gap:8px}
.c-titles div{font-size:20px;font-weight:700;color:#fff}.c-titles div::before{content:"◆";color:#c9a54a;font-size:12px;margin-left:12px;vertical-align:middle}
.c-titles .gold{color:#e6c26a}
.c-intro{margin-top:30px;background:#ffffff08;border:1px solid #c9a54a55;border-right:5px solid #c9a54a;border-radius:12px;padding:20px 24px;font-size:16px;line-height:1.95;text-align:justify;color:#e9e2cc}
.c-intro b{color:#e6c26a}
.c-ach{margin-top:20px;display:flex;flex-direction:column;gap:14px}
.c-card{display:flex;gap:18px;align-items:flex-start;background:linear-gradient(90deg,#ffffff05,#ffffff10);border:1px solid #c9a54a45;border-right:5px solid #c9a54a;border-radius:12px;padding:16px 22px}
.c-badge{flex-shrink:0;width:38px;height:38px;border-radius:50%;background:linear-gradient(145deg,#f5dd96,#b0821f);color:#082416;font-weight:700;font-size:19px;display:flex;align-items:center;justify-content:center}
.c-card h3{margin:0 0 4px;font-size:19px;color:#fff}.c-card p{margin:0;font-size:15px;line-height:1.85;color:#d8d0b8}
.c-sumh{margin-top:26px;font-size:26px;font-weight:700;color:#fff;display:flex;align-items:center;gap:12px}
.c-sumh span{width:6px;height:28px;background:#c9a54a;border-radius:3px}
.c-sum{margin-top:12px;background:#ffffff08;border:1px solid #c9a54a55;border-radius:12px;padding:22px 28px;font-size:16.5px;line-height:2;text-align:justify;color:#e9e2cc}
.c-foot{margin-top:auto;margin-bottom:42px;padding-top:16px;border-top:1px solid #c9a54a55;display:flex;gap:14px;align-items:center;font-size:15px;color:#d8cfb6}
.c-foot i{color:#c9a54a;font-style:normal;font-size:10px}.c-foot b{margin-right:auto;background:#c9a54a;color:#082416;padding:5px 14px;border-radius:6px}
`;
writeFileSync(`${DIR}/mag.html`, `<!doctype html><html dir="rtl" lang="ar"><head><meta charset="utf-8"><link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet"><style>${css}</style></head><body>${pages.join('')}</body></html>`);
console.log('pages', pages.length);
