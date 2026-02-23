export function Problem() {
  const problems = [
    {
      icon: "😩",
      title: "返信率が低い",
      description: "テキストだけのスカウトメールでは、候補者の目に留まらず開封すらされないことも。",
    },
    {
      icon: "⏰",
      title: "時間がかかりすぎる",
      description: "一人ひとりに合わせたメッセージを作成するのに膨大な時間がかかり、採用活動が停滞。",
    },
    {
      icon: "📝",
      title: "テンプレート感が出る",
      description: "効率を優先するとテンプレート感が出てしまい、候補者に熱意が伝わらない。",
    },
    {
      icon: "🎥",
      title: "動画制作のハードルが高い",
      description: "動画は効果的だとわかっていても、撮影・編集のスキルやコストが障壁に。",
    },
  ];

  return (
    <section id="problem" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-medium text-sm uppercase tracking-wider">
            採用担当者の悩み
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4 mb-6">
            こんな課題を抱えていませんか？
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            優秀な人材の獲得競争が激化する中、従来のスカウト方法では限界があります。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
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
              テキストスカウトの平均返信率は わずか 5〜10%
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
