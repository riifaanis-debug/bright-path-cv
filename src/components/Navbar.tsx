/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Share2, Check } from 'lucide-react';

interface NavbarProps {
  onPrint?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'الشهادات والمؤشرات', href: '#certifications' },
    { label: 'الملخص والهدف', href: '#summary' },
    { label: 'الخبرات المصرفية', href: '#experience' },
    { label: 'زمالة المستشار الشرعي', href: '#sharia-fellowship' },
    { label: 'الكفاءات والمهارات', href: '#skills' },
    { label: 'مشروع CPF', href: '#project-cpf' },
    { label: 'الجوائز والتكريمات', href: '#awards' },
    { label: 'الدورات التدريبية', href: '#courses' },
  ];

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <nav 
      className={`no-print sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#072617]/95 backdrop-blur-md shadow-md py-2 sm:py-2.5 border-b border-[#D9A441]/40' 
          : 'bg-[#0C3823] py-2.5 sm:py-3.5 border-b border-[#0D472A]'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 sm:gap-6">
          
          {/* Zone 1: Wordmark / Title */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <a 
              href="#" 
              className="text-sm sm:text-base md:text-lg font-bold text-white tracking-tight flex items-center gap-2 whitespace-nowrap"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#D9A441]" />
              <span>ماجد عامر السفياني</span>
            </a>
            <span className="hidden xl:inline text-xs text-[#D9A441] font-semibold pr-2 border-r border-white/20 whitespace-nowrap">
              السيرة الذاتية المهنية التنفيذية
            </span>
          </div>

          {/* Zone 2: Navigation Links */}
          <div className="hidden lg:flex items-center gap-3.5 xl:gap-5 text-xs font-semibold text-white/90">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#D9A441] transition-colors py-1 whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-[#D9A441]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Zone 3: Actions */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleShare}
              className="inline-flex min-h-[38px] items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white/90 hover:text-white bg-white/10 hover:bg-white/20 rounded-lg border border-white/20 transition-colors cursor-pointer"
              title="مشاركة رابط السيرة الذاتية"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5 text-[#D9A441]" />}
              <span>{copiedLink ? 'تم النسخ' : 'مشاركة الرابط'}</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden min-h-[40px] min-w-[40px] flex items-center justify-center p-1.5 text-white hover:text-[#D9A441] transition-colors"
              aria-label="القائمة الرئيسية"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden pt-3 pb-3 border-t border-white/15 mt-2 space-y-2">
            <div className="grid grid-cols-2 gap-1.5 text-xs font-medium text-white">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-md bg-white/10 hover:bg-[#D9A441]/20 hover:text-[#D9A441] transition-colors text-center"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2 flex items-center justify-between gap-2">
              <button
                onClick={handleShare}
                className="flex-1 py-2 text-xs text-center text-white bg-white/10 rounded-lg flex items-center justify-center gap-1.5"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{copiedLink ? 'تم نسخ الرابط' : 'نسخ رابط السيرة'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
