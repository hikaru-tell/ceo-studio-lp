"use client";

import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              <span className="text-[#008C42]">社長スタジオ</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#problem" className="text-slate-600 hover:text-[#008C42] transition-colors">
              課題
            </a>
            <a href="#solution" className="text-slate-600 hover:text-[#008C42] transition-colors">
              解決策
            </a>
            <a href="#features" className="text-slate-600 hover:text-[#008C42] transition-colors">
              機能
            </a>
            <a href="#how-it-works" className="text-slate-600 hover:text-[#008C42] transition-colors">
              使い方
            </a>
          </nav>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-[#008C42] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#007538] transition-colors shadow-lg shadow-[#008C42]/20"
            >
              お問い合わせ
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <nav className="flex flex-col px-4 py-4 gap-4">
            <a href="#problem" className="text-slate-600 hover:text-[#008C42] transition-colors">
              課題
            </a>
            <a href="#solution" className="text-slate-600 hover:text-[#008C42] transition-colors">
              解決策
            </a>
            <a href="#features" className="text-slate-600 hover:text-[#008C42] transition-colors">
              機能
            </a>
            <a href="#how-it-works" className="text-slate-600 hover:text-[#008C42] transition-colors">
              使い方
            </a>
            <a
              href="#contact"
              className="bg-[#008C42] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#007538] transition-colors text-center"
            >
              お問い合わせ
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
