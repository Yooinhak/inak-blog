import { fmtDate, fmtNum, getCategory } from '@lib/categories';
import type { PostAbstract } from '@lib/postManagement/types';
import { cn } from '@utils/cn';
import { IconCal, IconClock, IconEye } from './icons';

const item = 'inline-flex items-center gap-[5px]';

export default function MetaRow({ post, showCat = false }: { post: PostAbstract; showCat?: boolean }) {
  const c = getCategory(post.category);
  return (
    <div className="font-mono flex flex-wrap items-center gap-3.5 text-xs text-text-mute font-medium">
      {showCat && (
        <span
          className={cn(item, 'font-bold text-[oklch(0.6_0.16_var(--ch))] dark:text-[oklch(0.74_0.15_var(--ch))]')}
          style={{ ['--ch' as string]: c.hue }}
        >
          {c.label}
        </span>
      )}
      <span className={item}><IconCal /> {fmtDate(post.date)}</span>
      {post.readingTime ? <span className={item}><IconClock /> {post.readingTime}분</span> : null}
      {typeof post.views === 'number' ? <span className={item}><IconEye /> {fmtNum(post.views)}</span> : null}
    </div>
  );
}
