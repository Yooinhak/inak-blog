'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';

function DarkMode({}) {
   const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  // Render the light state until mounted to avoid a hydration mismatch;
  // the CSS transition makes the correction invisible.
  const isDark = mounted && resolvedTheme === 'dim';

  return (
    <div
      className={`w-[_62px_] h-8 rounded-3xl cursor-pointer relative transition-all ease-in-out duration-500 overflow-hidden ${isDark ? `bg-[#6148de]` : `bg-[#c9f8ff]`}`}
      onClick={() => setTheme(isDark ? 'nord' : 'dim')}
    >
      <Image
        src={'/images/clouds.svg'}
        width={18}
        height={12}
        alt={'clouds'}
        className={`absolute top-[17px] z-[2] transition-transform ${isDark ? `translate-x-[-30.34px]` : `translate-x-[18px] `}`}
      />
      <Image
        src={'/images/stars.svg'}
        width={26}
        height={0}
        alt={'clouds'}
        className={`absolute top-[3.5px] left-2 z-[3] transition-transform ${isDark ? `translate-y-1` : `translate-y-[40px]`}`}
      />
      <div
        className={`absolute w-[21px] h-[21px] top-[5.5px] rounded-full transition-all ${isDark ? `z-[2] bg-[#6148de] translate-x-[30.34px]` : `z-0 translate-x-[5.66px]`}`}
      />
      <div
        className={`absolute w-[25px] h-[25px] top-[3.5px] transition-transform rounded-full ${isDark ? `bg-[#fff] translate-x-[33.34px]` : `bg-[#ffda16] shadow-[0px_0px_5px_#ffda16] translate-x-[3.66px]`}`}
      />
    </div>
  );
}

export default DarkMode;