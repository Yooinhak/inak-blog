'use client';

import { useEffect, useState } from 'react';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

const TableOfContents = () => {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const article = document.querySelector('article');
    if (!article) return;

    const elements = article.querySelectorAll('h2, h3');
    const items: TOCItem[] = Array.from(elements).map(el => ({
      id: el.id,
      text: el.textContent || '',
      level: Number(el.tagName.charAt(1)),
    }));
    setHeadings(items);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -70% 0px', threshold: 0 },
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="hidden xl:block fixed right-[max(1rem,calc((100vw-960px)/2-280px))] top-28 w-60">
      <div className="rounded-2xl border border-white/20 bg-base-100/50 p-4 backdrop-blur-lg dark:border-white/10 dark:bg-base-100/10">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/50">
          목차
        </p>
        <ul className="space-y-1.5">
          {headings.map(heading => (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                onClick={e => {
                  e.preventDefault();
                  document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`block text-sm transition-colors duration-200 hover:text-primary ${
                  heading.level === 3 ? 'pl-3' : ''
                } ${
                  activeId === heading.id
                    ? 'font-semibold text-primary'
                    : 'text-base-content/50'
                }`}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default TableOfContents;
