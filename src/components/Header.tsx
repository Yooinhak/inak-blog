'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import DarkMode from './DarkMode';
import { IconSearch, IconMenu } from './icons';

const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Post', href: '/posts' },
  { label: 'About', href: '/about' },
];

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
    <header className={`hdr ${scrolled ? 'scrolled' : ''}`}>
      <div className="wrap hdr-inner">
        <Link className="brand" href="/">
          <Image src="/images/logo.png" alt="inak" width={96} height={28} className="brand-logo light-only" priority />
          <Image src="/images/logo_dark.png" alt="inak" width={96} height={28} className="brand-logo dark-only" priority />
          <span className="brand-dot mono">.dev</span>
        </Link>

        <nav className="hdr-nav">
          {NAV.map((n) => (
            <Link key={n.label} href={n.href} className={`hdr-link ${isActive(n.href) ? 'active' : ''}`}>
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hdr-actions">
          <button className="icon-btn" aria-label="검색" onClick={() => router.push('/posts?focus=1')}>
            <IconSearch size={18} />
          </button>
          <DarkMode />
          <button className="icon-btn menu-only" aria-label="메뉴" onClick={() => setMenuOpen((o) => !o)}>
            <IconMenu />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="hdr-mobile glass">
          {NAV.map((n) => (
            <Link key={n.label} href={n.href} className={isActive(n.href) ? 'active' : ''} onClick={() => setMenuOpen(false)}>
              {n.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
