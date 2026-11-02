import { useEffect, useState } from 'react';
import { FileText, BookOpen, Sun, X } from 'lucide-react';

const SINGLE = '/downloads/Majid_Al-Sofyani_CV_Magazine.pdf';
const BOOK = '/downloads/Majid_Al-Sofyani_CV_Magazine_Book.pdf';
const LIGHT = '/downloads/Majid_Al-Sofyani_CV_Magazine_Light.pdf';

function save(href: string) {
  const a = document.createElement('a');
  a.href = href;
  a.download = href.split('/').pop()!;
  a.dataset['direct'] = '1';
  document.body.appendChild(a);
  a.click();
  a.remove();
}

/** Intercepts every link to the magazine PDF and lets the visitor pick a layout. */
export function DownloadChooser() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement)?.closest?.('a');
      if (a && a.getAttribute('href') === SINGLE && !a.dataset['direct']) {
        e.preventDefault();
        e.stopPropagation();
        setOpen(true);
      }
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  if (!open) return null;
  const pick = (href: string) => { save(href); setOpen(false); };

  return (
    <div dir="rtl" className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 p-4" onClick={() => setOpen(false)}>
      <div className="w-full max-w-sm rounded-2xl bg-[#0b2719] border border-[#c9a54a] p-5 text-white shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-lg text-[#c9a54a]">اختر شكل التحميل</h3>
          <button aria-label="إغلاق" onClick={() => setOpen(false)}><X className="w-5 h-5" /></button>
        </div>
        <button onClick={() => pick(SINGLE)} className="w-full flex items-center gap-3 rounded-xl border border-[#c9a54a]/50 p-4 mb-3 hover:bg-white/5 text-right">
          <FileText className="w-6 h-6 text-[#c9a54a] shrink-0" />
          <span><span className="block font-bold">صفحات منفردة</span><span className="text-sm text-white/70">صفحة واحدة في كل ورقة</span></span>
        </button>
        <button onClick={() => pick(BOOK)} className="w-full flex items-center gap-3 rounded-xl border border-[#c9a54a]/50 p-4 hover:bg-white/5 text-right">
          <BookOpen className="w-6 h-6 text-[#c9a54a] shrink-0" />
          <span><span className="block font-bold">كتاب مفتوح</span><span className="text-sm text-white/70">صفحتان متقابلتان مثل الكتاب</span></span>
        </button>
        <button onClick={() => pick(LIGHT)} className="w-full flex items-center gap-3 rounded-xl border border-[#c9a54a]/50 p-4 mt-3 hover:bg-white/5 text-right">
          <Sun className="w-6 h-6 text-[#c9a54a] shrink-0" />
          <span><span className="block font-bold">الوضع الفاتح</span><span className="text-sm text-white/70">خلفية بيضاء (أوف وايت)</span></span>
        </button>
      </div>
    </div>
  );
}
