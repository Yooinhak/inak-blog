import Link from 'next/link';

import { CATEGORIES, fmtNum, getCategory } from '@lib/categories';
import type { PostAbstract } from '@lib/postManagement/types';
import { eyebrow, btnPrimary, btnGhost, sec, secHead, secTitle, secMore, grid3 } from '@lib/ui';
import { cn } from '@utils/cn';

import CategoryThumb from '../CategoryThumb';
import MetaRow from '../MetaRow';
import PostCard from '../PostCard';
import RotatingText from '../RotatingText';
import { IconArrow } from '../icons';

export function StatStrip({ posts, compact = false }: { posts: PostAbstract[]; compact?: boolean }) {
  const views = posts.reduce((s, p) => s + (p.views ?? 0), 0);
  const tagSet = new Set<string>();
  posts.forEach(p => (p.tags ?? []).forEach(t => tagSet.add(t)));
  const items = [
    { n: posts.length, l: 'posts' },
    { n: new Set(posts.map(p => p.category)).size, l: 'categories' },
    { n: tagSet.size, l: 'tags' },
    // only show views once real counts exist (frontmatter/api) — no fake metrics
    ...(views ? [{ n: fmtNum(views), l: 'views' }] : []),
  ];
  return (
    <div className={cn('flex flex-wrap', compact ? 'gap-[22px]' : 'gap-[30px] max-[560px]:gap-[22px]')}>
      {items.map((it, i) => (
        <div className="flex flex-col gap-0.5" key={i}>
          <span className="font-mono text-[26px] font-extrabold text-text tracking-[-0.02em] leading-none">{it.n}</span>
          <span className="font-mono text-[11px] font-medium text-text-mute tracking-[0.08em] uppercase">{it.l}</span>
        </div>
      ))}
    </div>
  );
}

export function FeaturedCard({ post }: { post: PostAbstract }) {
  const c = getCategory(post.category);
  return (
    <Link
      href={post.url}
      className={cn(
        'glass group flex flex-col overflow-hidden cursor-pointer',
        'transition-[transform,box-shadow,border-color] duration-[320ms] ease-fluid',
        'hover:-translate-y-[5px] hover:border-accent hover:[box-shadow:var(--glass-shadow-lg)]',
      )}
    >
      <div className="aspect-video">
        <CategoryThumb category={post.category} size="hero" />
      </div>
      <div className="pt-[18px] px-[22px] pb-[22px] flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <span className="font-mono inline-flex items-center text-[10.5px] font-bold tracking-[0.12em] px-2.5 py-[5px] rounded-full bg-accent text-on-accent shrink-0">
            ★ FEATURED
          </span>
          <span className={eyebrow} style={{ color: `oklch(0.6 0.16 ${c.hue})` }}>
            {c.label}
          </span>
        </div>
        <h2 className="m-0 text-[clamp(20px,2.3vw,26px)] font-extrabold leading-[1.25] tracking-[-0.025em] line-clamp-2 group-hover:text-accent">
          {post.title}
        </h2>
        {post.excerpt ? <p className="m-0 text-sm leading-[1.62] text-text-soft line-clamp-2">{post.excerpt}</p> : null}
        <MetaRow post={post} />
        <span className="inline-flex items-center gap-[7px] font-bold text-[14.5px] text-accent [&_svg]:transition-transform [&_svg]:duration-[280ms] [&_svg]:ease-fluid group-hover:[&_svg]:translate-x-1">
          글 읽기 <IconArrow />
        </span>
      </div>
    </Link>
  );
}

export function Hero({ featured, posts }: { featured: PostAbstract; posts: PostAbstract[] }) {
  return (
    <section className="grid grid-cols-[1.05fr_0.95fr] gap-14 items-center pt-[clamp(36px,7vw,88px)] pb-16 min-h-[70vh] max-[900px]:grid-cols-1 max-[900px]:gap-9">
      <div className="flex flex-col gap-6">
        <span className={eyebrow}>Frontend Developer · 이낙</span>
        <h1 className="mt-1.5 mb-0 text-[clamp(40px,6vw,68px)] font-extrabold leading-[1.05] tracking-[-0.035em] text-text">
          Building
          <br />
          <span className="text-[0.96em]">
            <RotatingText />
          </span>
          <br />
          with care.
        </h1>
        <p className="m-0 text-base leading-[1.7] text-text-soft max-w-[46ch]">
          복잡한 문제를 단순하게 풀어내는 것을 좋아합니다.
          <br />
          사용자 중심의 웹 경험을 만들기 위해 고민하고 기록합니다.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link className={btnPrimary} href="/posts">
            블로그 보러가기 <IconArrow />
          </Link>
          <Link className={btnGhost} href="/about">
            소개 더 보기
          </Link>
        </div>
        <StatStrip posts={posts} />
      </div>
      <div>
        <FeaturedCard post={featured} />
      </div>
    </section>
  );
}

export function LatestSection({ posts }: { posts: PostAbstract[] }) {
  const rest = posts.filter(p => !p.featured).slice(0, 6);
  return (
    <section className={sec}>
      <div className={secHead}>
        <div>
          <span className={eyebrow}>/ latest</span>
          <h2 className={secTitle}>최근 글</h2>
        </div>
        <Link className={secMore} href="/posts">
          전체 보기 <IconArrow />
        </Link>
      </div>
      <div className={grid3}>
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
    <section className={sec}>
      <div className={secHead}>
        <div>
          <span className={eyebrow}>/ explore</span>
          <h2 className={secTitle}>카테고리</h2>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
        {Object.entries(CATEGORIES).map(([key, c]) =>
          counts[key] ? (
            <Link
              key={key}
              className={cn(
                'glass group relative flex items-center gap-3.5 p-[18px] cursor-pointer no-underline overflow-hidden',
                'transition-[transform,box-shadow,border-color] duration-300 ease-fluid',
                'hover:-translate-y-1 hover:[box-shadow:var(--glass-shadow-lg)] hover:border-[oklch(0.6_0.16_var(--ch))]',
              )}
              href={`/posts?category=${key}`}
              style={{ ['--ch' as string]: c.hue }}
            >
              <span className="font-mono flex items-center justify-center w-12 h-12 rounded-[14px] text-2xl font-extrabold shrink-0 text-[oklch(0.98_0.02_var(--ch))] bg-[linear-gradient(150deg,oklch(0.55_0.15_var(--ch)),oklch(0.42_0.12_calc(var(--ch)+25)))]">
                {c.glyph}
              </span>
              <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                <span className="text-base font-bold text-text tracking-[-0.02em]">{c.label}</span>
                <span className="font-mono text-[11.5px] text-text-mute">{counts[key]} posts</span>
              </div>
              <span className="text-text-mute transition-[transform,color] duration-[280ms] ease-fluid group-hover:text-[oklch(0.6_0.16_var(--ch))] group-hover:translate-x-[3px]">
                <IconArrow />
              </span>
            </Link>
          ) : null,
        )}
      </div>
    </section>
  );
}
