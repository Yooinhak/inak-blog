'use client';

import { useState } from 'react';

interface props {
  isCheck: boolean;
  setIsCheck: (value: boolean) => void;
}

const Component = ({ isCheck, setIsCheck }: props) => {
  return (
    <div className="inline-block">
      <input
        type="checkbox"
        id="checkbox"
        className="absolute hidden"
        checked={isCheck}
        onChange={() => setIsCheck(!isCheck)}
      />
      <label htmlFor="checkbox" className="cursor-pointer">
        <div className="w-8 h-8 relative">
          <span
            className={`block w-8 h-1 bg-blue-500 rounded transition-all duration-400 ease-in-out absolute ${isCheck ? 'top-3.5 bg-transparent' : 'top-0'}`}
          ></span>
          <span
            className={`block h-1 bg-blue-500 rounded transition-all duration-400 ease-in-out absolute top-3.5 ${isCheck ? 'w-8 transform rotate-45 left-0' : 'w-1 rotate-90 left-3.5'}`}
          ></span>
          <span
            className={`block h-1 bg-blue-500 rounded transition-all duration-400 ease-in-out absolute top-3.5 right-0 ${isCheck ? 'w-8 -rotate-45 left-0' : 'w-1 left-3.5'}`}
          ></span>
          <span
            className={`block w-8 h-1 bg-blue-500 rounded transition-all duration-400 ease-in-out absolute bottom-0 top-3.5 ${isCheck ? 'bottom-3.5 bg-transparent' : 'bottom-0'}`}
          ></span>
          <span
            className={`block w-8 h-1 bg-blue-500 rounded transition-all duration-400 ease-in-out absolute bottom-0 ${isCheck ? 'bottom-3.5 bg-transparent' : 'bottom-0'}`}
          ></span>
        </div>
      </label>
    </div>
  );
};

export default Component;
