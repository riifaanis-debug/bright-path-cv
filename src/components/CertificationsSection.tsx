/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { SectionHeader } from './SectionHeader.tsx';
import { 
  ChevronRight, 
  ChevronLeft
} from 'lucide-react';

export interface ProfessionalCertItem {
  id: string;
  title: string;
  src: string;
  alt: string;
}

export const professionalCertificates: ProfessionalCertItem[] = [
  {
    id: 'cert-advisor',
    title: 'مستشار المالية الإسلامية',
    src: '/assets/aistudio/cert_advisor_islamic_finance.png',
    alt: 'شهادة مستشار المالية الإسلامية - زمالة المستشار الشرعي',
  },
  {
    id: 'cert-specialist-finance',
    title: 'أخصائي المالية الإسلامية',
    src: '/assets/aistudio/cert_specialist_islamic_finance.png',
    alt: 'شهادة أخصائي المالية الإسلامية',
  },
  {
    id: 'cert-specialist-dispute',
    title: 'أخصائي تسوية المنازعات المالية',
    src: '/assets/aistudio/cert_specialist_dispute_resolution.png',
    alt: 'شهادة أخصائي تسوية المنازعات المالية',
  },
  {
    id: 'cert-retail-banking',
    title: 'الاختبار المهني في أساسيات مصرفية الأفراد',
    src: '/assets/aistudio/cert_retail_banking_foundations.png',
    alt: 'شهادة الاختبار المهني في أساسيات مصرفية الأفراد - الأكاديمية المالية',
  },
];

export const CertificationsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev' | 'none'>('none');
  const [animKey, setAnimKey] = useState(0);

  // Swipe / Drag gesture state
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);
  const [mouseStartX, setMouseStartX] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState<number>(0);
  const [isDragging, setIsDragging] = useState(false);

  const total = professionalCertificates.length;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const goToNext = () => {
    setDirection('next');
    setAnimKey((prev) => prev + 1);
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const goToPrev = () => {
    setDirection('prev');
    setAnimKey((prev) => prev + 1);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const goToIndex = (index: number) => {
    if (index === currentIndex) return;
    setDirection(index > currentIndex ? 'next' : 'prev');
    setAnimKey((prev) => prev + 1);
    setCurrentIndex(index);
  };

  // حركة السلايدر الآلية (Autoplay): التحرك التلقائي كل 3.5 ثوانٍ بسلاسة
  useEffect(() => {
    if (isDragging) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setDirection('next');
      setAnimKey((prev) => prev + 1);
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 3500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isDragging, total, currentIndex]);

  // Touch Swipe Handlers (RTL aware)
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchStartY(e.touches[0].clientY);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX === null || touchStartY === null) return;
    const diffX = e.touches[0].clientX - touchStartX;
    const diffY = e.touches[0].clientY - touchStartY;
    if (Math.abs(diffX) > Math.abs(diffY)) {
      setDragOffset(diffX * 0.6);
    }
  };

  const handleTouchEnd = () => {
    if (dragOffset > 40) {
      goToPrev();
    } else if (dragOffset < -40) {
      goToNext();
    }
    setTouchStartX(null);
    setTouchStartY(null);
    setDragOffset(0);
    setIsDragging(false);
  };

  // Mouse Drag Handlers for Desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    setMouseStartX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (mouseStartX === null || !isDragging) return;
    const diffX = e.clientX - mouseStartX;
    setDragOffset(diffX * 0.5);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    if (dragOffset > 40) {
      goToPrev();
    } else if (dragOffset < -40) {
      goToNext();
    }
    setMouseStartX(null);
    setDragOffset(0);
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goToPrev();
      if (e.key === 'ArrowLeft') goToNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const currentCert = professionalCertificates[currentIndex];

  const animationClass = direction === 'next'
    ? 'animate-honor-next'
    : direction === 'prev'
    ? 'animate-honor-prev'
    : 'animate-honor-pop';

  return (
    <section id="certifications" className="mb-6 page-break-avoid">
      <SectionHeader
        titleAr="الشهادات المهنية"
        className="mb-3 sm:mb-4 mt-6 sm:mt-8"
      />

      {/* سلايدر الشهادات المهنية المتحرك آلياً */}
      <div className="relative w-full no-print select-none">
        {/* حاوية البطاقة النشطة في السلايدر */}
        <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 shadow-[0_12px_36px_-8px_rgba(12,56,35,0.12),0_6px_16px_-4px_rgba(0,0,0,0.04)]">
          <div
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: dragOffset !== 0 ? `translateX(${dragOffset}px)` : undefined,
              transition: dragOffset !== 0 ? 'none' : undefined,
            }}
            className="w-full cursor-grab active:cursor-grabbing"
            dir="rtl"
          >
            {/* إطار عرض صورة الشهادة بجودة عالية وثبات كامل للارتفاع بدون أي وميض */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] max-h-[460px] bg-slate-50 flex items-center justify-center overflow-hidden">
              {professionalCertificates.map((cert, idx) => (
                <div
                  key={cert.id}
                  className={`absolute inset-0 w-full h-full flex items-center justify-center p-2 transition-all duration-400 ease-out ${
                    idx === currentIndex
                      ? 'opacity-100 scale-100 z-10'
                      : 'opacity-0 scale-95 pointer-events-none z-0'
                  }`}
                  style={{ willChange: 'opacity, transform' }}
                >
                  <img
                    src={cert.src}
                    alt={cert.alt}
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-contain block select-none pointer-events-none drop-shadow-xs"
                  />
                </div>
              ))}
            </div>

            {/* خط تقدم الحركة الآلية الخفيف */}
            <div className="h-0.5 w-full bg-slate-100 overflow-hidden">
              <div 
                key={`cert-bar-${currentIndex}`}
                className="h-full bg-gradient-to-r from-[#D9A441] to-[#0C3823] animate-cert-progress" 
              />
            </div>

            {/* حقل اسم الشهادة المصغر مع إدراج أسهم التنقل بداخله وتصغير حجم الخط وبدون ترقيم */}
            <div className="py-2 px-2.5 sm:px-4 flex items-center justify-between gap-2 bg-gradient-to-b from-white to-slate-50/90 border-t border-slate-100">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrev();
                }}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-100 hover:bg-[#0C3823] hover:text-white text-[#0C3823] border border-slate-200/80 shadow-xs flex items-center justify-center transition-all duration-150 active:scale-95 shrink-0"
                aria-label="الشهادة السابقة"
                title="السابق"
              >
                <ChevronRight className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </button>

              <h3 className="text-xs sm:text-sm font-bold text-[#0C3823] text-center truncate flex-1 px-1 tracking-tight">
                {currentCert.title}
              </h3>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-100 hover:bg-[#0C3823] hover:text-white text-[#0C3823] border border-slate-200/80 shadow-xs flex items-center justify-center transition-all duration-150 active:scale-95 shrink-0"
                aria-label="الشهادة التالية"
                title="التالي"
              >
                <ChevronLeft className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </button>
            </div>
          </div>
        </div>

        {/* مؤشرات التنقل السفلية البسيطة */}
        <div className="mt-2.5 flex items-center justify-center gap-1.5" dir="rtl">
          {professionalCertificates.map((cert, idx) => (
            <button
              key={cert.id}
              type="button"
              onClick={() => goToIndex(idx)}
              className={`transition-all duration-300 rounded-full ${
                idx === currentIndex
                  ? 'w-6 sm:w-7 h-2 bg-gradient-to-r from-[#D9A441] to-[#B8860B] shadow-xs'
                  : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`الانتقال إلى ${cert.title}`}
              title={cert.title}
            />
          ))}
        </div>
      </div>

      {/* نسخة خاصة بالطباعة (Print View): عرض الشهادات الأربع مع أسمائها فقط */}
      <div className="hidden print:grid print:grid-cols-4 print:gap-2.5 print:mt-3">
        {professionalCertificates.map((cert) => (
          <div key={`print-${cert.id}`} className="border border-slate-300 rounded p-1 text-center page-break-avoid">
            <img 
              src={cert.src} 
              alt={cert.title} 
              className="w-full h-auto object-contain max-h-[140px] mx-auto mb-1" 
            />
            <div className="text-[9pt] font-bold text-[#0C3823]">
              {cert.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
