import type { Metadata } from "next";
import { Inter, Shippori_Mincho_B1 } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "@/components/ConvexClientProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const shippori = Shippori_Mincho_B1({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-shippori",
});

export const metadata: Metadata = {
  title: "社長スタジオ | AIパーソナライズ動画スカウト",
  description:
    "候補者一人ひとりに合わせたスカウト動画をAIが自動生成。採用の返信率を劇的に向上させます。",
  openGraph: {
    title: "社長スタジオ | AIパーソナライズ動画スカウト",
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
      <body className={`${inter.variable} ${shippori.variable} font-sans antialiased`}>
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}
