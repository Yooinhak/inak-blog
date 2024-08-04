import { getPostList } from '@lib/postManagement';

const Page = () => {
  const postList = getPostList();

  return (
    <div>
      {postList.map(postItem => `${postItem.category}_${postItem.slug}`)}
    </div>
  );
};

export default Page;
