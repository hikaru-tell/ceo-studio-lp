"use client";

import { useLanguage } from "@/lib/i18n";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[#008C42]/10 text-[#008C42] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-[#008C42] rounded-full animate-pulse"></span>
              {t.hero.badge}
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              {t.hero.title.line1}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008C42] to-[#123B35]">
                {t.hero.title.highlight}
              </span>
              {t.hero.title.line2}
              <br />
              {t.hero.title.line3}
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0">
              {t.hero.description}
              <span className="font-bold text-[#008C42]">{t.hero.descriptionHighlight}</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="bg-[#008C42] text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-[#007538] transition-all hover:scale-105 shadow-lg shadow-[#008C42]/20"
              >
                {t.hero.cta.primary}
              </a>
              <a
                href="#how-it-works"
                className="border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-full font-medium text-lg hover:border-[#008C42]/30 hover:text-[#008C42] transition-colors"
              >
                {t.hero.cta.secondary}
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-8 mt-12 pt-8 border-t border-slate-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">{t.hero.stats.responseRate.value}</div>
                <div className="text-sm text-slate-500">{t.hero.stats.responseRate.label}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">{t.hero.stats.workReduction.value}</div>
                <div className="text-sm text-slate-500">{t.hero.stats.workReduction.label}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">{t.hero.stats.videoGeneration.value}</div>
                <div className="text-sm text-slate-500">{t.hero.stats.videoGeneration.label}</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-[#008C42]/10 to-[#123B35]/10 rounded-3xl p-8 shadow-2xl">
              {/* Mock Video Player */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-[#123B35] to-[#0B4323] relative flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  {/* Video overlay text */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-sm opacity-80">{t.hero.video.aiGenerated}</div>
                    <div className="font-medium">{t.hero.video.recipient}</div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#008C42]/10 rounded-full flex items-center justify-center">
                      <span className="text-[#008C42] font-bold">A</span>
                    </div>
                    <div>
                      <div className="font-medium text-slate-900">{t.hero.video.company}</div>
                      <div className="text-sm text-slate-500">{t.hero.video.recruiter}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3 animate-float">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✨</span>
                  <span className="text-sm font-medium text-slate-700">{t.hero.floating.generating}</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-3 animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">📧</span>
                  <span className="text-sm font-medium text-[#008C42]">{t.hero.floating.responseUp}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
