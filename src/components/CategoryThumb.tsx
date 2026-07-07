import { getCategory } from '@lib/categories';
import { cn } from '@utils/cn';

type Size = 'card' | 'row' | 'hero';

/** per-size type scales (category glyph / label / sub) */
const GLYPH: Record<Size, string> = {
  card: 'text-[clamp(70px,16vw,150px)] -bottom-[0.28em]',
  row: 'text-[96px] -bottom-[0.3em]',
  hero: 'text-[clamp(120px,22vw,280px)] -bottom-[0.28em]',
};
const LABEL: Record<Size, string> = {
  card: 'text-[21px]',
  row: 'text-[17px]',
  hero: 'text-[26px]',
};
const SUB: Record<Size, string> = {
  card: 'text-[11px]',
  row: 'text-[11px]',
  hero: 'text-[13px]',
};

/**
 * CSS-only category thumbnail. `--ch` (OKLCH hue) drives the gradient palette.
 * rounded: 'none' inside cards (parent clips), 'sm' standalone rows, 'card' hero cover.
 */
export default function CategoryThumb({
  category,
  size = 'card',
  rounded = 'none',
}: {
  category: string;
  size?: Size;
  rounded?: 'none' | 'sm' | 'card';
}) {
  const c = getCategory(category);
  const radius = rounded === 'card' ? 'rounded-card' : rounded === 'sm' ? 'rounded-card-sm' : 'rounded-none';

  return (
    <div
      className={cn(
        'relative w-full h-full overflow-hidden isolate',
        radius,
        'bg-[linear-gradient(150deg,oklch(0.42_0.13_var(--ch))_0%,oklch(0.30_0.10_calc(var(--ch)+18))_55%,oklch(0.22_0.06_calc(var(--ch)+30))_100%)]',
      )}
      style={{ ['--ch' as string]: c.hue }}
    >
      {/* subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(oklch(1_0_0/0.06)_1px,transparent_1px),linear-gradient(90deg,oklch(1_0_0/0.06)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(circle_at_70%_20%,black,transparent_80%)]" />
      {/* glow */}
      <div className="absolute w-[60%] aspect-square rounded-full -top-[20%] -right-[10%] blur-[40px] bg-[oklch(0.75_0.16_var(--ch)/0.6)]" />
      {/* oversized glyph */}
      <div
        className={cn(
          'font-mono absolute right-[0.05em] font-extrabold leading-none tracking-[-0.04em] text-[oklch(1_0_0/0.10)]',
          GLYPH[size],
        )}
      >
        {c.glyph}
      </div>
      <div className="absolute left-[18px] top-4 flex flex-col gap-1 z-[2]">
        <span className={cn('font-extrabold tracking-[-0.02em] text-[oklch(0.98_0.01_var(--ch))]', LABEL[size])}>
          {c.label}
        </span>
        <span className={cn('font-mono font-medium tracking-[0.04em] text-[oklch(0.85_0.05_var(--ch)/0.75)]', SUB[size])}>
          {c.sub}
        </span>
      </div>
      <div className="absolute left-[18px] bottom-4 h-1 w-14 rounded-full z-[2] bg-[linear-gradient(90deg,oklch(0.8_0.16_var(--ch)),oklch(0.7_0.14_calc(var(--ch)+40)))]" />
    </div>
  );
}
