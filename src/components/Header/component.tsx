'use client';

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DarkMode from './darkMode';

const navigation = [
  { name: 'Posts', href: '/posts' },
  { name: 'About', href: '/about' },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Component = () => {
  const pathname = usePathname();
  const { theme } = useTheme();

  const isCurrentPage = (url: string) => {
    return pathname.startsWith(url);
  };

  return (
    <Disclosure
      as="nav"
      className="fixed top-0 left-0 w-full backdrop-blur-sm border-b border-gray-30"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href={'/'}>
                <Image
                  src={
                    theme === 'dark'
                      ? '/images/logo_dark.png'
                      : '/images/logo.png'
                  }
                  alt={''}
                  sizes={'100vw'}
                  width={60}
                  height={30}
                />
              </Link>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigation.map(item => (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-current={isCurrentPage(item.href) ? 'page' : undefined}
                    className={classNames(
                      isCurrentPage(item.href)
                        ? 'bg-gradient-to-tr from-primary-500 to-primary-300 text-gray-0'
                        : 'text-gray-300 hover:bg-gradient-to-tr hover:from-primary-500 hover:to-primary-300 hover:text-gray-0',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <DarkMode />

          <div className="-mr-2 flex md:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group">
              {/* <HamburgerMenu /> */}
              <div>hamburger Menu!</div>
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel
        transition
        className="md:hidden absolute top-20 right-4 border-2 bg-gray-50 transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
      >
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          {navigation.map(item => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={isCurrentPage(item.href) ? 'page' : undefined}
              className={classNames(
                isCurrentPage(item.href) ? 'bg-primary-100' : 'text-gray-30',
                'block rounded-md px-3 py-2 hover:bg-primary-200 hover:text-white',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Component;
