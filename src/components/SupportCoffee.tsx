'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { eyebrow, sec } from '@lib/ui';
import { cn } from '@utils/cn';
import { IconCoffee } from './icons';

const steam = cn(
  'absolute top-2.5 w-1 h-4 rounded-full bg-text-mute opacity-0',
  'motion-safe:animate-[steam_2.6s_ease-in-out_infinite]',
);

const qrCorner = 'absolute w-[18px] h-[18px] border-[3px] border-[oklch(0.6_0.13_60)]';

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
    <section className={sec}>
      <div className="glass relative overflow-hidden py-[26px] px-8 grid grid-cols-[auto_1fr_auto] gap-7 items-center max-[900px]:grid-cols-1 max-[900px]:p-[26px] max-[900px]:gap-4 max-[900px]:text-center max-[900px]:justify-items-center">
        {/* warm glow */}
        <div className="absolute w-[360px] h-[360px] rounded-full -top-[180px] -right-[90px] blur-[80px] pointer-events-none bg-[radial-gradient(circle,oklch(0.78_0.12_70/0.35),transparent_70%)]" />

        {/* coffee cup illustration */}
        <div className="relative w-[84px] h-[88px] shrink-0 max-[900px]:mx-auto" aria-hidden="true">
          <span className={cn(steam, 'left-[30px]')} />
          <span className={cn(steam, 'left-[39px] [animation-delay:0.5s]')} />
          <span className={cn(steam, 'left-12 [animation-delay:1s]')} />
          <span className="absolute left-4 top-[30px] w-11 h-[34px] rounded-t-[6px] rounded-b-2xl bg-[linear-gradient(165deg,oklch(0.62_0.13_60),oklch(0.42_0.1_50))] [box-shadow:inset_0_2px_0_oklch(1_0_0/0.18)] before:content-[''] before:absolute before:left-1.5 before:top-[5px] before:right-1.5 before:h-1.5 before:rounded-full before:bg-[oklch(0.32_0.06_45)]">
            <span className="absolute -right-[13px] top-1.5 w-[15px] h-[18px] border-4 border-l-0 border-[oklch(0.55_0.12_58)] rounded-r-[11px]" />
          </span>
          <span className="absolute left-[9px] top-[66px] w-[58px] h-[7px] rounded-full bg-[linear-gradient(oklch(0.55_0.12_58),oklch(0.4_0.09_50))]" />
        </div>

        <div className="relative z-[1]">
          <span className={eyebrow}>/ buy me a coffee</span>
          <h2 className="mt-1.5 mb-1.5 text-[clamp(19px,2.1vw,23px)] font-extrabold tracking-[-0.03em] text-text">
            이 글이 도움이 되었다면 ☕
          </h2>
          <p className="m-0 text-[13.5px] leading-[1.55] text-text-soft max-w-[40ch] max-[900px]:mx-auto">
            커피 한 잔으로 응원해 주세요. 다음 글을 쓰는 큰 힘이 됩니다.
          </p>
        </div>

        <div className="relative z-[1] flex items-center">
          <button
            className="inline-flex items-center justify-center gap-[9px] border-none cursor-pointer font-sans text-[15px] font-bold leading-none px-[22px] py-[13px] rounded-full text-[oklch(0.28_0.06_60)] bg-[linear-gradient(160deg,oklch(0.88_0.16_88),oklch(0.8_0.15_72))] [box-shadow:0_14px_30px_-14px_oklch(0.8_0.15_72),inset_0_1px_0_oklch(1_0_0/0.4)] transition-[transform,box-shadow] duration-[240ms] ease-fluid hover:-translate-y-0.5 hover:[box-shadow:0_20px_38px_-14px_oklch(0.8_0.15_72),inset_0_1px_0_oklch(1_0_0/0.4)] active:translate-y-0 active:scale-[0.99]"
            onClick={() => setOpen(true)}
          >
            <IconCoffee size={19} /> 커피 사주기
          </button>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[oklch(0.2_0.03_260/0.55)] backdrop-blur-[8px]"
          onClick={() => setOpen(false)}
        >
          <div
            className="glass relative w-full max-w-[360px] pt-[30px] px-[30px] pb-[26px] text-center flex flex-col items-center gap-4 rounded-[26px] animate-[modalPop_0.32s_var(--ease)]"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="커피 후원 QR"
          >
            <button
              className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full border border-glass-border bg-glass text-text-soft text-xl leading-none cursor-pointer transition-all duration-200 ease-fluid hover:text-text hover:border-accent hover:rotate-90"
              onClick={() => setOpen(false)}
              aria-label="닫기"
            >
              ×
            </button>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-[14px] text-[oklch(0.32_0.06_55)] bg-[linear-gradient(160deg,oklch(0.88_0.16_88),oklch(0.8_0.15_72))]">
                <IconCoffee size={22} />
              </span>
              <h3 className="m-0 text-lg font-extrabold tracking-[-0.02em] text-text">커피 한 잔 사주기</h3>
            </div>
            <div className="relative p-3.5 bg-white rounded-[18px] shadow-[0_10px_30px_-16px_oklch(0.3_0.05_260/0.5)]">
              <Image src={qrSrc} alt="후원 QR 코드" width={210} height={210} className="block w-[210px] h-[210px] rounded-md" />
              <span className={cn(qrCorner, 'top-1.5 left-1.5 border-r-0 border-b-0 rounded-tl-md')} />
              <span className={cn(qrCorner, 'top-1.5 right-1.5 border-l-0 border-b-0 rounded-tr-md')} />
              <span className={cn(qrCorner, 'bottom-1.5 left-1.5 border-r-0 border-t-0 rounded-bl-md')} />
              <span className={cn(qrCorner, 'bottom-1.5 right-1.5 border-l-0 border-t-0 rounded-br-md')} />
            </div>
            <p className="m-0 text-[13px] leading-[1.55] text-text-soft">QR을 스캔해 보내고 싶은 만큼 응원해 주세요.</p>
          </div>
        </div>
      )}
    </section>
  );
}
