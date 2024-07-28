import path from 'path';

import { sync } from 'glob';

const BASE_PATH = '/src/posts';
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

export const getPosts = () => {
  const postPaths: string[] = sync(`${POSTS_PATH}/**/*.mdx`);
  return postPaths.map(path => ({
    slug: path.slice(path.indexOf(BASE_PATH)).replace('.mdx', ''),
  }));
};
