import { MDXRemote } from 'next-mdx-remote/rsc';

import { getPostDetail } from '@lib/postManagement';
import { PostDetail } from '@lib/postManagement/types';

import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import remarkBreaks from 'remark-breaks';
import Image from 'next/image';

interface PageParams {
  params: {
    category: string;
    slug: string;
  };
}

const Page = ({ params }: PageParams) => {
  const { category, slug } = params;
  const postDetail: PostDetail = getPostDetail(category, slug);

  return (
    <div className={'prose dark:prose-invert mx-auto w-full px-5'}>
      <div className="relative w-auto h-full max-h-80">
        <Image
          src={'/test/친칠라2.png'}
          alt={'preview image'}
          fill
          objectFit={'cover'}
          className={'mx-0'}
        />
      </div>

      <div className="mt-12">{postDetail.title}</div>
      <div>{postDetail.formattedCreatedDate}</div>

      <article>
        {/* @ts-expect-error Async Server Component */}
        <MDXRemote
          source={postDetail.content}
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
    </div>
  );
};

export default Page;
