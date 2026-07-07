import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

import Header from '@components/Header';
import Footer from '@components/Footer';
import { ThemeProvider } from '@components/ThemeProvider';
import { SITE } from '@lib/siteConfig';

import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  alternates: {
    types: { 'application/rss+xml': `${SITE.url}/feed.xml` },
  },
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    siteName: SITE.name,
    images: ['/images/logo.png'],
    type: 'website',
    locale: SITE.locale,
  },
  twitter: {
    card: 'summary',
    title: SITE.title,
    description: SITE.description,
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
          {/* calm, blue-centric ambient orb field */}
          <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="absolute rounded-full blur-[110px] will-change-transform w-[620px] h-[620px] -top-60 left-1/2 -translate-x-[55%] bg-[var(--orb-1)]" />
            <div className="absolute rounded-full blur-[110px] will-change-transform w-[560px] h-[560px] -bottom-[260px] -left-40 bg-[var(--orb-2)]" />
            <div className="absolute rounded-full blur-[110px] will-change-transform w-[480px] h-[480px] top-[32%] -right-[180px] bg-[var(--orb-3)]" />
          </div>

          <div className="relative z-[1]">
            <Header />
            <main className="min-h-[calc(100vh-72px)] pb-24">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
