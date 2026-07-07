'use client';

import { useRef, useState, type HTMLAttributes } from 'react';

import { cn } from '@utils/cn';

/**
 * Wraps every MDX <pre> with a header: language label + copy button.
 * rehype-pretty-code puts `data-language` on the <pre> element.
 * The `code-block` marker class lets globals.css flatten the inner pre
 * (margin/border/radius) — the pre itself is markdown output.
 */
export default function CodeBlock(props: HTMLAttributes<HTMLPreElement> & { 'data-language'?: string }) {
  const preRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);
  const lang = props['data-language'];

  const copy = async () => {
    const text = preRef.current?.innerText ?? '';
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable (http/permissions) — silently ignore */
    }
  };

  return (
    <div className="code-block my-6 rounded-2xl overflow-hidden border border-hairline">
      <div className="flex items-center justify-between py-2 pr-2.5 pl-4 bg-bg-2 border-b border-hairline">
        <span className="font-mono text-[11.5px] text-text-mute font-semibold tracking-[0.05em] lowercase">
          {lang ?? 'code'}
        </span>
        <button
          type="button"
          className={cn(
            'inline-flex items-center gap-1.5 border-none bg-transparent px-2.5 py-[5px] rounded-lg',
            'font-mono text-[11.5px] font-semibold cursor-pointer transition-all duration-200 ease-fluid',
            'hover:text-accent hover:bg-accent-soft',
            copied ? 'text-accent' : 'text-text-mute',
          )}
          onClick={copy}
          aria-label="코드 복사"
        >
          {copied ? '복사됨 ✓' : '복사'}
        </button>
      </div>
      <pre ref={preRef} {...props} />
    </div>
  );
}
