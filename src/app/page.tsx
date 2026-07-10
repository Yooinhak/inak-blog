import { cn } from '@utils/cn';

import { CategoryGrid, Hero, LatestSection } from '@components/home/HomeSections';
import { getPostList } from '@lib/postManagement/getPostList';
import { wrap } from '@lib/ui';

export default function Home() {
  const posts = getPostList(); // already sorted newest-first
  const featured = posts.find(p => p.featured) ?? posts[0];

  return (
    <div className={cn(wrap, 'pt-7')}>
      <Hero featured={featured} posts={posts} />
      <LatestSection posts={posts} />
      <CategoryGrid posts={posts} />
    </div>
  );
}
