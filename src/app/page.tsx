import { getPostList } from '@lib/postManagement/getPostList';
import { Hero, LatestSection, CategoryGrid } from '@components/home/HomeSections';
import { wrap } from '@lib/ui';
import { cn } from '@utils/cn';

export default function Home() {
  const posts = getPostList(); // already sorted newest-first
  const featured = posts.find((p) => p.featured) ?? posts[0];

  return (
    <div className={cn(wrap, 'pt-7')}>
      <Hero featured={featured} posts={posts} />
      <LatestSection posts={posts} />
      <CategoryGrid posts={posts} />
    </div>
  );
}
