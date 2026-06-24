'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { IconCoffee } from './icons';

/**
 * Buy-me-a-coffee CTA + QR modal.
 * Replace `qrSrc` with your real Toss / Buy Me a Coffee QR image in /public.
 */
export default function SupportCoffee({ qrSrc = '/images/qr.png' }: { qrSrc?: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [open]);

  return (
    <section className="sec">
      <div className="support glass">
        <div className="support-glow" />
        <div className="support-cup" aria-hidden="true">
          <span className="cup-steam s1" /><span className="cup-steam s2" /><span className="cup-steam s3" />
          <span className="cup-body"><span className="cup-handle" /></span>
          <span className="cup-saucer" />
        </div>
        <div className="support-body">
          <span className="eyebrow">/ buy me a coffee</span>
          <h2>이 글이 도움이 되었다면 ☕</h2>
          <p>커피 한 잔으로 응원해 주세요. 다음 글을 쓰는 큰 힘이 됩니다.</p>
        </div>
        <div className="support-action">
          <button className="btn-coffee" onClick={() => setOpen(true)}>
            <IconCoffee size={19} /> 커피 사주기
          </button>
        </div>
      </div>

      {open && (
        <div className="modal-backdrop" onClick={() => setOpen(false)}>
          <div className="coffee-modal glass" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label="커피 후원 QR">
            <button className="modal-close" onClick={() => setOpen(false)} aria-label="닫기">×</button>
            <div className="cm-head">
              <span className="cm-icon"><IconCoffee size={22} /></span>
              <h3>커피 한 잔 사주기</h3>
            </div>
            <div className="cm-qr">
              <Image src={qrSrc} alt="후원 QR 코드" width={210} height={210} />
              <span className="cm-qr-corner tl" /><span className="cm-qr-corner tr" />
              <span className="cm-qr-corner bl" /><span className="cm-qr-corner br" />
            </div>
            <p className="cm-note">QR을 스캔해 보내고 싶은 만큼 응원해 주세요.</p>
          </div>
        </div>
      )}
    </section>
  );
}
