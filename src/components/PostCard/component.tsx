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
    <div className="w-full bg-gradient-to-r from-postCardBackgroundFrom to-postCardBackgroundTo rounded-xl shadow-[0_8px_32px_0_rgba(_31,38,135,0.37_)] backdrop-blur-[_0.5px_] p-4 hover:scale-105 transition-transform border border-solid border-[rgba(_255,255,255,0.18_)]">
      <img
        src={thumbnailImage}
        alt="Thumbnail"
        className="w-full h-auto object-cover rounded-md mb-4"
      />
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
