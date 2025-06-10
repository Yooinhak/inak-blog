/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from 'next/image';

type BlogCardProps = {
  thumbnailImage: string;
  title: string;
  category: string;
  description: string;
  alt?: string;
};

const PostCard: React.FC<BlogCardProps> = ({ thumbnailImage, title, category, description, alt }) => {
  return (
    <div className="bg-base-100 w-full shadow-sm rounded-xl overflow-hidden flex flex-col">
      <div className="relative aspect-[3/2] w-full">
        {/* <Image src={thumbnailImage} alt={alt ?? `${title}`} fill objectFit={'cover'} /> */}
        <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
      </div>
      <div className="p-4 flex flex-col justify-between grow">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-sm text-gray-500 mb-4">{description}</p>
        <div className="mt-auto">
          <span className="badge badge-primary">{category}</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
