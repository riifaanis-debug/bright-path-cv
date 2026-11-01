import { createFileRoute } from "@tanstack/react-router";
import React, { useState, useEffect } from 'react';
import { MobileBottomNav } from '@/components/MobileBottomNav';
import { HeaderProfile } from '@/components/HeaderProfile';
import { ExecutiveSummaryStatement } from '@/components/ExecutiveSummaryStatement';
import { HonorsShowcaseSection } from '@/components/HonorsShowcaseSection';
import { CertificationsSection } from '@/components/CertificationsSection';
import { SummaryObjectiveSection } from '@/components/SummaryObjectiveSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ShariaFellowshipSection } from '@/components/ShariaFellowshipSection';
import { ProjectCpfSection } from '@/components/ProjectCpfSection';
import { AwardsSection } from '@/components/AwardsSection';
import { CoursesSection } from '@/components/CoursesSection';
import { SpecializedCertificationsSection } from '@/components/SpecializedCertificationsSection';
import { Footer } from '@/components/Footer';
import { PrintInstructionsModal } from '@/components/PrintInstructionsModal';
import { MagazinePreviewModal } from '@/components/MagazinePreviewModal';
import { FullScreenMagazineViewer } from '@/components/FullScreenMagazineViewer';
import { Printer, ArrowUp, BookOpen, Maximize } from 'lucide-react';

function App() {
  const [printModalOpen, setPrintModalOpen] = useState(false);
  const [magazinePreviewOpen, setMagazinePreviewOpen] = useState(false);
  const [fullScreenViewerOpen, setFullScreenViewerOpen] = useState(false);
  const [fullScreenInitialPage, setFullScreenInitialPage] = useState(1);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenPrint = () => {
    setPrintModalOpen(true);
  };

  const handleOpenMagazinePreview = () => {
    setMagazinePreviewOpen(true);
  };

  const handleOpenFullScreen = (page: number = 1) => {
    setFullScreenInitialPage(page);
    setFullScreenViewerOpen(true);
  };

  const handleExecutePrint = () => {
    window.print();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-800 relative selection:bg-[#D9A441]/30 selection:text-[#0C3823]">
      {/* إطار خط رأس الصفحة العلوي */}
      <div className="w-full h-1.5 sm:h-2 bg-gradient-to-r from-[#0C3823] via-[#D9A441] to-[#0C3823] shadow-xs" />

      {/* Main Resume Canvas Container (A4 Printable Layout & Mobile Optimized) */}
      <main className="max-w-4xl mx-auto my-0 sm:my-6 md:my-8 bg-white border border-slate-200/80 border-t-4 border-t-[#0C3823] sm:shadow-md rounded-none sm:rounded-md px-4 sm:px-8 md:px-12 py-6 sm:py-10 relative z-0 print:m-0 print:p-0 print:border-none print:shadow-none print:max-w-none">
        
        {/* Header Profile */}
        <HeaderProfile 
          onPrint={handleOpenPrint} 
          onOpenMagazinePreview={handleOpenMagazinePreview} 
          onOpenFullScreenMagazine={() => handleOpenFullScreen(1)}
        />

        {/* Executive Profile Statement & Official Accreditations (قبل قسم مميز) */}
        <ExecutiveSummaryStatement />

        {/* Honors & Recognition Showcase (Continuous Horizontal Infinite Slider without text) */}
        <HonorsShowcaseSection />

        {/* Certifications (Fellowship + Specialists) */}
        <CertificationsSection />

        {/* Professional Summary & Strategic Objective */}
        <SummaryObjectiveSection />

        {/* Professional Banking Experience */}
        <ExperienceSection />

        {/* Sharia Fellowship Program: Training Program in Islamic Finance & Dispute Resolution */}
        <ShariaFellowshipSection />

        {/* Innovative Project: CPF */}
        <ProjectCpfSection />

        {/* Honors, Awards & Recognitions */}
        <AwardsSection />

        {/* Certified Training Courses (14 courses verbatim) */}
        <CoursesSection />

        {/* Specialized Certifications & Education (from Page 7) */}
        <SpecializedCertificationsSection />

      </main>

      {/* Executive Footer */}
      <Footer 
        onPrint={handleOpenPrint} 
        onOpenMagazinePreview={handleOpenMagazinePreview} 
        onOpenFullScreenMagazine={() => handleOpenFullScreen(1)}
      />

      {/* Mobile Ergonomic Bottom Tab Navigation */}
      <MobileBottomNav 
        onPrint={handleOpenPrint} 
        onOpenFullScreenMagazine={() => handleOpenFullScreen(1)}
      />

      {/* Desktop Floating Action Buttons */}
      <div className="no-print hidden md:flex fixed bottom-5 left-5 z-40 flex-col gap-2.5">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-[#0C3823] text-white shadow-lg flex items-center justify-center hover:bg-[#072617] transition-all cursor-pointer border border-[#D9A441]/30"
            aria-label="العودة لأعلى الصفحة"
            title="العودة للأعلى"
          >
            <ArrowUp className="w-5 h-5 text-[#D9A441]" />
          </button>
        )}
        <button
          onClick={() => handleOpenFullScreen(1)}
          className="h-11 px-4 rounded-full bg-[#0C3823] hover:bg-[#072617] text-[#D9A441] font-bold text-xs shadow-xl flex items-center gap-2 transition-all cursor-pointer border border-[#D9A441] active:scale-95 ring-2 ring-[#D9A441]/30"
          title="تصفح المجلة بعرض الشاشة كاملة دون وجود أي زر"
        >
          <Maximize className="w-4 h-4 text-[#D9A441]" />
          <span>تصفح ملء الشاشة (بدون أزرار)</span>
        </button>
        <button
          onClick={handleOpenMagazinePreview}
          className="h-10 px-3.5 rounded-full bg-[#0C3823] hover:bg-[#072617] text-[#D9A441] font-bold text-xs shadow-lg flex items-center gap-2 transition-all cursor-pointer border border-[#D9A441]/40 active:scale-95"
          title="معاينة صفحات المجلة (12 صفحة)"
        >
          <BookOpen className="w-4 h-4 text-[#D9A441]" />
          <span>معاينة المجلة (12 صفحة)</span>
        </button>
        <a
          href="/__l5e/assets-v1/6bef889f-fb6c-48e8-8ab9-ffc780825d51/Professional_CV_Magazine_2026.pdf"
          download="Professional_CV_Magazine_2026.pdf"
          className="h-11 px-4 rounded-full bg-[#D9A441] hover:bg-[#e4b55c] text-[#072617] font-bold text-xs shadow-xl flex items-center gap-2 transition-all cursor-pointer border border-[#0C3823]/20 active:scale-95 no-underline"
          title="تحميل السيرة الذاتية PDF – الإصدار التنفيذي الفاخر"
        >
          <Printer className="w-4 h-4 text-[#072617]" />
          <span>تحميل السيرة الذاتية PDF</span>
        </a>
      </div>

      {/* Print Instructions Modal */}
      <PrintInstructionsModal
        isOpen={printModalOpen}
        onClose={() => setPrintModalOpen(false)}
        onConfirmPrint={handleExecutePrint}
      />

      {/* Magazine 14-Page Interactive Preview Modal */}
      <MagazinePreviewModal
        isOpen={magazinePreviewOpen}
        onClose={() => setMagazinePreviewOpen(false)}
        onOpenFullScreen={(page) => handleOpenFullScreen(page || 1)}
      />

      {/* Full-Screen Pure Magazine Viewer (Zero Buttons, Edge-to-Edge) */}
      <FullScreenMagazineViewer
        isOpen={fullScreenViewerOpen}
        onClose={() => setFullScreenViewerOpen(false)}
        initialPage={fullScreenInitialPage}
      />
    </div>
  );
}

const TITLE = "ماجد عامر السفياني | السيرة الذاتية المهنية التنفيذية";
const DESC = "السيرة الذاتية المهنية التنفيذية لماجد عامر السفياني - مستشار شرعي معتمد، أخصائي ائتمان ومعالجة الديون، وخبير مصرفي بالبنك الأهلي السعودي.";
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: TITLE }, { name: "description", content: DESC },
    { property: "og:title", content: TITLE }, { property: "og:description", content: DESC },
    { property: "og:type", content: "profile" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: App,
});
