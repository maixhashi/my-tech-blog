import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import cn from "classnames";
import { ThemeSwitcher } from "@/components/theme/ThemeSwitcher";
import { ThemeInitializer } from "@/components/theme/ThemeInitializer";
import Container from "@/components/ui/Container";
import { JotaiProvider } from "@/lib/jotai";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `hashi.tech-blog`,
  description: `フルスタックエンジニアとして働いています。GO、Reactに主に触れてます。このサイトではエンジニアとして学んだことや備忘録を書いていきます。`,
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body
        className={cn(inter.className, "dark:bg-slate-900 dark:text-slate-400")}
      >
        <JotaiProvider>
          <ThemeInitializer />
          {/* Fixed theme switcher in top-right corner */}
          <div className="fixed top-4 right-4 z-50">
            <ThemeSwitcher />
          </div>
          <div className="min-h-screen">
            <Container>
              <Header />
              {children}
            </Container>
          </div>
          <Footer />
        </JotaiProvider>
      </body>
    </html>
  );
}
