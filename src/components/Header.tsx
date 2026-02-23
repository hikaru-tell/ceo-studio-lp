"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "ja" ? "en" : "ja");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img
              src="/dale-logo.png"
              alt="Dale Logo"
              className="h-8 w-auto opacity-90"
            />
            <span className="font-serif font-bold text-xl text-slate-900">
              <span className="text-[#008C42]">{t.header.brandName}</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#problem" className="text-slate-600 hover:text-[#008C42] transition-colors">
              {t.header.nav.problem}
            </a>
            <a href="#solution" className="text-slate-600 hover:text-[#008C42] transition-colors">
              {t.header.nav.solution}
            </a>
            <a href="#features" className="text-slate-600 hover:text-[#008C42] transition-colors">
              {t.header.nav.features}
            </a>
            <a href="#how-it-works" className="text-slate-600 hover:text-[#008C42] transition-colors">
              {t.header.nav.howItWorks}
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 hover:border-[#008C42]/30 transition-colors text-sm font-medium text-slate-600 hover:text-[#008C42]"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              {language === "ja" ? "EN" : "日本語"}
            </button>

            <a
              href="#contact"
              className="bg-[#008C42] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#007538] transition-colors shadow-lg shadow-[#008C42]/20"
            >
              {t.header.contact}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="p-2 text-slate-600 hover:text-[#008C42] transition-colors text-sm font-medium"
            >
              {language === "ja" ? "EN" : "JA"}
            </button>

            <button
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <nav className="flex flex-col px-4 py-4 gap-4">
            <a href="#problem" className="text-slate-600 hover:text-[#008C42] transition-colors">
              {t.header.nav.problem}
            </a>
            <a href="#solution" className="text-slate-600 hover:text-[#008C42] transition-colors">
              {t.header.nav.solution}
            </a>
            <a href="#features" className="text-slate-600 hover:text-[#008C42] transition-colors">
              {t.header.nav.features}
            </a>
            <a href="#how-it-works" className="text-slate-600 hover:text-[#008C42] transition-colors">
              {t.header.nav.howItWorks}
            </a>
            <a
              href="#contact"
              className="bg-[#008C42] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#007538] transition-colors text-center"
            >
              {t.header.contact}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
