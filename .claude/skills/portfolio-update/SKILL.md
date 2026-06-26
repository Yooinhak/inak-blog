---
name: portfolio-update
description: >
  Add or update a project entry on the About / portfolio page of this Next.js blog
  (inak-blog). Use this whenever the user wants to add a new project, update an
  existing one, tweak a project's summary/highlights/tech stack, change a period
  (e.g. "~ 현재" → end date), or otherwise edit their 포트폴리오 / 이력 / About 페이지.
---

# Portfolio Update (inak-blog)

The portfolio is **not** data-driven — it's a hardcoded `PROJECTS` array inside a React
Server Component at `src/app/about/page.tsx`. Editing the portfolio means editing that
array, keeping the TypeScript `Project` shape intact and matching the existing writing style.

## The data shape

Each entry conforms to this type (defined at the top of the same file):

```ts
type Project = {
  badge: string;       // short tag rendered on the card, e.g. 'Event Web', 'Community'
  name: string;        // project title (Korean), e.g. '테일즈런너 광장 (커뮤니티)'
  period: string;      // 'YYYY.MM ~ YYYY.MM' or 'YYYY.MM ~ 현재'
  summary: string;     // 2–4 sentence paragraph: what it is, your role, scope
  highlights: string[];// 3 bullet-style achievement sentences (impact-focused)
  techs: string[];     // tech stack tags, e.g. ['React', 'TypeScript', 'TanStack Query']
};
```

## Steps

1. **Read `src/app/about/page.tsx`** to see the current `PROJECTS` array and absorb the
   tone. Existing entries are the source of truth for style — don't guess the format.

2. **Match the house style** (study the existing entries carefully):
   - `summary` is written in first person, past/present tense, in Korean. It states the
     product, the user's role ("프론트엔드를 처음부터 맡아…"), and the scope of work — not marketing fluff.
   - `highlights` are **outcome-oriented**: each bullet pairs a concrete technique with its
     effect (e.g. "무한 스크롤 게시판을 TanStack Virtual 가상화로 렌더링해 대량 피드에서도 안정적인 성능 확보").
     Aim for exactly 3, similar length to existing ones.
   - `badge` is 1–2 words categorizing the project (Event Web, Community, Global Admin,
     Game Admin, Responsive, …). Reuse an existing badge if it fits.
   - `techs` use the same casing/naming already in the file (`React`, `TanStack Query`,
     `Vite`, `zod`, `MSW`, etc.) for consistency.

3. **Insert or edit:**
   - **New project:** add the object to the `PROJECTS` array. Order matters visually — the
     array renders top-to-bottom, and current ordering is roughly most-prominent / most-recent
     first. Place it where the user wants (ask if unclear; default to the top for a new flagship
     project, or grouped with similar work).
   - **Update existing:** find the entry by `name` and edit only the requested fields.
     A common update is closing out a `period` ("2025.03 ~ 현재" → "2025.03 ~ 2025.11").

4. **Verify it still compiles.** This is a `.tsx` file, so a typo breaks the build:
   ```bash
   bun run lint        # or: npx next lint
   bun run build       # optional but catches type/JSX errors
   ```
   At minimum confirm the array is valid TS: every object has all six fields, strings are
   quoted, commas are balanced, and `highlights`/`techs` are arrays.

5. **Offer to commit** using the repo's convention, e.g. `feat. About 프로젝트 추가` /
   `feat. 포트폴리오 <프로젝트명> 갱신`.

## Notes

- Don't fabricate achievements. If the user gives a thin description, ask for the role,
  the stack, and 2–3 things they actually shipped before writing `highlights`.
- Keep everything in Korean to match the page. Tech names stay in their canonical English form.
