import type { Metadata } from "next";
import { Inter, Shippori_Mincho_B1 } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "@/components/ConvexClientProvider";
import { LanguageProvider } from "@/lib/i18n";

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
  title: "社長スタジオ | CEO Studio - AI Personalized Video Scout",
  description:
    "AI automatically generates personalized scout videos for each candidate. Dramatically improve recruitment response rates.",
  openGraph: {
    title: "社長スタジオ | CEO Studio - AI Personalized Video Scout",
    description:
      "AI automatically generates personalized scout videos for each candidate. Dramatically improve recruitment response rates.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`${inter.variable} ${shippori.variable} font-sans antialiased`}>
        <ConvexClientProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
