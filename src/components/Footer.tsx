export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/dale-logo.png"
                alt="Dale Logo"
                className="h-10 w-auto opacity-90 invert"
              />
              <span className="font-serif font-bold text-2xl">社長スタジオ</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              AIパーソナライズ動画スカウトサービス。
              候補者一人ひとりに合わせたスカウト動画を自動生成し、採用の返信率を劇的に向上させます。
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#008C42] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#008C42] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4">サービス</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#features" className="hover:text-[#008C42] transition-colors">機能紹介</a></li>
              <li><a href="#how-it-works" className="hover:text-[#008C42] transition-colors">使い方</a></li>
              <li><a href="#" className="hover:text-[#008C42] transition-colors">料金プラン</a></li>
              <li><a href="#" className="hover:text-[#008C42] transition-colors">導入事例</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">会社情報</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#" className="hover:text-[#008C42] transition-colors">運営会社</a></li>
              <li><a href="#" className="hover:text-[#008C42] transition-colors">プライバシーポリシー</a></li>
              <li><a href="#" className="hover:text-[#008C42] transition-colors">利用規約</a></li>
              <li><a href="#contact" className="hover:text-[#008C42] transition-colors">お問い合わせ</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2024 社長スタジオ. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm">
            AIで採用を変える
          </p>
        </div>
      </div>
    </footer>
  );
}
