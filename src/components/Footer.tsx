import Link from 'next/link';

import { wrap } from '@lib/ui';
import { cn } from '@utils/cn';
import { IconGithub } from './icons';

const ftrLink = cn(
  'inline-flex items-center gap-1.5 text-sm font-semibold text-text-soft no-underline cursor-pointer',
  'transition-colors duration-200 hover:text-accent',
);

export default function Footer() {
  return (
    <footer className="border-t border-hairline mt-10 pt-10 pb-14">
      <div className={cn(wrap, 'grid grid-cols-[1.4fr_1fr] gap-x-10 gap-y-6 items-start max-[760px]:grid-cols-1')}>
        <div>
          <span className="text-base font-semibold text-text">
            Frontend Developer, <b>Inak</b>
          </span>
          <p className="font-mono mt-2 mb-0 text-[12.5px] text-text-mute">
            복잡한 문제를 단순하게. 사용자 중심의 웹 경험을 만듭니다.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-[22px] gap-y-2 justify-end max-[760px]:justify-start">
          <Link href="/posts" className={ftrLink}>Post</Link>
          <Link href="/about" className={ftrLink}>About</Link>
          <a href="https://github.com/Yooinhak" target="_blank" rel="noopener noreferrer" className={ftrLink}>
            <IconGithub size={16} /> GitHub
          </a>
        </div>
        <div className="font-mono col-span-full text-[11.5px] text-text-mute pt-[18px] border-t border-hairline">
          © {new Date().getFullYear()} inak.dev · built with care
        </div>
      </div>
    </footer>
  );
}
