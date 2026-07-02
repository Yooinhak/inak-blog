'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';

const WORDS = ['accessible UIs', 'scalable systems', 'delightful UX', 'React projects', 'design systems'];

/** Grapheme-safe split (handles 한글/emoji correctly) with a plain fallback. */
const splitGraphemes = (text: string): string[] => {
  if (typeof Intl !== 'undefined' && 'Segmenter' in Intl) {
    const seg = new Intl.Segmenter('ko', { granularity: 'grapheme' });
    return Array.from(seg.segment(text), s => s.segment);
  }
  return Array.from(text);
};

/**
 * Per-character stagger rotation, as described in
 * "Framer Motion으로 글자가 춤추는 텍스트 로테이션 애니메이션 만들기".
 * Chars spring up from below on enter and exit upward, clipped by the pill.
 * Respects prefers-reduced-motion (plain swap, no motion).
 */
export default function RotatingText({ words = WORDS, interval = 2300 }: { words?: string[]; interval?: number }) {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    const id = setInterval(() => setI(p => (p + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  const chars = useMemo(() => splitGraphemes(words[i]), [words, i]);

  if (reduce) {
    return (
      <span className="rot">
        <span className="rot-inner">{words[i]}</span>
      </span>
    );
  }

  return (
    <span className="rot" aria-label={words[i]}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span className="rot-inner" key={i} aria-hidden="true">
          {chars.map((ch, idx) => (
            <motion.span
              key={`${i}-${idx}`}
              className="rot-ch"
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              exit={{ y: '-110%' }}
              transition={{
                type: 'spring',
                stiffness: 380,
                damping: 32,
                delay: idx * 0.028,
              }}
            >
              {ch === ' ' ? ' ' : ch}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
