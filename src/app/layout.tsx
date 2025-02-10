import './global.css';

import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import Header from '@components/Header';
import Footer from '@components/Footer';
import { default as ThemeProvider } from '@themes/Provider';

import localFont from 'next/font/local';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.inak-blog.com'),
  title: '이낙 개발 블로그',
  description: '이낙 개발 블로그',
  openGraph: {
    title: '이낙 개발 블로그',
    description: '이낙 개발 블로그입니다.',
    siteName: '이낙 개발 블로그',
    images: ['/images/logo.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '이낙 개발 블로그',
    description: '이낙 개발 블로그입니다.',
    images: ['/images/logo.png'],
  },
};

const pretendard = localFont({
  src: '../../public/fonts/Pretendard/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr" className={`${pretendard.variable}`}>
      <body
        className={`relative flex min-h-screen flex-col ${pretendard.className}`}
      >
        <div
          className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#A1C4FD] via-[#C2E9FB] to-[#FF758C]
                bg-[length:300%_300%] animate-animateBG opacity-30 blur-3xl z-[-1] dark:from-[#6c84a0] dark:via-[#7b8c99] dark:to-[#ff4785]"
        />

        <ThemeProvider>
          <Header />
          <main className="min-h-[calc(100vh_-_129px)]">{children}</main>
          <Footer />
        </ThemeProvider>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
