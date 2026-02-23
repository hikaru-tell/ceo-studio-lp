import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "@/components/ConvexClientProvider";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "CEO Studio | AIパーソナライズ動画スカウト",
  description:
    "候補者一人ひとりに合わせたスカウト動画をAIが自動生成。採用の返信率を劇的に向上させます。",
  openGraph: {
    title: "CEO Studio | AIパーソナライズ動画スカウト",
    description:
      "候補者一人ひとりに合わせたスカウト動画をAIが自動生成。採用の返信率を劇的に向上させます。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} font-sans antialiased`}>
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}
