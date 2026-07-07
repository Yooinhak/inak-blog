'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { wrap, iconBtn } from '@lib/ui';
import { cn } from '@utils/cn';
import DarkMode from './DarkMode';
import { IconSearch, IconMenu } from './icons';

const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Post', href: '/posts' },
  { label: 'About', href: '/about' },
];

const navLink = cn(
  'relative px-4 py-[9px] rounded-full cursor-pointer text-[14.5px] font-semibold no-underline',
  'transition-[color,background] duration-[220ms] ease-fluid hover:text-text hover:bg-accent-soft',
);
const navLinkActive = cn(
  'text-accent',
  "after:content-[''] after:absolute after:left-1/2 after:bottom-[3px] after:-translate-x-1/2",
  'after:w-[5px] after:h-[5px] after:rounded-full after:bg-accent',
);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    fn();
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 pt-3">
      <div
        className={cn(
          wrap,
          'h-16 flex items-center justify-between px-[18px] rounded-full border',
          'transition-all duration-[350ms] ease-fluid',
          scrolled
            ? 'bg-glass border-glass-border shadow-glass backdrop-blur-[20px] backdrop-saturate-[1.4]'
            : 'bg-transparent border-transparent',
        )}
      >
        <Link className="inline-flex items-end gap-0.5 cursor-pointer no-underline" href="/">
          <Image src="/images/logo.png" alt="inak" width={96} height={28} className="h-7 w-auto block dark:hidden" priority />
          <Image src="/images/logo_dark.png" alt="inak" width={96} height={28} className="h-7 w-auto hidden dark:block" priority />
          <span className="font-mono text-[13px] font-semibold text-text-mute mb-[3px]">.dev</span>
        </Link>

        <nav className="flex items-center gap-1 max-[760px]:hidden">
          {NAV.map((n) => (
            <Link
              key={n.label}
              href={n.href}
              className={cn(navLink, isActive(n.href) ? navLinkActive : 'text-text-soft')}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button className={iconBtn} aria-label="검색" onClick={() => router.push('/posts?focus=1')}>
            <IconSearch size={18} />
          </button>
          <DarkMode />
          <button
            className={cn(iconBtn, 'hidden max-[760px]:inline-flex')}
            aria-label="메뉴"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <IconMenu />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="glass mx-[18px] mt-2 p-2.5 hidden max-[760px]:flex flex-col gap-0.5">
          {NAV.map((n) => (
            <Link
              key={n.label}
              href={n.href}
              className={cn(
                'px-4 py-3 rounded-xl font-semibold cursor-pointer hover:bg-accent-soft hover:text-accent',
                isActive(n.href) ? 'bg-accent-soft text-accent' : 'text-text-soft',
              )}
              onClick={() => setMenuOpen(false)}
            >
              {n.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
