/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SectionHeader } from './SectionHeader.tsx';
import { resumeData } from '../data/resumeData.ts';

export const KeyMetricsSection: React.FC = () => {
  return (
    <section id="metrics" className="mb-6 page-break-avoid">
      <SectionHeader
        titleAr="أبرز الإنجازات المهنية"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 pt-1">
        {resumeData.keyMetrics.map((metric) => (
          <div key={metric.id} className="border-r-2 border-[#D9A441] pr-3">
            <h3 className="text-sm sm:text-base font-bold text-[#0C3823] leading-snug">
              {metric.title}
            </h3>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              {metric.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
