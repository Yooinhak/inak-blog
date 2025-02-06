'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useState, useEffect } from 'react';

function DarkMode({}) {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === 'system' ? systemTheme : theme;

  const handleThemeChange = () => {
    if (currentTheme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <div
      className={`w-[_62px_] h-8 rounded-3xl cursor-pointer relative transition-all ease-in-out duration-500 overflow-hidden ${currentTheme === 'light' ? `bg-[#c9f8ff]` : `bg-[#6148de]`}`}
      onClick={handleThemeChange}
    >
      <Image
        src={'/images/clouds.svg'}
        width={18}
        height={12}
        alt={'clouds'}
        className={`absolute top-[17px] z-[2] transition-transform ${currentTheme === 'light' ? `translate-x-[18px]` : `translate-x-[-30.34px]`}`}
      />
      <Image
        src={'/images/stars.svg'}
        width={26}
        height={0}
        alt={'clouds'}
        className={`absolute top-[3.5px] left-2 z-[3] transition-transform ${currentTheme === 'light' ? `translate-y-[40px]` : `translate-y-1`}`}
      />
      <div
        className={`absolute w-[21px] h-[21px] top-[5.5px] rounded-full transition-all ${currentTheme === 'light' ? `z-0 translate-x-[5.66px]` : `z-[2] bg-[#6148de] translate-x-[30.34px]`}`}
      />
      <div
        className={`absolute w-[25px] h-[25px] top-[3.5px] transition-transform rounded-full ${currentTheme === 'light' ? `bg-[#ffda16] shadow-[0px_0px_5px_#ffda16] translate-x-[3.66px]` : `bg-[#fff] translate-x-[33.34px]`}`}
      />
    </div>
  );
}

export default DarkMode;
