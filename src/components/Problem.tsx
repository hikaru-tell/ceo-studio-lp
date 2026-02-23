"use client";

import { useLanguage } from "@/lib/i18n";

export function Problem() {
  const { t } = useLanguage();

  return (
    <section id="problem" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#008C42] font-medium text-sm uppercase tracking-wider">
            {t.problem.label}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-4 mb-6">
            {t.problem.title}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t.problem.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {t.problem.items.map((problem, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{problem.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-slate-600">{problem.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-red-50 text-red-700 px-6 py-3 rounded-full">
            <span className="text-xl">⚠️</span>
            <span className="font-medium">
              {t.problem.warning}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
