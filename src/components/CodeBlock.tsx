'use client';

import { useRef, useState, type HTMLAttributes } from 'react';

/**
 * Wraps every MDX <pre> with a header: language label + copy button.
 * rehype-pretty-code puts `data-language` on the <pre> element.
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
    <div className="code-block">
      <div className="code-top">
        <span className="code-lang">{lang ?? 'code'}</span>
        <button type="button" className={`code-copy ${copied ? 'copied' : ''}`} onClick={copy} aria-label="코드 복사">
          {copied ? '복사됨 ✓' : '복사'}
        </button>
      </div>
      <pre ref={preRef} {...props} />
    </div>
  );
}
