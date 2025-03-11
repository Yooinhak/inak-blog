import { getPostList } from '@lib/postManagement';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const postList = getPostList();

  return [
    {
      url: 'https://www.inak-blog.com',
      lastModified: new Date(),
    },
  ];
}
