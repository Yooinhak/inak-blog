import Link from 'next/link';

import { IconGithub } from './icons';

export default function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap ftr-inner">
        <div className="ftr-brand">
          <span className="ftr-name">
            Frontend Developer, <b>Inak</b>
          </span>
          <p className="mono">복잡한 문제를 단순하게. 사용자 중심의 웹 경험을 만듭니다.</p>
        </div>
        <div className="ftr-links">
          <Link href="/posts">Post</Link>
          <Link href="/about">About</Link>
          <a href="https://github.com/Yooinhak" target="_blank" rel="noopener noreferrer">
            <IconGithub size={16} /> GitHub
          </a>
        </div>
        <div className="ftr-copy mono">© {new Date().getFullYear()} inak.dev · built with care</div>
      </div>
    </footer>
  );
}
