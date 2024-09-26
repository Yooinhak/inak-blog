import Link from 'next/link';
import { useMemo } from 'react';

import { getPostList } from '@lib/postManagement';
import { PostAbstract } from '@lib/postManagement/types';
import Chip from '@components/Chip';
import PostCard from '@components/PostCard';

interface SearchParams {
  searchParams: {
    category?: string;
  };
}

interface CategoryOptionItem {
  label: string;
  value?: string;
}

const Page = ({ searchParams }: SearchParams) => {
  const { category } = searchParams;
  const postList: PostAbstract[] = getPostList();

  const postCategoryOptions = useMemo(() => {
    const allCategories = postList.map(post => post.category);

    // 중복제거
    return allCategories.reduce<CategoryOptionItem[]>(
      (acc, curr) => {
        return acc.some(a => a.value === curr)
          ? acc
          : [...acc, { label: curr, value: curr }];
      },
      [{ label: '전체', value: '' }],
    );
  }, [postList]);

  const postListFilteredByCategry = useMemo(() => {
    if (!category) {
      return postList;
    } else {
      return postList.filter(post => post.category === category);
    }
  }, [postList, category]);

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-7xl flex flex-col gap-4 p-4 items-center">
        <div className="flex gap-4 py-5">
          {postCategoryOptions.map((categoryOption, categoryOptionIndex) => (
            <Link
              key={`${categoryOption.value}_${categoryOptionIndex}`}
              href={{
                pathname: 'posts',
                query: { category: categoryOption.value },
              }}
            >
              <Chip
                label={`${categoryOptionIndex + 1}. ${categoryOption.label}`}
                type={'neomorphism'}
                selected={category === categoryOption.value}
              />
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {postListFilteredByCategry.map(postItem => (
            <Link
              className="cursor-pointer"
              key={`${postItem.category}_${postItem.slug}`}
              href={postItem.url}
            >
              <PostCard
                thumbnailImage="/test/친칠라2.png"
                title={postItem.slug}
                category={postItem.category}
                description=""
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
