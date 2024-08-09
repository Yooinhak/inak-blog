import { POSTS_PATH } from './config';
import { PostDetail, PostDetailData } from './types';

import { format } from 'date-fns';
import { readFileSync } from 'fs';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';

export const getPostDetail = (category: string, slug: string): PostDetail => {
  const filePath = `${POSTS_PATH}/${category}/${slug}.mdx`;

  try {
    const file = readFileSync(filePath, 'utf-8');
    const { data, content } = matter(file);
    const postDetailData = data as PostDetailData;
    const formattedCreatedDate = format(
      postDetailData.createdDate,
      'yyyy년 MM월 dd일',
    );
    return { ...postDetailData, formattedCreatedDate, content };
  } catch (err) {
    console.log(err);
    notFound();
  }
};
