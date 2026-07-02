import { MetadataRoute } from 'next';

import { getPostList } from '@lib/postManagement/getPostList';
import { SITE } from '@lib/siteConfig';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = getPostList().map(p => ({
    url: `${SITE.url}${p.url}`,
    lastModified: new Date(p.date),
  }));

  return [
    { url: SITE.url, lastModified: new Date() },
    { url: `${SITE.url}/posts`, lastModified: new Date() },
    { url: `${SITE.url}/about`, lastModified: new Date() },
    ...posts,
  ];
}
