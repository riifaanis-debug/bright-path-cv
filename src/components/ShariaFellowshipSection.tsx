/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { SectionHeader } from './SectionHeader';
import { 
  Maximize2, 
  ChevronRight, 
  ChevronLeft, 
  X, 
  CheckCircle2 
} from 'lucide-react';

import cert1 from '../assets/sharia/course-1-islamic-banking.jpeg';
import cert2 from '../assets/sharia/course-2-brokerage.jpeg';
import cert3 from '../assets/sharia/course-3-takaful.jpeg';
import cert4 from '../assets/sharia/course-4-zakat.jpeg';
import cert5 from '../assets/sharia/course-5-sharia-supervision.jpeg';
import cert7 from '../assets/sharia/course-7-sukuk.jpeg';
import cert8 from '../assets/sharia/course-8-islamic-financing.jpeg';
import contractsCert from '../assets/sharia/sharia-contracts.jpeg.asset.json';
import arbitrationCert from '../assets/sharia/sharia-arbitration.jpeg.asset.json';

export interface ShariaCertificate {
  id: string;
  order: number;
  title: string;
  hours: number;
  days: string;
  dateHijri: string;
  dateMiladi: string;
  issuer: string;
  accreditation: string;
  summary: string;
  src: string;
}

export const shariaCertificatesList: ShariaCertificate[] = [
  {
    id: 'sharia-1',
    order: 1,
    title: 'مبادئ المصرفية الإسلامية',
    hours: 6,
    days: 'يومي السبت والأحد',
    dateHijri: '04-05 / 02 / 1448 هـ',
    dateMiladi: '18-19 / 07 / 2026 م',
    issuer: 'الجمعية العلمية القضائية السعودية (قضاء)',
    accreditation: 'جامعة الإمام محمد بن سعود الإسلامية - وزارة التعليم',
    summary: 'التأصيل الفقهي للعمليات والودائع المصرفية، وضوابط المعاملات المالية المعاصرة في البنوك.',
    src: cert1,
  },
  {
    id: 'sharia-2',
    order: 2,
    title: 'مبادئ خدمات شركات الوساطة المالية',
    hours: 6,
    days: 'يومي الثلاثاء والأربعاء',
    dateHijri: '07-08 / 02 / 1448 هـ',
    dateMiladi: '21-22 / 07 / 2026 م',
    issuer: 'الجمعية العلمية القضائية السعودية (قضاء)',
    accreditation: 'جامعة الإمام محمد بن سعود الإسلامية - وزارة التعليم',
    summary: 'الأحكام الشرعية لتداول الأسهم والصناديق، والهامش التمويلي، وضوابط أسواق المال والوساطة.',
    src: cert2,
  },
  {
    id: 'sharia-3',
    order: 3,
    title: 'مبادئ التأمين التعاوني',
    hours: 6,
    days: 'يومي السبت والأحد',
    dateHijri: '11-12 / 02 / 1448 هـ',
    dateMiladi: '25-26 / 07 / 2026 م',
    issuer: 'الجمعية العلمية القضائية السعودية (قضاء)',
    accreditation: 'جامعة الإمام محمد بن سعود الإسلامية - وزارة التعليم',
    summary: 'الفروق الشرعية والجوهرية بين التأمين التجاري والتكافلي، وإدارة الفائض وصناديق المشتركين.',
    src: cert3,
  },
  {
    id: 'sharia-4',
    order: 4,
    title: 'مبادئ محاسبة الزكاة',
    hours: 6,
    days: 'يومي السبت والأحد',
    dateHijri: '18-19 / 02 / 1448 هـ',
    dateMiladi: '01-02 / 08 / 2026 م',
    issuer: 'الجمعية العلمية القضائية السعودية (قضاء)',
    accreditation: 'جامعة الإمام محمد بن سعود الإسلامية - وزارة التعليم',
    summary: 'احتساب الأوعية الزكوية للمؤسسات والشركات المصرفية والمالية وفق المعايير واللوائح النظامية.',
    src: cert4,
  },
  {
    id: 'sharia-5',
    order: 5,
    title: 'مفهوم الرقابة الشرعية وتطبيقاتها',
    hours: 6,
    days: 'يومي الثلاثاء والأربعاء',
    dateHijri: '21-22 / 02 / 1448 هـ',
    dateMiladi: '04-05 / 08 / 2026 م',
    issuer: 'الجمعية العلمية القضائية السعودية (قضاء)',
    accreditation: 'جامعة الإمام محمد بن سعود الإسلامية - وزارة التعليم',
    summary: 'آليات التدقيق والامتثال الشرعي، حوكمة الهيئات الشرعية، ومعايير الأيوفي (AAOIFI) في المصارف.',
    src: cert5,
  },
  {
    id: 'sharia-6',
    order: 6,
    title: 'تطبيقات الاستشارات الشرعية',
    hours: 6,
    days: 'يومي السبت والأحد',
    dateHijri: '25-26 / 02 / 1448 هـ',
    dateMiladi: '08-09 / 08 / 2026 م',
    issuer: 'الجمعية العلمية القضائية السعودية (قضاء)',
    accreditation: 'جامعة الإمام محمد بن سعود الإسلامية - وزارة التعليم',
    summary: 'صياغة الآراء الشرعية والحلول الائتمانية، التكييف الفقهي للنزاعات، وآليات التسوية والصلح المالي.',
    src: '/assets/aistudio/IMG_6958_dbc3bbc2.jpeg',
  },
  {
    id: 'sharia-7',
    order: 7,
    title: 'تطبيقات الصكوك الإسلامية',
    hours: 6,
    days: 'يومي السبت والأحد',
    dateHijri: '02-03 / 03 / 1448 هـ',
    dateMiladi: '15-16 / 08 / 2026 م',
    issuer: 'الجمعية العلمية القضائية السعودية (قضاء)',
    accreditation: 'جامعة الإمام محمد بن سعود الإسلامية - وزارة التعليم',
    summary: 'هيكلة وإصدار صكوك الإجارة والمرابحة والمشاركة، وأحكام التداول والاسترداد للمؤسسات والسيادية.',
    src: cert7,
  },
  {
    id: 'sharia-8',
    order: 8,
    title: 'عقود التمويل الإسلامي',
    hours: 6,
    days: 'يومي الثلاثاء والأربعاء',
    dateHijri: '05-06 / 03 / 1448 هـ',
    dateMiladi: '18-19 / 08 / 2026 م',
    issuer: 'الجمعية العلمية القضائية السعودية (قضاء)',
    accreditation: 'جامعة الإمام محمد بن سعود الإسلامية - وزارة التعليم',
    summary: 'صيغ المرابحة، التورق، الإجارة المنتهية بالتمليك، المشاركة المتناقصة، وتوثيق الحقوق والضمانات.',
    src: cert8,
  },
  {
    id: 'sharia-9',
    order: 9,
    title: 'معاملات الخزينة البنكية',
    hours: 6,
    days: 'يومي السبت والأحد',
    dateHijri: '09-10 / 03 / 1448 هـ',
    dateMiladi: '22-23 / 08 / 2026 م',
    issuer: 'الجمعية العلمية القضائية السعودية (قضاء)',
    accreditation: 'جامعة الإمام محمد بن سعود الإسلامية - وزارة التعليم',
    summary: 'أحكام وضوابط عمليات الخزينة المصرفية، الصرف الأجنبي، والتحوط المالي وإدارة السيولة في المصارف.',
    src: '/assets/aistudio/IMG_7093_72d545ac.jpeg',
  },
  {
    id: 'sharia-10',
    order: 10,
    title: 'تمويل التجارة الدولية',
    hours: 3,
    days: 'يوم الثلاثاء',
    dateHijri: '12 / 03 / 1448 هـ',
    dateMiladi: '25 / 08 / 2026 م',
    issuer: 'الجمعية العلمية القضائية السعودية (قضاء)',
    accreditation: 'جامعة الإمام محمد بن سعود الإسلامية - وزارة التعليم',
    summary: 'أحكام الاعتمادات المستندية، خطابات الضمان، والتمويل التجاري الدولي وفق الضوابط الشرعية.',
    src: '/assets/aistudio/IMG_7147_817ade31.jpeg',
  },
  {
    id: 'sharia-11',
    order: 11,
    title: 'تطوير المنتجات المالية الإسلامية',
    hours: 3,
    days: 'يوم الأربعاء',
    dateHijri: '13 / 03 / 1448 هـ',
    dateMiladi: '26 / 08 / 2026 م',
    issuer: 'الجمعية العلمية القضائية السعودية (قضاء)',
    accreditation: 'جامعة الإمام محمد بن سعود الإسلامية - وزارة التعليم',
    summary: 'منهجية هندسة وابتكار المنتجات المصرفية الإسلامية، وتكييفها الفقهي ومراحل اعتمادها.',
    src: '/assets/aistudio/IMG_7148_dad66b30.jpeg',
  },
  {
    id: 'sharia-12',
    order: 12,
    title: 'تطبيقات التقنية المالية',
    hours: 6,
    days: 'يومي السبت والأحد',
    dateHijri: '16-17 / 03 / 1448 هـ',
    dateMiladi: '29-30 / 08 / 2026 م',
    issuer: 'الجمعية العلمية القضائية السعودية (قضاء)',
    accreditation: 'جامعة الإمام محمد بن سعود الإسلامية - وزارة التعليم',
    summary: 'حلول التقنية المالية (FinTech)، العقود الذكية، المدفوعات والتمويل الجماعي، والتكييف الفقهي للابتكارات المالية.',
    src: '/assets/aistudio/IMG_7149_a599ab4f.jpeg',
  },
  {
    id: 'sharia-13',
    order: 13,
    title: 'تطبيقات المنازعات المصرفية والتمويلية',
    hours: 3,
    days: 'يوم السبت',
    dateHijri: '23 / 03 / 1448 هـ',
    dateMiladi: '05 / 09 / 2026 م',
    issuer: 'الجمعية العلمية القضائية السعودية (قضاء)',
    accreditation: 'جامعة الإمام محمد بن سعود الإسلامية - وزارة التعليم',
    summary: 'التكييف الفقهي والنظامي للمنازعات المصرفية والتمويلية، وآليات التسوية واللجان القضائية والصلح المالي.',
    src: '/assets/aistudio/IMG_7184_78e5baf9.jpeg',
  },
  {
    id: 'sharia-14',
    order: 14,
    title: 'التطبيقات القضائية لعقود التمويل',
    hours: 3,
    days: 'يوم الأحد',
    dateHijri: '24 / 03 / 1448 هـ',
    dateMiladi: '06 / 09 / 2026 م',
    issuer: 'الجمعية العلمية القضائية السعودية (قضاء)',
    accreditation: 'جامعة الإمام محمد بن سعود الإسلامية - وزارة التعليم',
    summary: 'الأحكام والتطبيقات القضائية لعقود التمويل المصرفي والإسلامي، ومعالجة النزاعات التمويلية والتنفيذ القضائي.',
    src: '/assets/aistudio/IMG_7318_b1dd6b01.jpeg',
  },
  {
    id: 'sharia-15',
    order: 15,
    title: 'تطبيقات المنازعات في الأوراق المالية',
    hours: 6,
    days: 'يومي الثلاثاء والأربعاء',
    dateHijri: '26-27 / 03 / 1448 هـ',
    dateMiladi: '08-09 / 09 / 2026 م',
    issuer: 'الجمعية العلمية القضائية السعودية (قضاء)',
    accreditation: 'جامعة الإمام محمد بن سعود الإسلامية - وزارة التعليم',
    summary: 'التكييف الفقهي والنظامي لمنازعات سوق الأوراق المالية والأسهم، وضوابط لجان الفصل في منازعات الأوراق المالية.',
    src: '/assets/aistudio/IMG_7319_56154067.jpeg',
  },
  {
    id: 'sharia-16',
    order: 16,
    title: 'أسس المحاماة والاستشارات وصياغة العقود',
    hours: 6,
    days: 'يومي السبت والأحد',
    dateHijri: '01-02 / 04 / 1448 هـ',
    dateMiladi: '12-13 / 09 / 2026 م',
    issuer: 'الجمعية العلمية القضائية السعودية (قضاء)',
    accreditation: 'جامعة الإمام محمد بن سعود الإسلامية - وزارة التعليم',
    summary: 'أسس مهنة المحاماة وتقديم الاستشارات الشرعية والنظامية، ومهارات صياغة العقود وضبط الالتزامات التعاقدية.',
    src: contractsCert.url,
  },
  {
    id: 'sharia-17',
    order: 17,
    title: 'التحكيم والوساطة في تسوية المنازعات المالية',
    hours: 6,
    days: 'يومي الثلاثاء والأربعاء',
    dateHijri: '04-05 / 04 / 1448 هـ',
    dateMiladi: '15-16 / 09 / 2026 م',
    issuer: 'الجمعية العلمية القضائية السعودية (قضاء)',
    accreditation: 'جامعة الإمام محمد بن سعود الإسلامية - وزارة التعليم',
    summary: 'أحكام وإجراءات التحكيم والوساطة كوسائل بديلة لتسوية المنازعات المالية والمصرفية، وتنفيذ أحكام التحكيم.',
    src: arbitrationCert.url,
  },
];

export const ShariaFellowshipSection: React.FC = () => {
  const [selectedCertIndex, setSelectedCertIndex] = useState<number | null>(null);

  useEffect(() => {
    if (selectedCertIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCertIndex(null);
      if (e.key === 'ArrowRight') {
        setSelectedCertIndex((prev) =>
          prev !== null ? (prev - 1 + shariaCertificatesList.length) % shariaCertificatesList.length : null
        );
      }
      if (e.key === 'ArrowLeft') {
        setSelectedCertIndex((prev) =>
          prev !== null ? (prev + 1) % shariaCertificatesList.length : null
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCertIndex]);

  return (
    <section id="sharia-fellowship" className="mb-8 page-break-avoid">
      <SectionHeader 
        className="mb-4 mt-8"
        titleAr={
          <div className="space-y-1">
            <span className="text-sm sm:text-base font-bold text-[#B8860B] block">
              البرنامج التأهيلي &quot; زمالة المستشار الشرعي &quot;
            </span>
            <span className="text-base sm:text-lg font-extrabold text-[#0C3823] block">
              في فقه المالية الإسلامية وتسوية المنازعات
            </span>
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-slate-700 font-semibold pt-1">
              <span className="text-[#D9A441] font-bold">|</span>
              <span>112 ساعة تدريبية</span>
              <span className="text-[#D9A441] font-bold">|</span>
              <span>مقسمة بين الدراسة النظرية واللقاءات العلمية ومشروع التخرج</span>
            </div>
          </div>
        } 
      />

      {/* سلايدر متحرك حركة أفقية مستمرة للشهادات التخصصية */}
      <div className="pt-1 pb-4 page-break-avoid no-print">
        <div
          className="-mx-4 sm:mx-0 overflow-hidden relative rounded-none sm:rounded-xl bg-slate-900/5 py-2.5 border-y sm:border border-slate-200 group"
          dir="ltr"
        >
          {/* حواف بتلاشي ناعم */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-slate-100/90 to-transparent z-10 hidden sm:block" />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-slate-100/90 to-transparent z-10 hidden sm:block" />

          {/* شريط السلايدرات المتحركة المستمرة */}
          <div className="animate-marquee-infinite flex gap-3 sm:gap-4 px-2" dir="ltr">
            {[...shariaCertificatesList, ...shariaCertificatesList].map((cert, idx) => (
              <div
                key={`${cert.id}-${idx}`}
                onClick={() => setSelectedCertIndex(idx % shariaCertificatesList.length)}
                className="w-56 sm:w-72 shrink-0 rounded-lg overflow-hidden border border-slate-200/90 bg-white shadow-xs hover:shadow-md hover:border-[#D9A441] transition-all cursor-pointer group/card select-none"
                title={cert.title}
              >
                <div className="aspect-[4/3] bg-slate-100/80 p-1.5 sm:p-2 flex items-center justify-center overflow-hidden relative">
                  <img
                    src={cert.src}
                    alt={cert.title}
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-contain rounded-none shadow-xs group-hover/card:scale-[1.02] transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/25 transition-colors flex items-center justify-center pointer-events-none">
                    <span className="opacity-0 group-hover/card:opacity-100 transition-opacity bg-black/75 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-xs flex items-center gap-1.5 shadow-md">
                      <Maximize2 className="w-3.5 h-3.5 text-[#D9A441]" />
                      <span>عرض الشهادة</span>
                    </span>
                  </div>
                </div>

                <div className="p-2.5 bg-slate-50 border-t border-slate-100 text-center" dir="rtl">
                  <p className="text-[11px] sm:text-xs font-bold text-slate-800 line-clamp-1" title={cert.title}>
                    {cert.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* نافذة التكبير الكامل للشهادات (Lightbox Modal) */}
      {selectedCertIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 no-print animate-fade-in"
          onClick={() => setSelectedCertIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[92vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* شريط علوي للعنوان وزر الإغلاق */}
            <div className="w-full flex items-center justify-between gap-3 text-white mb-2 px-1">
              <div className="text-xs sm:text-sm font-bold text-[#D9A441] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D9A441]" />
                <span className="truncate">{shariaCertificatesList[selectedCertIndex]!.title}</span>
                <span className="text-white/60 text-xs shrink-0">
                  ({selectedCertIndex + 1} / {shariaCertificatesList.length})
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCertIndex(null)}
                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
                title="إغلاق"
                aria-label="إغلاق"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* الصورة المكبرة للشهادة */}
            <div className="relative w-full flex items-center justify-center bg-black/75 rounded-2xl overflow-hidden border border-white/15 p-2 sm:p-4 shadow-2xl">
              <img
                src={shariaCertificatesList[selectedCertIndex]!.src}
                alt={shariaCertificatesList[selectedCertIndex]!.title}
                loading="eager"
                decoding="async"
                className="max-h-[75vh] w-auto max-w-full object-contain rounded-none select-none shadow-2xl"
              />

              {/* أزرار التنقل بين الشهادات */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedCertIndex((prev) =>
                    prev !== null ? (prev - 1 + shariaCertificatesList.length) % shariaCertificatesList.length : null
                  );
                }}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/70 hover:bg-[#D9A441] hover:text-black text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-xs border border-white/20 shadow-lg"
                title="السابق"
                aria-label="السابق"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedCertIndex((prev) =>
                    prev !== null ? (prev + 1) % shariaCertificatesList.length : null
                  );
                }}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/70 hover:bg-[#D9A441] hover:text-black text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-xs border border-white/20 shadow-lg"
                title="التالي"
                aria-label="التالي"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* شريط معلومات جهة الإصدار أسفل الصورة المكبرة */}
            <div className="w-full flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-white/80 mt-2 px-1 gap-1">
              <div className="flex items-center gap-2">
                <span>{shariaCertificatesList[selectedCertIndex]!.issuer}</span>
                <span className="text-white/40">•</span>
                <span className="text-[#D9A441] font-semibold">{shariaCertificatesList[selectedCertIndex]!.dateMiladi} ({shariaCertificatesList[selectedCertIndex]!.hours} ساعات)</span>
              </div>
              <span className="text-white/50 text-[10px]">استخدم الأسهم أو Esc للتنقل والإغلاق</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
