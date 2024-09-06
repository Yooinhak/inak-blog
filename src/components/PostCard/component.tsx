import React from 'react';

type BlogCardProps = {
  type: 'type1' | 'type2' | 'type3';
  thumbnailImage: string;
  title: string;
  category: string;
  description: string;
};

const BlogCard: React.FC<BlogCardProps> = ({
  type,
  thumbnailImage,
  title,
  category,
  description,
}) => {
  return (
    <div>
      {type === 'type1' && (
        <div className="max-w-sm mx-auto bg-gradient-to-r from-[#A1C4FD]/30 to-[#C2E9FB]/30 backdrop-blur-xl rounded-xl shadow-lg p-4 hover:scale-105 transition-transform">
          <img
            src={thumbnailImage}
            alt="Thumbnail"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <div className="px-2">
            <span className="text-sm text-gray-800 bg-blue-300/40 rounded px-2 py-1">
              {category}
            </span>
            <h2 className="text-xl font-semibold text-white mt-2">{title}</h2>
            <p className="text-sm text-gray-100 mt-2">{description}</p>
          </div>
        </div>
      )}

      {type === 'type2' && (
        <div className="max-w-sm mx-auto bg-gradient-to-br from-[#A1C4FD]/40 to-[#C2E9FB]/40 backdrop-blur-2xl rounded-lg p-5 relative border border-white/30 shadow-md">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300/40 to-transparent rounded-lg blur-md"></div>
          <img
            src={thumbnailImage}
            alt="Thumbnail"
            className="w-full h-48 object-cover rounded-md mb-3 relative z-10"
          />
          <div className="relative z-10">
            <span className="text-xs bg-blue-300/30 text-blue-900 px-2 py-1 rounded-full">
              {category}
            </span>
            <h3 className="text-lg font-medium text-white mt-2">{title}</h3>
            <p className="text-sm text-gray-200 mt-1">{description}</p>
          </div>
        </div>
      )}

      {type === 'type3' && (
        <div className="max-w-sm mx-auto bg-gradient-to-tl from-[#A1C4FD]/50 to-[#C2E9FB]/50 backdrop-blur-lg rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow">
          <div className="relative">
            <img
              src={thumbnailImage}
              alt="Thumbnail"
              className="w-full h-52 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/60 rounded-lg"></div>
          </div>
          <div className="mt-4 px-3">
            <span className="text-xs bg-blue-300/30 text-white px-3 py-1 rounded">
              {category}
            </span>
            <h4 className="text-xl font-bold text-white mt-2">{title}</h4>
            <p className="text-gray-200 mt-2 text-sm">{description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogCard;
