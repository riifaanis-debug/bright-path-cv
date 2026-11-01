/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { SectionHeader } from './SectionHeader';
import { resumeData } from '../data/resumeData.ts';
import { Maximize2, ChevronRight, ChevronLeft, X, Award, CheckCircle2 } from 'lucide-react';

import cert1Webp from '../assets/certificates/cert-1.webp';
import cert2Webp from '../assets/certificates/cert-2.webp';
import cert3Webp from '../assets/certificates/cert-3.webp';
import cert4Webp from '../assets/certificates/cert-4.webp';
import cert5Webp from '../assets/certificates/cert-5.webp';
import cert6Webp from '../assets/certificates/cert-6.webp';
import cert7Webp from '../assets/certificates/cert-7.webp';
import cert8Webp from '../assets/certificates/cert-8.webp';
import cert9Webp from '../assets/certificates/cert-9.webp';

import cert1Png from '../assets/certificates/cert-1.png';
import cert2Png from '../assets/certificates/cert-2.png';
import cert3Png from '../assets/certificates/cert-3.png';
import cert4Png from '../assets/certificates/cert-4.png';
import cert5Png from '../assets/certificates/cert-5.png';
import cert6Png from '../assets/certificates/cert-6.png';
import cert7Png from '../assets/certificates/cert-7.png';
import cert8Png from '../assets/certificates/cert-8.png';
import cert9Png from '../assets/certificates/cert-9.png';

interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  src: string;
  fallback: string;
}

const certificatesList: CertificateItem[] = [
  {
    id: 'cert-1',
    title: 'التخطيط المالي لتحقيق الأهداف المستقبلية',
    issuer: 'الشركة السعودية لإعادة التمويل العقاري (SRC) & الأكاديمية المالية',
    src: cert1Webp,
    fallback: cert1Png,
  },
  {
    id: 'cert-2',
    title: 'مستقبل السندات والصكوك في المملكة العربية السعودية',
    issuer: 'الأكاديمية المالية',
    src: cert2Webp,
    fallback: cert2Png,
  },
  {
    id: 'cert-3',
    title: 'الذكاء الاصطناعي الوكيل للتميز في المبيعات (Agentic AI)',
    issuer: 'الأكاديمية المالية',
    src: cert3Webp,
    fallback: cert3Png,
  },
  {
    id: 'cert-4',
    title: 'مقدمة عن التصنيفات الائتمانية (Credit Ratings)',
    issuer: 'الأكاديمية المالية',
    src: cert4Webp,
    fallback: cert4Png,
  },
  {
    id: 'cert-5',
    title: 'التأمين العربي في مواجهة التغيرات العالمية',
    issuer: 'الأكاديمية المالية',
    src: cert5Webp,
    fallback: cert5Png,
  },
  {
    id: 'cert-6',
    title: 'المخاطر الناشئة للجرائم المالية وأفضل الممارسات',
    issuer: 'الأكاديمية المالية',
    src: cert6Webp,
    fallback: cert6Png,
  },
  {
    id: 'cert-7',
    title: 'حوكمة الشركات المدرجة (Governance of Listed Companies)',
    issuer: 'الأكاديمية المالية',
    src: cert7Webp,
    fallback: cert7Png,
  },
  {
    id: 'cert-8',
    title: 'بناء شركات عالية الأداء في عصر الذكاء الاصطناعي',
    issuer: 'الأكاديمية المالية',
    src: cert8Webp,
    fallback: cert8Png,
  },
  {
    id: 'cert-9',
    title: 'الاختبار المهني في أساسيات مصرفية الأفراد (النسخة الثالثة)',
    issuer: 'الأكاديمية المالية',
    src: cert9Webp,
    fallback: cert9Png,
  },
];

export const CoursesSection: React.FC = () => {
  const [selectedCertIndex, setSelectedCertIndex] = useState<number | null>(null);

  useEffect(() => {
    if (selectedCertIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCertIndex(null);
      if (e.key === 'ArrowRight') {
        setSelectedCertIndex((prev) =>
          prev !== null ? (prev - 1 + certificatesList.length) % certificatesList.length : null
        );
      }
      if (e.key === 'ArrowLeft') {
        setSelectedCertIndex((prev) =>
          prev !== null ? (prev + 1) % certificatesList.length : null
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCertIndex]);

  return (
    <section id="courses" className="mb-6 page-break-avoid">
      <SectionHeader titleAr="الدورات التدريبية" />

      {/* سلايدر متحرك حركة أفقية مستمرة للشهادات مباشرة تحت العنوان */}
      <div className="pt-1 pb-4 page-break-avoid no-print">
        <div className="flex items-center justify-between gap-2 mb-2 px-1">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#D9A441]" />
            <span className="text-xs font-bold text-[#0C3823] flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-[#D9A441]" />
              معرض الشهادات المهنية المعتمدة
            </span>
          </div>
          <span className="text-[11px] text-slate-400 font-medium hidden sm:inline">
            (حركة أفقية مستمرة - انقر للتكبير والتصفح)
          </span>
        </div>

        <div
          className="-mx-4 sm:mx-0 overflow-hidden relative rounded-none sm:rounded-xl bg-slate-900/5 py-2.5 border-y sm:border border-slate-200 group"
          dir="ltr"
        >
          {/* حواف بتلاشي ناعم */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-slate-100/90 to-transparent z-10 hidden sm:block" />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-slate-100/90 to-transparent z-10 hidden sm:block" />

          {/* شريط السلايدرات المتحركة المستمرة */}
          <div className="animate-marquee-infinite flex gap-3 sm:gap-4 px-2" dir="ltr">
            {[...certificatesList, ...certificatesList].map((cert, idx) => (
              <div
                key={`${cert.id}-${idx}`}
                onClick={() => setSelectedCertIndex(idx % certificatesList.length)}
                className="w-56 sm:w-72 shrink-0 rounded-lg overflow-hidden border border-slate-200/90 bg-white shadow-xs hover:shadow-md hover:border-[#D9A441] transition-all cursor-pointer group/card select-none"
                title={cert.title}
              >
                <div className="aspect-[4/3] bg-slate-100 overflow-hidden relative">
                  <img
                    src={cert.src}
                    alt={cert.title}
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (cert.fallback && target.src !== cert.fallback) {
                        target.src = cert.fallback;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/25 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover/card:opacity-100 transition-opacity bg-black/75 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-xs flex items-center gap-1.5 shadow-md">
                      <Maximize2 className="w-3.5 h-3.5 text-[#D9A441]" />
                      <span>عرض الشهادة</span>
                    </span>
                  </div>
                </div>

                <div className="p-2.5 bg-slate-50 border-t border-slate-100 text-right" dir="rtl">
                  <p className="text-[11px] font-bold text-slate-800 line-clamp-1" title={cert.title}>
                    {cert.title}
                  </p>
                  <p className="text-[10px] text-slate-500 font-medium truncate mt-0.5" title={cert.issuer}>
                    {cert.issuer}
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
                <span className="truncate">{certificatesList[selectedCertIndex].title}</span>
                <span className="text-white/60 text-xs shrink-0">
                  ({selectedCertIndex + 1} / {certificatesList.length})
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
            <div className="relative w-full flex items-center justify-center bg-black/60 rounded-xl overflow-hidden border border-white/15 p-1 shadow-2xl">
              <img
                src={certificatesList[selectedCertIndex].src}
                alt={certificatesList[selectedCertIndex].title}
                loading="eager"
                decoding="async"
                className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg"
                onError={(e) => {
                  const target = e.currentTarget;
                  const fallback = certificatesList[selectedCertIndex].fallback;
                  if (fallback && target.src !== fallback) {
                    target.src = fallback;
                  }
                }}
              />

              {/* أزرار التنقل بين الشهادات */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedCertIndex((prev) =>
                    prev !== null ? (prev - 1 + certificatesList.length) % certificatesList.length : null
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
                    prev !== null ? (prev + 1) % certificatesList.length : null
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
            <div className="w-full flex items-center justify-between text-[11px] sm:text-xs text-white/80 mt-2 px-1">
              <span>{certificatesList[selectedCertIndex].issuer}</span>
              <span className="text-white/50 text-[10px]">استخدم الأسهم أو Esc للتنقل والإغلاق</span>
            </div>
          </div>
        </div>
      )}

      {/* قائمة الدورات التدريبية المعتمدة */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 pt-1">
        {resumeData.courses.map((course) => (
          <div
            key={course.id}
            className="border-r-2 border-[#D9A441] pr-3 py-0.5 page-break-avoid"
          >
            <div className="text-xs sm:text-sm font-bold text-[#0C3823] leading-snug">
              {course.titleAr}{' '}
              <span className="font-normal text-slate-500 text-xs" dir="ltr">
                - {course.titleEn}
              </span>
            </div>

            <div className="text-[11px] sm:text-xs text-slate-600 font-medium mt-0.5" dir="ltr">
              {course.provider}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
