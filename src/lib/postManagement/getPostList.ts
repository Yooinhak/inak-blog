import { sync } from 'glob';

import { BASE_PATH, POSTS_PATH } from './config';
import { PostAbstract } from './types';

const getPostPaths = (category?: string) => {
  const postPaths: string[] = sync(`${POSTS_PATH}/${category || '**'}/**/*.mdx`);
  return postPaths;
};

// 카테고리 리스트 가져오기
export const getPostCategories = (): string[] => {
  const paths = sync(`${POSTS_PATH}/*/**/*.mdx`);
  const categories = new Set<string>();
  paths.forEach(fullPath => {
    const relativePath = fullPath.slice(fullPath.indexOf(BASE_PATH) + BASE_PATH.length + 1);
    const [category] = relativePath.split('/');
    categories.add(category);
  });
  return Array.from(categories);
};

// 모든 포스트 목록 조회
export const getPostList = (category?: string): PostAbstract[] => {
  const paths: string[] = getPostPaths(category);
  const posts = paths.map(postPath => {
    const filePath = postPath.slice(postPath.indexOf(BASE_PATH)).replace(`${BASE_PATH}/`, '').replace('.mdx', '');

    const [category, slug] = filePath.split('/');
    const url = `/posts/${category}/${slug}`;
    return { url, category, slug };
  });
  return posts;
};
