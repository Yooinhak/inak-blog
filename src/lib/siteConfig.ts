/** Single source of truth for site identity — used by metadata, sitemap, RSS, JSON-LD. */
export const SITE = {
  url: 'https://www.inak.dev',
  name: '이낙 개발 블로그',
  title: '이낙 개발 블로그',
  description: '프론트엔드 · React · 개발 기록을 남기는 이낙의 블로그',
  author: '이낙 (Inak)',
  locale: 'ko_KR',
} as const;
