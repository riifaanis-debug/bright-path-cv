/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SectionHeader } from './SectionHeader.tsx';
import { resumeData } from '../data/resumeData.ts';

export const SummaryObjectiveSection: React.FC = () => {
  return (
    <div className="space-y-6 mb-6">
      
      {/* 1. Professional Summary (الملخص المهني) */}
      <section id="summary" className="page-break-avoid">
        <SectionHeader
          titleAr={resumeData.summary.title}
        />
        <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
          {resumeData.summary.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </section>

      {/* 2. Career Objective (الهدف المهني) */}
      <section id="objective" className="page-break-avoid">
        <SectionHeader
          titleAr={resumeData.objective.title}
        />
        <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
          {resumeData.objective.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </section>

    </div>
  );
};
