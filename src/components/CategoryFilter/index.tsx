'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

type CategoryOptionItem = {
  label: string;
  value?: string;
};

export default function CategoryFilter({ postCategoryOptions }: { postCategoryOptions: CategoryOptionItem[] }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const selectedCategory = searchParams.get('category') || '';

  const handleCategoryChange = useCallback(
    (value: string) => {
      const newParams = new URLSearchParams(searchParams.toString());
      if (value) newParams.set('category', value);
      else newParams.delete('category');
      router.push(`/posts?${newParams.toString()}`);
    },
    [router, searchParams],
  );

  return (
    <form className="flex flex-wrap gap-2 items-center transition-all duration-300">
      {/* 초기화 버튼 */}
      <button
        type="button"
        className={`btn btn-square transition-all duration-300 ${
          selectedCategory ? 'opacity-100 scale-100' : 'opacity-0 scale-0 w-0 p-0 m-0'
        }`}
        onClick={() => handleCategoryChange('')}
      >
        ×
      </button>

      {/* 카테고리 라디오 */}
      {postCategoryOptions.map((option, index) => {
        const isSelected = selectedCategory === (option.value || '');
        return (
          <label
            key={index}
            className={`btn cursor-pointer transition-all duration-300 ${isSelected ? 'btn-primary' : ''}`}
          >
            <input
              type="radio"
              name="category"
              value={option.value}
              checked={isSelected}
              onChange={() => handleCategoryChange(option.value || '')}
              className="hidden"
            />
            {option.label}
          </label>
        );
      })}
    </form>
  );
}
