import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';

import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';

import { getPostDetail } from '@lib/postManagement';
import { PostDetail } from '@lib/postManagement/types';

interface PageParams {
  params: Promise<{ category: string; id: string }>;
}

const Page = async ({ params }: PageParams) => {
  const { category, id } = await params;
  const postDetail: PostDetail = getPostDetail(category, id);

  return (
    <div className="w-full px-4 py-10">
      <div className="mx-auto w-full max-w-7xl rounded-3xl border border-white/40 bg-base-100/70 p-6 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.6)] backdrop-blur-xl dark:border-white/10 dark:bg-base-100/15">
        <div className={'prose dark:prose-invert w-full max-w-none'}>
          <Image
            src={'/posts/react/default.svg'}
            alt={'preview image'}
            className={'rounded-2xl w-full my-4 max-h-80 object-cover'}
            width={0}
            height={0}
            sizes={'100%'}
          />

          <h2>{postDetail.title}</h2>
          <div>{postDetail.formattedCreatedDate}</div>

          <article>
            <MDXRemote
              source={postDetail.content}
              options={{
                mdxOptions: {
                  /*
                    remarkGfm: 깃허브 Flavored 마크다운 지원
                    remarkBreaks: markdown은 기본적으로 두 줄 개행인데, 한 줄로도 개행하게 해줍니다.
                  */
                  remarkPlugins: [remarkGfm, remarkBreaks],
                  /**
                   * rehypePrettyCode: 코드 블록을 아름답게 꾸며줍니다.
                   * rehypeSlug: 변환된 html 각 heading에 id를 부여해줍니다. 추후 ToC를 만들 때 활용됩니다.
                   */
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
        </div>
      </div>
    </div>
  );
};

export default Page;
