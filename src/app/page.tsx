'use client';

import Link from 'next/link';

import RotatingText from '@components/RotatingText';

export default function Home() {
  return (
    <section className="hero min-h-[calc(100vh_-_65px_-_52px)] bg-base-100">
      <div className="hero-content text-center flex flex-col gap-6 max-w-3xl w-full glass p-10 rounded-box">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-base-content leading-tight">
          Frontend Developer, 인학
        </h1>

        <p className="text-lg sm:text-xl font-medium text-base-content flex gap-2 items-center">
          Building
          <RotatingText
            texts={['accessible UIs', 'scalable systems', 'beautiful interfaces', 'performant apps', 'React projects']}
            mainClassName="inline-block px-2 bg-base-200 text-base-content rounded-md overflow-hidden"
            staggerFrom="last"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-120%' }}
            staggerDuration={0.03}
            splitLevelClassName="overflow-hidden"
            transition={{ type: 'spring', damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
          with care.
        </p>

        <p className="text-base-content text-sm sm:text-base opacity-80">
          좋은 UI는 기술과 디테일의 만남에서 시작된다고 믿습니다.
          <br />
          인학은 사용자를 생각하며 코드를 짭니다.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
          <Link href="/posts" className="btn btn-primary">
            블로그 보러가기 →
          </Link>
          <Link href="/about" className="btn btn-outline">
            소개 더 보기
          </Link>
        </div>
      </div>
    </section>
  );
}
