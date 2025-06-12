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
    <div className="bg-base-300 w-full rounded-xl overflow-hidden flex flex-col shadow-xl dark:shadow-white/10 transition-shadow duration-200 hover:shadow-2xl">
      <div className="p-4">
        <div className="relative aspect-[3/2] w-full">
          <Image
            src={'/posts/react/default.svg'}
            className="rounded-xl"
            alt={alt ?? `${title}`}
            fill
            objectFit={'cover'}
          />
        </div>
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
