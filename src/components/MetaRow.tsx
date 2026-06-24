import { fmtDate, fmtNum, getCategory } from '@lib/categories';
import type { PostAbstract } from '@lib/postManagement/types';
import { IconCal, IconClock, IconEye } from './icons';

export default function MetaRow({ post, showCat = false }: { post: PostAbstract; showCat?: boolean }) {
  const c = getCategory(post.category);
  return (
    <div className="meta-row mono">
      {showCat && (
        <span className="meta-cat" style={{ ['--ch' as string]: c.hue }}>{c.label}</span>
      )}
      <span><IconCal /> {fmtDate(post.date)}</span>
      {post.readingTime ? <span><IconClock /> {post.readingTime}분</span> : null}
      {typeof post.views === 'number' ? <span><IconEye /> {fmtNum(post.views)}</span> : null}
    </div>
  );
}
