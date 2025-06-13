import CategoryFilter from '@components/CategoryFilter';
import PostCard from '@components/PostCard';
import { getPostList } from '@lib/postManagement';
import { PostAbstract } from '@lib/postManagement/types';

type SearchParams = Promise<{ category?: string }>;

type CategoryOptionItem = {
  label: string;
  value?: string;
};

const Page = async (props: { searchParams: SearchParams }) => {
  const { category } = await props.searchParams;
  const postList: PostAbstract[] = getPostList();

  const postCategoryOptions = postList
    .map(post => post.category)
    .reduce<CategoryOptionItem[]>((acc, curr) => {
      return acc.some(a => a.value === curr) ? acc : [...acc, { label: curr, value: curr }];
    }, []);

  const postListFilteredByCategry = category ? postList.filter(post => post.category === category) : postList;

  return (
    <div className="w-full max-w-7xl flex flex-col gap-4 p-4 items-center mx-auto">
      <CategoryFilter postCategoryOptions={postCategoryOptions} />

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
        {postListFilteredByCategry.map((postItem, postItemIndex) => (
          <PostCard
            key={`${postItem.category}_${postItem.slug}_${postItemIndex}`}
            thumbnailImage="/images/logo.png"
            title={postItem.slug}
            category={postItem.category}
            url={postItem.url}
          />
        ))}
      </section>
    </div>
  );
};

export default Page;
