import { getCategory } from '@lib/categories';

/** CSS-only category thumbnail. size: card | row | hero */
export default function CategoryThumb({ category, size = 'card' }: { category: string; size?: 'card' | 'row' | 'hero' }) {
  const c = getCategory(category);
  return (
    <div className={`thumb thumb-${size}`} style={{ ['--ch' as string]: c.hue }}>
      <div className="thumb-grid" />
      <div className="thumb-glow" />
      <div className="thumb-glyph mono">{c.glyph}</div>
      <div className="thumb-meta">
        <span className="thumb-label">{c.label}</span>
        <span className="thumb-sub mono">{c.sub}</span>
      </div>
      <div className="thumb-bar" />
    </div>
  );
}
