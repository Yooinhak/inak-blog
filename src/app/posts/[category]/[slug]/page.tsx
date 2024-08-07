import { MDXRemote } from 'next-mdx-remote/rsc';

import { getPostDetail } from '@lib/postManagement';
import { PostDetail } from '@lib/postManagement/types';

interface PageParams {
  params: {
    category: string;
    slug: string;
  };
}

const Page = ({ params }: PageParams) => {
  const { category, slug } = params;
  const postDetail: PostDetail =  getPostDetail(category, slug);

  return (
    <div>
      {/* <div>{postDetail.title}</div>
      <div>{postDetail.formattedCreatedDate}</div> */}
      
      {/* @ts-expect-error Async Server Component */}
      <MDXRemote source={postDetail.content} />
    </div>
  );
};

export default Page;
