import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import { Suspense } from 'react';

import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';

import TableOfContents from '@components/TableOfContents';
import { getPostDetail } from '@lib/postManagement';
import { PostDetail } from '@lib/postManagement/types';

interface PageParams {
  params: Promise<{ category: string; id: string }>;
}

const getCategoryThumbnail = (category: string): string => {
  const map: Record<string, string> = {
    ReactNative: '/posts/react/default.svg',
    NextJS: '/posts/nextjs/default.svg',
    Frontend: '/posts/frontend/default.svg',
    DevLog: '/posts/devlog/default.svg',
  };
  return map[category] || '/posts/react/default.svg';
};

const getReadingTime = (content: string): number => {
  // 한국어: ~500자/분, 영어: ~200단어/분
  const koreanChars = (content.match(/[\uac00-\ud7af]/g) || []).length;
  const englishWords = content
    .replace(/[\uac00-\ud7af]/g, '')
    .split(/\s+/)
    .filter(w => w.length > 0).length;
  const minutes = koreanChars / 500 + englishWords / 200;
  return Math.max(1, Math.round(minutes));
};

const stripFirstH1 = (content: string): string => {
  const lines = content.split('\n');
  const firstContentIdx = lines.findIndex(line => line.trim().length > 0);
  if (firstContentIdx >= 0 && /^#\s+/.test(lines[firstContentIdx])) {
    lines.splice(firstContentIdx, 1);
    return lines.join('\n');
  }
  return content;
};

const PostArticle = async ({ content }: { content: string }) => {
  return (
    <article className="mt-8">
      <MDXRemote
        source={content}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm, remarkBreaks],
            rehypePlugins: [
              [
                rehypePrettyCode,
                {
                  theme: {
                    dark: 'github-dark-dimmed',
                    light: 'github-light',
                  },
                },
              ],
              rehypeSlug,
            ],
          },
        }}
      />
    </article>
  );
};

const ArticleSkeleton = () => (
  <div className="mt-8 animate-pulse space-y-4">
    {Array.from({ length: 8 }).map((_, i) => (
      <div key={i} className="space-y-2">
        <div className="h-4 rounded bg-base-content/10" style={{ width: `${75 + ((i * 17) % 25)}%` }} />
        <div className="h-4 rounded bg-base-content/10" style={{ width: `${50 + ((i * 13) % 40)}%` }} />
      </div>
    ))}
  </div>
);

const Page = async ({ params }: PageParams) => {
  const { category, id } = await params;
  const postDetail: PostDetail = getPostDetail(category, id);
  const readingTime = getReadingTime(postDetail.content);
  const thumbnail = getCategoryThumbnail(category);
  const content = stripFirstH1(postDetail.content);

  return (
    <section className="relative min-h-[calc(100vh_-_65px_-_52px)] overflow-hidden text-base-content">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 h-[360px] w-[360px] rounded-full bg-pink-300/40 blur-[140px] dark:bg-pink-600/30" />
        <div className="absolute -bottom-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-300/30 blur-[160px] dark:bg-cyan-500/20" />
      </div>

      <div className="relative z-10 w-full px-0 py-12">
        <div className="mx-auto w-full max-w-4xl rounded-3xl border border-white/40 bg-base-100/70 p-6 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.6)] backdrop-blur-xl dark:border-white/10 dark:bg-base-100/15 sm:p-10">
          <div className="prose dark:prose-invert w-full max-w-none">
            <Image
              src={thumbnail}
              alt={'preview image'}
              className="my-4 max-h-80 w-full rounded-2xl object-cover"
              width={1200}
              height={630}
              sizes="(max-width: 1024px) 100vw, 960px"
              priority
              fetchPriority="high"
            />

            <div className="not-prose space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-base-content/50">{category}</p>
              <h1 className="text-3xl font-bold sm:text-4xl">{postDetail.title}</h1>
              <div className="flex items-center gap-3 text-sm text-base-content/50">
                <span>{postDetail.formattedCreatedDate}</span>
                <span className="h-1 w-1 rounded-full bg-base-content/30" />
                <span>{readingTime}분 읽기</span>
              </div>
            </div>

            <Suspense fallback={<ArticleSkeleton />}>
              <PostArticle content={content} />
            </Suspense>
          </div>
        </div>

        <TableOfContents />
      </div>
    </section>
  );
};

export default Page;
