import CategoryFilter from '@components/CategoryFilter';
import PostCard from '@components/PostCard';
import { getPostList } from '@lib/postManagement';
import { getPostCategories } from '@lib/postManagement/getPostList';
import { PostAbstract } from '@lib/postManagement/types';

type SearchParams = Promise<{ category?: string }>;

const Page = async (props: { searchParams: SearchParams }) => {
  const { category } = await props.searchParams;
  const categories = getPostCategories();
  const postList: PostAbstract[] = getPostList(category);

  return (
    <div className="w-full max-w-7xl flex flex-col gap-4 p-4 items-center mx-auto">
      <CategoryFilter categories={categories} />

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
        {postList.map((postItem, postItemIndex) => (
          <PostCard key={`${postItem.category}_${postItem.id}_${postItemIndex}`} post={postItem} />
        ))}
      </section>
    </div>
  );
};

export default Page;
