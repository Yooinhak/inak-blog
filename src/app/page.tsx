import Button from '@components/Button';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Button />
    </div>
  );
}
