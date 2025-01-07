import './global.css';

import type { Metadata } from 'next';

import Header from '@components/Header';
import { default as ThemeProvider } from '@themes/Provider';

import localFont from 'next/font/local';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
        className={`flex min-h-screen flex-col dark:bg-gray-900 ${pretendard.className}`}
      >
        <ThemeProvider>
          <Header />
          <main className="pt-16 mx-auto">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
