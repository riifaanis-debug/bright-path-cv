import { createFileRoute, Link } from '@tanstack/react-router';
import { useState } from 'react';
import { Copy, Check, ArrowRight } from 'lucide-react';
import data from '@/data/magazineText.json';

export const Route = createFileRoute('/magazine-text')({
  head: () => ({
    meta: [
      { title: 'نصوص المجلة | ماجد عامر السفياني' },
      { name: 'description', content: 'جميع نصوص مجلة السيرة الذاتية مع زر نسخ لكل جزء.' },
      { property: 'og:title', content: 'نصوص المجلة | ماجد عامر السفياني' },
      { property: 'og:description', content: 'جميع نصوص مجلة السيرة الذاتية مع زر نسخ لكل جزء.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary' },
    ],
  }),
  component: MagazineText,
});

function CopyBtn({ text, label }: { text: string; label?: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      aria-label="نسخ"
      onClick={async () => {
        await navigator.clipboard.writeText(text);
        setDone(true);
        setTimeout(() => setDone(false), 1500);
      }}
      className="shrink-0 inline-flex items-center gap-1 rounded-md border border-[#c9a54a]/60 px-2 py-1 text-xs text-[#c9a54a] hover:bg-[#c9a54a]/10"
    >
      {done ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
      {done ? 'تم النسخ' : label}
    </button>
  );
}

function MagazineText() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#0b2719] text-white px-4 py-6">
      <div className="mx-auto max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-1 text-sm text-[#c9a54a] mb-4">
          <ArrowRight className="w-4 h-4" /> العودة للسيرة الذاتية
        </Link>
        <h1 className="text-2xl font-bold text-[#c9a54a] mb-6">نصوص المجلة</h1>
        {data.map((sec, i) => (
          <section key={i} className="mb-6 rounded-2xl border border-[#c9a54a]/40 p-4">
            <div className="flex items-center justify-between gap-2 mb-3">
              <h2 className="text-lg font-bold text-[#c9a54a]">{sec.title}</h2>
              <CopyBtn label="نسخ القسم" text={[sec.title, ...sec.items.map((x) => x.t)].join('\n\n')} />
            </div>
            <ul className="space-y-2">
              {sec.items.map((it, j) => (
                <li key={j} className="flex items-start gap-2 border-t border-white/10 pt-2">
                  <p className={`flex-1 leading-7 ${it.h ? 'font-bold text-[#e3c97a]' : 'text-white/90'}`}>{it.t}</p>
                  <CopyBtn text={it.t} />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
