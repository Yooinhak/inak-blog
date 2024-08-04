import { getPostPaths } from './getPostPath';
import { parsePostAbstract } from './parsPost';
import { PostListItem } from './types';

// 모든 포스트 목록 조회
export const getPostList = (category?: string): PostListItem[] => {
  const paths: string[] = getPostPaths(category);
  // const posts = await Promise.all(paths.map(postPath => parsePost(postPath)));
  const posts = paths.map(postPath => parsePostAbstract(postPath));
  return posts;
};
