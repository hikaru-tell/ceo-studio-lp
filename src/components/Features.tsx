"use client";

import { useLanguage } from "@/lib/i18n";

export function Features() {
  const { t } = useLanguage();

  const colorClasses: Record<string, { bg: string; border: string }> = {
    green: { bg: "bg-[#008C42]/5", border: "border-[#008C42]/10" },
    teal: { bg: "bg-teal-50", border: "border-teal-100" },
    emerald: { bg: "bg-emerald-50", border: "border-emerald-100" },
    lime: { bg: "bg-lime-50", border: "border-lime-100" },
    slate: { bg: "bg-slate-50", border: "border-slate-100" },
    cyan: { bg: "bg-cyan-50", border: "border-cyan-100" },
  };

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#008C42] font-medium text-sm uppercase tracking-wider">
            {t.features.label}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-4 mb-6">
            {t.features.title}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t.features.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.features.items.map((feature, index) => (
            <div
              key={index}
              className={`${colorClasses[feature.color].bg} ${colorClasses[feature.color].border} border rounded-2xl p-6 hover:shadow-lg transition-shadow`}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
