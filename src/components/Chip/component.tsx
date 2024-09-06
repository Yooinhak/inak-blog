import React from 'react';

type ChipType = 'minimalist' | 'neomorphism' | 'glassmorphism';

interface ChipProps {
  type: ChipType;
  selected?: boolean;
}

const Chip = ({ type, selected = false }: ChipProps) => {
  const chipStyles: Record<ChipType, string> = {
    minimalist: 'bg-gray-100 text-gray-800 border border-gray-300 hover:bg-gray-200',
    neomorphism: selected
      ? 'bg-gradient-to-r from-[#A1C4FD] to-[#C2E9FB] text-gray-900 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)]'
      : 'bg-gradient-to-r from-[#A1C4FD] to-[#C2E9FB] text-gray-800 shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] hover:shadow-inset',
    glassmorphism:
      'bg-gradient-to-r from-[#A1C4FD]/30 to-[#C2E9FB]/30 text-white border border-white/30 backdrop-blur-lg shadow-md hover:bg-gradient-to-r hover:from-[#A1C4FD]/40 hover:to-[#C2E9FB]/40',
  };

  return (
    <div
      className={`chip inline-block px-4 py-2 rounded-full font-semibold cursor-pointer transition-transform duration-200 ease-in-out transform hover:scale-105 ${chipStyles[type]}`}
    >
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </div>
  );
};

export default Chip;
