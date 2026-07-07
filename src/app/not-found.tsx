import Link from 'next/link';

import { wrap, btnPrimary, btnGhost } from '@lib/ui';
import { cn } from '@utils/cn';

export default function NotFound() {
  return (
    <div className={cn(wrap, 'pt-24')}>
      <div className="glass text-center px-6 py-16 flex flex-col items-center gap-2">
        <span className="font-mono text-[56px] text-text-mute opacity-50">404</span>
        <h3 className="mt-1.5 mb-0 text-[22px] font-bold">페이지를 찾을 수 없어요</h3>
        <p className="mt-0 mb-3.5 text-text-soft">주소가 바뀌었거나 삭제된 페이지예요.</p>
        <div className="flex gap-3 flex-wrap justify-center">
          <Link className={btnPrimary} href="/">
            홈으로
          </Link>
          <Link className={btnGhost} href="/posts">
            글 목록 보기
          </Link>
        </div>
      </div>
    </div>
  );
}
