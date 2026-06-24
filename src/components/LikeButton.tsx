'use client';

import { useEffect, useState } from 'react';
import { fmtNum } from '@lib/categories';
import { IconHeart, IconEye } from './icons';

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
    <div className="post-actions">
      <button className={`act-btn ${liked ? 'liked' : ''}`} onClick={toggle} aria-label="좋아요">
        <IconHeart size={18} fill={liked} /> <span className="mono">{fmtNum(likes)}</span>
      </button>
      {typeof views === 'number' && (
        <span className="act-btn" aria-label="조회수">
          <IconEye size={18} /> <span className="mono">{fmtNum(views)}</span>
        </span>
      )}
    </div>
  );
}
