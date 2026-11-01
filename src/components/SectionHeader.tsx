/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface SectionHeaderProps {
  titleAr: React.ReactNode;
  titleEn?: string;
  icon?: React.ReactNode;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  titleAr,
  className = "mb-4 mt-8"
}) => {
  return (
    <div className={`pb-1.5 border-b border-[#0C3823]/25 relative break-after-avoid page-break-after-avoid ${className}`}>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div className="text-lg sm:text-xl font-bold tracking-tight text-[#B8860B]">
          {titleAr}
        </div>
      </div>
      {/* Thin Gold accent bottom underline */}
      <div className="absolute -bottom-[1px] right-0 w-16 sm:w-24 h-[2px] bg-[#D9A441]" />
    </div>
  );
};
