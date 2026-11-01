/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Printer, Check, X } from 'lucide-react';

interface PrintInstructionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmPrint: () => void;
}

export const PrintInstructionsModal: React.FC<PrintInstructionsModalProps> = ({
  isOpen,
  onClose,
  onConfirmPrint,
}) => {
  if (!isOpen) return null;

  return (
    <div className="no-print fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-lg w-full p-5 sm:p-7 shadow-2xl border border-slate-200 relative overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Gold Bar */}
        <div className="absolute top-0 right-0 left-0 h-1.5 bg-gradient-to-r from-[#072617] via-[#D9A441] to-[#0C3823]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
          aria-label="إغلاق"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-3 sm:mb-4 pr-1">
          <div className="w-10 h-10 rounded-xl bg-[#0C3823] text-[#D9A441] flex items-center justify-center shrink-0 shadow-xs">
            <Printer className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-[#0C3823]">
              طباعة وحفظ السيرة الذاتية (A4 PDF)
            </h3>
            <p className="text-[11px] sm:text-xs text-slate-500">
              توجيهات لضبط أفضل مظهر طباعي بدون أي اقتطاع
            </p>
          </div>
        </div>

        {/* Recommendation tips */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-3.5 sm:p-4 my-3 sm:my-4 space-y-2.5 text-xs text-slate-700">
          <div className="flex items-start gap-2.5">
            <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>
              <strong>الوجهة (Destination):</strong> اختر <span className="text-[#0C3823] font-bold">"حفظ كملف PDF" (Save as PDF)</span> أو الطابعة المتصلة.
            </span>
          </div>

          <div className="flex items-start gap-2.5">
            <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>
              <strong>حجم الورق (Paper Size):</strong> تأكد من اختيار <span className="text-[#0C3823] font-bold">A4</span> للحفاظ على تناسق الأبعاد.
            </span>
          </div>

          <div className="flex items-start gap-2.5">
            <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>
              <strong>رسومات الخلفية (Background Graphics):</strong> تأكد من <span className="text-[#D9A441] font-bold">تفعيل خيار "رسومات الخلفية"</span> لتظهر الألوان الخضراء الداكنة والشرائط الفاخرة بوضوح.
            </span>
          </div>

          <div className="flex items-start gap-2.5">
            <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>
              <strong>الهوامش (Margins):</strong> يُفضل اختيار <span className="text-[#0C3823] font-bold">"تلقائي" (Default) أو "بدون" (None)</span>.
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-end gap-2.5 sm:gap-3 pt-2">
          <button
            onClick={onClose}
            className="min-h-[44px] px-3.5 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
          >
            إلغاء
          </button>
          <a
            href="/__l5e/assets-v1/08cfe278-3eb6-415b-8906-ceadd79afb73/Professional_CV_Magazine_Final.pdf"
            download="Professional_CV_Magazine_Final.pdf"
            onClick={onClose}
            className="min-h-[44px] px-4 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#0C3823] hover:bg-[#072617] rounded-lg shadow-sm transition-all cursor-pointer flex items-center gap-2 active:scale-95 no-underline border border-[#D9A441]/40"
            title="تحميل السيرة الذاتية PDF – الإصدار التنفيذي الفاخر"
          >
            <Printer className="w-4 h-4 text-[#D9A441]" />
            <span>تحميل السيرة الذاتية PDF</span>
          </a>
          <button
            onClick={() => {
              onClose();
              onConfirmPrint();
            }}
            className="min-h-[44px] px-3.5 sm:px-4 py-2.5 text-xs sm:text-sm font-bold text-[#072617] bg-[#D9A441] hover:bg-[#e4b55c] rounded-lg shadow-sm transition-all cursor-pointer flex items-center gap-2 active:scale-95"
            title="فتح نافذة الطباعة المباشرة"
          >
            <span>طباعة المتصفح</span>
          </button>
        </div>

      </div>
    </div>
  );
};
