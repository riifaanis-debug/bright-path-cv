/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import surgeCupAsset from '@/assets/surge-cup-2026-v2.jpeg.asset.json';

export interface ShowcaseItem {
  id: string;
  src: string;
  topTitle: string;
  topBadge?: string;
  bottomContent: React.ReactNode;
  caption: string;
}

export const showcaseItems: ShowcaseItem[] = [
  {
    id: 'honor-1',
    src: '/assets/aistudio/2b5f7485-e301-46a5-81f5-b7d6e23ff318_d953eee4.jpeg',
    topTitle: 'حاصل على المركز الأول لعامين متتاليين على إدارة تحصيل الأفراد',
    topBadge: '/assets/aistudio/first_place_ribbon_medal.png',
    bottomContent: (
      <div className="space-y-0.5 sm:space-y-1">
        <div>
          <span className="text-slate-800 font-semibold">حصاد الجد والاجتهاد .. حظيت بالتكريم من : </span>
          <span className="text-[#C5942B] font-bold">سعادة الأستاذ صالح الصالح</span>
        </div>
        <div className="text-[#C5942B] font-bold">
          رئيس الخدمات المشتركة لمجموعة البنك الأهلي السعودي
        </div>
        <div className="text-slate-800 font-semibold">
          لحصولي على المركز الأول للعام الثاني على التوالي
        </div>
      </div>
    ),
    caption: 'حصاد الجد والاجتهاد .. حظيت بالتكريم من : سعادة الأستاذ صالح الصالح رئيس الخدمات المشتركة لمجموعة البنك الأهلي السعودي لحصولي على المركز الأول للعام الثاني على التوالي',
  },
  {
    id: 'honor-2',
    src: '/assets/aistudio/_________________757b7be5.png',
    topTitle: 'تحقيق أعلى مبلغ استرداد بقيمة 7,500,000 خلال عام واحد',
    topBadge: '/assets/aistudio/star_badge_star.png',
    bottomContent: (
      <div className="space-y-0.5 sm:space-y-1">
        <div>
          <span className="text-slate-800 font-semibold">نجم التحصيل .. حظيت بالتكريم من : </span>
          <span className="text-[#C5942B] font-bold">سعادة الأستاذ وائل عرابي</span>
        </div>
        <div>
          <span className="text-[#C5942B] font-bold">رئيس التحصيل بالبنك الأهلي السعودي</span>
          <span className="text-slate-800 font-semibold"> لتحقيق أعلى أداء تحصيلي وكسر</span>
        </div>
        <div className="text-slate-800 font-semibold">
          حاجز أعلى مبلغ استرداد على مستو إدارة تحصيل الأفراد
        </div>
      </div>
    ),
    caption: 'نجم التحصيل .. حظيت بالتكريم من : سعادة الأستاذ وائل عرابي رئيس التحصيل بالبنك الأهلي السعودي لتحقيق أعلى أداء تحصيلي وكسر حاجز أعلى مبلغ استرداد على مستو إدارة تحصيل الأفراد',
  },
  {
    id: 'honor-3',
    src: '/assets/aistudio/IMG_7282_f95ad64c.jpeg',
    topTitle: 'شهادة شكر وتقدير من البنك المركزي السعودي',
    bottomContent: (
      <div className="space-y-0.5 sm:space-y-1">
        <div>
          <span className="text-slate-800 font-semibold">ثمرة جهود مستمرة وحرص على تقديم أفضل أداء تشغيلي .. كل الفخر بحصولي على : </span>
          <span className="text-[#C5942B] font-bold">شهادة شكر وتقدير من البنك المركزي السعودي</span>
        </div>
        <div className="text-slate-800 font-semibold">
          تقديراً للتميز في تنفيذ وإنجاز الإجراءات المصرفية القضائية
        </div>
      </div>
    ),
    caption: 'ثمرة جهود مستمرة وحرص على تقديم أفضل أداء تشغيلي .. كل الفخر بحصولي على : شهادة شكر وتقدير من البنك المركزي السعودي تقديراً للتميز في تنفيذ وإنجاز الإجراءات المصرفية القضائية',
  },
  {
    id: 'honor-4',
    src: surgeCupAsset.url,
    topTitle: 'التأهل في مسابقة SURGE CUP 2026',
    bottomContent: (
      <div className="space-y-0.5 sm:space-y-1">
        <div>
          <span className="text-[#C5942B] font-bold">البنك الأهلي السعودي SNB</span>
          <span className="text-slate-800 font-semibold">، وتأهل فكرتي ضمن أفضل 10 أفكار من بين 128 فكرة مشاركة، كمرحلة جديدة للابتكار والتنافس لتقديم الأفكار التي تحقق قيمة ملموسة للبنك وتسهم في تشكيل مستقبل SNB</span>
        </div>
        <div className="text-slate-800 font-semibold">
          في إنجاز يعكس القدرة على الابتكار وتقديم حلول تطويرية تسهم في صناعة مستقبل البنك
        </div>
      </div>
    ),
    caption: 'التأهل في مسابقة SURGE CUP 2026 - البنك الأهلي السعودي SNB، وتأهل فكرتي ضمن أفضل 10 أفكار من بين 128 فكرة مشاركة، كمرحلة جديدة للابتكار والتنافس لتقديم الأفكار التي تحقق قيمة ملموسة للبنك وتسهم في تشكيل مستقبل SNB، في إنجاز يعكس القدرة على الابتكار وتقديم حلول تطويرية تسهم في صناعة مستقبل البنك.',
  },
];

export const HonorsShowcaseSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<'next' | 'prev' | null>(null);
  const [animKey, setAnimKey] = useState<number>(0);
  // حالة السحب باللمس / الفأرة
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);
  const [mouseStartX, setMouseStartX] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const totalItems = showcaseItems.length;

  const goToNext = () => {
    setDirection('next');
    setAnimKey((prev) => prev + 1);
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const goToPrev = () => {
    setDirection('prev');
    setAnimKey((prev) => prev + 1);
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const goToIndex = (index: number) => {
    if (index === currentIndex) return;
    setDirection(index > currentIndex ? 'next' : 'prev');
    setAnimKey((prev) => prev + 1);
    setCurrentIndex(index);
  };

  // معالجات السحب باللمس
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
      setDragOffset(diffX * 0.7);
    }
  };

  const handleTouchEnd = () => {
    if (dragOffset > 50) {
      goToPrev();
    } else if (dragOffset < -50) {
      goToNext();
    }
    setTouchStartX(null);
    setTouchStartY(null);
    setDragOffset(0);
    setIsDragging(false);
  };

  // معالجات السحب بالفأرة على الحاسوب
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
    if (dragOffset > 50) {
      goToPrev();
    } else if (dragOffset < -50) {
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

  // التحكم بلوحة المفاتيح
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (totalItems > 1) {
        if (e.key === 'ArrowRight') {
          goToPrev();
        }
        if (e.key === 'ArrowLeft') {
          goToNext();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalItems]);

  const currentItem = showcaseItems[currentIndex];

  // اختيار فئة الحركة السلسة حسب اتجاه التنقل
  const animationClass = direction === 'next'
    ? 'animate-honor-next'
    : direction === 'prev'
    ? 'animate-honor-prev'
    : 'animate-honor-pop';

  return (
    <section id="honors-showcase" className="mb-8 page-break-avoid">
      {/* عنوان القسم الأول مع توحيد حجم ولون الخط مع باقي أقسام السيرة الذاتية */}
      <SectionHeader
        titleAr={
          <span className="inline-flex items-center gap-2">
            <span>• ممـيـــز</span>
            <img
              src="/assets/aistudio/gold_star_trophies.png"
              alt="نجوم التميز"
              className="h-5 sm:h-6 w-auto object-contain select-none inline-block drop-shadow-xs"
            />
          </span>
        }
        className="mb-4 mt-6 sm:mt-8"
      />

      {/* منطقة عرض البطاقة المستقلة الفاخرة - تظهر بطاقة واحدة فقط بعرض الشاشة بالكامل */}
      <div className="relative -mx-4 sm:-mx-8 md:-mx-12 w-[calc(100%+2rem)] sm:w-[calc(100%+4rem)] md:w-[calc(100%+6rem)] py-1 no-print select-none">
        {/* حاوية البطاقة مع ضبط التوسيط والأبعاد */}
        <div className="relative overflow-hidden">
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
            className="w-full bg-white rounded-none sm:rounded-2xl border-y sm:border border-slate-200/90 overflow-hidden cursor-grab active:cursor-grabbing transition-shadow duration-300 shadow-[0_20px_50px_-12px_rgba(12,56,35,0.18),0_10px_25px_-5px_rgba(0,0,0,0.06)] hover:border-[#D9A441]"
            dir="rtl"
          >
            {/* الشريط العلوي للبطاقة: يحتوي على شارة التكريم على اليمين أولاً قبل العنوان كما طلب المستخدم */}
            <div className="w-full bg-white px-3 sm:px-6 py-2 sm:py-3 flex items-center gap-2.5 sm:gap-3.5 border-b border-slate-100 min-h-[50px] sm:min-h-[58px]" dir="rtl">
              {currentItem.topBadge ? (
                <div className="shrink-0 flex items-center justify-center">
                  <img
                    src={currentItem.topBadge}
                    alt="شارة التكريم"
                    className="h-9 sm:h-10 md:h-11 w-auto object-contain select-none drop-shadow-xs"
                  />
                </div>
              ) : (
                <div className="w-9 sm:w-10 md:w-11 shrink-0" />
              )}
              <div className="flex-1 text-right">
                <h3 className="text-[#C5942B] font-bold text-xs sm:text-sm md:text-base lg:text-lg leading-snug">
                  {currentItem.topTitle}
                </h3>
              </div>
            </div>

            {/* إطار الصورة: ثبات كامل للارتفاع بدون أي وميض أو اهتزاز مع أسهم التنقل */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] max-h-[500px] bg-slate-900/5 flex items-center justify-center overflow-hidden">
              {showcaseItems.map((item, idx) => (
                <div
                  key={item.id}
                  className={`absolute inset-0 w-full h-full flex items-center justify-center transition-all duration-400 ease-out ${
                    idx === currentIndex
                      ? 'opacity-100 scale-100 z-10'
                      : 'opacity-0 scale-98 pointer-events-none z-0'
                  }`}
                  style={{ willChange: 'opacity, transform' }}
                >
                  <img
                    src={item.src}
                    alt={item.caption}
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-contain block select-none pointer-events-none drop-shadow-sm"
                  />
                </div>
              ))}

              {/* الأسهم الجانبية باللون الأبيض الشفاف في آخر الصورة (يمين ويسار) مصغرة بنسبة 50% */}
              {totalItems > 1 && (
                <>
                  {/* السهم الأيمن (السابق) في آخر الصورة على اليمين */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      goToPrev();
                    }}
                    className="absolute bottom-2 sm:bottom-2.5 right-2 sm:right-2.5 w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full bg-white/40 hover:bg-white/65 text-white backdrop-blur-sm border border-white/60 shadow-md flex items-center justify-center transition-all duration-150 cursor-pointer active:scale-90 z-20 p-0"
                    title="السابق"
                    aria-label="السابق"
                  >
                    <ChevronRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]" strokeWidth={2.5} />
                  </button>

                  {/* السهم الأيسر (التالي) في آخر الصورة على اليسار */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      goToNext();
                    }}
                    className="absolute bottom-2 sm:bottom-2.5 left-2 sm:left-2.5 w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full bg-white/40 hover:bg-white/65 text-white backdrop-blur-sm border border-white/60 shadow-md flex items-center justify-center transition-all duration-150 cursor-pointer active:scale-90 z-20 p-0"
                    title="التالي"
                    aria-label="التالي"
                  >
                    <ChevronLeft className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]" strokeWidth={2.5} />
                  </button>
                </>
              )}
            </div>

            {/* الشريط السفلي للبطاقة: خط ذهبي عمودي مع نص مصاحب بتنسيق أنيق ومقروء */}
            <div className="py-2.5 px-3 sm:py-3 sm:px-5 bg-white border-t border-slate-100 min-h-[56px] sm:min-h-[64px] flex items-center" dir="rtl">
              <div className="flex items-center gap-2.5 sm:gap-3 text-right w-full">
                <span className="w-1 sm:w-1.5 self-stretch rounded-full bg-[#C5942B] shrink-0 my-0.5" />
                <div className="text-[11px] sm:text-xs md:text-[13px] leading-snug sm:leading-relaxed flex-1 min-w-0 text-slate-700">
                  {currentItem.bottomContent}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* شريط مؤشرات النقاط والتنقل السفلي */}
        {totalItems > 1 && (
          <div className="flex flex-col items-center justify-center gap-2 mt-4 pt-1 px-4">
            {/* مؤشرات النقاط لجميع البطاقات */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {showcaseItems.map((_, dotIdx) => (
                <button
                  key={`dot-${dotIdx}`}
                  type="button"
                  onClick={() => goToIndex(dotIdx)}
                  className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    dotIdx === currentIndex
                      ? 'w-7 sm:w-9 bg-[#D9A441] shadow-xs'
                      : 'w-2 sm:w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  title={`الانتقال إلى البطاقة ${dotIdx + 1}`}
                  aria-label={`الانتقال إلى البطاقة ${dotIdx + 1}`}
                />
              ))}
            </div>

            {/* تلميح الإيماءات باللمس */}
            <p className="text-[10px] sm:text-[11px] text-slate-400 font-medium text-center">
              اسحب يميناً أو يساراً للتنقل بين البطاقات • أو استخدم الأسهم
            </p>
          </div>
        )}
      </div>

      {/* عرض الطباعة المنظم (A4) */}
      <div className="hidden print:block mb-2">
        <h2 className="text-sm font-bold text-[#0C3823] border-b border-[#D9A441] pb-1">
          • مميز
        </h2>
      </div>
      <div className="hidden print:grid print:grid-cols-3 gap-3 py-2">
        {showcaseItems.map((item) => (
          <div
            key={`print-${item.id}`}
            className="rounded-lg overflow-hidden border border-slate-200 text-right bg-white page-break-avoid"
          >
            <div className="p-1.5 bg-white border-b border-slate-100 flex items-center gap-2" dir="rtl">
              {item.topBadge && (
                <img src={item.topBadge} alt="شارة" className="h-4.5 w-auto object-contain shrink-0" />
              )}
              <span className="text-[9pt] font-bold text-[#C5942B] flex-1 text-right">{item.topTitle}</span>
            </div>
            <div className="aspect-[4/3] bg-slate-50 p-2 flex items-center justify-center">
              <img
                src={item.src}
                alt={item.caption}
                className="w-full h-full object-contain rounded-none"
              />
            </div>
            <div className="p-2 border-t border-slate-100">
              <div className="text-[9pt] text-[#0C3823] leading-snug">
                {item.bottomContent}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
