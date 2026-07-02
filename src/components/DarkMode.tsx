'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

/**
 * Sun/moon theme toggle — a real <button> (keyboard + screen reader accessible),
 * styled by the .theme-toggle design-system CSS in globals.css.
 */
export default function DarkMode() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  // Render the light state until mounted to avoid a hydration mismatch;
  // the CSS transition makes the correction invisible.
  const isDark = mounted && resolvedTheme === 'dim';

  return (
    <button
      type="button"
      className={`theme-toggle ${isDark ? 'is-dark' : ''}`}
      onClick={() => setTheme(isDark ? 'nord' : 'dim')}
      aria-label={isDark ? '라이트 모드로 전환' : '다크 모드로 전환'}
      title={isDark ? '라이트 모드' : '다크 모드'}
    >
      <span className="tt-track">
        <span className="tt-stars" />
        <span className="tt-knob">
          <span className="tt-crater c1" />
          <span className="tt-crater c2" />
          <span className="tt-crater c3" />
        </span>
      </span>
    </button>
  );
}
