import Link from 'next/link';

import { CATEGORIES, fmtNum, getCategory } from '@lib/categories';
import type { PostAbstract } from '@lib/postManagement/types';

import CategoryThumb from '../CategoryThumb';
import MetaRow from '../MetaRow';
import PostCard from '../PostCard';
import RotatingText from '../RotatingText';
import { IconArrow } from '../icons';

export function StatStrip({ posts }: { posts: PostAbstract[] }) {
  const views = posts.reduce((s, p) => s + (p.views ?? 0), 0);
  const tagSet = new Set<string>();
  posts.forEach(p => (p.tags ?? []).forEach(t => tagSet.add(t)));
  const items = [
    { n: posts.length, l: 'posts' },
    { n: new Set(posts.map(p => p.category)).size, l: 'categories' },
    { n: tagSet.size, l: 'tags' },
    { n: views ? fmtNum(views) : '∞', l: 'views' },
  ];
  return (
    <div className="stat-strip">
      {items.map((it, i) => (
        <div className="stat" key={i}>
          <span className="stat-n mono">{it.n}</span>
          <span className="stat-l mono">{it.l}</span>
        </div>
      ))}
    </div>
  );
}

export function FeaturedCard({ post }: { post: PostAbstract }) {
  const c = getCategory(post.category);
  return (
    <Link href={post.url} className="feat feat-panel glass">
      <div className="feat-thumb">
        <CategoryThumbHero category={post.category} />
      </div>
      <div className="feat-body">
        <div className="feat-tagline">
          <span className="pill-featured mono">★ FEATURED</span>
          <span className="eyebrow" style={{ color: `oklch(0.6 0.16 ${c.hue})` }}>
            {c.label}
          </span>
        </div>
        <h2>{post.title}</h2>
        {post.excerpt ? <p>{post.excerpt}</p> : null}
        <MetaRow post={post} />
        <span className="feat-cta">
          글 읽기 <IconArrow />
        </span>
      </div>
    </Link>
  );
}

// inline wrapper for the hero-size thumbnail
function CategoryThumbHero({ category }: { category: string }) {
  return <CategoryThumb category={category} size="hero" />;
}

export function Hero({ featured, posts }: { featured: PostAbstract; posts: PostAbstract[] }) {
  return (
    <section className="hero-edit">
      <div className="hero-edit-text">
        <span className="eyebrow">Frontend Developer · 이낙</span>
        <h1>
          Building
          <br />
          <RotatingText />
          <br />
          with care.
        </h1>
        <p className="hero-lead">
          복잡한 문제를 단순하게 풀어내는 것을 좋아합니다.
          <br />
          사용자 중심의 웹 경험을 만들기 위해 고민하고 기록합니다.
        </p>
        <div className="hero-cta">
          <Link className="btn btn-primary" href="/posts">
            블로그 보러가기 <IconArrow />
          </Link>
          <Link className="btn btn-ghost" href="/about">
            소개 더 보기
          </Link>
        </div>
        <StatStrip posts={posts} />
      </div>
      <div className="hero-edit-feat">
        <FeaturedCard post={featured} />
      </div>
    </section>
  );
}

export function LatestSection({ posts }: { posts: PostAbstract[] }) {
  const rest = posts.filter(p => !p.featured).slice(0, 6);
  return (
    <section className="sec">
      <div className="sec-head">
        <div>
          <span className="eyebrow">/ latest</span>
          <h2 className="sec-title">최근 글</h2>
        </div>
        <Link className="sec-more" href="/posts">
          전체 보기 <IconArrow />
        </Link>
      </div>
      <div className="grid-3">
        {rest.map(p => (
          <PostCard key={p.url} post={p} />
        ))}
      </div>
    </section>
  );
}

export function CategoryGrid({ posts }: { posts: PostAbstract[] }) {
  const counts: Record<string, number> = {};
  posts.forEach(p => (counts[p.category] = (counts[p.category] || 0) + 1));
  return (
    <section className="sec">
      <div className="sec-head">
        <div>
          <span className="eyebrow">/ explore</span>
          <h2 className="sec-title">카테고리</h2>
        </div>
      </div>
      <div className="cat-strip">
        {Object.entries(CATEGORIES).map(([key, c]) =>
          counts[key] ? (
            <Link
              key={key}
              className="cat-tile glass"
              href={`/posts?category=${key}`}
              style={{ ['--ch' as string]: c.hue }}
            >
              <span className="cat-glyph mono">{c.glyph}</span>
              <div className="cat-tile-meta">
                <span className="cat-tile-label">{c.label}</span>
                <span className="cat-tile-sub mono">{counts[key]} posts</span>
              </div>
              <IconArrow />
            </Link>
          ) : null,
        )}
      </div>
    </section>
  );
}
