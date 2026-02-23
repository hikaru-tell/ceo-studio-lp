export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "履歴書をアップロード",
      description:
        "候補者の履歴書（PDF/Word）をドラッグ&ドロップでアップロード。複数ファイルの一括処理も可能です。",
      image: "📄",
    },
    {
      number: "02",
      title: "AIが分析・スクリプト生成",
      description:
        "GPT-4oが履歴書の内容を分析し、候補者のスキルや経験に合わせたパーソナライズされたスクリプトを生成します。",
      image: "🤖",
    },
    {
      number: "03",
      title: "動画を自動生成",
      description:
        "最新のAI動画技術で、CEOアバターが候補者に語りかける高品質なスカウト動画を30秒で生成します。",
      image: "🎬",
    },
    {
      number: "04",
      title: "ダウンロード・送信",
      description:
        "生成された動画をダウンロードし、スカウトメールに添付。または直接リンクを候補者に送信できます。",
      image: "📧",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-medium text-sm uppercase tracking-wider">
            使い方
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4 mb-6">
            4ステップで簡単スタート
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            複雑な設定は不要。履歴書をアップロードするだけで、すぐにパーソナライズ動画が完成します。
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-200 via-cyan-200 to-indigo-200 -translate-y-1/2 z-0"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative z-10">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                  {/* Step Number */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center">
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
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-20">
                    <svg className="w-8 h-8 text-indigo-300" fill="currentColor" viewBox="0 0 24 24">
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
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-indigo-50 to-cyan-50 rounded-2xl p-6 sm:p-8">
            <div className="text-4xl">🎥</div>
            <div className="text-center sm:text-left">
              <div className="font-bold text-slate-900 text-lg">
                実際の動画を見てみませんか？
              </div>
              <div className="text-slate-600">
                デモ動画でCEO Studioの実力をお確かめください
              </div>
            </div>
            <a
              href="#contact"
              className="bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 transition-colors whitespace-nowrap"
            >
              デモを見る
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
