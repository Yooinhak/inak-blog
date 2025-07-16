import { notFound } from 'next/navigation';

import { format } from 'date-fns';
import { readFileSync } from 'fs';
import matter from 'gray-matter';

import { POSTS_PATH } from './config';
import { PostDetail, PostDetailData } from './types';

export const getPostDetail = (category: string, id: string): PostDetail => {
  const filePath = `${POSTS_PATH}/${category}/${id}.mdx`;

  try {
    const file = readFileSync(filePath, 'utf-8');
    const { data, content } = matter(file);
    const postDetailData = data as PostDetailData;
    const formattedCreatedDate = format(postDetailData.date, 'yyyy년 MM월 dd일');
    return { ...postDetailData, formattedCreatedDate, content };
  } catch (err) {
    console.error(err);
    notFound();
  }
};
