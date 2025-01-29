import Image from 'next/image';
import React from 'react';

type BlogCardProps = {
  thumbnailImage: string;
  title: string;
  category: string;
  description: string;
};

const BlogCard: React.FC<BlogCardProps> = ({
  thumbnailImage,
  title,
  category,
  description,
}) => {
  return (
    <div className="w-full bg-gradient-to-r rounded-xl p-4 hover:scale-105 transition-transform from-[rgba(255,255,255,0.2)] to-[rgba(255,255,255,0.3)] shadow-[0px_5px_10px_rgba(0,0,0,0.1),_0px_15px_30px_rgba(0,0,0,0.1),_0px_20px_40px_rgba(0,0,0,0.15)] backdrop-blur-lg">
      <div className="h-64 w-full relative">
        <Image
          src={thumbnailImage}
          alt={'preview image'}
          fill
          objectFit={'cover'}
        />
      </div>
      <div className="px-2">
        <span className="text-sm text-gray-800 bg-blue-300/40 rounded px-2 py-1">
          {category}
        </span>
        <h2 className="text-xl font-semibold text-white mt-2">{title}</h2>
        <p className="text-sm text-gray-100 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
