import type { Metadata } from 'next';
import localFont from 'next/font/local';

import Footer from '@components/Footer';
import Header from '@components/Header';
import { ThemeProvider } from '@components/ThemeProvider';

import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.inak.dev'),
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
    <html lang="kr" className={`${pretendard.variable}`} suppressHydrationWarning>
      <body className={`antialiased ${pretendard.className} bg-[#eef2f6] text-base-content dark:bg-[#0b111a]`}>
        <ThemeProvider>
          <div className="relative min-h-screen overflow-hidden">
            <div className="pointer-events-none absolute -top-48 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-sky-200/50 blur-[140px] dark:bg-sky-500/20" />
            <div className="pointer-events-none absolute -bottom-64 -left-28 h-[520px] w-[520px] rounded-full bg-emerald-200/40 blur-[160px] dark:bg-emerald-400/15" />
            <div className="pointer-events-none absolute top-1/3 -right-32 h-[420px] w-[420px] rounded-full bg-amber-200/40 blur-[140px] dark:bg-amber-400/15" />

            <div className="relative z-10">
              <Header />
              <main className="min-h-[calc(100vh_-_65px_-_52px)]">{children}</main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
