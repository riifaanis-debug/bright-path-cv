/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SectionHeader } from './SectionHeader';
import { resumeData } from '../data/resumeData.ts';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="mb-6">
      <SectionHeader
        titleAr="الخبرات المهنية"
      />

      <div className="space-y-6">
        {resumeData.experiences.map((exp, index) => (
          <div key={exp.id} className="page-break-avoid">
            
            {/* Job Header: Role, English Title, and Company : Period */}
            <div className="pb-2.5 border-b border-[#D9A441]/30 border-r-4 border-[#D9A441] pr-3.5 bg-gradient-to-l from-transparent via-[#fdfbf7] to-[#FBF6EE]/60 rounded-r-md">
              <h3 className="text-base sm:text-lg md:text-xl font-black text-[#B8860B] leading-snug tracking-tight">
                {exp.roleAr}
              </h3>
              <p className="text-xs sm:text-sm font-bold text-[#B8860B] mt-0.5 text-right font-sans tracking-wide" dir="ltr">
                {exp.roleEn}
              </p>
              <div className="text-xs sm:text-sm mt-1.5 flex flex-wrap items-center gap-1.5 font-bold text-[#B8860B]">
                <span className="text-[#B8860B] font-black">{exp.companyAr}</span>
                <span className="text-[#D9A441] font-black px-0.5">:</span>
                <span className="text-[#B8860B] font-extrabold">{exp.periodAr}</span>
              </div>
            </div>

            {/* 4 Paragraphs Job Description */}
            <div className="py-3 space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
              {exp.paragraphs.map((p, pIdx) => (
                <p key={pIdx}>{p}</p>
              ))}
            </div>

            {/* المهارات والكفاءات المهنية */}
            <div className="mt-1 pt-2 border-t border-slate-100">
              <span className="text-xs font-bold text-[#0C3823] ml-2">
                المهارات والكفاءات المهنية:
              </span>
              <span className="text-xs text-slate-600 leading-relaxed">
                {exp.skillsList.join(' | ')}
              </span>
            </div>

            {/* أبرز الإنجازات المهنية */}
            <div className="mt-2 pt-2 border-t border-slate-100">
              <span className="block text-xs font-bold text-[#0C3823] mb-1.5">
                أبرز الإنجازات المهنية:
              </span>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {exp.achievements.map((ach, aIdx) => (
                  <li key={aIdx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D9A441] shrink-0 mt-1.5" />
                    <span className="leading-relaxed">{ach}</span>
                  </li>
                ))}
              </ul>
            </div>

            {index < resumeData.experiences.length - 1 && (
              <div className="mt-6 border-b border-slate-200/60" />
            )}

          </div>
        ))}
      </div>
    </section>
  );
};
