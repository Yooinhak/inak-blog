import { getPostList } from '@lib/postManagement/getPostList';
import { Hero, LatestSection, CategoryGrid } from '@components/home/HomeSections';
import SupportCoffee from '@components/SupportCoffee';

export default function Home() {
  const posts = getPostList(); // already sorted newest-first
  const featured = posts.find((p) => p.featured) ?? posts[0];

  return (
    <div className="wrap page-home">
      <Hero featured={featured} posts={posts} />
      <LatestSection posts={posts} />
      <CategoryGrid posts={posts} />
      <SupportCoffee />
    </div>
  );
}
