import React, { useState } from 'react';
import { X, ChevronRight, ChevronLeft, Download, FileText, Sparkles, BookOpen, Maximize } from 'lucide-react';

interface MagazinePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPage?: number;
  onOpenFullScreen?: (page?: number) => void;
}

const TOTAL_PAGES = 12;

export const MagazinePreviewModal: React.FC<MagazinePreviewModalProps> = ({
  isOpen,
  onClose,
  initialPage = 1,
  onOpenFullScreen,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [viewMode, setViewMode] = useState<'single' | 'grid'>('single');

  if (!isOpen) return null;

  const pageTitles = [
    'الغلاف التنفيذي الفاخر',
    'المقدمة التنفيذية والملخص والهدف المهني',
    '• ممـيـــز | التكريمات الاستثنائية والجوائز القيادية',
    'الشهادات المهنية المعتمدة',
    'الخبرات المهنية | أخصائي تحصيل ديون الأفراد',
    'الخبرات المهنية | العمليات المصرفية القضائية (ساما)',
    'زمالة المستشار الشرعي (1) | المقررات 1 إلى 6',
    'زمالة المستشار الشرعي (2) | المقررات 7 إلى 13',
    'الكفاءات والمهارات التخصصية الخمس',
    'الجوائز والتكريمات والإنجازات الرسمية',
    'مشروع CPF الابتكاري (1) | SURGE CUP 2026',
    'مشروع CPF الابتكاري (2) | وثائق ومراحل المسابقة',
    'سجل الشهادات المهنية المعتمدة | الأكاديمية المالية',
    'الشهادات التخصصية والدولية والمؤهل والدورات',
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-2 sm:p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#072617] text-white rounded-2xl shadow-2xl border border-[#D9A441]/40 flex flex-col max-h-[95vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-[#D9A441]/30 bg-[#0C3823]/80">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#D9A441]/20 border border-[#D9A441]/40 flex items-center justify-center text-[#D9A441]">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-bold text-white">
                  معاينة المجلة التنفيذية الفاخرة (12 صفحة)
                </h3>
                <span className="text-[10px] bg-[#D9A441] text-[#072617] font-extrabold px-2 py-0.5 rounded-full">
                  الإصدار النهائي
                </span>
              </div>
              <p className="text-[11px] text-slate-300">
                ماجد عامر السفياني • البنك الأهلي السعودي (SNB)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {onOpenFullScreen && (
              <button
                onClick={() => {
                  onClose();
                  onOpenFullScreen(currentPage);
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg bg-[#D9A441] hover:bg-[#e4b55c] text-[#072617] shadow-sm transition-all cursor-pointer active:scale-95"
                title="تصفح المجلة بعرض الشاشة كاملة دون وجود أي زر"
              >
                <Maximize className="w-3.5 h-3.5 text-[#072617]" />
                <span className="hidden sm:inline">تصفح ملء الشاشة (بدون أزرار)</span>
                <span className="sm:hidden">ملء الشاشة</span>
              </button>
            )}
            <button
              onClick={() => setViewMode(viewMode === 'single' ? 'grid' : 'single')}
              className="px-2.5 py-1.5 text-xs font-semibold rounded-lg bg-white/10 hover:bg-white/20 transition-all border border-white/20 text-slate-200"
            >
              {viewMode === 'single' ? 'عرض شبكة الصفحات' : 'عرض الصفحة المنفردة'}
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 hover:text-white transition-all cursor-pointer"
              title="إغلاق"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-6 bg-[#04140b] flex flex-col items-center justify-center">
          {viewMode === 'single' ? (
            <div className="w-full flex flex-col items-center">
              {/* Top Page Selector Banner */}
              <div className="w-full max-w-xl flex items-center justify-between mb-3 text-xs text-slate-300 px-2">
                <button
                  onClick={() => setCurrentPage((p) => Math.min(TOTAL_PAGES, p + 1))}
                  disabled={currentPage === TOTAL_PAGES}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed text-white cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                  <span>التالي</span>
                </button>

                <div className="text-center">
                  <div className="font-bold text-[#D9A441]">
                    الصفحة {currentPage} من {TOTAL_PAGES}
                  </div>
                  <div className="text-[11px] text-slate-400 truncate max-w-[240px]">
                    {pageTitles[currentPage - 1]}
                  </div>
                </div>

                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed text-white cursor-pointer"
                >
                  <span>السابق</span>
                  <ChevronLeft className="w-4 h-4" />
                </button>
              </div>

              {/* Single Page Preview Canvas */}
              <div className="relative max-w-lg w-full rounded-xl overflow-hidden shadow-2xl border-2 border-[#D9A441]/40 bg-white">
                <img
                  src={`/assets/magazine_previews/page-${currentPage}.jpg`}
                  alt={`الصفحة ${currentPage}`}
                  className="w-full h-auto object-contain block"
                  loading="eager"
                />
              </div>
            </div>
          ) : (
            /* Grid View of all 12 pages */
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
              {Array.from({ length: TOTAL_PAGES }).map((_, idx) => {
                const pageNum = idx + 1;
                return (
                  <div
                    key={pageNum}
                    onClick={() => {
                      setCurrentPage(pageNum);
                      setViewMode('single');
                    }}
                    className={`relative rounded-lg overflow-hidden border cursor-pointer transition-all hover:scale-102 ${
                      currentPage === pageNum
                        ? 'border-[#D9A441] ring-2 ring-[#D9A441]/60'
                        : 'border-white/20 hover:border-[#D9A441]/60'
                    }`}
                  >
                    <img
                      src={`/assets/magazine_previews/page-${pageNum}.jpg`}
                      alt={`الصفحة ${pageNum}`}
                      className="w-full h-auto object-cover block"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-black/80 px-2 py-1 text-[10px] text-white flex justify-between items-center">
                      <span className="font-bold text-[#D9A441]">ص {pageNum}</span>
                      <span className="truncate max-w-[90px] text-slate-300">
                        {pageTitles[idx]}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Modal Footer with Direct Download Actions */}
        <div className="px-4 sm:px-6 py-3.5 border-t border-[#D9A441]/30 bg-[#0C3823]/90 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-300 text-center sm:text-right">
            <span className="text-[#D9A441] font-bold">الملف بصيغة A4 عالي الدقة (12 صفحة كاملة)</span>
            <span className="block text-[11px] text-slate-400">حجم مثالي 13.1 ميجابايت • يدعم الطباعة والتمرير الفوري</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {/* Download Original 12-page version */}
            <a
              href="/__l5e/assets-v1/b096b0e3-f362-420e-9eba-39778934da6b/Professional_CV_Magazine.pdf"
              download="Professional_CV_Magazine.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs text-slate-200 border border-white/20 transition-all cursor-pointer no-underline"
              title="تحميل الإصدار السابق (12 صفحة)"
            >
              <FileText className="w-3.5 h-3.5 text-[#D9A441]" />
              <span>تحميل الإصدار السابق (12 صفحة)</span>
            </a>

            {/* Primary Download: Final 14-page Executive Magazine */}
            <a
              href="/__l5e/assets-v1/08cfe278-3eb6-415b-8906-ceadd79afb73/Professional_CV_Magazine_Final.pdf"
              download="Professional_CV_Magazine_Final.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#D9A441] hover:bg-[#e4b55c] text-[#072617] text-xs sm:text-sm font-extrabold shadow-lg hover:shadow-xl transition-all cursor-pointer no-underline active:scale-95 border border-[#0C3823]/20"
              title="تحميل السيرة الذاتية PDF – الإصدار التنفيذي الفاخر"
            >
              <Download className="w-4 h-4 text-[#072617]" />
              <span>تحميل السيرة الذاتية PDF (الإصدار النهائي الفاخر)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
