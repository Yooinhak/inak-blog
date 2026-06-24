import Link from 'next/link';
import { getCategory } from '@lib/categories';
import type { PostAbstract } from '@lib/postManagement/types';
import CategoryThumb from './CategoryThumb';
import MetaRow from './MetaRow';
import { IconArrow } from './icons';

export default function PostCard({ post, layout = 'grid' }: { post: PostAbstract; layout?: 'grid' | 'row' }) {
  const c = getCategory(post.category);

  if (layout === 'row') {
    return (
      <Link href={post.url} className="card-row glass">
        <div className="card-row-thumb"><CategoryThumb category={post.category} size="row" /></div>
        <div className="card-row-body">
          <span className="eyebrow" style={{ color: `oklch(0.6 0.16 ${c.hue})` }}>{c.label}</span>
          <h3>{post.title}</h3>
          {post.excerpt ? <p>{post.excerpt}</p> : null}
          <MetaRow post={post} />
        </div>
        <div className="card-row-arrow"><IconArrow /></div>
      </Link>
    );
  }

  return (
    <Link href={post.url} className="card glass">
      <div className="card-thumb"><CategoryThumb category={post.category} /></div>
      <div className="card-body">
        <span className="eyebrow" style={{ color: `oklch(0.6 0.16 ${c.hue})` }}>{c.label}</span>
        <h3>{post.title}</h3>
        {post.excerpt ? <p>{post.excerpt}</p> : null}
        <div className="card-foot"><MetaRow post={post} /></div>
      </div>
    </Link>
  );
}
