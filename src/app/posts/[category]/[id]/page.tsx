import type { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';

import CategoryThumb from '@components/CategoryThumb';
import CodeBlock from '@components/CodeBlock';
import LikeButton from '@components/LikeButton';
import MetaRow from '@components/MetaRow';
import PostCard from '@components/PostCard';
import ReadProgress from '@components/ReadProgress';
import SupportCoffee from '@components/SupportCoffee';
import TableOfContents from '@components/TableOfContents';
import { getCategory } from '@lib/categories';
import { getPostDetail } from '@lib/postManagement';
import { getPostList } from '@lib/postManagement/getPostList';
import type { PostDetail } from '@lib/postManagement/types';
import { SITE } from '@lib/siteConfig';
import { wrap, eyebrow, chip, chipTag, btnGhost, sec, secHead, secTitle, grid3 } from '@lib/ui';
import { cn } from '@utils/cn';

interface PageParams {
  params: Promise<{ category: string; id: string }>;
}

/** Pre-render every post at build time. */
export function generateStaticParams() {
  return getPostList().map(p => ({ category: p.category, id: p.id }));
}

/** Per-post title/description/OG — without this every post shares the site-wide metadata. */
export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { category, id } = await params;
  const detail = getPostDetail(category, id);
  const url = `/posts/${category}/${id}`;

  return {
    title: detail.title,
    description: detail.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: detail.title,
      description: detail.excerpt,
      url,
      siteName: SITE.name,
      type: 'article',
      locale: SITE.locale,
      tags: detail.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: detail.title,
      description: detail.excerpt,
    },
  };
}

/** Tables need a scroll wrapper — a bare <table>'s min-content width
    (th is nowrap) overflows the viewport on mobile. */
const Table = (props: React.ComponentPropsWithoutRef<'table'>) => (
  <div className="table-wrap">
    <table {...props} />
  </div>
);

const Article = async ({ content }: { content: string }) => (
  <MDXRemote
    source={content}
    components={{ pre: CodeBlock, table: Table }}
    options={{
      mdxOptions: {
        remarkPlugins: [remarkGfm, remarkBreaks],
        rehypePlugins: [
          [rehypePrettyCode, { theme: { dark: 'github-dark-dimmed', light: 'github-light' } }],
          rehypeSlug,
        ],
      },
    }}
  />
);

export default async function Page({ params }: PageParams) {
  const { category, id } = await params;
  const detail: PostDetail = getPostDetail(category, id);
  const c = getCategory(category);

  const all = getPostList();
  const current = all.find(p => p.category === category && p.id === id);
  const related = all.filter(p => p.category === category && p.id !== id).slice(0, 3);
  const fill =
    related.length < 3 ? all.filter(p => p.id !== id && !related.includes(p)).slice(0, 3 - related.length) : [];
  const rel = [...related, ...fill];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: detail.title,
    description: detail.excerpt,
    datePublished: current?.date,
    inLanguage: 'ko',
    url: `${SITE.url}/posts/${category}/${id}`,
    author: { '@type': 'Person', name: SITE.author, url: `${SITE.url}/about` },
    keywords: detail.tags?.join(', '),
  };

  return (
    <article className="pt-5">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ReadProgress />
      <div className={cn(wrap, 'pt-6')}>
        <Link
          className={cn(
            'font-mono inline-flex text-text-mute text-[13px] font-semibold cursor-pointer p-0 mb-6 no-underline',
            'transition-[color,transform] duration-200 hover:text-accent hover:-translate-x-[3px]',
          )}
          href={`/posts?category=${category}`}
        >
          ← {c.label}
        </Link>
        <div className="max-w-[820px] flex flex-col gap-4">
          <span className={eyebrow} style={{ color: `oklch(0.6 0.16 ${c.hue})` }}>
            {c.label}
          </span>
          <h1 className="mt-1.5 mb-1 text-[clamp(30px,4.4vw,48px)] font-extrabold leading-[1.18] tracking-[-0.035em] text-text text-balance break-words">
            {detail.title}
          </h1>
          {current ? <MetaRow post={current} /> : <span className="font-mono text-xs text-text-mute">{detail.formattedCreatedDate}</span>}
          {current?.tags?.length ? (
            <div className="flex flex-wrap gap-2 mt-1">
              {current.tags.map(t => (
                <Link key={t} className={cn(chip, chipTag)} href={`/posts?tag=${encodeURIComponent(t)}`}>
                  {t}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
        <div className="mt-8 aspect-[21/8] max-[880px]:aspect-video">
          <CategoryThumb category={category} size="hero" rounded="card" />
        </div>
      </div>

      <div
        className={cn(
          wrap,
          'grid grid-cols-[230px_minmax(0,1fr)] gap-12 items-start mt-12',
          'max-[880px]:grid-cols-[minmax(0,1fr)] max-[880px]:gap-2',
        )}
      >
        <aside
          className={cn(
            'sticky top-24 flex flex-col gap-6',
            'max-[880px]:static max-[880px]:flex-row max-[880px]:items-center max-[880px]:justify-between',
            'max-[880px]:flex-wrap max-[880px]:gap-4 max-[880px]:mb-2 max-[880px]:pb-4',
            'max-[880px]:border-b max-[880px]:border-hairline',
          )}
        >
          <TableOfContents contentId="post-content" />
          <LikeButton id={`${category}/${id}`} initialLikes={current?.likes ?? 0} views={current?.views} />
        </aside>

        <div className="min-w-0">
          <div className="post-prose" id="post-content">
            <Suspense fallback={<p>불러오는 중…</p>}>
              <Article content={detail.content} />
            </Suspense>
          </div>

          <div className="glass mt-12 p-7 flex flex-col gap-6">
            <div className="flex items-center gap-4 max-[560px]:flex-wrap max-[560px]:gap-3">
              <Image
                src="/images/inhak-profile.jpg"
                alt="Inak"
                width={52}
                height={52}
                className="w-[52px] h-[52px] rounded-full object-cover border-2 border-glass-border"
              />
              <div className="flex flex-col gap-[3px] flex-1 min-w-0">
                <span className="text-[15px] font-semibold text-text">
                  이낙 <b>Inak</b>
                </span>
                <span className="font-mono text-xs text-text-mute">Frontend Developer</span>
              </div>
              <Link className={cn(btnGhost, 'max-[560px]:basis-full max-[560px]:justify-center')} href="/about">
                소개 보기
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={cn(wrap, sec)}>
        <div className={secHead}>
          <div>
            <span className={eyebrow}>/ related</span>
            <h2 className={secTitle}>관련 글</h2>
          </div>
        </div>
        <div className={grid3}>
          {rel.map(p => (
            <PostCard key={p.url} post={p} />
          ))}
        </div>
      </div>

      <div className={wrap}>
        <SupportCoffee />
      </div>
    </article>
  );
}
