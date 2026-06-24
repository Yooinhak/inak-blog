import * as React from 'react';

type P = { size?: number; sw?: number; fill?: boolean; className?: string };

function Icon({ size = 18, sw = 1.7, fill = false, children, ...rest }: P & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill ? 'currentColor' : 'none'}
      stroke={fill ? 'none' : 'currentColor'}
      strokeWidth={sw}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0 }}
      {...rest}
    >
      {children}
    </svg>
  );
}

export const IconSearch = (p: P) => (<Icon {...p}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.2-3.2" /></Icon>);
export const IconCal = (p: P) => (<Icon size={14} {...p}><rect x="3" y="4.5" width="18" height="16" rx="2.5" /><path d="M3 9h18M8 2.5v4M16 2.5v4" /></Icon>);
export const IconClock = (p: P) => (<Icon size={14} {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7.5V12l3 2" /></Icon>);
export const IconEye = (p: P) => (<Icon size={14} {...p}><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="2.6" /></Icon>);
export const IconHeart = (p: P) => (<Icon size={14} {...p}><path d="M12 20s-7.5-4.7-9.7-9.2C.8 7.7 2.4 4.8 5.4 4.8c1.9 0 3.2 1.1 3.9 2.2.6.9.7 1 .7 1s.1-.1.7-1c.7-1.1 2-2.2 3.9-2.2 3 0 4.6 2.9 3.1 6C19.5 15.3 12 20 12 20Z" /></Icon>);
export const IconArrow = (p: P) => (<Icon size={16} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></Icon>);
export const IconList = (p: P) => (<Icon size={16} {...p}><path d="M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01" /></Icon>);
export const IconGrid = (p: P) => (<Icon size={16} {...p}><rect x="3.5" y="3.5" width="7" height="7" rx="1.6" /><rect x="13.5" y="3.5" width="7" height="7" rx="1.6" /><rect x="3.5" y="13.5" width="7" height="7" rx="1.6" /><rect x="13.5" y="13.5" width="7" height="7" rx="1.6" /></Icon>);
export const IconMenu = (p: P) => (<Icon size={20} {...p}><path d="M4 7h16M4 12h16M4 17h16" /></Icon>);
export const IconGithub = (p: P) => (<Icon size={18} {...p}><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.3 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" /></Icon>);
export const IconCoffee = (p: P) => (<Icon size={18} {...p}><path d="M4 9h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V9Z" /><path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17" /><path d="M8 2.5c-.6.8-.6 1.7 0 2.5M11.5 2.5c-.6.8-.6 1.7 0 2.5" /></Icon>);
