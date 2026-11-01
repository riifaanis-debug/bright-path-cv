/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Phone, Mail, MapPin, Printer, ShieldCheck, MessageCircle, Download, Maximize2, BookOpen } from 'lucide-react';
import { resumeData } from '../data/resumeData.ts';

interface FooterProps {
  onPrint: () => void;
  onOpenMagazinePreview?: () => void;
  onOpenFullScreenMagazine?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onPrint, 
  onOpenMagazinePreview,
  onOpenFullScreenMagazine,
}) => {
  const cleanPhone = resumeData.personalInfo.phone.replace(/[^0-9]/g, '');

  const downloadVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
N:السفياني;ماجد;عامر;;
FN:ماجد عامر السفياني
TITLE:مستشار شرعي معتمد | أخصائي ائتمان ومعالجة الديون | خبير مصرفي
ORG:البنك الأهلي السعودي (SNB)
TEL;TYPE=CELL,VOICE:${resumeData.personalInfo.phone}
EMAIL;TYPE=PREF,INTERNET:${resumeData.personalInfo.email}
ADR;TYPE=WORK:;;جدة;منطقة مكة المكرمة;;المملكة العربية السعودية
NOTE:زمالة المستشار الشرعي في فقه المالية الإسلامية وتسوية المنازعات - خبرة مصرفية تتجاوز 10 سنوات
URL:${window.location.href}
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Majid_Al-Sofyani_Executive_CV.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <footer className="mt-10 sm:mt-16 bg-[#072617] text-white border-t-2 border-[#D9A441] pt-8 sm:pt-10 pb-10 sm:pb-12 relative overflow-hidden page-break-avoid">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Action Buttons Row at the Bottom (WhatsApp + Save Contact + Print A4) */}
        <div className="no-print mb-8 p-4 sm:p-6 bg-white/5 border border-white/10 rounded-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D9A441]" />
                <span>إجراءات التواصل والطباعة الفورية</span>
              </h4>
              <p className="text-xs text-slate-300 mt-1">
                يمكنك التواصل المباشر عبر واتساب، حفظ بطاقة الاتصال بهاتفك، أو طباعة السيرة الذاتية بصيغة A4.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${cleanPhone}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 active:scale-95 rounded-lg shadow-sm transition-all cursor-pointer"
                title="محادثة واتساب مباشرة"
              >
                <MessageCircle className="w-4 h-4 text-emerald-950" />
                <span>محادثة واتساب</span>
              </a>

              {/* Save Contact Button */}
              <button
                onClick={downloadVCard}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-white/15 hover:bg-white/25 active:scale-95 border border-white/20 rounded-lg shadow-sm transition-all cursor-pointer"
                title="تنزيل بطاقة الاتصال الرقمية (vCard)"
              >
                <Download className="w-4 h-4 text-[#D9A441]" />
                <span>حفظ جهة الاتصال</span>
              </button>

              {onOpenFullScreenMagazine && (
                <button
                  onClick={onOpenFullScreenMagazine}
                  className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 text-xs sm:text-sm font-bold text-[#D9A441] bg-[#0C3823] hover:bg-[#062013] active:scale-95 border border-[#D9A441]/60 rounded-lg shadow-sm transition-all cursor-pointer"
                  title="تصفح المجلة بعرض الشاشة كاملة دون وجود أي زر"
                >
                  <Maximize2 className="w-4 h-4 text-[#D9A441]" />
                  <span>تصفح المجلة ملء الشاشة (بدون أزرار)</span>
                </button>
              )}

              {onOpenMagazinePreview && (
                <button
                  onClick={onOpenMagazinePreview}
                  className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/20 active:scale-95 border border-white/20 rounded-lg shadow-sm transition-all cursor-pointer"
                  title="معاينة صفحات المجلة التنفيذية (12 صفحة)"
                >
                  <BookOpen className="w-4 h-4 text-[#D9A441]" />
                  <span>معاينة المجلة (12 صفحة)</span>
                </button>
              )}

              {/* Direct PDF Download Button */}
              <a
                href="/downloads/Majid_Al-Sofyani_CV_Magazine.pdf"
                download="Majid_Al-Sofyani_CV_Magazine.pdf"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold text-[#072617] bg-[#D9A441] hover:bg-[#e4b55c] active:scale-95 rounded-lg shadow-sm transition-all cursor-pointer no-underline"
                title="تحميل السيرة الذاتية PDF – الإصدار التنفيذي الفاخر"
              >
                <Download className="w-4 h-4 text-[#072617]" />
                <span>تحميل السيرة الذاتية PDF</span>
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pb-6 sm:pb-8 border-b border-white/15">
          {/* Identity */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 sm:mb-2 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D9A441]" />
              <span>{resumeData.personalInfo.name}</span>
            </h3>
            <p className="text-xs text-[#D9A441] font-semibold mb-2 sm:mb-3">
              مستشار شرعي معتمد · أخصائي ائتمان · خبير مصرفي
            </p>
            <p className="text-xs text-slate-300 leading-relaxed">
              سيرة ذاتية مهنية تنفيذية موثقة ومعتمدة تعكس مسيرة مصرفية حافلة في العمليات المصرفية، تنفيذ قرارات ساما، وإدارة محافظ الديون المتعثرة بالبنك الأهلي السعودي.
            </p>
          </div>

          {/* Quick Contact Info */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-white mb-2.5 sm:mb-3 flex items-center gap-2">
              <span className="text-[#D9A441]">▪</span>
              <span>بيانات التواصل المباشر</span>
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D9A441]" />
                <span dir="ltr" className="font-mono">{resumeData.personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D9A441]" />
                <span dir="ltr">{resumeData.personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D9A441]" />
                <span>{resumeData.personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* PDF & Verification */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white mb-2 sm:mb-3 flex items-center gap-2">
                <span className="text-[#D9A441]">▪</span>
                <span>النسخة الرسمية المعتمدة</span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-3 sm:mb-4">
                تتوافق هذه النسخة بدقة مع معايير ومقاييس المستندات التنفيذية A4، ويمكن حفظها أو تصديرها كملف PDF عالي الجودة.
              </p>
            </div>

            <div className="no-print">
              <button
                onClick={onPrint}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold text-[#072617] bg-[#D9A441] hover:bg-[#e4b55c] rounded-lg transition-colors cursor-pointer shadow-sm active:scale-95"
              >
                <Printer className="w-4 h-4 text-[#072617]" />
                <span>طباعة السيرة الذاتية (A4 PDF)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-5 sm:pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 text-center sm:text-right">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#D9A441] shrink-0" />
            <span>جميع البيانات والمؤشرات الواردة موثقة رسمياً ومعتمدة لدى البنك الأهلي السعودي</span>
          </div>
          <div>
            <span>© {new Date().getFullYear()} ماجد عامر السفياني. كافة الحقوق محفوظة.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
