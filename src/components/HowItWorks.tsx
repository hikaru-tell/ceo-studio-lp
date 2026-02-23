"use client";

import { useLanguage } from "@/lib/i18n";

export function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#008C42] font-medium text-sm uppercase tracking-wider">
            {t.howItWorks.label}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-4 mb-6">
            {t.howItWorks.title}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t.howItWorks.description}
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#008C42]/20 via-[#123B35]/20 to-[#008C42]/20 -translate-y-1/2 z-0"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.howItWorks.steps.map((step, index) => (
              <div key={index} className="relative z-10">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                  {/* Step Number */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#008C42] to-[#123B35] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{step.number}</span>
                    </div>
                    <div className="text-4xl">{step.image}</div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm">{step.description}</p>
                </div>

                {/* Arrow (hidden on last item) */}
                {index < t.howItWorks.steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-20">
                    <svg className="w-8 h-8 text-[#008C42]/30" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Demo CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-[#008C42]/5 to-[#123B35]/5 rounded-2xl p-6 sm:p-8">
            <div className="text-4xl">🎥</div>
            <div className="text-center sm:text-left">
              <div className="font-bold text-slate-900 text-lg">
                {t.howItWorks.demo.title}
              </div>
              <div className="text-slate-600">
                {t.howItWorks.demo.description}
              </div>
            </div>
            <a
              href="#contact"
              className="bg-[#008C42] text-white px-6 py-3 rounded-full font-medium hover:bg-[#007538] transition-colors whitespace-nowrap"
            >
              {t.howItWorks.demo.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
