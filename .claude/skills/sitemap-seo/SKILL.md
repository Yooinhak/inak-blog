---
name: sitemap-seo
description: >
  Keep this Next.js blog's sitemap (and basic SEO metadata) in sync with the posts on
  disk. Use whenever the user publishes/adds/removes a post, mentions the sitemap,
  asks about SEO / 검색 노출 / 구글 색인 / 사이트맵, or wants robots/canonical/OG basics
  checked. Especially run this right after the new-post skill, since a fresh post won't
  be in search engines until the sitemap lists its URL.
---

# Sitemap & SEO Sync (inak-blog)

`src/app/sitemap.ts` currently only emits the homepage URL, so newly added posts never
make it into the sitemap and search engines won't reliably discover them. The fix is to
make `sitemap.ts` generate entries from the same source the blog already uses to list
posts (`getPostList`), so it stays correct automatically on every build.

Site base URL is **`https://www.inak.dev`** (confirm against `about/page.tsx` metadata
and `robots.txt` if unsure).

## Steps

1. **Read the current files:** `src/app/sitemap.ts`, `src/app/robots.txt`,
   `src/lib/postManagement/getPostList.ts` (to confirm `getPostList()` returns objects with
   `url`, `date`, and `category`).

2. **Make the sitemap dynamic.** Replace `src/app/sitemap.ts` with a version that lists the
   static routes plus every post. `getPostList()` runs on the filesystem at build time, so
   this requires no extra config. Use this implementation (adjust `BASE_URL` only if the
   domain differs):

   ```ts
   import { MetadataRoute } from 'next';

   import { getPostList } from '@lib/postManagement';

   const BASE_URL = 'https://www.inak.dev';

   export default function sitemap(): MetadataRoute.Sitemap {
     const posts = getPostList();

     const staticRoutes: MetadataRoute.Sitemap = [
       { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
       { url: `${BASE_URL}/posts`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
       { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
     ];

     const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
       url: `${BASE_URL}${post.url}`, // post.url is already '/posts/<cat>/<id>'
       lastModified: new Date(post.date),
       changeFrequency: 'weekly',
       priority: 0.8,
     }));

     return [...staticRoutes, ...postRoutes];
   }
   ```

   - Verify the `@lib` path alias resolves (check `tsconfig.json` `paths`). If the project
     uses relative imports instead, switch to `../../lib/postManagement`.
   - `post.url` already starts with `/posts/...`, so just prefix `BASE_URL` — don't double up.

3. **Check `robots.txt` points at the sitemap.** It should include a `Sitemap:` line:
   ```
   Sitemap: https://www.inak.dev/sitemap.xml
   ```
   Add it if missing.

4. **Verify.** Build and confirm the sitemap renders every post URL:
   ```bash
   bun run build
   bun run start &        # then fetch the generated sitemap
   curl -s localhost:3000/sitemap.xml | head -40
   ```
   Or simply confirm `bun run build` succeeds and count that the route map length equals
   `static routes (3) + number of .mdx files`.

5. **Commit** with the repo convention, e.g. `feat. sitemap 글 목록 자동 반영`.

## Optional SEO niceties (do only if asked)

- **Per-post metadata:** ensure `src/app/posts/[category]/[id]/page.tsx` exports
  `generateMetadata` with the post `title`/`excerpt` for proper `<title>` and OG tags.
- **Canonical URLs / OG image:** can be added via the Metadata API in `layout.tsx` or per page.
  Keep changes minimal and verify the build each time.

Keep edits surgical — this skill's job is to make discovery automatic, not to redesign SEO.
