'use client';

import { useEffect, useState } from 'react';

type Head = { id: string; text: string };

/**
 * Renders a table of contents from the rendered article's <h2> elements.
 * Pass the id of the wrapper that contains your MDX content.
 */
export default function TableOfContents({ contentId = 'post-content' }: { contentId?: string }) {
  const [heads, setHeads] = useState<Head[]>([]);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const root = document.getElementById(contentId);
    if (!root) return;
    const hs = Array.from(root.querySelectorAll('h2')) as HTMLHeadingElement[];
    hs.forEach((h) => { if (!h.id) h.id = h.textContent?.trim().replace(/\s+/g, '-') ?? ''; });
    setHeads(hs.map((h) => ({ id: h.id, text: h.textContent ?? '' })));

    const onScroll = () => {
      let cur = '';
      hs.forEach((h) => { if (h.getBoundingClientRect().top < 140) cur = h.id; });
      setActiveId(cur);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [contentId]);

  if (heads.length === 0) return null;

  return (
    <nav className="toc">
      <span className="eyebrow">/ on this page</span>
      <ul>
        {heads.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className={activeId === h.id ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(h.id);
                if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 90, behavior: 'smooth' });
              }}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
