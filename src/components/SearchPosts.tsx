'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { CATEGORIES, getCategory } from '@lib/categories';
import type { PostAbstract } from '@lib/postManagement/types';
import { wrap, eyebrow, chip, chipActive, chipTag, btnGhost, grid3 } from '@lib/ui';
import { cn } from '@utils/cn';
import PostCard from './PostCard';
import { IconSearch, IconGrid, IconList } from './icons';

type Tag = { name: string; count: number };

const segBtn = cn(
  'inline-flex items-center justify-center gap-[5px] border-none px-[13px] py-[7px] rounded-full',
  'text-[13px] font-semibold cursor-pointer font-sans transition-all duration-[220ms] ease-fluid',
);
const segBtnOn = 'bg-accent text-on-accent [box-shadow:0_6px_14px_-8px_var(--accent),inset_0_1px_0_oklch(1_0_0/0.25)]';
const seg = cn(
  'inline-flex p-[3px] rounded-full border border-glass-border backdrop-blur-[10px]',
  '[background:linear-gradient(177deg,var(--glass-sheen),var(--glass-sheen-2)_70%),var(--glass-bg)]',
  '[box-shadow:inset_0_1px_0_var(--glass-hi)]',
);
const afPill = cn(
  'px-[11px] py-[5px] rounded-full bg-accent-soft text-accent font-semibold cursor-pointer',
  'border-none font-[inherit] text-[inherit] hover:bg-accent hover:text-on-accent',
);
const chipCount = 'font-mono text-[11px] opacity-60 ml-0.5';

export default function SearchPosts({ posts, tags }: { posts: PostAbstract[]; tags: Tag[] }) {
  const params = useSearchParams();
  const [q, setQ] = useState('');
  const [cat, setCat] = useState(params.get('category') ?? '');
  const [tag, setTag] = useState(params.get('tag') ?? '');
  const [layout, setLayout] = useState<'grid' | 'row'>('grid');
  const [sort, setSort] = useState<'recent' | 'popular'>('recent');
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => { if (params.get('focus')) searchRef.current?.focus(); }, [params]);

  const counts: Record<string, number> = {};
  posts.forEach((p) => (counts[p.category] = (counts[p.category] || 0) + 1));

  const results = useMemo(() => {
    let list = posts.filter((p) => {
      if (cat && p.category !== cat) return false;
      if (tag && !(p.tags ?? []).includes(tag)) return false;
      if (q.trim()) {
        const hay = `${p.title} ${p.excerpt ?? ''} ${(p.tags ?? []).join(' ')} ${p.category}`.toLowerCase();
        if (!hay.includes(q.trim().toLowerCase())) return false;
      }
      return true;
    });
    if (sort === 'popular') list = [...list].sort((a, b) => (b.views ?? 0) - (a.views ?? 0));
    else list = [...list].sort((a, b) => b.date.localeCompare(a.date));
    return list;
  }, [posts, cat, tag, q, sort]);

  const hasFilter = q || cat || tag;
  const heading = cat ? getCategory(cat).label : tag ? `#${tag}` : '모든 글';

  return (
    <div className={cn(wrap, 'pt-9')}>
      <div className="mb-[26px]">
        <span className={eyebrow}>/ posts</span>
        <h1 className="mt-2 mb-1.5 text-[clamp(32px,5vw,52px)] font-extrabold tracking-[-0.035em] text-text">{heading}</h1>
        <p className="font-mono text-[13px] text-text-mute">
          {results.length} {results.length === 1 ? 'post' : 'posts'} · 프론트엔드 · React · 개발 기록
        </p>
      </div>

      <div
        className={cn(
          'glass group flex items-center gap-3 py-[5px] pr-[7px] pl-[18px] mb-5 text-text-mute',
          'transition-[border-color,box-shadow] duration-[250ms] ease-fluid',
          'focus-within:border-accent',
          'focus-within:[box-shadow:var(--glass-shadow),inset_0_1px_0_var(--glass-hi),0_0_0_4px_var(--accent-soft)]',
        )}
      >
        <IconSearch size={19} className="shrink-0 transition-colors duration-[250ms] group-focus-within:text-accent" />
        <input
          ref={searchRef}
          type="text"
          placeholder="제목, 내용, 태그로 검색…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="flex-1 min-w-0 border-none bg-transparent outline-none py-3.5 text-base font-sans text-text placeholder:text-text-mute"
        />
        {q ? (
          <button
            className="border-none bg-accent-soft text-accent w-[30px] h-[30px] rounded-full text-[19px] leading-none cursor-pointer shrink-0 transition-colors duration-200 hover:bg-accent hover:text-on-accent"
            onClick={() => setQ('')}
            aria-label="검색 지우기"
          >
            ×
          </button>
        ) : (
          <span className="font-mono inline-flex items-center gap-1 shrink-0 px-[11px] py-1.5 rounded-full text-[11.5px] font-semibold text-text-mute bg-field border border-hairline group-focus-within:opacity-0">
            검색
          </span>
        )}
      </div>

      <div className="flex items-center justify-between gap-4 mb-[18px] flex-wrap max-[560px]:flex-col max-[560px]:items-stretch">
        <div className="flex flex-wrap gap-2">
          <button className={!cat ? chipActive : chip} onClick={() => setCat('')}>전체</button>
          {Object.entries(CATEGORIES).map(([k, c]) => (
            counts[k] ? (
              <button key={k} className={cat === k ? chipActive : chip} onClick={() => setCat(cat === k ? '' : k)}>
                {c.label} <span className={cn(chipCount, cat === k && 'opacity-80')}>{counts[k]}</span>
              </button>
            ) : null
          ))}
        </div>
        <div className="flex gap-2 items-center max-[560px]:justify-between">
          <div className={seg}>
            <button className={cn(segBtn, sort === 'recent' ? segBtnOn : 'bg-transparent text-text-mute')} onClick={() => setSort('recent')}>최신</button>
            <button className={cn(segBtn, sort === 'popular' ? segBtnOn : 'bg-transparent text-text-mute')} onClick={() => setSort('popular')}>인기</button>
          </div>
          <div className={seg}>
            <button className={cn(segBtn, layout === 'grid' ? segBtnOn : 'bg-transparent text-text-mute')} onClick={() => setLayout('grid')} aria-label="그리드"><IconGrid /></button>
            <button className={cn(segBtn, layout === 'row' ? segBtnOn : 'bg-transparent text-text-mute')} onClick={() => setLayout('row')} aria-label="리스트"><IconList /></button>
          </div>
        </div>
      </div>

      {tags.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 pt-4 pb-[22px] border-t border-hairline mb-2">
          <span className={cn(eyebrow, 'mr-1.5')}>tags</span>
          {tags.map((t) => (
            <button
              key={t.name}
              className={cn(tag === t.name ? chipActive : chip, chipTag)}
              onClick={() => setTag(tag === t.name ? '' : t.name)}
            >
              {t.name}<span className={cn(chipCount, tag === t.name && 'opacity-80')}>{t.count}</span>
            </button>
          ))}
        </div>
      )}

      {hasFilter && (
        <div className="font-mono flex flex-wrap items-center gap-2.5 text-[12.5px] text-text-mute mb-[22px]">
          <span>필터:</span>
          {cat && <button className={afPill} onClick={() => setCat('')}>{getCategory(cat).label} ×</button>}
          {tag && <button className={afPill} onClick={() => setTag('')}>#{tag} ×</button>}
          {q && <button className={afPill} onClick={() => setQ('')}>&quot;{q}&quot; ×</button>}
          <button
            className="font-mono border-none bg-transparent text-text-soft underline cursor-pointer text-xs"
            onClick={() => { setCat(''); setTag(''); setQ(''); }}
          >
            모두 지우기
          </button>
        </div>
      )}

      {results.length === 0 ? (
        <div className="glass text-center px-6 py-16 flex flex-col items-center gap-2">
          <span className="font-mono text-[56px] text-text-mute opacity-50">∅</span>
          <h3 className="mt-1.5 mb-0 text-[22px] font-bold">검색 결과가 없어요</h3>
          <p className="mt-0 mb-3.5 text-text-soft">다른 키워드나 카테고리로 찾아보세요.</p>
          <button className={btnGhost} onClick={() => { setCat(''); setTag(''); setQ(''); }}>필터 초기화</button>
        </div>
      ) : layout === 'grid' ? (
        <div className={cn(grid3, 'mt-1')}>{results.map((p) => <PostCard key={p.url} post={p} />)}</div>
      ) : (
        <div className="flex flex-col gap-3.5">{results.map((p) => <PostCard key={p.url} post={p} layout="row" />)}</div>
      )}
    </div>
  );
}
