'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export default function CategoryFilter({ categories }: { categories: string[] }) {
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
    <form className="flex flex-wrap items-center gap-2 transition-all duration-300">
      {/* 초기화 버튼 */}
      <button
        type="button"
        className={`flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-base-100/70 text-lg font-semibold text-base-content shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 dark:border-white/10 dark:bg-base-100/15 ${
          selectedCategory ? 'opacity-100 scale-100' : 'opacity-0 scale-0 w-0 p-0 m-0'
        }`}
        onClick={() => handleCategoryChange('')}
      >
        ×
      </button>

      {/* 카테고리 라디오 */}
      {categories.map((option, index) => {
        const isSelected = selectedCategory === (option || '');
        return (
          <label
            key={index}
            className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 ${
              isSelected
                ? 'border-primary/40 bg-primary text-primary-content shadow-md'
                : 'border-white/40 bg-base-100/70 text-base-content shadow-sm backdrop-blur hover:-translate-y-0.5 dark:border-white/10 dark:bg-base-100/15'
            }`}
          >
            <input
              type="radio"
              name="category"
              value={option}
              checked={isSelected}
              onChange={() => handleCategoryChange(option || '')}
              className="hidden"
            />
            {option}
          </label>
        );
      })}
    </form>
  );
}
