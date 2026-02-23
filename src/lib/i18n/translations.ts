export type Language = "ja" | "en";

export const translations = {
  ja: {
    // Header
    header: {
      brandName: "社長スタジオ",
      nav: {
        problem: "課題",
        solution: "解決策",
        features: "機能",
        howItWorks: "使い方",
      },
      contact: "お問い合わせ",
    },

    // Hero
    hero: {
      badge: "AI動画スカウトサービス",
      title: {
        line1: "候補者に",
        highlight: "響く動画",
        line2: "を",
        line3: "AIが自動生成",
      },
      description:
        "履歴書をアップロードするだけで、候補者一人ひとりにパーソナライズされたスカウト動画をAIが自動作成。",
      descriptionHighlight: "返信率を3倍に向上させます。",
      cta: {
        primary: "無料で試してみる",
        secondary: "詳しく見る",
      },
      stats: {
        responseRate: { value: "3倍", label: "返信率向上" },
        workReduction: { value: "90%", label: "工数削減" },
        videoGeneration: { value: "30秒", label: "動画生成" },
      },
      video: {
        aiGenerated: "AIが生成したスカウト動画",
        recipient: "山田太郎様へ",
        company: "株式会社ABC",
        recruiter: "採用担当",
      },
      floating: {
        generating: "AI生成中...",
        responseUp: "返信率 +200%",
      },
    },

    // Problem
    problem: {
      label: "採用担当者の悩み",
      title: "こんな課題を抱えていませんか？",
      description:
        "優秀な人材の獲得競争が激化する中、従来のスカウト方法では限界があります。",
      items: [
        {
          icon: "😩",
          title: "返信率が低い",
          description:
            "テキストだけのスカウトメールでは、候補者の目に留まらず開封すらされないことも。",
        },
        {
          icon: "⏰",
          title: "時間がかかりすぎる",
          description:
            "一人ひとりに合わせたメッセージを作成するのに膨大な時間がかかり、採用活動が停滞。",
        },
        {
          icon: "📝",
          title: "テンプレート感が出る",
          description:
            "効率を優先するとテンプレート感が出てしまい、候補者に熱意が伝わらない。",
        },
        {
          icon: "🎥",
          title: "動画制作のハードルが高い",
          description:
            "動画は効果的だとわかっていても、撮影・編集のスキルやコストが障壁に。",
        },
      ],
      warning: "テキストスカウトの平均返信率は わずか 5〜10%",
    },

    // Solution
    solution: {
      label: "社長スタジオの解決策",
      title: {
        line1: "AIが候補者ごとに",
        highlight: "最適な動画",
        line2: "を自動生成",
      },
      description:
        "履歴書の内容をAIが分析し、候補者のスキルや経験に合わせたパーソナライズされたスカウト動画を自動で生成。まるで直接話しかけているような、心に響くメッセージを届けます。",
      features: [
        "履歴書から候補者の強みを自動抽出",
        "CEOアバターがパーソナライズされたメッセージを伝達",
        "30秒で高品質な動画を生成",
        "テンプレート不要で毎回ユニークな内容",
      ],
      process: {
        upload: { title: "履歴書をアップロード", subtitle: "PDF, Word対応" },
        analyze: { title: "AIが分析・動画生成", subtitle: "処理中... 30秒" },
        complete: {
          title: "パーソナライズ動画完成",
          subtitle: "ダウンロード準備完了",
        },
      },
    },

    // Features
    features: {
      label: "機能紹介",
      title: "採用を変える、6つの機能",
      description:
        "社長スタジオは、採用担当者の業務を効率化しながら、候補者体験を向上させる機能を提供します。",
      items: [
        {
          icon: "🎯",
          title: "パーソナライズAI",
          description:
            "履歴書の内容をGPT-4oが分析し、候補者一人ひとりに最適化されたメッセージを生成します。",
          color: "green",
        },
        {
          icon: "🎬",
          title: "高品質動画生成",
          description:
            "最新のAI動画技術で、プロフェッショナルな品質のスカウト動画を30秒で生成します。",
          color: "teal",
        },
        {
          icon: "📊",
          title: "候補者スコアリング",
          description:
            "求人要件と履歴書をマッチングし、候補者の適合度を0-100点で自動評価します。",
          color: "emerald",
        },
        {
          icon: "⚡",
          title: "一括処理",
          description:
            "複数の履歴書を一度にアップロードし、効率的に大量のスカウト動画を生成できます。",
          color: "lime",
        },
        {
          icon: "🔒",
          title: "セキュリティ",
          description:
            "候補者の個人情報は暗号化して保護。コンプライアンスに配慮した安全な運用が可能です。",
          color: "slate",
        },
        {
          icon: "📱",
          title: "マルチデバイス対応",
          description:
            "縦型・横型など、SNSや各種プラットフォームに最適化された動画形式に対応しています。",
          color: "cyan",
        },
      ],
    },

    // How It Works
    howItWorks: {
      label: "使い方",
      title: "4ステップで簡単スタート",
      description:
        "複雑な設定は不要。履歴書をアップロードするだけで、すぐにパーソナライズ動画が完成します。",
      steps: [
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
      ],
      demo: {
        title: "実際の動画を見てみませんか？",
        description: "デモ動画で社長スタジオの実力をお確かめください",
        cta: "デモを見る",
      },
    },

    // CTA
    cta: {
      title: {
        line1: "今すぐ始めて、",
        line2: "採用を変えましょう",
      },
      description:
        "社長スタジオで、候補者の心に響くスカウト体験を。まずは無料でお試しください。",
      benefits: [
        "初期費用・導入費用は無料",
        "最短即日で利用開始",
        "専任担当者がサポート",
        "無料トライアル期間あり",
      ],
      support: {
        title: "ご質問・ご相談もお気軽に",
        description: "専門スタッフが丁寧にお答えします",
      },
      form: {
        title: "お問い合わせ・資料請求",
        companyName: { label: "会社名", placeholder: "株式会社〇〇" },
        name: { label: "お名前", placeholder: "山田 太郎" },
        email: { label: "メールアドレス", placeholder: "example@company.com" },
        phone: { label: "電話番号（任意）", placeholder: "03-1234-5678" },
        message: {
          label: "お問い合わせ内容（任意）",
          placeholder: "ご質問やご要望があればお書きください",
        },
        required: "*",
        submit: "無料で相談する",
        submitting: "送信中...",
        error: "送信に失敗しました。もう一度お試しください。",
        privacy:
          "送信いただいた情報は、お問い合わせへの対応および弊社サービスのご案内にのみ使用いたします。",
      },
      success: {
        title: "お問い合わせありがとうございます！",
        description: "担当者より2営業日以内にご連絡いたします。しばらくお待ちください。",
        newInquiry: "新しいお問い合わせを送る",
      },
    },

    // Footer
    footer: {
      brandName: "社長スタジオ",
      description:
        "AIパーソナライズ動画スカウトサービス。候補者一人ひとりに合わせたスカウト動画を自動生成し、採用の返信率を劇的に向上させます。",
      service: {
        title: "サービス",
        features: "機能紹介",
        howItWorks: "使い方",
        pricing: "料金プラン",
        caseStudies: "導入事例",
      },
      company: {
        title: "会社情報",
        about: "運営会社",
        privacy: "プライバシーポリシー",
        terms: "利用規約",
        contact: "お問い合わせ",
      },
      copyright: "© 2024 社長スタジオ. All rights reserved.",
      tagline: "AIで採用を変える",
    },
  },

  en: {
    // Header
    header: {
      brandName: "CEO Studio",
      nav: {
        problem: "Challenges",
        solution: "Solution",
        features: "Features",
        howItWorks: "How It Works",
      },
      contact: "Contact Us",
    },

    // Hero
    hero: {
      badge: "AI Video Scout Service",
      title: {
        line1: "AI Creates",
        highlight: "Compelling Videos",
        line2: "",
        line3: "That Resonate",
      },
      description:
        "Simply upload a resume and AI automatically creates personalized scout videos for each candidate.",
      descriptionHighlight: "Increase response rates by 3x.",
      cta: {
        primary: "Try for Free",
        secondary: "Learn More",
      },
      stats: {
        responseRate: { value: "3x", label: "Response Rate" },
        workReduction: { value: "90%", label: "Time Saved" },
        videoGeneration: { value: "30s", label: "Video Generation" },
      },
      video: {
        aiGenerated: "AI-Generated Scout Video",
        recipient: "For Taro Yamada",
        company: "ABC Corporation",
        recruiter: "Recruiting Team",
      },
      floating: {
        generating: "AI Generating...",
        responseUp: "Response +200%",
      },
    },

    // Problem
    problem: {
      label: "Recruiter Challenges",
      title: "Are you facing these challenges?",
      description:
        "In an increasingly competitive talent market, traditional scouting methods have limitations.",
      items: [
        {
          icon: "😩",
          title: "Low Response Rates",
          description:
            "Text-only scout emails often go unnoticed and may not even be opened by candidates.",
        },
        {
          icon: "⏰",
          title: "Too Time-Consuming",
          description:
            "Creating personalized messages for each candidate takes enormous time, stalling recruitment.",
        },
        {
          icon: "📝",
          title: "Template Fatigue",
          description:
            "Prioritizing efficiency leads to generic templates that fail to convey genuine interest.",
        },
        {
          icon: "🎥",
          title: "Video Production Barriers",
          description:
            "Even knowing videos are effective, filming and editing skills and costs are obstacles.",
        },
      ],
      warning: "Average text scout response rate is only 5-10%",
    },

    // Solution
    solution: {
      label: "CEO Studio Solution",
      title: {
        line1: "AI Automatically Creates",
        highlight: "Optimal Videos",
        line2: "for Each Candidate",
      },
      description:
        "AI analyzes resume content and automatically generates personalized scout videos tailored to each candidate's skills and experience. Deliver heartfelt messages as if speaking directly to them.",
      features: [
        "Automatically extract candidate strengths from resumes",
        "CEO avatar delivers personalized messages",
        "Generate high-quality videos in 30 seconds",
        "Unique content every time, no templates needed",
      ],
      process: {
        upload: { title: "Upload Resume", subtitle: "PDF, Word supported" },
        analyze: {
          title: "AI Analysis & Video Generation",
          subtitle: "Processing... 30s",
        },
        complete: {
          title: "Personalized Video Complete",
          subtitle: "Ready for download",
        },
      },
    },

    // Features
    features: {
      label: "Features",
      title: "6 Features That Transform Recruiting",
      description:
        "CEO Studio provides features that streamline recruiter workflows while enhancing candidate experience.",
      items: [
        {
          icon: "🎯",
          title: "Personalization AI",
          description:
            "GPT-4o analyzes resume content to generate optimized messages for each candidate.",
          color: "green",
        },
        {
          icon: "🎬",
          title: "High-Quality Video Generation",
          description:
            "Latest AI video technology creates professional-quality scout videos in 30 seconds.",
          color: "teal",
        },
        {
          icon: "📊",
          title: "Candidate Scoring",
          description:
            "Match job requirements with resumes and automatically score candidate fit from 0-100.",
          color: "emerald",
        },
        {
          icon: "⚡",
          title: "Batch Processing",
          description:
            "Upload multiple resumes at once to efficiently generate scout videos at scale.",
          color: "lime",
        },
        {
          icon: "🔒",
          title: "Security",
          description:
            "Candidate personal information is encrypted and protected with compliance-focused secure operations.",
          color: "slate",
        },
        {
          icon: "📱",
          title: "Multi-Device Support",
          description:
            "Supports video formats optimized for SNS and various platforms in vertical and horizontal orientations.",
          color: "cyan",
        },
      ],
    },

    // How It Works
    howItWorks: {
      label: "How It Works",
      title: "Get Started in 4 Simple Steps",
      description:
        "No complex setup required. Just upload a resume and your personalized video is ready.",
      steps: [
        {
          number: "01",
          title: "Upload Resume",
          description:
            "Drag and drop candidate resumes (PDF/Word). Batch processing of multiple files is also available.",
          image: "📄",
        },
        {
          number: "02",
          title: "AI Analysis & Script Generation",
          description:
            "GPT-4o analyzes resume content and generates personalized scripts based on candidate skills and experience.",
          image: "🤖",
        },
        {
          number: "03",
          title: "Auto-Generate Video",
          description:
            "Latest AI video technology creates high-quality scout videos with CEO avatar addressing candidates in 30 seconds.",
          image: "🎬",
        },
        {
          number: "04",
          title: "Download & Send",
          description:
            "Download generated videos and attach to scout emails. Or send links directly to candidates.",
          image: "📧",
        },
      ],
      demo: {
        title: "Want to see an actual video?",
        description: "Experience CEO Studio's capabilities with a demo video",
        cta: "Watch Demo",
      },
    },

    // CTA
    cta: {
      title: {
        line1: "Start now and",
        line2: "transform your recruiting",
      },
      description:
        "Create scout experiences that resonate with candidates. Try free today.",
      benefits: [
        "No setup or implementation fees",
        "Start using same day",
        "Dedicated support staff",
        "Free trial period available",
      ],
      support: {
        title: "Questions? Feel free to ask",
        description: "Our specialists will assist you",
      },
      form: {
        title: "Contact Us / Request Information",
        companyName: { label: "Company Name", placeholder: "Your Company Inc." },
        name: { label: "Your Name", placeholder: "John Smith" },
        email: { label: "Email Address", placeholder: "example@company.com" },
        phone: { label: "Phone (Optional)", placeholder: "123-456-7890" },
        message: {
          label: "Message (Optional)",
          placeholder: "Please share any questions or requests",
        },
        required: "*",
        submit: "Get Free Consultation",
        submitting: "Sending...",
        error: "Failed to send. Please try again.",
        privacy:
          "Information submitted will only be used for responding to inquiries and service information.",
      },
      success: {
        title: "Thank you for contacting us!",
        description:
          "Our team will respond within 2 business days. Please wait.",
        newInquiry: "Send another inquiry",
      },
    },

    // Footer
    footer: {
      brandName: "CEO Studio",
      description:
        "AI personalized video scout service. Automatically generate scout videos tailored to each candidate and dramatically improve recruitment response rates.",
      service: {
        title: "Service",
        features: "Features",
        howItWorks: "How It Works",
        pricing: "Pricing",
        caseStudies: "Case Studies",
      },
      company: {
        title: "Company",
        about: "About Us",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        contact: "Contact",
      },
      copyright: "© 2024 CEO Studio. All rights reserved.",
      tagline: "Transform recruiting with AI",
    },
  },
} as const;

export type Translations = typeof translations;
