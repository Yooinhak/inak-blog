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

const Article = async ({ content }: { content: string }) => (
  <MDXRemote
    source={content}
    components={{ pre: CodeBlock }}
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
    <article className="page-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ReadProgress />
      <div className="wrap post-top">
        <Link className="back-link mono" href={`/posts?category=${category}`}>
          ← {c.label}
        </Link>
        <div className="post-hero">
          <span className="eyebrow" style={{ color: `oklch(0.6 0.16 ${c.hue})` }}>
            {c.label}
          </span>
          <h1>{detail.title}</h1>
          {current ? <MetaRow post={current} /> : <span className="meta-row mono">{detail.formattedCreatedDate}</span>}
          {current?.tags?.length ? (
            <div className="post-tags">
              {current.tags.map(t => (
                <Link key={t} className="chip tag" href={`/posts?tag=${encodeURIComponent(t)}`}>
                  {t}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
        <div className="post-cover">
          <CategoryThumb category={category} size="hero" />
        </div>
      </div>

      <div className="wrap post-layout">
        <aside className="post-aside">
          <TableOfContents contentId="post-content" />
          <LikeButton id={`${category}/${id}`} initialLikes={current?.likes ?? 0} views={current?.views} />
        </aside>

        <div className="post-main">
          <div className="post-prose" id="post-content">
            <Suspense fallback={<p>불러오는 중…</p>}>
              <Article content={detail.content} />
            </Suspense>
          </div>

          <div className="post-end glass">
            <div className="post-end-author">
              <Image src="/images/inhak-profile.jpg" alt="Inak" width={52} height={52} />
              <div>
                <span className="ea-name">
                  이낙 <b>Inak</b>
                </span>
                <span className="ea-role mono">Frontend Developer</span>
              </div>
              <Link className="btn btn-ghost" href="/about">
                소개 보기
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap sec">
        <div className="sec-head">
          <div>
            <span className="eyebrow">/ related</span>
            <h2 className="sec-title">관련 글</h2>
          </div>
        </div>
        <div className="grid-3">
          {rel.map(p => (
            <PostCard key={p.url} post={p} />
          ))}
        </div>
      </div>

      <div className="wrap">
        <SupportCoffee />
      </div>
    </article>
  );
}
