# inak.dev 블로그 개선 리포트

> 2026-07-02 · 코드 전체 + 글 7편 분석 기준. 의심 항목은 생성된 CSS/빌드 산출물로 실제 검증함.

전반 평가: 글래스 디자인 시스템(oklch 변수, 테마 대응, reduced-motion 배려)과 글 구성 수준이 이미 높다. 다만 **SEO 기반이 거의 비어 있고**, "만들다 만" 흔적(죽은 CSS, 미완성 애니메이션, 가짜 지표)이 몇 군데 남아 있다.

---

## 1. 우선순위 최상 — SEO (블로그의 절반이 비어 있음)

### 1-1. 포스트별 `generateMetadata` 없음 ⭐ 가장 중요
`src/app/posts/[category]/[id]/page.tsx`에 `generateMetadata`가 없어 **모든 글이 루트 레이아웃의 "이낙 개발 블로그" title/description/OG를 그대로 공유**한다. 검색 결과와 링크 미리보기에서 글 제목이 전혀 안 보인다.

```tsx
export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { category, id } = await params;
  const d = getPostDetail(category, id);
  return {
    title: d.title,
    description: d.excerpt,
    openGraph: { title: d.title, description: d.excerpt, type: 'article' },
  };
}
```

### 1-2. `generateStaticParams` 없음
글 페이지가 정적 생성되지 않고 요청 시 렌더링된다. 파일 기반 블로그의 최대 장점(전부 SSG)을 버리고 있는 셈.

```tsx
export function generateStaticParams() {
  return getPostList().map(p => ({ category: p.category, id: p.id }));
}
```

### 1-3. sitemap에 홈만 등록
`sitemap.ts`가 `https://www.inak.dev` 하나만 반환. `getPostList()`로 전체 글 + `/posts` + `/about`을 넣을 것.

### 1-4. 그 외 SEO 누락
- **RSS 피드 없음** — 개발 블로그 구독 경로의 기본. `app/feed.xml/route.ts` 추가.
- **JSON-LD(BlogPosting) 없음** — 글 페이지에 구조화 데이터 추가.
- **OG 이미지가 로고(logo.png)** — 1200×630 전용 이미지 또는 `next/og`로 글 제목 들어간 동적 OG 생성 추천 (카테고리 hue를 배경으로 쓰면 디자인 통일).
- **사이트명 불일치**: root는 "이낙 개발 블로그", about은 "유인학 개발 블로그", OG description은 "이낙 개발 블로그입니다."로 본 description과 다름. `title: { template: '%s | 이낙 개발 블로그' }`로 통일.

---

## 2. 실제 동작 버그 / 코드-현실 불일치

### 2-1. 히어로 RotatingText 애니메이션이 실제로 동작 안 함 ⭐
`RotatingText.tsx`는 글자별 `<span className="rot-ch">`에 inline `transform` + `transitionDelay`를 주지만:

- `.rot-ch` CSS가 **어디에도 없다** → `display: inline` 상태라 transform 자체가 적용되지 않음
- `transition-property/duration`이 없어 delay만으로는 전환이 일어나지 않음
- 부모에 `overflow: hidden`이 없어 클리핑도 안 됨

결과: 글자가 솟아오르는 stagger 대신 **텍스트가 그냥 교체**된다. 더 큰 문제는 **Frontend/1 글이 바로 이 컴포넌트를 Framer Motion으로 구현했다고 소개**하는데, 실제 코드는 Framer Motion을 전혀 안 쓴다(`framer-motion`은 설치만 되고 미사용 — 죽은 의존성). **글대로 구현을 올리거나, 글을 실제 구현에 맞게 고칠 것.** 포트폴리오 사이트에서 글과 실물이 다른 건 신뢰 문제가 된다.

### 2-2. 죽은 CSS / 죽은 코드 다수
globals.css에 만들어놓고 안 쓰는 컴포넌트가 많다:

| 죽은 코드 | 상태 | 권장 |
|---|---|---|
| `.theme-toggle` (해/달/별 토글) | CSS만 있고 실제 `DarkMode.tsx`는 구버전 Tailwind 구현 | **신형으로 교체** (아래 2-3) |
| `.read-progress` (읽기 진행바) | CSS만 있고 렌더하는 컴포넌트 없음 | 구현해서 붙이기 (효과 대비 저비용) |
| `.code-block`, `.code-top`, `.code-dots` (맥 스타일 코드 헤더) | 미사용 | 코드블록 래퍼로 활용 or 삭제 |
| tailwind.config의 typography 설정 전체 | `.prose` 클래스를 아무 데도 안 씀, `.dark pre` 셀렉터는 테마 방식(`data-theme=dim`)과 불일치 | `@tailwindcss/typography` 포함 정리 |
| `framer-motion` | src에서 import 0회 | 제거 or 실사용 |

### 2-3. 다크모드 토글 — 접근성 + 디자인 이질
`DarkMode.tsx`가 `<div onClick>`이라 **키보드로 조작 불가, 스크린리더에 버튼으로 안 잡힘**, `aria-label` 없음, stars 이미지 alt가 "clouds". 스타일도 하드코딩 hex(`#6148de`)라 글래스 디자인 시스템과 겉돈다. 이미 만들어둔 `.theme-toggle` CSS + `<button aria-label="테마 전환">`로 교체하면 두 문제가 한 번에 해결된다.

### 2-4. 가짜 지표 노출
- frontmatter에 `views`/`likes`가 있는 글이 0개 → 홈 StatStrip이 **"∞ views"** 표시. 재치는 있지만 지표처럼 보여 오해 소지.
- LikeButton은 localStorage 전용 → 본인 브라우저에만 존재하는 좋아요. Supabase/Upstash 카운터로 실화하거나, 실화 전까지는 views 항목·좋아요 수 표기를 빼는 게 정직하다.

### 2-5. `/game` 페이지 방치
네비에 없는 미완성 페이지가 URL로 접근 가능. 완성하거나 삭제.

### 2-6. 소소한 정리
- `tailwind.config.ts`의 `content`가 `./app/**`, `./components/**`로 `src/` 누락 — v4 자동 감지 덕에 우연히 동작 중. 경로 수정 or content 제거.
- MDX 본문 첫 H1이 frontmatter title과 중복이라 `stripFirstH1` 핵으로 제거 중 — MDX에서 H1을 빼는 게 근본 해결.
- `eslint-config-next`가 15.3.2인데 next는 16 — 버전 정합. `prettier`는 devDependencies로.

---

## 3. 디자인 / UX 개선

1. **모바일에서 TOC 완전 숨김** (`display: none`) — 긴 글에서 아쉽다. 상단 접이식(details) TOC 추천.
2. **TOC가 h2만 수집** — DevLog/1은 h3가 7개인데 전부 누락. h3 포함 2단 TOC + scroll 리스너 대신 `IntersectionObserver`.
3. **코드블록 복사 버튼 없음** — 기술 블로그 기본 기대치. 죽어있는 `.code-block` 헤더 CSS(언어 라벨 + dots)를 살리면서 복사 버튼을 함께 붙이면 좋다.
4. **성능: 블러 과다** — `blur(110px)` orb 3개(fixed) + 카드마다 `backdrop-filter: blur(22px)`. 중저가 모바일에서 스크롤 프레임 저하 가능. 모바일 미디어쿼리에서 orb 블러/개수 축소 권장.
5. `post-prose h2::before: '# '` — 스크린리더가 "#"을 읽음. `content: '# ' / ''` (대체 텍스트 빈 값) 문법으로 해결.
6. `.af-pill`(활성 필터 해제)이 클릭 가능한 `<span>` — `<button>`으로.
7. **검색이 본문 미포함** (제목/발췌/태그만) — 글이 늘면 본문 인덱스 필요. `⌘K` 단축키도 있으면 좋다(검색 버튼이 이미 헤더에 있으니 자연스러운 확장).
8. **댓글 없음** — giscus(GitHub Discussions 기반) 추천. 정적 블로그와 궁합이 가장 좋다.
9. **커스텀 404 / loading 없음** — 디자인 시스템에 맞는 `not-found.tsx` 하나면 완성도가 크게 올라간다.
10. 스크롤바 스타일이 `::-webkit-` 전용 — `scrollbar-width`, `scrollbar-color` 표준 속성 병행.
11. about 페이지 인라인 스타일 과다(수백 줄) — 유지보수를 위해 클래스로 이전.
12. 이전/다음 글 네비게이션 없음 — 글 하단에 prev/next 링크 추가(관련 글 그리드보다 회유율에 직접적).

---

## 4. 글 퀄리티

전반: **잘 쓴 글이다.** 훅 있는 서두, 의사결정을 표로 정리하는 습관, 솔직한 삽질 기록, 충실한 excerpt/tags까지 상위권 기술 블로그 수준. 그래서 남은 개선점은 "잘 쓰는 법"이 아니라 "차별화"다.

1. **시각 자료가 7편 전부 0장** ⭐ — 가장 큰 약점.
   - Frontend/1(텍스트 애니메이션): 결과 GIF 없이 애니메이션을 글로만 설명. **MDX니까 실제 RotatingText 컴포넌트를 본문에 임베드**하면 라이브 데모가 된다 — 이 블로그만 할 수 있는 차별화.
   - Frontend/2(Glass Morphism): 비포/애프터 스크린샷, blur 값 비교 이미지 필수급.
   - DevLog/1(리뉴얼 회고): 구버전 vs 신버전 스크린샷 한 장이 천 마디를 대신한다.
2. **모든 글이 같은 템플릿** — "서두 훅 → `---` → 번호 매긴 h2 → 표" 구조가 7편 동일. 한두 편은 스토리형/Q&A형 등으로 변주해야 기계적 인상을 피한다.
3. **MDX인데 Markdown만 사용** — 커스텀 컴포넌트 0개. `.callout` CSS도 이미 있으니 `<Callout>`, `<Demo>`, 캡션 있는 이미지부터 시작. (`MDXRemote`에 `components` prop 전달만 하면 됨)
4. **시리즈 연결 없음** — NextJS/1(블로그 구축) → NextJS/2(다크모드) → DevLog/1(회고)은 사실상 시리즈. frontmatter에 `series` 필드 + 글 상단 시리즈 네비 추천.
5. **정량 결과 부족** — 회고 글에 Lighthouse 점수, 번들 크기, 빌드 시간 등 수치가 들어가면 설득력이 크게 오른다.
6. **글-실물 불일치** — 2-1 참고. Frontend/1은 실제 사이트 구현과 다른 코드를 소개 중.
7. ReactNative/1만 날짜가 2025-02-07 (다른 글은 2026년) — 오타인지 확인.

---

## 5. 추천 작업 순서

| 순서 | 작업 | 효과/비용 |
|---|---|---|
| 1 | 글 페이지 `generateMetadata` + `generateStaticParams` | 매우 큼 / 30분 |
| 2 | sitemap 전체 글 등록 + RSS + JSON-LD | 큼 / 1–2시간 |
| 3 | RotatingText 애니메이션 실제 구현 (글과 일치시키기) | 큼 / 1–2시간 |
| 4 | 죽은 CSS 정리 + 다크모드 토글 교체(접근성) | 중 / 1시간 |
| 5 | 코드 복사 버튼 + 읽기 진행바 + 404 페이지 | 중 / 2시간 |
| 6 | 글에 시각 자료·라이브 데모 추가, 시리즈 네비 | 큼 / 글당 30분+ |
| 7 | giscus 댓글, 좋아요 실화(Supabase), OG 이미지 자동 생성 | 중장기 |
