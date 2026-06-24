'use client';

import { useEffect, useState } from 'react';

const WORDS = ['accessible UIs', 'scalable systems', 'delightful UX', 'React projects', 'design systems'];

/**
 * Robust entrance: the resting (visible) state is the base style, the per-char
 * slide-up is committed on the next frame via React state + a CSS transition,
 * so the text is never stuck hidden — even when timelines don't run (print/SSR).
 */
export default function RotatingText({ words = WORDS, interval = 2300 }: { words?: string[]; interval?: number }) {
  const [i, setI] = useState(0);
  const [on, setOn] = useState(true);

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  useEffect(() => {
    const reduce = !window.matchMedia('(prefers-reduced-motion: no-preference)').matches;
    if (reduce) { setOn(true); return; }
    setOn(false);
    const r = requestAnimationFrame(() => requestAnimationFrame(() => setOn(true)));
    return () => cancelAnimationFrame(r);
  }, [i]);

  const word = words[i];
  return (
    <span className="rot">
      <span className="rot-inner" key={i}>
        {Array.from(word).map((ch, idx) => (
          <span
            key={idx}
            className="rot-ch"
            style={{ transform: on ? 'translateY(0)' : 'translateY(108%)', transitionDelay: `${idx * 28}ms` }}
          >
            {ch === ' ' ? '\u00A0' : ch}
          </span>
        ))}
      </span>
    </span>
  );
}
