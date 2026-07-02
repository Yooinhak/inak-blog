'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { CATEGORIES, getCategory } from '@lib/categories';
import type { PostAbstract } from '@lib/postManagement/types';
import PostCard from './PostCard';
import { IconSearch, IconGrid, IconList } from './icons';

type Tag = { name: string; count: number };

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
    <div className="wrap page-posts">
      <div className="posts-head">
        <span className="eyebrow">/ posts</span>
        <h1>{heading}</h1>
        <p className="posts-sub mono">{results.length} {results.length === 1 ? 'post' : 'posts'} · 프론트엔드 · React · 개발 기록</p>
      </div>

      <div className="search-bar glass">
        <IconSearch size={19} />
        <input ref={searchRef} type="text" placeholder="제목, 내용, 태그로 검색…" value={q} onChange={(e) => setQ(e.target.value)} />
        {q ? <button className="search-clear" onClick={() => setQ('')} aria-label="검색 지우기">×</button>
           : <span className="search-kbd">검색</span>}
      </div>

      <div className="filter-row">
        <div className="chips">
          <button className={`chip ${!cat ? 'active' : ''}`} onClick={() => setCat('')}>전체</button>
          {Object.entries(CATEGORIES).map(([k, c]) => (
            counts[k] ? (
              <button key={k} className={`chip ${cat === k ? 'active' : ''}`} onClick={() => setCat(cat === k ? '' : k)}>
                {c.label} <span className="chip-count mono">{counts[k]}</span>
              </button>
            ) : null
          ))}
        </div>
        <div className="view-tools">
          <div className="seg">
            <button className={sort === 'recent' ? 'on' : ''} onClick={() => setSort('recent')}>최신</button>
            <button className={sort === 'popular' ? 'on' : ''} onClick={() => setSort('popular')}>인기</button>
          </div>
          <div className="seg">
            <button className={layout === 'grid' ? 'on' : ''} onClick={() => setLayout('grid')} aria-label="그리드"><IconGrid /></button>
            <button className={layout === 'row' ? 'on' : ''} onClick={() => setLayout('row')} aria-label="리스트"><IconList /></button>
          </div>
        </div>
      </div>

      {tags.length > 0 && (
        <div className="tag-cloud">
          <span className="eyebrow tag-cloud-label">tags</span>
          {tags.map((t) => (
            <button key={t.name} className={`chip tag ${tag === t.name ? 'active' : ''}`} onClick={() => setTag(tag === t.name ? '' : t.name)}>
              {t.name}<span className="chip-count mono">{t.count}</span>
            </button>
          ))}
        </div>
      )}

      {hasFilter && (
        <div className="active-filters mono">
          <span>필터:</span>
          {cat && <button className="af-pill" onClick={() => setCat('')}>{getCategory(cat).label} ×</button>}
          {tag && <button className="af-pill" onClick={() => setTag('')}>#{tag} ×</button>}
          {q && <button className="af-pill" onClick={() => setQ('')}>&quot;{q}&quot; ×</button>}
          <button className="af-clear" onClick={() => { setCat(''); setTag(''); setQ(''); }}>모두 지우기</button>
        </div>
      )}

      {results.length === 0 ? (
        <div className="empty glass">
          <span className="empty-glyph mono">∅</span>
          <h3>검색 결과가 없어요</h3>
          <p>다른 키워드나 카테고리로 찾아보세요.</p>
          <button className="btn btn-ghost" onClick={() => { setCat(''); setTag(''); setQ(''); }}>필터 초기화</button>
        </div>
      ) : layout === 'grid' ? (
        <div className="grid-3 posts-grid">{results.map((p) => <PostCard key={p.url} post={p} />)}</div>
      ) : (
        <div className="posts-rows">{results.map((p) => <PostCard key={p.url} post={p} layout="row" />)}</div>
      )}
    </div>
  );
}
