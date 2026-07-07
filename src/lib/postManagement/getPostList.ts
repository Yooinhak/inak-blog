/**
 * REPLACE your existing src/lib/postManagement/getPostList.ts with this.
 * Same logic as before, but now also reads the new optional frontmatter fields
 * (excerpt, tags, readingTime, featured, views, likes) and auto-estimates
 * readingTime from content length when it isn't provided.
 */
import { format } from 'date-fns';
import { readFileSync } from 'fs';
import { sync } from 'glob';
import matter from 'gray-matter';

import { BASE_PATH, POSTS_PATH } from './config';
import { PostAbstract, PostDetailData } from './types';

const getPostPaths = (category?: string) => {
  return sync(`${POSTS_PATH}/${category || '**'}/**/*.mdx`);
};

export const getPostCategories = (): string[] => {
  const paths = sync(`${POSTS_PATH}/*/**/*.mdx`);
  const categories = new Set<string>();
  paths.forEach((fullPath) => {
    const relativePath = fullPath.slice(fullPath.indexOf(BASE_PATH) + BASE_PATH.length + 1);
    const [category] = relativePath.split('/');
    categories.add(category);
  });
  return Array.from(categories);
};

const estimateReadingTime = (content: string) =>
  Math.max(1, Math.round(content.replace(/\s+/g, '').length / 500));

export const getPostList = (category?: string): PostAbstract[] => {
  const paths = getPostPaths(category);
  const posts = paths.map((postPath) => {
    const filePath = postPath
      .slice(postPath.indexOf(BASE_PATH))
      .replace(`${BASE_PATH}/`, '')
      .replace('.mdx', '');

    const [cat, id] = filePath.split('/');

    const file = readFileSync(`${POSTS_PATH}/${cat}/${id}.mdx`);
    const { data, content } = matter(file);
    const d = data as PostDetailData;
    const date = format(d.date, 'yyyy-MM-dd');

    return {
      id,
      category: cat,
      title: d.title,
      url: `/posts/${cat}/${id}`,
      date,
      excerpt: d.excerpt ?? '',
      tags: d.tags ?? [],
      readingTime: d.readingTime ?? estimateReadingTime(content),
      featured: d.featured ?? false,
      views: d.views,
      likes: d.likes,
    } satisfies PostAbstract;
  });

  // newest first
  return posts.sort((a, b) => b.date.localeCompare(a.date));
};

/** Aggregate tag cloud with counts, most-used first. */
export const getTagCloud = (posts: PostAbstract[]) => {
  const counts: Record<string, number> = {};
  posts.forEach((p) => (p.tags ?? []).forEach((t) => (counts[t] = (counts[t] || 0) + 1)));
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .map(([name, count]) => ({ name, count }));
};
