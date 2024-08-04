import { sync } from 'glob';

import { POSTS_PATH } from './config';

export const getPostPaths = (category?: string) => {
  const postPaths: string[] = sync(
    `${POSTS_PATH}/${category || '**'}/**/*.mdx`,
  );
  return postPaths;
};
