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
    <nav className="navbar bg-base-100 shadow-sm justify-center">
      <div className="flex w-full max-w-[1200px]">
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
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {menus}
            </ul>
          </div>

          <Link className="btn btn-link" href={'/'}>
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
          <ul className="menu menu-horizontal px-1">{menus}</ul>
        </div>

        <div className="navbar-end">
          <DarkMode />
        </div>
      </div>
    </nav>
  );
};

export default Header;
