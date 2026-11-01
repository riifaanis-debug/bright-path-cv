/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export const ExecutiveSummaryStatement: React.FC = () => {
  return (
    <section 
      aria-label="البيان المهني" 
      className="my-5 sm:my-6 page-break-avoid"
    >
      <div className="relative overflow-hidden rounded-xl bg-[#fdfbf7] border border-[#e8ddc9] border-r-4 border-r-[#0C3823] p-4 sm:p-5 shadow-xs transition-all duration-200">
        <p className="text-xs sm:text-sm md:text-[14.5px] text-slate-800 font-medium leading-relaxed sm:leading-loose text-justify m-0">
          مستشار شرعي معتمد ، حاصل على درجة زمالة المستشار الشرعي في فقه المالية الإسلامية وتسوية المنازعات المصرفية والتمويلية ، وأخصائي ائتمان ومعالجة ديون، وخبير مصرفي بخبرة عملية تتجاوز عشر سنوات في البنك الأهلي السعودي ، أخصائي معتمد في المالية الإسلامية ، وأخصائي معتمد في تسوية المنازعات المالية ، حاصل على الرخصة الدولية لمهارات تقنية المعلومات من أكاديمية كامبردج رقم الاعتماد : TAGSA449 JIH421164 ، وشهادة اتمام برنامج الأمن السيبراني من أكاديمية سيسكو للشبكات
        </p>
      </div>
    </section>
  );
};
