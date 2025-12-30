import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About | 유인학 개발 블로그',
  description: '프론트엔드 개발자 유인학입니다. 저에 대해 더 알아보세요.',
};

const glassCard =
  'rounded-3xl border border-white/40 bg-base-100/70 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.6)] backdrop-blur-xl dark:border-white/10 dark:bg-base-100/15';

const sectionLabel =
  'inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-slate-600 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-slate-200';

const AboutPage = () => {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-sky-300/40 blur-[120px] dark:bg-sky-500/20" />
      <div className="pointer-events-none absolute top-1/3 right-0 h-[260px] w-[260px] rounded-full bg-emerald-300/30 blur-[120px] dark:bg-emerald-400/15" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-20 px-4 py-16 sm:py-20">
        <section className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <span className={sectionLabel}>Front-End Developer</span>
            <h1 className="text-4xl font-semibold text-base-content sm:text-6xl">유인학</h1>
            <p className="text-lg leading-relaxed text-base-content/80">
              학습을 즐기며 사용자의 맥락을 먼저 고민합니다. 팀과의 협업에서 투명한 소통을 지향하며, 경험을 매끄럽게
              이어주는 프론트엔드 화면을 만드는 데 집중합니다.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="mailto:syu3236@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-base-100/70 px-4 py-2 text-sm font-semibold text-base-content shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-base-100/15"
              >
                📧 Email
              </Link>
              <Link
                href="https://github.com/Yooinhak"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-base-100/70 px-4 py-2 text-sm font-semibold text-base-content shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-base-100/15"
              >
                💻 Github
              </Link>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-base-100/70 px-4 py-2 text-sm font-semibold text-base-content shadow-sm backdrop-blur dark:border-white/10 dark:bg-base-100/15">
                📱 010-3680-3224
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: 'Current', value: 'Blomics' },
                { label: 'Experience', value: '2+ Years' },
                { label: 'Focus', value: 'UI/UX' },
              ].map(item => (
                <div key={item.label} className={`${glassCard} px-4 py-3 text-center`}>
                  <p className="text-xs uppercase tracking-[0.3em] text-base-content/60">{item.label}</p>
                  <p className="mt-2 text-lg font-semibold text-base-content">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`${glassCard} relative overflow-hidden p-8`}>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20 overflow-hidden rounded-2xl ring-2 ring-white/50">
                  <Image src="/images/inhak-profile.jpg" alt="유인학 프로필 사진" fill className="object-cover" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-base-content/60">Profile</p>
                  <p className="text-2xl font-semibold text-base-content">유인학</p>
                  <p className="text-base-content/70">Frontend Developer</p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/30 bg-white/60 p-4 text-sm text-base-content/70 backdrop-blur dark:border-white/10 dark:bg-white/5">
                  문제를 작은 단위로 나누고 빠르게 검증합니다.
                </div>
                <div className="rounded-2xl border border-white/30 bg-white/60 p-4 text-sm text-base-content/70 backdrop-blur dark:border-white/10 dark:bg-white/5">
                  사용자의 흐름을 끊지 않는 인터랙션을 설계합니다.
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-white/30 bg-white/60 px-4 py-3 backdrop-blur dark:border-white/10 dark:bg-white/5">
                <Image src="/images/logo.png" alt="블로그 로고" width={48} height={24} />
                <div>
                  <p className="text-sm font-semibold text-base-content">이낙 개발 블로그</p>
                  <p className="text-xs text-base-content/60">기록과 성장의 아카이브</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex flex-col gap-3 text-center">
            <span className={sectionLabel}>About Me</span>
            <h2 className="text-3xl font-semibold text-base-content sm:text-4xl">일하는 방식과 태도</h2>
            <p className="text-base text-base-content/70">빠른 실행과 정돈된 협업을 통해 성장하는 것을 즐깁니다.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              '무엇이든 관심이 생기면 빠르게 도전하고 실행합니다.',
              '사람들과 소통하고 의견을 나눌 때 행복합니다.',
              '사용자 입장에서 필요한 것이 무엇인지 고민하면서 개발합니다.',
              '지속적인 학습과 도전을 통해 새로운 기술에 대한 열정을 유지합니다.',
            ].map(item => (
              <div key={item} className={`${glassCard} p-6 text-base text-base-content/80`}>
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex flex-col gap-3 text-center">
            <span className={sectionLabel}>Channels</span>
            <h2 className="text-3xl font-semibold text-base-content sm:text-4xl">연락 채널</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href="mailto:syu3236@gmail.com"
              className={`${glassCard} p-6 text-center transition hover:-translate-y-1`}
            >
              <div className="text-3xl">📧</div>
              <p className="mt-3 font-semibold text-base-content">Email</p>
              <p className="text-sm text-base-content/60">syu3236@gmail.com</p>
            </Link>
            <div className={`${glassCard} p-6 text-center`}>
              <div className="text-3xl">📱</div>
              <p className="mt-3 font-semibold text-base-content">Phone</p>
              <p className="text-sm text-base-content/60">010-3680-3224</p>
            </div>
            <Link
              href="https://github.com/Yooinhak"
              target="_blank"
              rel="noopener noreferrer"
              className={`${glassCard} p-6 text-center transition hover:-translate-y-1`}
            >
              <div className="text-3xl">💻</div>
              <p className="mt-3 font-semibold text-base-content">Github</p>
              <p className="text-sm text-base-content/60">@Yooinhak</p>
            </Link>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex flex-col gap-3 text-center">
            <span className={sectionLabel}>Tech Stack</span>
            <h2 className="text-3xl font-semibold text-base-content sm:text-4xl">기술 스택</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className={`${glassCard} p-6`}>
              <h3 className="text-xl font-semibold text-base-content">Front-End</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  'HTML',
                  'CSS',
                  'JavaScript',
                  'React',
                  'React-Native',
                  'Next.js',
                  'Jotai',
                  'SCSS',
                  'Styled-components',
                  'TailwindCSS',
                ].map(tech => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/40 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className={`${glassCard} p-6`}>
              <h3 className="text-xl font-semibold text-base-content">Collaboration & Tools</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Slack', 'Notion', 'Teams', 'VSCode', 'Atom', 'Figma', 'Git', 'Github', 'Bitbucket', 'AWS'].map(
                  tool => (
                    <span
                      key={tool}
                      className="rounded-full border border-white/40 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                    >
                      {tool}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex flex-col gap-3 text-center">
            <span className={sectionLabel}>Career</span>
            <h2 className="text-3xl font-semibold text-base-content sm:text-4xl">경력</h2>
          </div>
          <div className="space-y-5">
            {[
              {
                company: '블로믹스 (Blomics)',
                period: '2024.11 ~ 현재',
                role: '프론트엔드 개발자',
                details: ['테일즈런너 게임 웹 페이지 유지보수', '어드민 페이지 유지보수'],
              },
              {
                company: 'Corretto',
                period: '2022.10 ~ 2024.10',
                role: '프론트엔드 개발자',
                details: ['SI 프로젝트 프론트엔드 개발', '자체 솔루션 프론트엔드 개발'],
              },
            ].map(item => (
              <div key={item.company} className={`${glassCard} p-6`}>
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <h3 className="text-2xl font-semibold text-base-content">{item.company}</h3>
                  <span className="rounded-full border border-white/40 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                    {item.period}
                  </span>
                </div>
                <p className="mt-2 text-base-content/70">{item.role}</p>
                <ul className="mt-3 list-disc list-inside space-y-1 text-sm text-base-content/70">
                  {item.details.map(detail => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex flex-col gap-3 text-center">
            <span className={sectionLabel}>Work Experience</span>
            <h2 className="text-3xl font-semibold text-base-content sm:text-4xl">프로젝트 경험</h2>
          </div>
          <div className="space-y-5">
            {[
              {
                name: 'Gel-click',
                link: 'https://gelclick.com/home/main.do',
                period: ['2022.11 ~ 2023.04', '2023.08 ~ 2023.10'],
                summary: '쇼핑몰 통합관리 솔루션',
                points: [
                  'OMS, CMS 종합 관리 플랫폼',
                  '플랫폼 및 백오피스 프론트엔드 개발',
                  'i18n을 이용한 글로벌 언어 지원 서비스',
                ],
              },
              {
                name: '윙버디',
                link: 'https://wingbuddy.kr/',
                period: ['2023.05 ~ 2023.08'],
                summary: '온라인 특수교육 플랫폼',
                points: ['모바일 전용 서비스를 웹 앱 반응형으로 전환', 'ebook 추가 기능 개발'],
              },
              {
                name: 'KorlyMally',
                link: 'https://korlymally.kr/',
                period: ['2023.10 ~ 2024.01'],
                summary: '해외 쇼핑 플랫폼',
                points: ['국제 e-commerce', 'WMS, OMS 백오피스 프론트엔드 개발'],
              },
              {
                name: 'Future Plan',
                link: null,
                period: ['2024.01 ~ 2024.06'],
                summary: '진로진학 시스템 리빌딩',
                points: ['전체적인 페이지 프론트엔드 개발 참여'],
              },
              {
                name: '한화정밀기계',
                link: null,
                period: ['2024.07 ~ 2024.10'],
                summary: 'CRM 시스템',
                points: ['CRM 개발', 'table-MUI, echart를 사용한 대시보드 관리'],
              },
            ].map(item => (
              <div key={item.name} className={`${glassCard} p-6`}>
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  {item.link ? (
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl font-semibold text-base-content transition hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <h3 className="text-2xl font-semibold text-base-content">{item.name}</h3>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {item.period.map(date => (
                      <span
                        key={date}
                        className="rounded-full border border-white/40 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                      >
                        {date}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="mt-2 text-base-content/70">{item.summary}</p>
                <ul className="mt-3 list-disc list-inside space-y-1 text-sm text-base-content/70">
                  {item.points.map(point => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-base-content/60">
                  <span className="rounded-full border border-white/40 bg-white/60 px-3 py-1 backdrop-blur dark:border-white/10 dark:bg-white/5">
                    Next.js
                  </span>
                  <span className="rounded-full border border-white/40 bg-white/60 px-3 py-1 backdrop-blur dark:border-white/10 dark:bg-white/5">
                    styled-components
                  </span>
                  <span className="rounded-full border border-white/40 bg-white/60 px-3 py-1 backdrop-blur dark:border-white/10 dark:bg-white/5">
                    Jotai
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex flex-col gap-3 text-center">
            <span className={sectionLabel}>Projects</span>
            <h2 className="text-3xl font-semibold text-base-content sm:text-4xl">개인 프로젝트</h2>
          </div>
          <div className={`${glassCard} p-6`}>
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <Link
                href="https://github.com/Yooinhak/Safety_Tour_Flatform"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-semibold text-base-content transition hover:text-primary"
              >
                Safety Tour Platform
              </Link>
              <span className="rounded-full border border-white/40 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                2021.09 ~ 2022.04
              </span>
            </div>
            <p className="mt-2 text-base-content/70">
              코로나 위험도를 확인할 수 있는 안전한 관광지 여행 정보 제공 어플리케이션
            </p>
            <ul className="mt-3 list-disc list-inside space-y-1 text-sm text-base-content/70">
              <li>React Native를 사용한 하이브리드 앱</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-base-content/60">
              {['React Native', 'React Navigation', 'React Hooks', 'Axios'].map(item => (
                <span
                  key={item}
                  className="rounded-full border border-white/40 bg-white/60 px-3 py-1 backdrop-blur dark:border-white/10 dark:bg-white/5"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex flex-col gap-3 text-center">
            <span className={sectionLabel}>Education</span>
            <h2 className="text-3xl font-semibold text-base-content sm:text-4xl">학력</h2>
          </div>
          <div className={`${glassCard} p-6`}>
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <h3 className="text-2xl font-semibold text-base-content">남서울대학교</h3>
              <span className="rounded-full border border-white/40 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                2017.03 ~ 2023.08
              </span>
            </div>
            <p className="mt-2 text-base-content/70">컴퓨터소프트웨어학과 전공</p>
            <div className="mt-4 grid gap-4 text-sm text-base-content/70 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/30 bg-white/60 p-3 backdrop-blur dark:border-white/10 dark:bg-white/5">
                <span className="font-semibold text-base-content">총 학점:</span> 3.51/4.5
              </div>
              <div className="rounded-2xl border border-white/30 bg-white/60 p-3 backdrop-blur dark:border-white/10 dark:bg-white/5">
                <span className="font-semibold text-base-content">전공평점:</span> 3.74/4.5
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
