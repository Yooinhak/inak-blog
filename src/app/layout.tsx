import type { Metadata } from 'next';
import localFont from 'next/font/local';

import Header from '@components/Header';
import Footer from '@components/Footer';
import { ThemeProvider } from '@components/ThemeProvider';

import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.inak.dev'),
  title: '이낙 개발 블로그',
  description: '프론트엔드 · React · 개발 기록을 남기는 이낙의 블로그',
  openGraph: {
    title: '이낙 개발 블로그',
    description: '이낙 개발 블로그입니다.',
    siteName: '이낙 개발 블로그',
    images: ['/images/logo.png'],
    type: 'website',
  },
};

const pretendard = localFont({
  src: '../../public/fonts/Pretendard/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={pretendard.variable} suppressHydrationWarning>
      <body className={pretendard.className}>
        <ThemeProvider>
          {/* calm, blue-centric ambient field (replaces the old sky/emerald/amber orbs) */}
          <div className="bg-field bg-orbs" aria-hidden="true">
            <div className="orb orb-1" /><div className="orb orb-2" /><div className="orb orb-3" />
          </div>

          <div className="content">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
