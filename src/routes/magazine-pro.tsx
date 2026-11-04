import { createFileRoute, Link } from '@tanstack/react-router';
import { ClientOnly } from '@tanstack/react-router';
import { lazy, Suspense } from 'react';
import { Download } from 'lucide-react';

const ProFlipbook = lazy(() => import('@/components/ProFlipbook'));
import magProBook from '@/assets/docs/magazine_Pro_Book.pdf.asset.json';
const PDF = magProBook.url;

export const Route = createFileRoute('/magazine-pro')({
  head: () => ({
    meta: [
      { title: 'مجلة احترافية — ماجد عامر السفياني' },
      { name: 'description', content: 'تصفح السيرة الذاتية لماجد عامر السفياني بتصميم مجلة تنفيذية فاخرة مع تقليب الصفحات.' },
      { property: 'og:title', content: 'مجلة احترافية — ماجد عامر السفياني' },
      { property: 'og:description', content: 'السيرة الذاتية بتصميم مجلة تنفيذية فاخرة.' },
      { property: 'og:type', content: 'article' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div dir="rtl" className="min-h-screen bg-[#f3efe4] py-4 px-3 flex flex-col items-center gap-4">
      <div className="w-full max-w-5xl flex items-center justify-between">
        <Link to="/" className="text-[#0b2719] font-bold">→ العودة</Link>
        <a href={PDF} download data-direct="1" className="flex items-center gap-2 rounded-full bg-[#0b2719] text-white px-4 py-2 font-bold">
          <Download className="w-4 h-4" /> تحميل PDF
        </a>
      </div>
      <ClientOnly fallback={<div className="text-[#0b2719] py-20">جارٍ تحميل المجلة…</div>}>
        <Suspense fallback={<div className="text-[#0b2719] py-20">جارٍ تحميل المجلة…</div>}>
          <ProFlipbook />
        </Suspense>
      </ClientOnly>
    </div>
  );
}
