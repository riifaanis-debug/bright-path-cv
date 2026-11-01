/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Building,
  Maximize2,
  X,
  Download,
  BookOpen,
  Eye
} from 'lucide-react';
import { resumeData } from '../data/resumeData.ts';

interface HeaderProfileProps {
  onPrint?: () => void;
  onOpenMagazinePreview?: () => void;
  onOpenFullScreenMagazine?: () => void;
}

export const HeaderProfile: React.FC<HeaderProfileProps> = ({ 
  onPrint, 
  onOpenMagazinePreview,
  onOpenFullScreenMagazine,
}) => {
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);

  return (
    <>
      <header className="mb-6 pb-6 border-b border-slate-200/80 text-right">
        <div className="flex flex-row items-stretch justify-between gap-4 sm:gap-6 md:gap-8">
          
          {/* 1. يمين الصفحة: الصورة الشخصية ببطاقة مقوسة ناعمة */}
          <div className="shrink-0 flex items-stretch">
            <button
              type="button"
              onClick={() => setIsPhotoModalOpen(true)}
              className="relative group block cursor-pointer focus:outline-none rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 bg-[#f8fafc] w-36 sm:w-48 md:w-56 h-full min-h-[240px] sm:min-h-[270px] transition-transform hover:scale-[1.01] shadow-xs print:shadow-none"
              title="عرض الصورة بالحجم الكامل"
              aria-label="عرض الصورة الشخصية"
            >
              <img 
                src={resumeData.personalInfo.photoUrl} 
                alt={resumeData.personalInfo.name} 
                className="w-full h-full object-cover object-top"
                loading="eager"
              />

              {/* Hover overlay hint (no-print) */}
              <div className="no-print absolute inset-0 bg-[#0C3823]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Maximize2 className="w-6 h-6 text-white drop-shadow-md" />
              </div>
            </button>
          </div>

          {/* 2. يسار الصفحة: الاسم والمسميات المهنية ومعلومات التواصل */}
          <div className="flex-1 min-w-0 flex flex-col justify-between py-1 text-right">
            
            {/* الجزء العلوي: الاسم والمسميات المهنية */}
            <div>
              {/* Main Full Name & English Name - Matched Sizes */}
              <div>
                <h1 className="text-base sm:text-lg md:text-xl font-extrabold text-[#0C3823] tracking-tight font-sans leading-snug">
                  {resumeData.personalInfo.name}
                </h1>
                <p className="text-base sm:text-lg md:text-xl font-bold text-[#0D472A] mt-0.5 tracking-wide" dir="ltr">
                  {resumeData.personalInfo.nameEn}
                </p>
              </div>

              {/* Professional Titles stacked vertically - Smaller size and same color as section titles (#B8860B) */}
              <div className="mt-3 space-y-1 text-xs sm:text-sm font-bold text-[#B8860B]">
                {resumeData.personalInfo.titles.map((title, idx) => (
                  <p key={idx} className="leading-snug">
                    {title}
                  </p>
                ))}
              </div>
            </div>

            {/* الجزء السفلي: معلومات التواصل الأربعة تحت بعضها تماماً مثل الصورة المرفقة */}
            <div className="mt-4 space-y-2 text-xs sm:text-sm text-slate-700">
              
              {/* 1. رقم الجوال */}
              <div className="flex items-center justify-start gap-2">
                <a 
                  href={`tel:${resumeData.personalInfo.phone.replace(/\s+/g, '')}`}
                  className="font-mono font-medium hover:text-[#0C3823] transition-colors"
                  dir="ltr"
                >
                  {resumeData.personalInfo.phone}
                </a>
                <Phone className="w-4 h-4 text-[#D9A441] shrink-0" />
              </div>

              {/* 2. الموقع */}
              <div className="flex items-center justify-start gap-2">
                <span>{resumeData.personalInfo.location}</span>
                <MapPin className="w-4 h-4 text-[#D9A441] shrink-0" />
              </div>

              {/* 3. البريد الإلكتروني */}
              <div className="flex items-center justify-start gap-2">
                <a 
                  href={`mailto:${resumeData.personalInfo.email}`}
                  className="font-medium hover:text-[#0C3823] transition-colors break-all"
                  dir="ltr"
                >
                  {resumeData.personalInfo.email}
                </a>
                <Mail className="w-4 h-4 text-[#D9A441] shrink-0" />
              </div>

              {/* 4. جهة العمل (البنك الأهلي السعودي) */}
              <div className="flex items-center justify-start gap-2 text-[#0C3823] font-bold">
                <span>{resumeData.personalInfo.bankOrganization}</span>
                <Building className="w-4 h-4 text-[#D9A441] shrink-0" />
              </div>

            </div>

            {/* أزرار تصفح ومعاينة وتحميل السيرة الذاتية بصيغة مجلة فاخرة */}
            <div className="mt-3.5 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-end gap-2 sm:gap-2.5 no-print">
              {onOpenFullScreenMagazine && (
                <button
                  type="button"
                  onClick={onOpenFullScreenMagazine}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-[#0C3823] hover:bg-[#072617] text-[#D9A441] text-xs sm:text-sm font-bold shadow-sm hover:shadow-md transition-all duration-150 cursor-pointer border border-[#D9A441]/60 active:scale-95 ring-1 ring-[#D9A441]/20"
                  title="تصفح المجلة بعرض الشاشة كاملة دون وجود أي زر (شاشة كاملة نقية)"
                >
                  <Maximize2 className="w-4 h-4 text-[#D9A441]" />
                  <span>تصفح المجلة ملء الشاشة (بدون أزرار)</span>
                </button>
              )}
              {onOpenMagazinePreview && (
                <button
                  type="button"
                  onClick={onOpenMagazinePreview}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#0C3823] text-xs sm:text-sm font-bold shadow-xs transition-all duration-150 cursor-pointer border border-slate-300 active:scale-95"
                  title="معاينة صفحات المجلة التنفيذية (12 صفحة)"
                >
                  <BookOpen className="w-4 h-4 text-[#B8860B]" />
                  <span>معاينة المجلة (12 صفحة)</span>
                </button>
              )}
              <a
                href="/downloads/Majid_Al-Sofyani_CV_Magazine.pdf"
                download="Majid_Al-Sofyani_CV_Magazine.pdf"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-[#D9A441] hover:bg-[#e4b55c] text-[#072617] text-xs sm:text-sm font-extrabold shadow-sm hover:shadow-md transition-all duration-150 cursor-pointer border border-[#0C3823]/20 active:scale-95"
                title="تحميل السيرة الذاتية PDF – الإصدار التنفيذي الفاخر"
              >
                <Download className="w-4 h-4 text-[#072617]" />
                <span>تحميل السيرة الذاتية PDF</span>
              </a>
            </div>

          </div>

        </div>
      </header>

      {/* Lightbox Modal for Photo (no-print) */}
      {isPhotoModalOpen && (
        <div 
          className="no-print fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xs p-4 animate-in fade-in duration-200"
          onClick={() => setIsPhotoModalOpen(false)}
        >
          <div 
            className="relative max-w-sm sm:max-w-md w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-[#D9A441]/40"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0C3823] text-white">
              <span className="text-sm font-bold">{resumeData.personalInfo.name}</span>
              <button 
                type="button"
                onClick={() => setIsPhotoModalOpen(false)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors text-white"
                aria-label="إغلاق"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Photo Preview */}
            <div className="p-3 bg-slate-50 flex justify-center">
              <img 
                src={resumeData.personalInfo.photoUrl} 
                alt={resumeData.personalInfo.name} 
                className="max-h-[75vh] w-auto rounded-xl object-contain shadow-sm border border-slate-200"
              />
            </div>

            {/* Modal Footer */}
            <div className="px-4 py-2.5 bg-slate-100 text-center border-t border-slate-200 text-xs text-slate-600 font-medium">
              {resumeData.personalInfo.nameEn} • {resumeData.personalInfo.bankOrganization}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
