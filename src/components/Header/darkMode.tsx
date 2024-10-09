'use client';

import { useTheme } from 'next-themes';
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
      className={`w-[_62px_] h-8 rounded-3xl cursor-pointer relative transition-all ease-in-out duration-500 ${currentTheme === 'light' ? `bg-[#c9f8ff]` : `bg-[#6148de]`}`}
      onClick={handleThemeChange}
    >
      <div
        className={`absolute w-[25px] h-[25px] top-[3.66px] transition-transform rounded-full ${currentTheme === 'light' ? `bg-[#ffda16] shadow-[0px_0px_5px_#ffda16] translate-x-[3.66px]` : `bg-[#fff] translate-x-[33.34px]`}`}
      ></div>
    </div>
  );
}

export default DarkMode;
