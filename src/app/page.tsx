'use client';

import Link from 'next/link';

import RotatingText from '@components/RotatingText';

export default function Main() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#a1c4fd] to-[#c2e9fb] flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl w-full mx-auto flex flex-col items-center text-center gap-6 bg-white/30 backdrop-blur-lg rounded-3xl p-10 shadow-xl">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-xl">Frontend Developer, 인학</h1>

        {/* Subheading with Rotating Text */}
        <p className="text-lg sm:text-xl text-white/90 font-medium">
          Building{' '}
          <RotatingText
            texts={['accessible UIs', 'scalable systems', 'beautiful interfaces', 'performant apps', 'React projects']}
            mainClassName="inline-block px-2 bg-white text-black rounded-md overflow-hidden"
            staggerFrom="last"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-120%' }}
            staggerDuration={0.03}
            splitLevelClassName="overflow-hidden"
            transition={{ type: 'spring', damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />{' '}
          with care.
        </p>

        {/* Short description */}
        <p className="text-white/80 max-w-xl text-base sm:text-lg leading-relaxed">
          사용자 경험을 고려한 인터페이스부터 유지보수 가능한 설계까지. 다양한 환경에서 동작하는 프론트엔드를 고민하고
          구현합니다.
        </p>

        {/* CTA */}
        <div className="mt-4 flex gap-4">
          <Link
            href="/blog"
            className="px-6 py-2 rounded-full bg-black text-white text-sm sm:text-base hover:bg-gray-800 transition"
          >
            블로그 보러가기 →
          </Link>
          <Link
            href="/about"
            className="px-6 py-2 rounded-full border border-white text-white text-sm sm:text-base hover:bg-white hover:text-black transition"
          >
            소개 더 보기
          </Link>
        </div>
      </div>

      {/* Floating Blurs for visual effect */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute w-40 h-40 bg-pink-300 rounded-full opacity-20 blur-2xl animate-pulse left-[10%] top-[15%]" />
        <div className="absolute w-32 h-32 bg-blue-300 rounded-full opacity-20 blur-2xl animate-pulse right-[10%] bottom-[20%]" />
        <div className="absolute w-20 h-20 bg-yellow-300 rounded-full opacity-20 blur-2xl animate-pulse left-[45%] bottom-[25%]" />
      </div>
    </main>
  );
}
