/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from 'next/image';
import Link from 'next/link';

import { PostAbstract } from '@lib/postManagement/types';

const PostCard = ({ post }: { post: PostAbstract }) => {
  return (
    <Link
      href={post.url}
      className="w-full rounded-2xl border border-white/40 bg-base-100/70 p-4 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.6)] backdrop-blur-xl transition duration-200 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-base-100/15"
    >
      {/* 썸네일 */}
      <div className="relative aspect-[3/2] w-full mb-3">
        <Image
          src={'/posts/react/default.svg'}
          className="rounded-xl"
          alt={`${post.title}_thumbnail`}
          fill
          objectFit="cover"
        />
      </div>

      {/* 카테고리 */}
      <span className="text-xs font-medium text-primary mb-1">{post.category}</span>

      {/* 제목 */}
      <h2 className="text-lg font-bold mb-2 line-clamp-2">{post.title}</h2>

      {/* 날짜 */}
      <div className="flex items-center gap-1 text-xs text-base-content/70 mt-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          width="14"
          height="14"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
          ></path>
        </svg>
        <span>{post.date}</span>
      </div>
    </Link>
  );
};

export default PostCard;
