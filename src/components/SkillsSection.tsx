/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader.tsx';
import { resumeData, SkillCategory } from '../data/resumeData.ts';

interface SkillCardProps {
  category: SkillCategory;
  isPrintHidden?: boolean;
}

const SkillCard: React.FC<SkillCardProps> = ({ category, isPrintHidden }) => {
  return (
    <div
      dir="rtl"
      className={`w-[230px] sm:w-[255px] shrink-0 bg-white border border-slate-200 hover:border-[#D9A441] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden select-none hover:z-10 relative ${
        isPrintHidden ? 'print:hidden' : 'print:w-full print:shadow-none print:border-slate-300 print:break-inside-avoid print:rounded-xl'
      }`}
    >
      {/* Sleek Compact Header - Title only with emerald luxury background */}
      <div className="bg-gradient-to-r from-[#0C3823] via-[#12422c] to-[#0C3823] text-white py-2 px-3 text-center border-b-2 border-[#D9A441]/80">
        <h3 className="text-xs sm:text-[13px] font-black text-white tracking-wide">
          {category.categoryName}
        </h3>
      </div>

      {/* Fixed Bullet Points List (النقاط ثابتة داخل البطاقة) */}
      <div className="p-3 sm:p-3.5 flex-1 bg-gradient-to-b from-white to-[#FDFBF7]/60">
        <ul className="space-y-1.5 sm:space-y-2">
          {category.skills.map((skill, sIdx) => (
            <li
              key={sIdx}
              className="flex items-start gap-1.5 text-[11px] sm:text-xs text-slate-800 leading-snug group/item hover:text-[#0C3823] transition-colors"
            >
              {/* Distinctive gold dash "-" */}
              <span className="text-[#B8860B] font-black text-sm select-none shrink-0 leading-none mt-0.5">
                -
              </span>
              <span className="font-semibold text-slate-800 group-hover/item:text-[#0C3823] transition-colors">
                {skill}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const SkillsSection: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  // 3 duplicate sets of cards for completely seamless, smooth 60fps infinite carousel
  const cardSets = [0, 1, 2];

  return (
    <section id="skills" className="mb-6 page-break-avoid">
      <SectionHeader
        titleAr="المهارات والكفاءات المهنية"
      />

      {/* Animated Continuous Slider Track - Zero Gap, completely seamless */}
      <div
        dir="ltr"
        className="relative overflow-hidden py-2 no-print cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Continuous Moving Track - Last card physically touches first card with 0 distance */}
        <div
          className={`flex flex-row gap-0 w-max py-1 ${
            isPaused ? 'paused-slider' : 'animate-skill-cards-glide'
          }`}
        >
          {cardSets.map((setIdx) => (
            <React.Fragment key={`set-${setIdx}`}>
              {resumeData.skillCategories.map((category) => (
                <SkillCard
                  key={`${setIdx}-${category.id}`}
                  category={category}
                  isPrintHidden={setIdx > 0}
                />
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Print View: Clean, non-moving 2-column grid */}
      <div dir="rtl" className="hidden print:grid print:grid-cols-2 print:gap-3 print:pt-2">
        {resumeData.skillCategories.map((category) => (
          <SkillCard
            key={`print-${category.id}`}
            category={category}
            isPrintHidden={false}
          />
        ))}
      </div>
    </section>
  );
};
