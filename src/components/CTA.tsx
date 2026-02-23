"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

export function CTA() {
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
      setError("送信に失敗しました。もう一度お試しください。");
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
              お問い合わせありがとうございます！
            </h3>
            <p className="text-slate-600 mb-6">
              担当者より2営業日以内にご連絡いたします。
              <br />
              しばらくお待ちください。
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
              新しいお問い合わせを送る
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
              今すぐ始めて、
              <br />
              採用を変えましょう
            </h2>
            <p className="text-xl text-white/90 mb-8">
              社長スタジオで、候補者の心に響くスカウト体験を。
              まずは無料でお試しください。
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "初期費用・導入費用は無料",
                "最短即日で利用開始",
                "専任担当者がサポート",
                "無料トライアル期間あり",
              ].map((item, index) => (
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
                <div className="font-medium">ご質問・ご相談もお気軽に</div>
                <div className="text-sm text-white/80">専門スタッフが丁寧にお答えします</div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              お問い合わせ・資料請求
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  会社名 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#008C42] focus:border-transparent transition-all"
                  placeholder="株式会社〇〇"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#008C42] focus:border-transparent transition-all"
                  placeholder="山田 太郎"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#008C42] focus:border-transparent transition-all"
                  placeholder="example@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  電話番号（任意）
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#008C42] focus:border-transparent transition-all"
                  placeholder="03-1234-5678"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  お問い合わせ内容（任意）
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#008C42] focus:border-transparent transition-all resize-none"
                  placeholder="ご質問やご要望があればお書きください"
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
                {isSubmitting ? "送信中..." : "無料で相談する"}
              </button>

              <p className="text-xs text-slate-500 text-center">
                送信いただいた情報は、お問い合わせへの対応および弊社サービスのご案内にのみ使用いたします。
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
