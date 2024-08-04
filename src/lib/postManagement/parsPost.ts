import fs from 'fs';

import matter from 'gray-matter';

import { BASE_PATH } from './config';
import { Post, PostMatter } from './types';

// MDX의 개요 파싱
export const parsePostAbstract = (postPath: string) => {
  const filePath = postPath
    .slice(postPath.indexOf(BASE_PATH))
    .replace(`${BASE_PATH}/`, '')
    .replace('.mdx', '');

  const [category, slug] = filePath.split('/');
  const url = `/blog/${category}/${slug}`;
  return { url, category, slug };
};

// TODO: MDX detail
const parsePostDetail = async (postPath: string) => {
  const file = fs.readFileSync(postPath, 'utf8');
  const { data, content } = matter(file);
  const grayMatter = data as PostMatter;
  // const readingMinutes = Math.ceil(readingTime(content).minutes);
  // const dateString = dayjs(grayMatter.date).locale('ko').format('YYYY년 MM월 DD일');
  return { ...grayMatter, content };
};
