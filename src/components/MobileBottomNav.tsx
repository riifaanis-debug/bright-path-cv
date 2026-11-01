/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { User, Briefcase, Lightbulb, Sparkles, Printer } from 'lucide-react';

interface MobileBottomNavProps {
  onPrint: () => void;
  onOpenFullScreenMagazine?: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ onPrint, onOpenFullScreenMagazine }) => {
  return (
    <div className="no-print md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-lg pb-safe">
      <div className="grid grid-cols-5 items-center h-16 max-w-md mx-auto px-1">
        
        {/* Tab 1: Profile & Metrics */}
        <a
          href="#"
          className="flex flex-col items-center justify-center min-h-[44px] text-slate-600 hover:text-[#0C3823] active:scale-95 transition-all"
        >
          <User className="w-5 h-5 text-[#0C3823]" />
          <span className="text-[10px] font-bold mt-1 text-slate-700">الرئيسية</span>
        </a>

        {/* Tab 2: Experience */}
        <a
          href="#experience"
          className="flex flex-col items-center justify-center min-h-[44px] text-slate-600 hover:text-[#0C3823] active:scale-95 transition-all"
        >
          <Briefcase className="w-5 h-5 text-[#0C3823]" />
          <span className="text-[10px] font-bold mt-1 text-slate-700">الخبرات</span>
        </a>

        {/* Tab 3: Fullscreen Magazine Without Buttons */}
        {onOpenFullScreenMagazine ? (
          <button
            type="button"
            onClick={onOpenFullScreenMagazine}
            className="flex flex-col items-center justify-center min-h-[44px] text-[#0C3823] active:scale-95 transition-all cursor-pointer"
            title="تصفح المجلة بعرض الشاشة كاملة دون أي زر"
          >
            <div className="w-7 h-7 rounded-full bg-[#0C3823] text-[#D9A441] border border-[#D9A441] flex items-center justify-center shadow-xs">
              <Sparkles className="w-4 h-4 text-[#D9A441]" />
            </div>
            <span className="text-[9px] font-extrabold mt-0.5 text-[#0C3823] text-center leading-tight">ملء الشاشة</span>
          </button>
        ) : (
          <a
            href="#project-cpf"
            className="flex flex-col items-center justify-center min-h-[44px] text-slate-600 hover:text-[#0C3823] active:scale-95 transition-all"
          >
            <Lightbulb className="w-5 h-5 text-[#D9A441]" />
            <span className="text-[10px] font-bold mt-1 text-slate-700">مشروع CPF</span>
          </a>
        )}

        {/* Tab 4: CPF Project */}
        <a
          href="#project-cpf"
          className="flex flex-col items-center justify-center min-h-[44px] text-slate-600 hover:text-[#0C3823] active:scale-95 transition-all"
        >
          <Lightbulb className="w-5 h-5 text-[#D9A441]" />
          <span className="text-[10px] font-bold mt-1 text-slate-700">مشروع CPF</span>
        </a>

        {/* Tab 5: Direct PDF Download */}
        <a
          href="/__l5e/assets-v1/08cfe278-3eb6-415b-8906-ceadd79afb73/Professional_CV_Magazine_Final.pdf"
          download="Professional_CV_Magazine_Final.pdf"
          className="flex flex-col items-center justify-center min-h-[44px] text-[#0C3823] active:scale-95 transition-all cursor-pointer no-underline"
          title="تحميل السيرة الذاتية PDF – الإصدار التنفيذي الفاخر"
        >
          <div className="w-7 h-7 rounded-full bg-[#D9A441] flex items-center justify-center text-[#072617] shadow-xs">
            <Printer className="w-4 h-4" />
          </div>
          <span className="text-[9px] font-bold mt-0.5 text-[#0C3823] text-center leading-tight">تحميل PDF</span>
        </a>

      </div>
    </div>
  );
};
