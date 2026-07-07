/**
 * Category system — visual identity per category.
 * `hue` drives thumbnail gradient + tag accents (OKLCH hue angle).
 * Keys must match your /src/posts/<Category> folder names.
 */
export interface CategoryMeta {
  label: string;
  sub: string;
  hue: number;
  glyph: string;
}

export const CATEGORIES: Record<string, CategoryMeta> = {
  NextJS:      { label: 'Next.js',      sub: 'App Router · RSC · MDX', hue: 248, glyph: 'N' },
  Frontend:    { label: 'Frontend',     sub: 'CSS · Animation · UI',   hue: 320, glyph: 'F' },
  ReactNative: { label: 'React Native', sub: 'Expo · Mobile · Native', hue: 196, glyph: 'R' },
  DevLog:      { label: 'DevLog',        sub: '회고 · 기록 · 생각',      hue: 150, glyph: 'D' },
};

export const getCategory = (key: string): CategoryMeta =>
  CATEGORIES[key] ?? { label: key, sub: '', hue: 248, glyph: key[0]?.toUpperCase() ?? '?' };

export const fmtDate = (iso: string) => {
  const [y, m, d] = iso.split('-');
  return `${y}.${m}.${d}`;
};

export const fmtNum = (n: number) =>
  n >= 1000 ? (n / 1000).toFixed(1).replace('.0', '') + 'k' : `${n}`;
