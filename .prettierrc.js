module.exports = {
  singleQuote: true,
  parser: 'typescript',
  semi: true,
  useTabs: false,
  tabWidth: 2,
  printWidth: 120,
  arrowParens: 'avoid',

  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  importOrder: [
    '^(react|next)', // 1. react, next
    '^@?(?!components|lib)([\\w-]+)', // 2. 기타 서드파티
    '^@(?:components|lib)/', // 3. @components/* 또는 @lib/* (같은 그룹)
    '^[./]', // 4. 상대 경로 등
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
