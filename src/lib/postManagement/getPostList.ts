import { sync } from 'glob';

import { BASE_PATH, POSTS_PATH } from './config';
import { PostAbstract } from './types';

const getPostPaths = (category?: string) => {
  const postPaths: string[] = sync(
    `${POSTS_PATH}/${category || '**'}/**/*.mdx`,
  );
  return postPaths;
};

// 모든 포스트 목록 조회
export const getPostList = (category?: string): PostAbstract[] => {
  const paths: string[] = getPostPaths(category);
  const posts = paths.map(postPath => {
    const filePath = postPath
      .slice(postPath.indexOf(BASE_PATH))
      .replace(`${BASE_PATH}/`, '')
      .replace('.mdx', '');

    const [category, slug] = filePath.split('/');
    const url = `/posts/${category}/${slug}`;
    return { url, category, slug };
  });
  return posts;
};
