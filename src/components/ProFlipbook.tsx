import { useEffect, useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';

const COUNT = 20;
// Arabic reads right-to-left: feed pages reversed and open on the last one (the cover).
const pages = Array.from({ length: COUNT }, (_, i) => `/assets/magazine_pro/page-${String(i + 1).padStart(2, '0')}.jpg`).reverse();

export default function ProFlipbook() {
  const ref = useRef<any>(null);
  const [size, setSize] = useState({ w: 400, h: 566, portrait: true });
  useEffect(() => {
    const fit = () => {
      const portrait = window.innerWidth < 900;
      const availW = portrait ? window.innerWidth - 24 : (window.innerWidth - 80) / 2;
      const availH = window.innerHeight - 140;
      const w = Math.min(availW, availH / 1.4148);
      setSize({ w: Math.floor(w), h: Math.floor(w * 1.4148), portrait });
    };
    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, []);
  const Book = HTMLFlipBook as any;
  return (
    <div className="flex flex-col items-center gap-4">
      <Book key={`${size.w}-${size.portrait}`} ref={ref} width={size.w} height={size.h} size="fixed" usePortrait={size.portrait}
        startPage={COUNT - 1} showCover drawShadow maxShadowOpacity={0.4} flippingTime={900} mobileScrollSupport className="shadow-2xl">
        {pages.map((src, i) => (
          <div key={src} className="bg-white"><img src={src} alt={`صفحة ${COUNT - i}`} className="w-full h-full object-contain" draggable={false} /></div>
        ))}
      </Book>
      <div dir="rtl" className="flex gap-3">
        <button onClick={() => ref.current?.pageFlip().flipNext()} className="rounded-full border border-[#c9a54a] px-5 py-2 text-[#0b2719] font-bold">‹ السابق</button>
        <button onClick={() => ref.current?.pageFlip().flipPrev()} className="rounded-full bg-[#0b2719] px-5 py-2 text-white font-bold">التالي ›</button>
      </div>
    </div>
  );
}
