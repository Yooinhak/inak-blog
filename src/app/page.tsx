import Image from 'next/image';

import Button from '@components/Button';
import HamburgerMenu from '@components/FancyIcon/HamburgerMenu';

export default function Home() {
  return (
    <div className="flex justify-center">
      <HamburgerMenu />
    </div>
  );
}
