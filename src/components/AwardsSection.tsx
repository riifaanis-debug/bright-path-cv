/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SectionHeader } from './SectionHeader';
import { resumeData } from '../data/resumeData.ts';

export const AwardsSection: React.FC = () => {
  return (
    <section id="awards" className="mb-6 page-break-avoid">
      <SectionHeader
        titleAr="الجوائز والتكريمات والإنجازات"
      />

      <div className="space-y-3 pt-1">
        {resumeData.awards.map((award) => (
          <div key={award.id} className="border-r-2 border-[#D9A441] pr-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h3 className="text-xs sm:text-sm font-bold text-[#0C3823]">
                {award.title}
              </h3>
              {(award.organization || award.date) && (
                <div className="text-[11px] sm:text-xs text-slate-500 font-medium">
                  {award.organization}
                  {award.date && ` - ${award.date}`}
                </div>
              )}
            </div>

            <p className="text-xs text-slate-700 mt-0.5 leading-relaxed">
              {award.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
