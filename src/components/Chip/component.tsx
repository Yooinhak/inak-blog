import React from 'react';

type ChipType = 'minimalist' | 'neomorphism' | 'glassmorphism';

interface ChipProps {
  type: ChipType;
}

const Chip = ({ type }: ChipProps) => {
  const chipStyles: Record<ChipType, string> = {
    minimalist: 'bg-gray-100 text-gray-800 border border-gray-300 hover:bg-gray-200',
    neomorphism:
      'bg-gray-200 text-gray-600 shadow-[4px_4px_8px_#bcbcbc,-4px_-4px_8px_#ffffff] hover:shadow-inset',
    glassmorphism:
      'bg-white/20 text-white border border-white/30 backdrop-blur-md hover:bg-white/30',
  };

  return (
    <div
      className={`chip inline-block px-4 py-2 rounded-full font-semibold cursor-pointer transition-transform duration-200 ease-in-out transform hover:scale-105 ${chipStyles[type]}`}
    >
      {type}
    </div>
  );
};

export default Chip;
