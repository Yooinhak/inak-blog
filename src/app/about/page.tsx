import type { Metadata } from 'next';
import Image from 'next/image';

import { IconArrow, IconGithub } from '@components/icons';
import { wrap, eyebrow, btnPrimary, btnGhost, chip, sec, secHead, secTitle } from '@lib/ui';
import { cn } from '@utils/cn';

export const metadata: Metadata = {
  title: 'About',
  description: '라이브 게임 서비스의 웹·커뮤니티·어드민을 만드는 프론트엔드 개발자 유인학(이낙)입니다.',
};

type Project = {
  badge: string;
  name: string;
  period: string;
  summary: string;
  highlights: string[];
  techs: string[];
  link?: string | null;
};

const PROJECTS: Project[] = [
  {
    badge: 'Event Web',
    name: '테일즈런너 이벤트 웹',
    period: '2025.01 ~ 현재',
    summary:
      '라이브 게임의 시즌별 웹 이벤트·캠페인을 경태 팀장과 함께 개발했습니다. 일부는 퍼블리싱부터 직접 진행하고, 프론트엔드 개발은 백엔드와 데이터 연동을 협업해 완성했습니다. 설날 윷놀이, 아이디어 페스티벌, 마춘자 브랜드관, 네이버웹툰 콜라보, 2026 대운동회 등 수십 종을 담당했습니다.',
    highlights: [
      '외주 퍼블리싱 가이드를 갱신해 외주 산출물의 품질과 일관성을 높임',
      '이미지 webp 변환·srcSet 버전 관리로 로딩을 최적화하고, Swiper·html2canvas로 인터랙션 구현',
      'GA4 태깅으로 캠페인 성과 측정을 지원하고, 한게임·라온·스토브 등 채널링 환경 대응',
    ],
    techs: ['React', 'Vite', 'TanStack Query', 'Zustand', 'Swiper', 'html2canvas'],
  },
  {
    badge: 'Community',
    name: '테일즈런너 광장 (커뮤니티)',
    period: '2025.03 ~ 2025.11',
    summary:
      '게임 내 SNS형 커뮤니티 "광장"의 프론트엔드를 처음부터 맡아 구현했습니다. 게임피드, 스크랩, 해시태그, 응원메시지, 방문 기록, 길드광장 등 커뮤니티 핵심 기능을 설계·구현했습니다.',
    highlights: [
      '무한 스크롤 게시판을 TanStack Virtual 가상화로 렌더링해 대량 피드에서도 안정적인 성능 확보',
      '게임 클라이언트와의 연동(인게임 로그인, square key 라우팅)과 AI 필터링·제재 콘텐츠 상태 처리',
      'apis / hooks / components를 도메인 단위로 분리해 관심사를 명확히 한 구조 설계',
    ],
    techs: ['React', 'TypeScript', 'TanStack Query', 'TanStack Virtual', 'Jotai'],
  },
  {
    badge: 'Global Admin',
    name: '몰레프(MOLEP) 글로벌 게임 포털 어드민',
    period: '2026.02 ~ 현재',
    summary:
      '글로벌 게임 퍼블리싱 포털의 관리자 도구를 프론트엔드 담당으로, 백엔드 한 분과 합을 맞춰 구축했습니다. 국가·언어·약관 배포, 홈 레이아웃, 쿠폰, 공지 등 운영 전반을 담당했습니다.',
    highlights: [
      'feature 기반 아키텍처 + MSW 목 + zod 스키마로 타입 안전성과 병렬 개발 생산성을 확보',
      '토큰 인증 flow를 재설계해 30분 세션 만료·access token 중앙화·접근권한 정기검토 적용',
      '입력값 유효성 검사를 공통 모듈로 구조화하고 날짜 처리를 UTC로 표준화',
    ],
    techs: ['React', 'Vite', 'TanStack Query', 'Jotai', 'zod', 'MSW'],
  },
  {
    badge: 'Game Admin',
    name: '테일즈런너 통합 어드민',
    period: '2024.11 ~ 현재',
    summary:
      '운영팀이 매일 사용하는 어드민의 기능 개발과 유지보수를 담당하며, 서비스 운영툴과 회원 관리 도구를 폭넓게 개선했습니다.',
    highlights: [
      '이벤트 설정·생일 이벤트 템플릿·공지·모니터링 키워드 등 운영 기능 개발',
      '노블레스 런너즈 시즌 관리 화면을 신규 구축(시즌 생성·대상자 명단·혜택 기간 검증 등)',
      '로그인 5회 실패 계정 잠금, 권한그룹 변경 사유 입력으로 변경 이력 추적 등 보안·감사 반영',
    ],
    techs: ['React', 'TanStack Query', 'React Hook Form', 'xlsx'],
  },
  {
    badge: 'Responsive',
    name: '테일즈런너 공식 홈페이지 모바일 반응형 전환',
    period: '2024.11 ~ 현재',
    summary:
      'PC 전용으로 제공되던 공식 홈페이지를 모바일·태블릿까지 대응하도록 반응형 전환했습니다. 커뮤니티, 내정보, 새소식, 노블레스 등 주요 섹션을 모바일 대응했습니다.',
    highlights: [
      'Samsung/Galaxy 브라우저에서 SPA 진입 시 viewport가 적용되지 않던 문제를 useLayoutEffect 기반으로 해결',
      'iOS dialog 오토포커스·갤럭시 뒤로가기 쿠폰 초기화 등 기기·브라우저별 호환성 이슈를 다수 처리',
      '모바일 최소 화면 너비 보장, PC 전용 화면 분기 등 안전한 분기 전략으로 점진적 전환',
    ],
    techs: ['React', 'Tailwind CSS', 'Zustand', 'SWR'],
  },
];

const VALUES = [
  { k: '라이브 서비스', v: '대규모 게임 서비스의 웹·커뮤니티·어드민을 맡아 개발하고 안정적으로 운영·개선합니다.' },
  { k: '반응형 · 호환성', v: 'PC 전용 라이브 서비스를 모바일까지 대응하고 Samsung·iOS 브라우저 이슈를 해결합니다.' },
  { k: 'B2B 어드민', v: '권한·인증·감사가 얽힌 운영 도구를 안정적이고 확장 가능한 구조로 설계합니다.' },
  { k: '성능 · 협업', v: 'webp·가상화로 체감 성능을 높이고, 기획·백엔드·QA와 합을 맞춰 개선합니다.' },
];

const SKILLS = [
  {
    group: 'Front-End',
    items: [
      'TypeScript',
      'JavaScript',
      'React',
      'React Native',
      'Next.js',
      'Vite',
      'TanStack Query',
      'Zustand',
      'Jotai',
      'SWR',
      'React Hook Form',
      'zod',
      'Tailwind CSS',
      'styled-components',
      'SCSS',
    ],
  },
  {
    group: 'Collaboration & Tools',
    items: ['Git', 'GitHub', 'GitLab', 'Slack', 'Notion', 'Figma', 'MSW', 'AWS', 'VSCode'],
  },
];

const CAREER = [
  {
    year: '2024.11',
    title: '블로믹스 (Blomics) · 프론트엔드 개발자',
    desc: '테일즈런너(라이브 게임)의 이벤트 웹·커뮤니티·통합 어드민과 몰레프 글로벌 포털 어드민을 담당. 공식 홈페이지 모바일 반응형 전환과 크로스 브라우저 이슈 해결.',
  },
  {
    year: '2022.10',
    title: 'Corretto · 프론트엔드 개발자',
    desc: 'SI 프로젝트와 자체 솔루션 프론트엔드 개발. 쇼핑·교육·CRM 등 다양한 도메인의 플랫폼·백오피스를 구축.',
  },
];

// Corretto 재직(2022.10~2024.10) 시절 SI·자체 솔루션 프로젝트 — 주요 프로젝트로 통합
const CORRETTO_PROJECTS: Project[] = [
  {
    badge: 'CRM Dashboard',
    name: '한화정밀기계 CRM 시스템',
    period: '2024.07 ~ 2024.10',
    summary:
      '영업·고객 관리를 위한 CRM 시스템의 대시보드와 관리 화면을 개발했습니다. MUI 테이블과 ECharts 기반 시각화로 흩어진 데이터를 한 화면에서 파악할 수 있도록 구성했습니다.',
    highlights: [
      'MUI Table 기반 대량 데이터 그리드를 정렬·필터·페이지네이션과 함께 구현해 운영 효율 향상',
      'ECharts로 매출·고객 지표 대시보드를 시각화해 운영진이 핵심 지표를 한눈에 파악하도록 지원',
      '복잡한 관리 화면의 상태를 Jotai로 구조화하고 공통 폼·필터 컴포넌트로 재사용성 확보',
    ],
    techs: ['Next.js', 'styled-components', 'Jotai', 'MUI', 'ECharts'],
    link: null,
  },
  {
    badge: 'Career Platform',
    name: 'Future Plan 진로진학 시스템',
    period: '2024.01 ~ 2024.06',
    summary:
      '학생의 진로·진학을 지원하는 시스템의 전면 리빌딩에 참여해, 전체 페이지의 프론트엔드를 새로 개발했습니다. 레거시 화면을 현대적인 컴포넌트 구조로 재구성했습니다.',
    highlights: [
      '레거시 시스템을 Next.js 기반으로 리빌딩하며 전체 화면 흐름과 라우팅을 재설계',
      '진로·진학 데이터를 보여주는 조회 화면과 다단계 입력 폼을 구현해 사용 흐름을 단순화',
      '컴포넌트 단위 재사용 구조를 도입해 다수 페이지를 일관된 UI로 통일',
    ],
    techs: ['Next.js', 'styled-components', 'Jotai'],
    link: null,
  },
  {
    badge: 'Global Commerce',
    name: 'KorlyMally 해외 쇼핑 플랫폼',
    period: '2023.10 ~ 2024.01',
    summary:
      '국내 상품을 해외 사용자에게 판매하는 국제 e-commerce 플랫폼과 WMS·OMS 백오피스의 프론트엔드를 개발했습니다. 다국가 환경을 전제로 사용자몰과 운영툴을 함께 다뤘습니다.',
    highlights: [
      '상품 탐색·장바구니·주문 흐름 등 e-commerce 핵심 사용자 플로우를 구현',
      'WMS·OMS 백오피스에서 입출고·주문 관리 화면을 대량 데이터 기준으로 설계',
      '다국가 사용자를 위한 i18n·통화/배송 표기 처리로 글로벌 환경 대응',
    ],
    techs: ['Next.js', 'styled-components', 'Jotai', 'i18n'],
    link: 'https://korlymally.kr/',
  },
  {
    badge: 'EdTech',
    name: '윙버디 온라인 특수교육 플랫폼',
    period: '2023.05 ~ 2023.08',
    summary:
      '특수교육 대상 학습자를 위한 온라인 교육 플랫폼으로, 모바일 전용으로 제공되던 서비스를 웹앱 반응형으로 전환하고 ebook 학습 기능을 개발했습니다.',
    highlights: [
      '모바일 전용 화면을 데스크톱·태블릿까지 대응하는 반응형 웹앱으로 전환',
      'ebook 뷰어 기능을 개발해 페이지 탐색·학습 콘텐츠 렌더링을 구현',
      '다양한 학습자를 고려한 접근성 친화적 UI로 사용성을 확보',
    ],
    techs: ['Next.js', 'styled-components', 'Jotai'],
    link: 'https://wingbuddy.kr/',
  },
  {
    badge: 'Commerce OMS',
    name: 'Gel-click 쇼핑몰 통합관리 솔루션',
    period: '2022.11 ~ 2023.10',
    summary:
      '여러 오픈마켓·자사몰의 주문·상품·재고를 한곳에서 관리하는 통합관리(OMS·CMS) 솔루션의 플랫폼과 백오피스를 개발했습니다. 글로벌 셀러를 위한 다국어 환경을 지원했습니다.',
    highlights: [
      '주문·상품·재고 등 대량 테이블 UI를 정렬·필터·페이지네이션과 함께 구현해 운영 효율을 높임',
      'i18n 다국어 구조를 도입해 글로벌 언어 환경을 지원하고 문구를 중앙에서 관리',
      '반복되는 폼·모달·테이블을 공통 컴포넌트로 추상화하고 Jotai로 전역 상태를 가볍게 관리',
    ],
    techs: ['Next.js', 'styled-components', 'Jotai', 'i18n'],
    link: 'https://gelclick.com/home/main.do',
  },
];

/** static (non-interactive) chip — no hover motion */
const chipStatic = cn(chip, 'cursor-default hover:translate-y-0 hover:text-text-soft');

function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="glass py-[22px] px-6">
      <div className="flex items-start justify-between gap-3.5 flex-wrap">
        <div className="flex flex-col gap-1.5">
          <span className={cn(eyebrow, 'text-accent')}>{p.badge}</span>
          <h3 className="m-0 text-[19px] font-extrabold tracking-[-0.02em] text-text">
            {p.link ? (
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-inherit no-underline">
                {p.name}
              </a>
            ) : (
              p.name
            )}
          </h3>
        </div>
        <span className="font-mono text-xs font-semibold text-text-mute shrink-0">{p.period}</span>
      </div>

      <p className="mt-3.5 mb-0 text-[14.5px] leading-[1.66] text-text-soft">{p.summary}</p>

      <ul className="list-none mt-3.5 mb-0 p-0 flex flex-col gap-[9px]">
        {p.highlights.map(h => (
          <li
            key={h}
            className="relative pl-5 text-sm leading-[1.6] text-text-soft before:content-[''] before:absolute before:left-0.5 before:top-[9px] before:w-1.5 before:h-1.5 before:rounded-[2px] before:bg-accent before:rotate-45"
          >
            {h}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mt-4">
        {p.techs.map(t => (
          <span className={chipStatic} key={t}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function CompanyLabel({ name, note }: { name: string; note: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="font-mono text-[13px] font-bold text-text">{name}</span>
      <span className="font-mono text-[11.5px] text-text-mute">{note}</span>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className={cn(wrap, 'pt-10')}>
      {/* ---------- Hero ---------- */}
      <section className="grid grid-cols-[1fr_220px] gap-12 items-center pt-6 pb-4 max-[820px]:grid-cols-1 max-[820px]:gap-7">
        <div className="flex flex-col gap-5">
          <span className={eyebrow}>/ about</span>
          <h1 className="mt-2 mb-0 text-[clamp(32px,4.8vw,56px)] font-extrabold leading-[1.12] tracking-[-0.035em] text-text">
            프론트엔드 개발자
            <br />
            <span className="text-accent">유인학</span>입니다.
          </h1>
          <p className="m-0 text-[16.5px] leading-[1.75] text-text-soft max-w-[48ch]">
            라이브 게임 서비스의 웹·커뮤니티·어드민을 만드는 프론트엔드 개발자입니다. 동료와 합을 맞춰 운영 중인 서비스를
            안정적으로 개선하고, 사용자의 맥락을 먼저 고민합니다.
          </p>
          <div className="flex gap-3 flex-wrap mt-1">
            <a className={btnPrimary} href="mailto:syu3236@gmail.com">
              이메일 보내기 <IconArrow />
            </a>
            <a className={btnGhost} href="https://github.com/Yooinhak" target="_blank" rel="noopener noreferrer">
              <IconGithub size={17} /> GitHub
            </a>
          </div>
          <div className="flex flex-wrap gap-[22px] mt-2">
            {[
              { n: '3+', l: 'years' },
              { n: 'Blomics', l: 'current' },
              { n: 'Live', l: 'service' },
            ].map(s => (
              <div className="flex flex-col gap-0.5" key={s.l}>
                <span className="font-mono text-[26px] font-extrabold text-text tracking-[-0.02em] leading-none">{s.n}</span>
                <span className="font-mono text-[11px] font-medium text-text-mute tracking-[0.08em] uppercase">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="glass relative p-2 overflow-hidden justify-self-end w-full max-w-[220px] max-[820px]:max-w-[200px] max-[820px]:justify-self-start">
          <Image
            src="/images/inhak-profile.jpg"
            alt="유인학 프로필"
            width={220}
            height={220}
            className="w-full aspect-square object-cover object-top rounded-[14px] block"
          />
          <div className="font-mono absolute bottom-4 left-4 px-[11px] py-[5px] rounded-full bg-accent text-on-accent text-[11px] font-bold">
            inak.dev
          </div>
        </div>
      </section>

      {/* ---------- 핵심 역량 ---------- */}
      <section className="grid grid-cols-3 gap-4 mt-12 max-[820px]:grid-cols-1">
        {VALUES.map(v => (
          <div className="glass p-6 flex flex-col gap-2" key={v.k}>
            <span className="text-lg font-extrabold text-accent tracking-[-0.02em]">{v.k}</span>
            <p className="m-0 text-[14.5px] leading-[1.6] text-text-soft">{v.v}</p>
          </div>
        ))}
      </section>

      {/* ---------- 기술 스택 ---------- */}
      <section className={sec}>
        <div className={secHead}>
          <div>
            <span className={eyebrow}>/ skills</span>
            <h2 className={secTitle}>기술 스택</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 max-[820px]:grid-cols-1">
          {SKILLS.map(s => (
            <div className="flex flex-col gap-3 p-[22px] rounded-card border border-hairline" key={s.group}>
              <span className="font-mono text-xs font-semibold tracking-[0.12em] uppercase text-text-mute">{s.group}</span>
              <div className="flex flex-wrap gap-2">
                {s.items.map(i => (
                  <span className={chipStatic} key={i}>
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- 경력 ---------- */}
      <section className={sec}>
        <div className={secHead}>
          <div>
            <span className={eyebrow}>/ career</span>
            <h2 className={secTitle}>경력</h2>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          {CAREER.map(c => (
            <div className="grid grid-cols-[72px_28px_1fr] items-stretch group/tl" key={c.title}>
              <span className="font-mono flex items-center text-[15px] font-bold text-accent">{c.year}</span>
              {/* timeline rail + dot */}
              <div className="relative flex justify-center before:content-[''] before:absolute before:top-0 before:bottom-0 before:w-0.5 before:bg-hairline group-first/tl:before:top-1/2 group-last/tl:before:bottom-1/2 after:content-[''] after:absolute after:top-[calc(50%-6px)] after:w-3 after:h-3 after:rounded-full after:bg-accent after:border-[3px] after:border-bg" />
              <div className="glass py-[18px] px-[22px] my-2 flex-1">
                <h3 className="mt-0 mb-[5px] text-[17px] font-bold tracking-[-0.02em]">{c.title}</h3>
                <p className="m-0 text-sm leading-[1.6] text-text-soft">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- 주요 프로젝트 ---------- */}
      <section className={sec}>
        <div className={secHead}>
          <div>
            <span className={eyebrow}>/ work</span>
            <h2 className={secTitle}>주요 프로젝트</h2>
          </div>
        </div>

        {/* 블로믹스 */}
        <div className="mt-1 mb-3.5">
          <CompanyLabel name="블로믹스 (Blomics)" note="2024.11 ~ 현재 · 라이브 게임 서비스" />
        </div>
        <div className="flex flex-col gap-[18px]">
          {PROJECTS.map(p => (
            <ProjectCard p={p} key={p.name} />
          ))}
        </div>

        {/* 코레토 */}
        <div className="mt-8 mb-3.5">
          <CompanyLabel name="코레토 (Corretto)" note="2022.10 ~ 2024.10 · SI · 자체 솔루션" />
        </div>
        <div className="flex flex-col gap-[18px]">
          {CORRETTO_PROJECTS.map(p => (
            <ProjectCard p={p} key={p.name} />
          ))}
        </div>
      </section>

      {/* ---------- 개인 프로젝트 · 학력 ---------- */}
      <section className={sec}>
        <div className={secHead}>
          <div>
            <span className={eyebrow}>/ more</span>
            <h2 className={secTitle}>개인 프로젝트 · 학력</h2>
          </div>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
          <div className="glass py-[22px] px-6">
            <div className="flex items-baseline justify-between gap-2.5">
              <a
                href="https://github.com/Yooinhak/Safety_Tour_Flatform"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[17px] font-bold text-text no-underline"
              >
                Safety Tour Platform
              </a>
              <span className="font-mono text-[11.5px] text-text-mute shrink-0">2021.09 ~ 2022.04</span>
            </div>
            <p className="mt-2.5 mb-0 text-[13.5px] leading-[1.6] text-text-soft">
              코로나 위험도를 확인할 수 있는 안전한 관광지 여행 정보 제공 앱. React Native 기반 하이브리드 앱.
            </p>
            <div className="flex flex-wrap gap-1.5 mt-3.5">
              {['React Native', 'React Navigation', 'React Hooks', 'Axios'].map(t => (
                <span className={chipStatic} key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="glass py-[22px] px-6">
            <div className="flex items-baseline justify-between gap-2.5">
              <span className="text-[17px] font-bold text-text">남서울대학교</span>
              <span className="font-mono text-[11.5px] text-text-mute shrink-0">2017.03 ~ 2023.08</span>
            </div>
            <p className="mt-2.5 mb-0 text-[13.5px] leading-[1.6] text-text-soft">
              컴퓨터소프트웨어학과 전공 · 총 학점 3.51 / 4.5 · 전공 평점 3.74 / 4.5
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
