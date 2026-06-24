import { Suspense } from 'react';
import { getPostList, getTagCloud } from '@lib/postManagement/getPostList';
import SearchPosts from '@components/SearchPosts';

export default function PostsPage() {
  const posts = getPostList();
  const tags = getTagCloud(posts);
  // SearchPosts uses useSearchParams() → must sit under a Suspense boundary.
  return (
    <Suspense fallback={null}>
      <SearchPosts posts={posts} tags={tags} />
    </Suspense>
  );
}
