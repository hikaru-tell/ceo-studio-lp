"use client";

import { useLanguage } from "@/lib/i18n";

export function Solution() {
  const { t } = useLanguage();

  return (
    <section id="solution" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-gradient-to-br from-[#008C42] to-[#123B35] rounded-3xl p-1">
              <div className="bg-white rounded-[22px] p-6">
                {/* Process Flow */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4 bg-slate-50 rounded-xl p-4">
                    <div className="w-12 h-12 bg-[#008C42]/10 rounded-full flex items-center justify-center text-2xl">
                      📄
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-slate-900">{t.solution.process.upload.title}</div>
                      <div className="text-sm text-slate-500">{t.solution.process.upload.subtitle}</div>
                    </div>
                    <div className="text-[#008C42]">✓</div>
                  </div>

                  <div className="flex justify-center">
                    <svg className="w-6 h-6 text-[#008C42]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>

                  <div className="flex items-center gap-4 bg-[#008C42]/5 rounded-xl p-4 border-2 border-[#008C42]/20">
                    <div className="w-12 h-12 bg-[#008C42] rounded-full flex items-center justify-center text-2xl">
                      🤖
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-slate-900">{t.solution.process.analyze.title}</div>
                      <div className="text-sm text-[#008C42]">{t.solution.process.analyze.subtitle}</div>
                    </div>
                    <div className="w-6 h-6 border-2 border-[#008C42] border-t-transparent rounded-full animate-spin"></div>
                  </div>

                  <div className="flex justify-center">
                    <svg className="w-6 h-6 text-[#008C42]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>

                  <div className="flex items-center gap-4 bg-green-50 rounded-xl p-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">
                      🎬
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-slate-900">{t.solution.process.complete.title}</div>
                      <div className="text-sm text-green-600">{t.solution.process.complete.subtitle}</div>
                    </div>
                    <div className="text-green-500">✓</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <span className="text-[#008C42] font-medium text-sm uppercase tracking-wider">
              {t.solution.label}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-4 mb-6">
              {t.solution.title.line1}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008C42] to-[#123B35]">
                {t.solution.title.highlight}
              </span>
              {t.solution.title.line2}
            </h2>

            <p className="text-lg text-slate-600 mb-8">
              {t.solution.description}
            </p>

            <ul className="space-y-4">
              {t.solution.features.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#008C42]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#008C42]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
