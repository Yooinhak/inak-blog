import type { Metadata } from 'next';
import Image from 'next/image';

import { cn } from '@utils/cn';

import { IconArrow, IconGithub } from '@components/icons';
import { btnGhost, btnPrimary, chip, eyebrow, sec, secHead, secTitle, wrap } from '@lib/ui';

export const metadata: Metadata = {
  title: 'About',
  description:
    '라이브 게임 서비스의 웹·커뮤니티·어드민을 만드는 프론트엔드 개발자 유인학(이낙)입니다. 프론트엔드 2인 체제로 라이브 게임 웹 전 영역을 운영하며, 신규 구축과 레거시 개선을 함께 합니다.',
};

type Project = {
  badge: string;
  name: string;
  period: string;
  /** 역할 · git 실측 지표 (짧은 pill로 렌더) */
  meta?: string[];
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
    meta: ['프론트엔드 개발', '저장소 최다 기여 (54%)', '843 commits', '이벤트 페이지 57+'],
    summary:
      '라이브 게임의 시즌·콜라보·캠페인 웹 이벤트를 담당했습니다. 57개 이상의 이벤트 페이지를 직접 구현했고, 일부는 퍼블리싱부터 서버 연동까지 전 과정을 혼자 진행했습니다. 설날 윷놀이, 테일즈 아틀리에·애니멀빌리지·마춘자 브랜드관, 명탐정 코난·네이버웹툰 콜라보, K-챔피언십, 아이디어 페스티벌, 2026 대운동회 등을 맡았습니다.',
    highlights: [
      '외주 퍼블리싱 가이드 문서 595줄을 직접 작성해 브랜치 워크플로우·디렉토리 규칙·린트 정책을 표준화하고, 외주 산출물의 품질과 인수 비용을 개선',
      '공통 모달·EventSection·CustomImage 등 이벤트 템플릿을 구축하고 webp 변환·srcSet 버전 관리를 적용해, 매월 반복되는 개발 비용과 이미지 로딩 비용을 함께 절감',
      '어드민 이벤트 속성값으로 링크·영상·노출 기간·탭 오픈을 제어해 코드 배포 없이 운영에서 이벤트를 조정할 수 있게 함',
      '한게임·라온·스토브 채널링별 GNB·헤더·리다이렉트를 분기하고, GA4/GTM 태그 체계로 캠페인 성과 측정을 지원',
    ],
    techs: ['React', 'Vite', 'Tailwind CSS', 'TanStack Query', 'Zustand', 'React Router', 'Swiper', 'html2canvas'],
  },
  {
    badge: 'Community',
    name: '테일즈런너 광장 (커뮤니티)',
    period: '2025.03 ~ 2025.11 (모바일 대응 2026.06)',
    meta: ['프론트엔드 개발', '0 → 1 신규 구축', '저장소 최다 기여 (44%)', '367 commits'],
    summary:
      '게임 내 SNS형 커뮤니티 "광장"의 프론트엔드를 초기부터 맡아 라이브까지 올렸습니다. 게임피드, 스크랩, 해시태그, 응원메시지, 통합검색, 방문 기록, 길드광장 등 커뮤니티 핵심 기능을 설계·구현했습니다.',
    highlights: [
      'TanStack Virtual 기반 useVirtualRows 훅을 직접 설계해 무한 스크롤과 가상 스크롤을 결합하고, 모바일에서 외부 엘리먼트가 스크롤 주체가 되는 케이스까지 옵션으로 흡수해 PC·모바일 단일 구현으로 통합',
      '인게임 로그인 만료, 인게임 진입 URL 분기, 캐릭터 미생성·Guest·해지 대기 등 게임 계정 상태별 화면 분기를 촘촘하게 처리',
      '회원 식별자를 memberId에서 squareKey로 마이그레이션하며 라우팅·API·검색 전 구간을 재맵핑',
      'apis / hooks / components를 board·comment·guild·gamefeed·search 도메인 축으로 분리하고, useCheckPermission·useConfirm 등 공통 훅을 정립',
    ],
    techs: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'TanStack Query', 'TanStack Virtual', 'Jotai', 'date-fns'],
  },
  {
    badge: 'Global Admin',
    name: '몰렙(MOLEP) 글로벌 게임 포털 어드민 3종',
    period: '2026.03 ~ 현재',
    meta: ['프론트엔드 단독 담당', '3개 저장소 신규 구축', '저장소 기여 91~96%', '214 commits'],
    summary:
      '글로벌 게임 퍼블리싱 포털의 관리자 도구 3종(포털·게임·회원)을 프론트엔드 단독 담당으로 신규 구축했습니다. 빈 저장소에서 시작해 백엔드 한 분과 합을 맞춰 국가·언어·약관 배포, 홈 레이아웃, 쿠폰, 공지, 커뮤니티 운영까지 커버했습니다.',
    highlights: [
      'feature 기반 아키텍처로 도메인을 수직 분할하고 Table·FormTable·DatePicker·FilterSearch 등 공통 컴포넌트를 자체 구축, 포털에서 검증한 구조를 재사용해 게임 어드민을 한 달 만에 신규 구축',
      'MSW 목 핸들러로 백엔드 API 완성 전에 화면을 먼저 개발하고 순차적으로 서버 맵핑해, 백엔드 1명과의 병렬 개발 생산성을 확보',
      'ISMS 대응으로 인증 flow를 재설계 — access token 중앙화, 30분 세션 만료, 비활성화 계정 로그인 차단, 계정 접근권한 정기검토, 권한그룹 변경 사유 필수화',
      '입력 길이 토큰과 도메인별 예외 규칙을 유효성 검사 상수 모듈로 구조화해 React Hook Form과 결합하고, 서버와 주고받는 날짜를 UTC로 표준화',
    ],
    techs: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'TanStack Query',
      'Jotai',
      'React Hook Form',
      'MSW',
      'dayjs',
      'Froala Editor',
    ],
  },
  {
    badge: 'Game Admin',
    name: '테일즈런너 통합 어드민',
    period: '2024.11 ~ 2026.07',
    meta: ['기능 개발', '유지보수', '327 commits'],
    summary:
      '운영팀이 매일 사용하는 어드민의 기능 개발과 유지보수를 담당했습니다. 입사 직후부터 지속적으로 맡아 공지·커뮤니티 게시판·회원 제재·광장 운영툴·인게임 관리·이벤트·쿠폰까지 운영 도구 전반을 개선했습니다.',
    highlights: [
      '2개월에 걸친 공통 컴포넌트 리팩토링으로 리스트 페이지 구조·테이블·filter search·DatePicker·useConfirm을 순차 표준화해 레거시 어드민의 반복 코드를 제거',
      '공지 관리에 배포일시(노출일시) 체계를 도입하고 즉시 노출·상단 고정·고정 노출 순서·노출 기준 정렬을 구현',
      'AI 필터링 내역 관리(가중치·숨김 해제)와 제재 회원 관리, 게시판 댓글 CSV 추출 등 대량 콘텐츠 운영 기능을 개발',
      'ISMS 대응 — 로그인 5회 실패 시 계정 잠금 및 해제, 권한그룹 변경 사유 입력으로 변경 이력 추적',
    ],
    techs: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'TanStack Query',
      'Jotai',
      'React Hook Form',
      'Froala Editor',
      'xlsx',
    ],
  },
  {
    badge: 'Member Admin',
    name: '테일즈런너 회원 어드민',
    period: '2025.04 ~ 2026.05',
    meta: ['프론트엔드 개발', '저장소 2위 기여 (42%)', '136 commits'],
    summary:
      '개인정보·본인확인이 얽힌 회원 운영 도구를 담당했습니다. 명의 및 신원정보 변경 요청 처리와 노블레스 런너즈 시즌 관리를 신규 구축했습니다.',
    highlights: [
      '명의 및 신원정보 변경을 전담 구축 — 본인·가족 명의 변경의 작성·수정·승인 flow, 서류 등록(MIME 타입 검증·heic 처리·미리보기 권한 분기), 양수·양도인 동일 계정 차단, 철회·거절 상태 동기화',
      '노블레스 런너즈 시즌 관리를 신규 구축 — 시즌 생성·상세·수정, 대상자 명단, 혜택 기간 중복 검증, 배송지 다운로드, 활성 시즌 삭제 차단',
      '테스트 계정 발급 및 CSV 다운로드, OTP 초기화, 기관 요청 회원 정보 조회 기능을 개발',
      '테런 서비스해지와 라온 탈퇴 회원 상세를 오갈 때 발생하던 회원정보 연동 오류를 해결',
    ],
    techs: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'TanStack Query',
      'TanStack Virtual',
      'Jotai',
      'React Hook Form',
    ],
  },
  {
    badge: 'Responsive',
    name: '테일즈런너 공식 홈페이지 모바일 반응형 전환',
    period: '2025.09 ~ 2026.06',
    meta: ['전환 브랜치 단독 운영', '9개월 장기 브랜치', '라이브 무중단 전환'],
    summary:
      'PC 전용으로 제공되던 공식 홈페이지를 모바일·태블릿까지 대응하도록 전환했습니다. 별도 브랜치를 9개월간 유지하며 develop을 지속 머지하는 방식으로, 라이브 서비스를 멈추지 않고 점진적으로 전환했습니다.',
    highlights: [
      'Header·GNB(슬라이드 메뉴)·메인·새소식·커뮤니티(게시판 5종과 상세)·내정보·랭킹·레이어 팝업까지 전 영역을 순차 반응형 전환',
      'Samsung/Galaxy 브라우저에서 SPA 진입 시 viewport meta가 적용되지 않던 문제를 useLayoutEffect 기반 커스텀 viewport 적용으로 해결',
      'iOS dialog 오토포커스, 갤럭시 뒤로가기 시 쿠폰값 미초기화, 삼성 키보드 툴바 잔존 등 재현이 까다로운 기기별 이슈를 개별 특정해 해결',
      '약관·탈퇴 등 모바일 대응이 부적절한 화면은 PC 유도 화면으로 분기하고, 모바일 최소 화면 너비를 보장해 안전하게 점진 전환',
    ],
    techs: ['React', 'Vite', 'Tailwind CSS', 'SWR', 'Zustand'],
  },
  {
    badge: 'Live Web',
    name: '테일즈런너 공식 홈페이지 서비스 개발',
    period: '2024.11 ~ 2026.07',
    meta: ['기능 개발', '유지보수', '309 commits'],
    summary:
      '20년 넘게 서비스 중인 공식 홈페이지의 기능 개발과 운영을 담당했습니다. 알림함 신규 개발, 채널링별 서비스 해지 flow, TR 크리에이터, 랭킹, 커뮤니티 개선을 진행했습니다.',
    highlights: [
      '알림함을 퍼블리싱부터 API 맵핑까지 신규 개발 — 메인 로그인 박스·서브메뉴 진입점, 상세 팝업, 페이지네이션, 로그인 상태 변경 시 목록 갱신',
      '한게임·스토브 채널링별 서비스 해지 및 해지 철회 flow와 유예기간 계산을 분기 처리',
      '광장(커뮤니티) 노출을 useSquareOpen 플래그로 제어해 오픈과 롤백을 여러 차례 안전하게 반복',
      'TR 크리에이터 활동내역 제출·추천 콘텐츠 신청, 확률형 아이템 검색 개선, VIP 레벨 컬러·닉네임 색상 공통코드화를 진행',
    ],
    techs: ['React', 'Vite', 'Tailwind CSS', 'SWR', 'Zustand', 'React Hook Form', 'recharts', 'lottie-web'],
  },
  {
    badge: 'Portal',
    name: '라온(RHAON) 회원 포털',
    period: '2025.01 ~ 2026.05',
    meta: ['프론트엔드 부분 참여'],
    summary: '퍼블리싱 플랫폼 라온의 회원 포털에 부분 참여해 캐시 내역, 내 정보, OTP 인증 영역을 개선했습니다.',
    highlights: [
      '캐시 내역 UI를 개선하고 탭 라벨을 정리, useBalance 로직을 수정',
      '내 정보 본인인증 섹션 디자인 개선, 프로필 기본 이미지 미노출 오류 수정, 프로필 이미지 10MB 초과 방지',
      'OTP 인증번호 입력란에 숫자 외 문자가 입력되던 문제를 수정하고 AI 필터링 프로필 이미지 툴팁을 추가',
    ],
    techs: ['React', 'Vite', 'Tailwind CSS', 'SWR', 'Zustand', 'qrcode.react', 'crypto-js'],
  },
];

const VALUES = [
  {
    k: '라이브 서비스',
    v: '20년 넘게 서비스 중인 게임의 웹·커뮤니티·어드민을 프론트엔드 2인 체제로 운영하며, 라이브 트래픽을 멈추지 않고 점진적으로 개선합니다.',
  },
  {
    k: '구조로 반복 제거',
    v: '매월 반복되는 이벤트 개발을 템플릿·공통 컴포넌트로 추상화하고, 외주 협업 프로세스까지 문서로 표준화합니다.',
  },
  {
    k: '0 → 1 · 1 → N',
    v: '커뮤니티와 글로벌 포털 어드민을 빈 저장소에서 라이브까지 올렸고, 20년 된 레거시 서비스도 개선하며 운영합니다.',
  },
  {
    k: '반응형 · 크로스 브라우저',
    v: 'PC 전용 서비스를 모바일까지 확장하고, Samsung·iOS 등 재현이 까다로운 기기별 이슈를 끝까지 파고들어 해결합니다.',
  },
  {
    k: 'B2B 어드민 · 보안',
    v: '권한·인증·감사가 얽힌 운영 도구를 설계합니다. 세션 만료·계정 잠금·권한 변경 이력 추적을 여러 어드민에 일관되게 적용했습니다.',
  },
  {
    k: '성능 · 접근성',
    v: '피드 가상화, webp·srcSet 버전 관리, lazy import 청크 재시도로 체감 성능을 높이고 모션 민감 사용자까지 배려합니다.',
  },
];

const SKILLS = [
  {
    group: 'Language & Framework',
    items: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'React Native', 'Vite'],
  },
  {
    group: 'State & Data',
    items: ['TanStack Query', 'TanStack Virtual', 'Jotai', 'Zustand', 'SWR', 'React Hook Form'],
  },
  {
    group: 'Styling',
    items: ['Tailwind CSS', 'styled-components', 'SCSS', 'clsx / tailwind-merge'],
  },
  {
    group: 'Tooling & Infra',
    items: ['MSW', 'ESLint / Prettier', 'Husky / lint-staged', 'Bun', 'GA4 / GTM', 'AWS CDN'],
  },
  {
    group: 'Library',
    items: [
      'Swiper',
      'html2canvas',
      'Froala Editor',
      'DOMPurify',
      'xlsx',
      'dayjs / date-fns',
      'three.js',
      'lottie-web',
      'recharts / d3',
      'ECharts',
      'MUI',
    ],
  },
  {
    group: 'Collaboration',
    items: ['Git / GitHub / GitLab', 'ClickUp', 'Slack', 'Notion', 'Figma', 'VSCode'],
  },
];

const CAREER = [
  {
    year: '2024.11',
    title: '블로믹스 (Blomics) · 프론트엔드 개발자',
    desc: '테일즈런너(20년 차 라이브 게임)의 이벤트 웹·커뮤니티·어드민 3종·공식 홈페이지와 몰렙 글로벌 포털 어드민 3종을 담당. 프론트엔드 2인 체제로 9개 저장소를 공동 운영하며 2,200여 커밋을 기여했고, 5개 저장소에서 최다 기여자입니다.',
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

/** small mono pill for role / git-measured metrics */
const metaPill =
  'font-mono text-[11px] font-medium leading-none px-2.5 py-[6px] rounded-full border border-hairline text-text-mute';

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

      {p.meta && p.meta.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-3">
          {p.meta.map(m => (
            <span className={metaPill} key={m}>
              {m}
            </span>
          ))}
        </div>
      )}

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
    <div className="flex items-center gap-2.5 flex-wrap">
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
            20년 넘게 서비스 중인 라이브 게임의 웹 전 영역을 프론트엔드 2인 체제로 운영하고 있습니다. 반복되는 작업은
            구조로 없애고, 사용자의 맥락과 기기 환경을 먼저 고민합니다.
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
              { n: '4+', l: 'years' },
              { n: '2,200+', l: 'commits' },
              { n: '9', l: 'repos' },
              { n: 'Live', l: 'service' },
            ].map(s => (
              <div className="flex flex-col gap-0.5" key={s.l}>
                <span className="font-mono text-[26px] font-extrabold text-text tracking-[-0.02em] leading-none">
                  {s.n}
                </span>
                <span className="font-mono text-[11px] font-medium text-text-mute tracking-[0.08em] uppercase">
                  {s.l}
                </span>
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
      <section className="grid grid-cols-3 gap-4 mt-12 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
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
              <span className="font-mono text-xs font-semibold tracking-[0.12em] uppercase text-text-mute">
                {s.group}
              </span>
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
          <CompanyLabel name="블로믹스 (Blomics)" note="2024.11 ~ 현재 · 라이브 게임 서비스 · 프론트엔드 2인 체제" />
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
