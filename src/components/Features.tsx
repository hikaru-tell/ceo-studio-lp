export function Features() {
  const features = [
    {
      icon: "🎯",
      title: "パーソナライズAI",
      description:
        "履歴書の内容をGPT-4oが分析し、候補者一人ひとりに最適化されたメッセージを生成します。",
      color: "indigo",
    },
    {
      icon: "🎬",
      title: "高品質動画生成",
      description:
        "最新のAI動画技術で、プロフェッショナルな品質のスカウト動画を30秒で生成します。",
      color: "cyan",
    },
    {
      icon: "📊",
      title: "候補者スコアリング",
      description:
        "求人要件と履歴書をマッチングし、候補者の適合度を0-100点で自動評価します。",
      color: "green",
    },
    {
      icon: "⚡",
      title: "一括処理",
      description:
        "複数の履歴書を一度にアップロードし、効率的に大量のスカウト動画を生成できます。",
      color: "orange",
    },
    {
      icon: "🔒",
      title: "セキュリティ",
      description:
        "候補者の個人情報は暗号化して保護。コンプライアンスに配慮した安全な運用が可能です。",
      color: "purple",
    },
    {
      icon: "📱",
      title: "マルチデバイス対応",
      description:
        "縦型・横型など、SNSや各種プラットフォームに最適化された動画形式に対応しています。",
      color: "pink",
    },
  ];

  const colorClasses: Record<string, { bg: string; border: string }> = {
    indigo: { bg: "bg-indigo-50", border: "border-indigo-100" },
    cyan: { bg: "bg-cyan-50", border: "border-cyan-100" },
    green: { bg: "bg-green-50", border: "border-green-100" },
    orange: { bg: "bg-orange-50", border: "border-orange-100" },
    purple: { bg: "bg-purple-50", border: "border-purple-100" },
    pink: { bg: "bg-pink-50", border: "border-pink-100" },
  };

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-medium text-sm uppercase tracking-wider">
            機能紹介
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4 mb-6">
            採用を変える、6つの機能
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            CEO Studioは、採用担当者の業務を効率化しながら、候補者体験を向上させる機能を提供します。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
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
