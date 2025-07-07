import { format } from 'date-fns';
import { readFileSync } from 'fs';
import { sync } from 'glob';
import matter from 'gray-matter';

import { BASE_PATH, POSTS_PATH } from './config';
import { PostAbstract, PostDetailData } from './types';

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

    const [category, id] = filePath.split('/');

    // 디테일 불러오기
    const file = readFileSync(`${POSTS_PATH}/${category}/${id}.mdx`);
    const { data } = matter(file);
    const detailData = data as PostDetailData;
    const date = format(detailData.date, 'yyyy-MM-dd');

    const url = `/posts/${category}/${id}`;
    return { id, category, title: detailData.title, url, date };
  });
  return posts;
};
