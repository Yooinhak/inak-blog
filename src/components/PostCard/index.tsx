/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from 'next/image';
import Link from 'next/link';

type BlogCardProps = {
  thumbnailImage: string;
  title: string;
  category: string;
  alt?: string;
  url: string;
};

const PostCard = ({ url, thumbnailImage, title, category, alt }: BlogCardProps) => {
  return (
    <Link
      href={url}
      className="bg-base-300 w-full p-4 rounded-xl overflow-hidden flex flex-col shadow-xl dark:shadow-white/10 transition-shadow duration-200 hover:shadow-2xl"
    >
      {/* 썸네일 */}
      <div className="relative aspect-[3/2] w-full mb-3">
        <Image src={'/posts/react/default.svg'} className="rounded-xl" alt={alt ?? `${title}`} fill objectFit="cover" />
      </div>

      {/* 카테고리 */}
      <span className="text-xs font-medium text-primary mb-1">{category}</span>

      {/* 제목 */}
      <h2 className="text-lg font-bold mb-2 line-clamp-2">{title}</h2>

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
        <span>{'2025-01-02'}</span>
      </div>
    </Link>
  );
};

export default PostCard;
