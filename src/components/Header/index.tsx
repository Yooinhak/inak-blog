'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { menuItems } from '@config/menu';

import DarkMode from './darkMode';

const Header = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const menus = menuItems.map((menuItem, menuItemIndex) => (
    <li key={`${menuItem.label}_${menuItemIndex}`}>
      <Link href={menuItem.link}>{menuItem.label}</Link>
    </li>
  ));

  return (
    <nav className="navbar sticky top-0 z-30 justify-center border-b border-white/30 bg-base-100/70 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-base-100/10">
      <div className="flex w-full max-w-[1200px] items-center">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content z-10 mt-3 w-52 rounded-box border border-white/30 bg-base-100/80 p-2 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-base-100/20"
            >
              {menus}
            </ul>
          </div>

          <Link className="btn btn-ghost px-2" href={'/'}>
            {mounted && (
              <Image
                src={theme === 'dim' ? '/images/logo_dark.png' : '/images/logo.png'}
                alt="logo"
                width={60}
                height={30}
                priority
              />
            )}
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal rounded-full border border-white/30 bg-base-100/60 px-3 py-1 backdrop-blur-xl dark:border-white/10 dark:bg-base-100/20">
            {menus}
          </ul>
        </div>

        <div className="navbar-end">
          <DarkMode />
        </div>
      </div>
    </nav>
  );
};

export default Header;
