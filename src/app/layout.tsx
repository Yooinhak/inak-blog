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
