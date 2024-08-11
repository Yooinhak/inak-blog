'use client';

import { useState, useEffect } from 'react';

import { useTheme } from 'next-themes';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

function DarkMode({}) {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const onClick = (mode: string) => () => {
    setTheme(mode);
  };

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div className="bg-darkModeBg cursor-pointer rounded-[50%] p-1">
      <div onClick={onClick('system')}>test123</div>
      {currentTheme === 'dark' ? (
        <BsFillMoonFill onClick={onClick('light')} />
      ) : (
        <BsFillSunFill onClick={onClick('dark')} />
      )}
    </div>
  );
}

export default DarkMode;
