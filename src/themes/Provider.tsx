'use client';

import { ThemeProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';
import { useEffect, useState } from 'react';

export default function Provider({ children, ...props }: ThemeProviderProps) {
  const [isMount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!isMount) {
    return null;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" {...props}>
      {children}
    </ThemeProvider>
  );
}
