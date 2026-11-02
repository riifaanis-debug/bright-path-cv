/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef, useCallback } from 'react';

interface FullScreenMagazineViewerProps {
  isOpen: boolean;
  onClose: () => void;
  initialPage?: number;
}

const TOTAL_PAGES = 9;

export const FullScreenMagazineViewer: React.FC<FullScreenMagazineViewerProps> = ({
  isOpen,
  onClose,
  initialPage = 1,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [showHint, setShowHint] = useState<boolean>(true);
  const [showPageIndicator, setShowPageIndicator] = useState<boolean>(false);
  const [pageDirection, setPageDirection] = useState<'next' | 'prev'>('next');
  
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);
  const lastWheelTimeRef = useRef<number>(0);
  const hintTimeoutRef = useRef<any>(null);
  const pageIndicatorTimeoutRef = useRef<any>(null);

  // Sync initialPage when opened
  useEffect(() => {
    if (isOpen) {
      setCurrentPage(initialPage);
      setShowHint(true);
      
      // Auto-hide hint after 3.5 seconds so there are NO buttons or overlays visible
      if (hintTimeoutRef.current) clearTimeout(hintTimeoutRef.current);
      hintTimeoutRef.current = setTimeout(() => {
        setShowHint(false);
      }, 3500);

      // Try browser full screen API
      try {
        if (!document.fullscreenElement && document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen().catch(() => {
            // Ignore fullscreen rejection (e.g., if inside restricted iframe)
          });
        }
      } catch {
        // Fallback gracefully
      }
    } else {
      setShowHint(false);
      setShowPageIndicator(false);
      try {
        if (document.fullscreenElement && document.exitFullscreen) {
          document.exitFullscreen().catch(() => {});
        }
      } catch {
        // Ignore
      }
    }

    return () => {
      if (hintTimeoutRef.current) clearTimeout(hintTimeoutRef.current);
      if (pageIndicatorTimeoutRef.current) clearTimeout(pageIndicatorTimeoutRef.current);
    };
  }, [isOpen, initialPage]);

  // Flash subtle page indicator on page change for 1.2s then fade out
  const triggerPageIndicator = useCallback(() => {
    setShowPageIndicator(true);
    if (pageIndicatorTimeoutRef.current) clearTimeout(pageIndicatorTimeoutRef.current);
    pageIndicatorTimeoutRef.current = setTimeout(() => {
      setShowPageIndicator(false);
    }, 1200);
  }, []);

  const goToNextPage = useCallback(() => {
    setCurrentPage((prev) => {
      if (prev < TOTAL_PAGES) {
        setPageDirection('next');
        triggerPageIndicator();
        return prev + 1;
      }
      return prev;
    });
  }, [triggerPageIndicator]);

  const goToPrevPage = useCallback(() => {
    setCurrentPage((prev) => {
      if (prev > 1) {
        setPageDirection('prev');
        triggerPageIndicator();
        return prev - 1;
      }
      return prev;
    });
  }, [triggerPageIndicator]);

  // Keyboard navigation & ESC
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown' || e.key === ' ' || e.key === 'PageDown') {
        // In Arabic RTL, forward is Left Arrow or Down/Space
        e.preventDefault();
        goToNextPage();
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp' || e.key === 'PageUp' || e.key === 'Backspace') {
        e.preventDefault();
        goToPrevPage();
      } else if (e.key === 'Home') {
        e.preventDefault();
        setCurrentPage(1);
        triggerPageIndicator();
      } else if (e.key === 'End') {
        e.preventDefault();
        setCurrentPage(TOTAL_PAGES);
        triggerPageIndicator();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, goToNextPage, goToPrevPage, onClose, triggerPageIndicator]);

  // Handle fullscreen exit event from browser ESC
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && isOpen) {
        // User exited via browser ESC or controls
        // Keep component active or allow close if desired
      }
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, [isOpen]);

  // Touch gesture handling (Swipe)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null || touchStartYRef.current === null) return;
    const diffX = e.changedTouches[0].clientX - touchStartXRef.current;
    const diffY = e.changedTouches[0].clientY - touchStartYRef.current;

    // Prioritize horizontal swipes
    if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX < 0) {
        // Swiped left (in RTL: next page)
        goToNextPage();
      } else {
        // Swiped right (in RTL: prev page)
        goToPrevPage();
      }
    }
    touchStartXRef.current = null;
    touchStartYRef.current = null;
  };

  // Mouse Wheel navigation (smooth debounced wheel navigation)
  const handleWheel = (e: React.WheelEvent) => {
    const now = Date.now();
    if (now - lastWheelTimeRef.current < 400) return; // Debounce 400ms

    if (Math.abs(e.deltaY) > 20 || Math.abs(e.deltaX) > 20) {
      lastWheelTimeRef.current = now;
      if (e.deltaY > 0 || e.deltaX > 0) {
        goToNextPage();
      } else {
        goToPrevPage();
      }
    }
  };

  // Screen click navigation:
  // Left half -> Next page (in RTL reading flow)
  // Right half -> Previous page
  const handleScreenClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientWidth } = e.currentTarget;
    const clickX = e.clientX;

    // If clicked on left half: advance to next page
    if (clickX < clientWidth / 2) {
      goToNextPage();
    } else {
      goToPrevPage();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] w-screen h-screen bg-[#020704] text-white select-none flex items-center justify-center overflow-hidden touch-none"
      onClick={handleScreenClick}
      onDoubleClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onWheel={handleWheel}
      style={{ cursor: 'pointer' }}
    >
      {/* Invisible Left & Right Click Action Zones with customized tooltips on hover */}
      <div 
        className="absolute inset-y-0 left-0 w-1/2 z-20"
        title="انقر للانتقال إلى الصفحة التالية"
      />
      <div 
        className="absolute inset-y-0 right-0 w-1/2 z-20"
        title="انقر للرجوع إلى الصفحة السابقة"
      />

      {/* Main Magazine Page Container - Scaled to fill viewport seamlessly */}
      <div className="relative w-full h-full flex items-center justify-center p-0 sm:p-2">
        <img
          key={currentPage}
          src={`/assets/magazine_previews/page-${currentPage}.jpg`}
          alt={`صفحة ${currentPage} من ${TOTAL_PAGES}`}
          className="max-h-screen max-w-full w-auto h-full object-contain mx-auto shadow-2xl transition-opacity duration-200 block"
          loading="eager"
          draggable={false}
        />

        {/* Preload adjacent images for instantaneous zero-lag flipping */}
        {currentPage < TOTAL_PAGES && (
          <link rel="prefetch" href={`/assets/magazine_previews/page-${currentPage + 1}.jpg`} />
        )}
        {currentPage > 1 && (
          <link rel="prefetch" href={`/assets/magazine_previews/page-${currentPage - 1}.jpg`} />
        )}
      </div>

      {/* Auto-Hiding Brief Guidance Hint (Fades out completely after 3.5s - leaving 0 buttons) */}
      <div
        className={`pointer-events-none absolute top-4 inset-x-0 mx-auto max-w-md px-4 py-2 rounded-full bg-[#072617]/90 border border-[#D9A441]/50 backdrop-blur-md shadow-2xl text-center text-xs text-[#F4E7CE] z-30 transition-all duration-700 ${
          showHint ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}
        dir="rtl"
      >
        <span className="font-bold text-[#D9A441]">تصفح بملء الشاشة بدون أزرار</span>
        <span className="mx-2 text-slate-400">•</span>
        <span>انقر للتنقل (يمين / يسار)</span>
        <span className="mx-2 text-slate-400">•</span>
        <span>ESC أو نقر مزدوج للخروج</span>
      </div>

      {/* Subtle Auto-Fading Page Indicator (Flashes briefly for 1.2s on page change, then completely invisible) */}
      <div
        className={`pointer-events-none absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-black/75 border border-[#D9A441]/40 text-[11px] font-bold text-[#D9A441] backdrop-blur-xs z-30 transition-all duration-500 ${
          showPageIndicator ? 'opacity-90 scale-100' : 'opacity-0 scale-95'
        }`}
        dir="rtl"
      >
        صفحة {currentPage} من {TOTAL_PAGES}
      </div>

      {/* Reached End Indicator (very subtle) */}
      {currentPage === TOTAL_PAGES && (
        <div className="pointer-events-none absolute bottom-4 right-4 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[10px] text-emerald-300 z-30 animate-pulse">
          نهاية المجلة • اضغط ESC للخروج
        </div>
      )}
    </div>
  );
};
