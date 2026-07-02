// Kept minimal: the design system lives in globals.css (CSS variables + custom classes).
// The old @tailwindcss/typography config was dead code — `.prose` was never used
// (post styling is `.post-prose`), and its `.dark` selectors didn't match the
// data-theme based theming.
module.exports = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
};
