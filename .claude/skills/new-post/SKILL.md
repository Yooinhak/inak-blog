---
name: new-post
description: >
  Create a new MDX blog post in this Next.js blog (inak-blog). Use this whenever
  the user wants to write, draft, add, or publish a blog post / 글 / 포스트 / devlog /
  trouble shooting / 회고 — even if they only hand over a topic, rough notes, or a
  link. Handles category selection, the next file number, frontmatter, the writing
  tone, and an optional build/lint check before finishing.
---

# New Blog Post (inak-blog)

This skill turns a topic or draft into a properly-structured `.mdx` post that drops
straight into the blog with zero manual cleanup. The blog reads posts off the
filesystem at build time, so the *location*, *filename*, and *frontmatter* have to
be exactly right or the post won't render (or will render with a broken date).

## How posts are stored (read this first)

- Posts live at `src/posts/<Category>/<id>.mdx`.
- `<id>` is a plain **number**. Each category folder numbers independently
  (`1.mdx`, `2.mdx`, …). The post URL becomes `/posts/<Category>/<id>`.
- Categories are **fixed** and defined in `src/lib/categories.ts`. Do NOT invent new
  ones — pick from the existing keys (folder names must match exactly):
  - `NextJS` — Next.js, App Router, RSC, MDX, server stuff
  - `Frontend` — CSS, animation, UI, React patterns not specific to Next
  - `ReactNative` — Expo, mobile, native
  - `DevLog` — 회고, 기록, 생각, 프로젝트 후기 (retrospectives / personal logs)
  - If a topic genuinely fits none of these, ask the user rather than creating a new folder.

## Steps

1. **Pick the category.** Infer it from the topic, then state your choice so the user
   can correct it. When in doubt between a technical category and `DevLog`, prefer the
   technical one for how-to/explainer content and `DevLog` for reflective/retrospective content.

2. **Find the next file number.** List the chosen folder and use `max(existing numbers) + 1`.
   ```bash
   ls src/posts/<Category>/
   ```
   Never overwrite an existing numbered file.

3. **Write the frontmatter.** Match what existing posts actually use — keep it lean.
   ```mdx
   ---
   title: "구체적이고 검색 친화적인 제목"
   date: YYYY-MM-DD
   tags: ["Tag1", "Tag2", "Tag3"]
   ---
   ```
   - `title` and `date` are the only required fields. Use today's date unless the user
     gives one (check with `date +%F`).
   - `tags`: 3–5 tags. Reuse tags already present in other posts where possible so the
     tag cloud stays coherent (you can scan existing frontmatter with a quick grep).
   - Optional fields the schema supports if the user asks: `excerpt` (1–2 sentence summary),
     `featured: true` (pin to home), `readingTime` (omit — it's auto-estimated from length).
   - You do NOT need a thumbnail/image field: thumbnails are generated from the category
     (CSS-only `CategoryThumb`), so there are no per-post image files to create.

4. **Write the body in the house style.** Read one or two existing posts in the same
   category first to match voice (the blog is in Korean, friendly-technical, first person).
   The established pattern:
   - Open with an `# H1` that repeats the title.
   - A short hook paragraph explaining the problem/motivation.
   - `---` horizontal rules between major sections.
   - Numbered `## 1. ...`, `## 2. ...` section headings for how-to posts.
   - Fenced code blocks with a language tag (` ```tsx `, ` ```bash `) — rehype-pretty-code
     highlights them. GFM tables and `remark-breaks` (single newline = `<br>`) are enabled.
   - Concrete code/examples over hand-waving; wrap up with a short takeaway.

5. **Verify before finishing (recommended).** A broken post can fail the production build.
   Run a quick check and fix anything that surfaces:
   ```bash
   bun run lint        # or: npx next lint
   bun run build       # confirms the new MDX compiles and renders
   ```
   If the user is just drafting and doesn't want a full build, at least sanity-check that
   the frontmatter parses (valid YAML, real date).

6. **Offer the follow-ups.** After the post is in place, remind the user they can run the
   `sitemap-seo` skill so the new URL lands in `sitemap.ts`, and offer to commit it (the
   repo uses `feat. ...` / `fix. ...` Korean commit messages, e.g. `feat. <카테고리> 글 추가`).

## Example

**Input:** "Next.js에서 동적 OG 이미지 만드는 법 글로 정리해줘"
**Action:** category → `NextJS`; next number in `src/posts/NextJS/` is `3` → create
`src/posts/NextJS/3.mdx` with frontmatter (title, today's date, tags like
`["Next.js", "OG Image", "App Router", "SEO"]`) and a how-to body following the house style,
then run `bun run build` to confirm it compiles.
