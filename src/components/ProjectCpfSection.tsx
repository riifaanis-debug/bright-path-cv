/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { SectionHeader } from './SectionHeader';
import { resumeData } from '../data/resumeData.ts';
import cp from '../data/collectionPersona.json';
import { Play, Maximize2, ChevronRight, ChevronLeft, X, ExternalLink, Video } from 'lucide-react';

import slide1Webp from '../assets/cpf/slide-1.webp';
import slide2Webp from '../assets/cpf/slide-2.webp';
import slide3Webp from '../assets/cpf/slide-3.webp';
import slide4Webp from '../assets/cpf/slide-4.webp';
import slide5Webp from '../assets/cpf/slide-5.webp';
import slide6Webp from '../assets/cpf/slide-6.webp';
import slide7Webp from '../assets/cpf/slide-7.webp';
import slide8Webp from '../assets/cpf/slide-8.webp';

import slide1Png from '../assets/cpf/slide-1.png';
import slide2Png from '../assets/cpf/slide-2.png';
import slide3Png from '../assets/cpf/slide-3.png';
import slide4Png from '../assets/cpf/slide-4.png';
import slide5Png from '../assets/cpf/slide-5.png';
import slide6Png from '../assets/cpf/slide-6.png';
import slide7Png from '../assets/cpf/slide-7.png';
import slide8Png from '../assets/cpf/slide-8.png';

const cpfSlides = [
  { id: 'slide-1', src: slide1Webp, fallback: slide1Png, title: 'التأهل للمرحلة الثانية - إعداد نموذج إثبات المفهوم' },
  { id: 'slide-2', src: slide2Webp, fallback: slide2Png, title: 'التأهل ضمن أفضل 10 أفكار - الانتقال للمرحلة الثالثة' },
  { id: 'slide-3', src: slide3Webp, fallback: slide3Png, title: 'ورشة العمل التعريفية لعرض إثبات المفهوم (POC Pitch)' },
  { id: 'slide-4', src: slide4Webp, fallback: slide4Png, title: 'التأهل لمرحلة التصويت العام - مسابقة SURGE CUP 2026' },
  { id: 'slide-5', src: slide5Webp, fallback: slide5Png, title: 'الانتقال إلى المرحلة الثالثة - من إثبات المفهوم إلى النموذج الأولي' },
  { id: 'slide-6', src: slide6Webp, fallback: slide6Png, title: 'قائمة المتأهلين في مسار XPERIENCETHON - ماجد عامر السفياني' },
  { id: 'slide-7', src: slide7Webp, fallback: slide7Png, title: 'جوائز ومراحل المسابقة - البنك الأهلي السعودي (SNB)' },
  { id: 'slide-8', src: slide8Webp, fallback: slide8Png, title: 'رحلة المسابقة الشاملة وقائمة المرشحين المتأهلين' },
];

export const ProjectCpfSection: React.FC = () => {
  const project = resumeData.innovativeProject;
  const [videoUrl] = useState<string>((project as any).videoUrl || '');
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedSlideIndex, setSelectedSlideIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedSlideIndex(null);
        if (isVideoModalOpen) {
          if (videoRef.current) videoRef.current.pause();
          setIsVideoModalOpen(false);
        }
      }
      if (selectedSlideIndex !== null) {
        if (e.key === 'ArrowRight') {
          setSelectedSlideIndex((prev) => (prev !== null ? (prev - 1 + cpfSlides.length) % cpfSlides.length : null));
        }
        if (e.key === 'ArrowLeft') {
          setSelectedSlideIndex((prev) => (prev !== null ? (prev + 1) % cpfSlides.length : null));
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedSlideIndex, isVideoModalOpen]);

  const handleCloseVideoModal = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsVideoModalOpen(false);
  };

  return (
    <section id="project-cpf" className="mb-6 page-break-avoid">
      <SectionHeader
        titleAr="المشاريع المهنية والابتكارية"
      />

      <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
        
        {/* Project Header */}
        <div>
          <div className="space-y-1 text-justify font-semibold text-[#0C3823]">
            {cp.intro.map((t, k) => <p key={k}>{t}</p>)}
          </div>

          <div className="mt-1 text-xs text-slate-500 font-medium flex flex-wrap items-center gap-x-2.5 gap-y-1">
            <span><strong>الجهة:</strong> {project.organization}</span>
            <span>·</span>
            <span><strong>المسابقة:</strong> {project.competition}</span>
            <span>·</span>
            <span className="text-[#0C3823] font-bold"><strong>الحالة:</strong> {project.status}</span>
          </div>
        </div>

        {/* معرض سلايدرات متحركة أفقياً بحركة مستمرة */}
        <div className="pt-1 pb-1 page-break-avoid no-print">
          <div className="flex items-center justify-between gap-2 mb-2 px-1">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#D9A441]" />
              <span className="text-xs font-bold text-[#0C3823]">
                معرض وثائق ومراحل المسابقة (SURGE CUP 2026)
              </span>
            </div>
            <span className="text-[11px] text-slate-400 font-medium hidden sm:inline">
              (حركة أفقية مستمرة - انقر للتكبير)
            </span>
          </div>

          <div className="-mx-4 sm:mx-0 overflow-hidden relative rounded-none sm:rounded-xl bg-slate-900/5 py-2.5 border-y sm:border border-slate-200 group" dir="ltr">
            {/* أطراف بتلاشي ناعم */}
            <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-slate-100/90 to-transparent z-10 hidden sm:block" />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-slate-100/90 to-transparent z-10 hidden sm:block" />

            {/* شريط السلايدرات المتحركة المستمرة */}
            <div className="animate-marquee-infinite flex gap-3 sm:gap-4 px-2" dir="ltr">
              {[...cpfSlides, ...cpfSlides].map((slide, idx) => (
                <div
                  key={`${slide.id}-${idx}`}
                  onClick={() => setSelectedSlideIndex(idx % cpfSlides.length)}
                  className="w-56 sm:w-72 shrink-0 rounded-lg overflow-hidden border border-slate-200/90 bg-white shadow-xs hover:shadow-md hover:border-[#D9A441] transition-all cursor-pointer group/card select-none"
                  title={slide.title}
                >
                  <div className="aspect-[4/3] bg-slate-100 overflow-hidden relative">
                    <img
                      src={slide.src}
                      alt={slide.title}
                      loading="eager"
                      decoding="async"
                      className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (slide.fallback && target.src !== slide.fallback) {
                          target.src = slide.fallback;
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/25 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover/card:opacity-100 transition-opacity bg-black/75 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-xs flex items-center gap-1.5 shadow-md">
                        <Maximize2 className="w-3.5 h-3.5 text-[#D9A441]" />
                        <span>عرض الوثيقة</span>
                      </span>
                    </div>
                  </div>
                  <div className="p-2 bg-slate-50 border-t border-slate-100">
                    <p className="text-[11px] font-semibold text-slate-800 truncate text-right" dir="rtl" title={slide.title}>
                      {slide.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* نافذة التكبير الكامل للصور (Lightbox Modal) */}
        {selectedSlideIndex !== null && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 no-print animate-fade-in"
            onClick={() => setSelectedSlideIndex(null)}
          >
            <div 
              className="relative max-w-4xl w-full max-h-[92vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* شريط علوي للعنوان وزر الإغلاق */}
              <div className="w-full flex items-center justify-between gap-3 text-white mb-2 px-1">
                <div className="text-xs sm:text-sm font-bold text-[#D9A441] flex items-center gap-2">
                  <span>{cpfSlides[selectedSlideIndex].title}</span>
                  <span className="text-white/60 text-xs">({selectedSlideIndex + 1} / {cpfSlides.length})</span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedSlideIndex(null)}
                  className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
                  title="إغلاق"
                  aria-label="إغلاق"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* الصورة المكبرة */}
              <div className="relative w-full flex items-center justify-center bg-black/60 rounded-xl overflow-hidden border border-white/15 p-1 shadow-2xl">
                <img
                  src={cpfSlides[selectedSlideIndex].src}
                  alt={cpfSlides[selectedSlideIndex].title}
                  loading="eager"
                  decoding="async"
                  className="max-h-[76vh] max-w-full object-contain rounded-lg shadow-md"
                  onError={(e) => {
                    const target = e.currentTarget;
                    const fallback = cpfSlides[selectedSlideIndex].fallback;
                    if (fallback && target.src !== fallback) {
                      target.src = fallback;
                    }
                  }}
                />

                {/* أزرار التنقل التالي / السابق */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedSlideIndex((prev) => (prev !== null ? (prev - 1 + cpfSlides.length) % cpfSlides.length : null));
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer shadow-lg"
                  title="السابق"
                  aria-label="السابق"
                >
                  <ChevronRight className="w-6 h-6 text-[#D9A441]" />
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedSlideIndex((prev) => (prev !== null ? (prev + 1) % cpfSlides.length : null));
                  }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer shadow-lg"
                  title="التالي"
                  aria-label="التالي"
                >
                  <ChevronLeft className="w-6 h-6 text-[#D9A441]" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* زر / نص عرض الفيديو والعرض الكامل للمشروع (الفيديو مخفي عن الواجهة مباشرة ويُعرض عند النقر) */}
        {videoUrl && (
          <div className="pt-2 pb-1 no-print">
            <button
              type="button"
              onClick={() => setIsVideoModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-[#0C3823] via-[#12422c] to-[#0C3823] hover:from-[#08291a] hover:to-[#08291a] text-white border-2 border-[#D9A441]/70 hover:border-[#D9A441] shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
              <span className="w-8 h-8 rounded-full bg-[#D9A441] text-[#0C3823] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                <Play className="w-4 h-4 fill-current translate-x-[-0.5px]" />
              </span>
              <span className="font-bold text-xs sm:text-sm text-[#FDFBF7] group-hover:text-[#D9A441] transition-colors underline decoration-[#D9A441]/50 underline-offset-4">
                للاطلاع على فيديو وعرض كامل للمشروع اضغط هنا
              </span>
            </button>
          </div>
        )}

        {/* نافذة مشغل الفيديو المنبثقة (Video Lightbox Modal) */}
        {isVideoModalOpen && videoUrl && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 no-print animate-fade-in"
            onClick={handleCloseVideoModal}
          >
            <div
              className="relative max-w-4xl w-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* شريط علوي للعنوان وزر الإغلاق */}
              <div className="w-full flex items-center justify-between gap-3 text-white mb-2 px-1">
                <div className="flex items-center gap-2">
                  <Video className="w-4 h-4 text-[#D9A441]" />
                  <span className="text-xs sm:text-sm font-bold text-[#D9A441]">
                    فيديو وعرض مشروع: Collection Persona Framework™ (CPF)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-white/80 hover:text-[#D9A441] flex items-center gap-1 bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-full transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">فتح برابط خارجي</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleCloseVideoModal}
                    className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
                    title="إغلاق الفيديو"
                    aria-label="إغلاق الفيديو"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* مشغل الفيديو */}
              <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden border border-white/20 shadow-2xl">
                <video
                  ref={videoRef}
                  src={videoUrl}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain bg-black"
                >
                  متصفحك لا يدعم تشغيل الفيديو مباشرة.
                </video>
              </div>
            </div>
          </div>
        )}

        {cp.sections.map((sec, i) => (
          <div key={i} className="pt-1">
            <h4 className="font-bold text-[#0C3823] mb-1">{sec.heading}</h4>
            <div className="space-y-1 text-justify">
              {sec.items.map((it, j) => it.li ? (
                <div key={j} className="flex items-start gap-1.5 pr-1">
                  <span className="text-[#D9A441] font-bold select-none leading-none mt-0.5">•</span>
                  <span>{it.t}</span>
                </div>
              ) : <p key={j}>{it.t}</p>)}
            </div>
          </div>
        ))}


      </div>
    </section>
  );
};
