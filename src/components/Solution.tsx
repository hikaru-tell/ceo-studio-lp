export function Solution() {
  return (
    <section id="solution" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-3xl p-1">
              <div className="bg-white rounded-[22px] p-6">
                {/* Process Flow */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4 bg-slate-50 rounded-xl p-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-2xl">
                      📄
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-slate-900">履歴書をアップロード</div>
                      <div className="text-sm text-slate-500">PDF, Word対応</div>
                    </div>
                    <div className="text-green-500">✓</div>
                  </div>

                  <div className="flex justify-center">
                    <svg className="w-6 h-6 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>

                  <div className="flex items-center gap-4 bg-indigo-50 rounded-xl p-4 border-2 border-indigo-200">
                    <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-2xl">
                      🤖
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-slate-900">AIが分析・動画生成</div>
                      <div className="text-sm text-indigo-600">処理中... 30秒</div>
                    </div>
                    <div className="w-6 h-6 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>

                  <div className="flex justify-center">
                    <svg className="w-6 h-6 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>

                  <div className="flex items-center gap-4 bg-green-50 rounded-xl p-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">
                      🎬
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-slate-900">パーソナライズ動画完成</div>
                      <div className="text-sm text-green-600">ダウンロード準備完了</div>
                    </div>
                    <div className="text-green-500">✓</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <span className="text-indigo-600 font-medium text-sm uppercase tracking-wider">
              CEO Studioの解決策
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4 mb-6">
              AIが候補者ごとに
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">
                最適な動画
              </span>
              を自動生成
            </h2>

            <p className="text-lg text-slate-600 mb-8">
              履歴書の内容をAIが分析し、候補者のスキルや経験に合わせたパーソナライズされたスカウト動画を自動で生成。
              まるで直接話しかけているような、心に響くメッセージを届けます。
            </p>

            <ul className="space-y-4">
              {[
                "履歴書から候補者の強みを自動抽出",
                "CEOアバターがパーソナライズされたメッセージを伝達",
                "30秒で高品質な動画を生成",
                "テンプレート不要で毎回ユニークな内容",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
