"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useLanguage } from "@/lib/i18n";

export function CTA() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    companyName: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const submitContact = useMutation(api.contacts.submit);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      await submitContact({
        companyName: formData.companyName,
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        message: formData.message || undefined,
      });
      setIsSubmitted(true);
    } catch {
      setError(t.cta.form.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#008C42] to-[#123B35]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <div className="text-6xl mb-6">🎉</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              {t.cta.success.title}
            </h3>
            <p className="text-slate-600 mb-6">
              {t.cta.success.description}
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  companyName: "",
                  name: "",
                  email: "",
                  phone: "",
                  message: "",
                });
              }}
              className="text-[#008C42] font-medium hover:underline"
            >
              {t.cta.success.newInquiry}
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#008C42] to-[#123B35]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
              {t.cta.title.line1}
              <br />
              {t.cta.title.line2}
            </h2>
            <p className="text-xl text-white/90 mb-8">
              {t.cta.description}
            </p>

            <ul className="space-y-4 mb-8">
              {t.cta.benefits.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <div className="text-4xl">💬</div>
              <div>
                <div className="font-medium">{t.cta.support.title}</div>
                <div className="text-sm text-white/80">{t.cta.support.description}</div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              {t.cta.form.title}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {t.cta.form.companyName.label} <span className="text-red-500">{t.cta.form.required}</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#008C42] focus:border-transparent transition-all"
                  placeholder={t.cta.form.companyName.placeholder}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {t.cta.form.name.label} <span className="text-red-500">{t.cta.form.required}</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#008C42] focus:border-transparent transition-all"
                  placeholder={t.cta.form.name.placeholder}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {t.cta.form.email.label} <span className="text-red-500">{t.cta.form.required}</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#008C42] focus:border-transparent transition-all"
                  placeholder={t.cta.form.email.placeholder}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {t.cta.form.phone.label}
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#008C42] focus:border-transparent transition-all"
                  placeholder={t.cta.form.phone.placeholder}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {t.cta.form.message.label}
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#008C42] focus:border-transparent transition-all resize-none"
                  placeholder={t.cta.form.message.placeholder}
                />
              </div>

              {error && (
                <div className="text-red-500 text-sm bg-red-50 p-3 rounded-lg">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#008C42] text-white py-4 rounded-xl font-medium text-lg hover:bg-[#007538] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#008C42]/20"
              >
                {isSubmitting ? t.cta.form.submitting : t.cta.form.submit}
              </button>

              <p className="text-xs text-slate-500 text-center">
                {t.cta.form.privacy}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
