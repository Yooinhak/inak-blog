import Link from 'next/link';
import { getCategory } from '@lib/categories';
import type { PostAbstract } from '@lib/postManagement/types';
import { eyebrow } from '@lib/ui';
import { cn } from '@utils/cn';
import CategoryThumb from './CategoryThumb';
import MetaRow from './MetaRow';
import { IconArrow } from './icons';

const cardHover = 'transition-[transform,box-shadow,border-color] duration-[320ms] ease-fluid hover:border-accent';

export default function PostCard({ post, layout = 'grid' }: { post: PostAbstract; layout?: 'grid' | 'row' }) {
  const c = getCategory(post.category);

  if (layout === 'row') {
    return (
      <Link
        href={post.url}
        className={cn(
          'glass group grid grid-cols-[168px_1fr_auto] gap-5 items-center p-3.5 cursor-pointer',
          cardHover,
          'hover:-translate-y-[3px] hover:[box-shadow:var(--glass-shadow-lg)]',
        )}
      >
        <div className="aspect-[16/10] h-[100px]">
          <CategoryThumb category={post.category} size="row" rounded="sm" />
        </div>
        <div className="flex flex-col gap-[7px] min-w-0">
          <span className={eyebrow} style={{ color: `oklch(0.6 0.16 ${c.hue})` }}>{c.label}</span>
          <h3 className="m-0 text-lg font-bold tracking-[-0.02em] leading-[1.3] line-clamp-1 group-hover:text-accent">
            {post.title}
          </h3>
          {post.excerpt ? (
            <p className="m-0 text-[13.5px] text-text-soft leading-[1.55] line-clamp-1">{post.excerpt}</p>
          ) : null}
          <MetaRow post={post} />
        </div>
        <div className="text-text-mute pr-2 transition-[transform,color] duration-300 ease-fluid group-hover:text-accent group-hover:translate-x-1">
          <IconArrow />
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={post.url}
      className={cn(
        'glass group flex flex-col overflow-hidden cursor-pointer',
        cardHover,
        'hover:-translate-y-1.5 hover:[box-shadow:var(--glass-shadow-lg),inset_0_1px_0_var(--glass-hi)]',
      )}
    >
      <div className="relative aspect-[16/10] after:content-[''] after:absolute after:inset-0 after:pointer-events-none after:opacity-50 after:bg-[linear-gradient(to_top,var(--glass-bg)_0%,transparent_26%)]">
        <CategoryThumb category={post.category} />
      </div>
      <div className="px-[18px] pt-4 pb-[18px] flex flex-col gap-[9px] flex-1">
        <span className={eyebrow} style={{ color: `oklch(0.6 0.16 ${c.hue})` }}>{c.label}</span>
        <h3 className="m-0 text-[17.5px] font-bold leading-[1.32] tracking-[-0.02em] line-clamp-2 group-hover:text-accent">
          {post.title}
        </h3>
        {post.excerpt ? (
          <p className="m-0 text-[13.5px] leading-[1.6] text-text-soft line-clamp-2">{post.excerpt}</p>
        ) : null}
        <div className="mt-auto pt-1.5">
          <MetaRow post={post} />
        </div>
      </div>
    </Link>
  );
}
