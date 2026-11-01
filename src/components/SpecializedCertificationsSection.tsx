/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SectionHeader } from './SectionHeader';
import { resumeData } from '../data/resumeData.ts';

export const SpecializedCertificationsSection: React.FC = () => {
  return (
    <div className="space-y-6 mb-6 page-break-avoid">
      
      {/* الشهادات المهنية والتخصصية */}
      <section id="specialized-certifications">
        <SectionHeader
          titleAr="الشهادات المهنية والتخصصية"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 pt-1">
          {resumeData.specializedCertifications.map((item) => (
            <div
              key={item.id}
              className="border-r-2 border-[#D9A441] pr-3 py-0.5 page-break-avoid"
            >
              <div className="text-xs sm:text-sm font-bold text-[#0C3823] leading-snug">
                {item.titleAr}{' '}
                {item.titleEn && (
                  <span className="font-normal text-slate-500 text-xs" dir="ltr">
                    - {item.titleEn}
                  </span>
                )}
              </div>

              <div className="text-[11px] sm:text-xs text-slate-600 mt-0.5">
                <span className="font-semibold text-[#0D472A]">{item.provider}</span>
                {item.codeOrDate && (
                  <span className="text-slate-500 font-mono" dir="ltr"> - {item.codeOrDate}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* المؤهلات العلمية */}
      <section id="education">
        <SectionHeader
          titleAr="المؤهلات العلمية"
        />

        <div className="border-r-2 border-[#D9A441] pr-3 py-1 page-break-avoid">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <div>
              <h3 className="text-sm sm:text-base font-bold text-[#0C3823]">
                {resumeData.education.degree}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                {resumeData.education.institution}
              </p>
            </div>
            <div className="text-xs sm:text-sm font-bold text-[#D9A441]">
              {resumeData.education.year}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
