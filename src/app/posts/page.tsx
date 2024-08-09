import { getPostList } from '@lib/postManagement';
import { PostAbstract } from '@lib/postManagement/types';

import Link from 'next/link';
import { useMemo } from 'react';

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
    <div className="flex flex-col gap-4 p-4">
      <div className="flex gap-2">
        {postCategoryOptions.map((categoryOption, categoryOptionIndex) => (
          <Link
            key={`${categoryOption.value}_${categoryOptionIndex}`}
            href={{
              pathname: 'posts',
              query: { category: categoryOption.value },
            }}
          >
            {`${categoryOptionIndex + 1}. ${categoryOption.label}`}
          </Link>
        ))}
      </div>

      <div className="flex flex-col">
        {postListFilteredByCategry.map(postItem => (
          <Link
            className="cursor-pointer"
            key={`${postItem.category}_${postItem.slug}`}
            href={postItem.url}
          >{`${postItem.category}_${postItem.slug}`}</Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
