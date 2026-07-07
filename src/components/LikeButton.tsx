'use client';

import { useEffect, useState } from 'react';
import { fmtNum } from '@lib/categories';
import { cn } from '@utils/cn';
import { IconHeart, IconEye } from './icons';

const actBtn =
  'inline-flex items-center gap-[7px] px-3.5 py-[9px] rounded-full border text-[13px] font-semibold transition-all duration-[220ms] ease-fluid backdrop-blur-[10px]';

/**
 * Like button with localStorage persistence (per post id).
 * For real cross-visitor counts, swap the localStorage calls for an API route
 * (e.g. Supabase / Upstash) — the UI stays the same.
 */
export default function LikeButton({ id, initialLikes = 0, views }: { id: string; initialLikes?: number; views?: number }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);

  useEffect(() => {
    const was = localStorage.getItem(`like:${id}`) === '1';
    setLiked(was);
    setLikes(initialLikes + (was ? 1 : 0));
  }, [id, initialLikes]);

  const toggle = () => {
    setLiked((l) => {
      const next = !l;
      localStorage.setItem(`like:${id}`, next ? '1' : '0');
      setLikes((n) => n + (next ? 1 : -1));
      return next;
    });
  };

  return (
    <div className="flex gap-2.5">
      <button
        className={cn(
          actBtn,
          'cursor-pointer',
          liked
            ? 'text-[oklch(0.6_0.2_18)] border-[oklch(0.6_0.2_18)] bg-[oklch(0.6_0.2_18/0.1)]'
            : 'border-glass-border bg-glass text-text-soft hover:text-accent hover:border-accent hover:-translate-y-px',
        )}
        onClick={toggle}
        aria-label="좋아요"
      >
        <IconHeart size={18} fill={liked} /> <span className="font-mono">{fmtNum(likes)}</span>
      </button>
      {typeof views === 'number' && (
        <span className={cn(actBtn, 'border-glass-border bg-glass text-text-soft')} aria-label="조회수">
          <IconEye size={18} /> <span className="font-mono">{fmtNum(views)}</span>
        </span>
      )}
    </div>
  );
}
