import { cn } from '@utils/cn';

/**
 * Shared Tailwind class strings for repeated primitives (buttons, chips, layout).
 * Design tokens (colors/shadows/fonts) come from the @theme bridge in globals.css,
 * so utilities like text-accent / bg-glass / shadow-glass / ease-fluid are theme-aware.
 */

/** page container: max-width + responsive gutters */
export const wrap = 'mx-auto w-full max-w-[1180px] px-6 max-[760px]:px-[18px]';

/** mono uppercase section label */
export const eyebrow = 'font-mono text-[11.5px] font-semibold tracking-[0.18em] uppercase text-text-mute';

const btnBase = cn(
  'inline-flex items-center gap-2 font-sans text-[15px] font-semibold px-5 py-[11px] rounded-full',
  'border border-transparent cursor-pointer no-underline leading-none',
  'transition-[transform,box-shadow,background,border-color] duration-[250ms] ease-fluid',
  'active:translate-y-px active:scale-[0.99]',
);

export const btnPrimary = cn(
  btnBase,
  'bg-accent text-on-accent shadow-[0_12px_26px_-12px_var(--accent)]',
  'hover:-translate-y-0.5 hover:shadow-[0_18px_34px_-12px_var(--accent)]',
);

export const btnGhost = cn(
  btnBase,
  'text-text border-glass-border backdrop-blur-[12px]',
  '[background:linear-gradient(177deg,var(--glass-sheen),var(--glass-sheen-2)_60%),var(--glass-bg)]',
  '[box-shadow:inset_0_1px_0_var(--glass-hi)]',
  'hover:-translate-y-0.5 hover:border-accent hover:text-accent',
  'hover:[box-shadow:inset_0_1px_0_var(--glass-hi),0_12px_26px_-16px_var(--accent)]',
);

const chipBase = cn(
  'inline-flex items-center gap-1.5 text-[13px] font-semibold leading-none px-3.5 py-2 rounded-full',
  'cursor-pointer no-underline transition-all duration-[220ms] ease-fluid',
);

export const chip = cn(
  chipBase,
  'border border-glass-border text-text-soft backdrop-blur-[10px]',
  '[background:linear-gradient(177deg,var(--glass-sheen),var(--glass-sheen-2)_60%),var(--glass-bg)]',
  '[box-shadow:inset_0_1px_0_var(--glass-hi)]',
  'hover:-translate-y-px hover:text-text hover:border-accent',
  'hover:[box-shadow:inset_0_1px_0_var(--glass-hi),0_8px_18px_-14px_var(--accent)]',
);

export const chipActive = cn(
  chipBase,
  'border border-transparent bg-accent text-on-accent',
  '[box-shadow:0_10px_22px_-12px_var(--accent),inset_0_1px_0_oklch(1_0_0/0.25)]',
);

/** '#' prefix for tag chips */
export const chipTag = "before:content-['#'] before:opacity-50 before:font-mono";

export const iconBtn = cn(
  'inline-flex items-center justify-center w-[38px] h-[38px] rounded-full',
  'border border-glass-border text-text-soft cursor-pointer backdrop-blur-[10px]',
  '[background:linear-gradient(177deg,var(--glass-sheen),var(--glass-sheen-2)_65%),var(--glass-bg)]',
  '[box-shadow:inset_0_1px_0_var(--glass-hi)]',
  'transition-all duration-[220ms] ease-fluid',
  'hover:text-accent hover:border-accent hover:-translate-y-px',
  'hover:[box-shadow:inset_0_1px_0_var(--glass-hi),0_8px_18px_-12px_var(--accent)]',
);

/** section shell */
export const sec = 'pt-16';
export const secHead = 'flex items-end justify-between gap-5 mb-6';
export const secTitle = 'mt-1.5 mb-0 text-[clamp(24px,3vw,32px)] font-extrabold tracking-[-0.03em] text-text';
export const secMore = cn(
  'inline-flex items-center gap-[7px] text-sm font-semibold text-text-soft cursor-pointer no-underline',
  'transition-[color,gap] duration-200 hover:text-accent hover:gap-[11px]',
);

/** 3-col responsive card grid with staggered entrance */
export const grid3 = cn(
  'grid grid-cols-3 gap-[22px] max-[900px]:grid-cols-2 max-[560px]:grid-cols-1',
  '[&>*]:animate-[cardIn_0.5s_var(--ease)_backwards]',
  '[&>*:nth-child(2)]:[animation-delay:60ms] [&>*:nth-child(3)]:[animation-delay:120ms]',
  '[&>*:nth-child(4)]:[animation-delay:180ms] [&>*:nth-child(5)]:[animation-delay:240ms]',
  '[&>*:nth-child(6)]:[animation-delay:300ms] motion-reduce:[&>*]:animate-none',
);
