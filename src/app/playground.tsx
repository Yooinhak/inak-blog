import { useRouter } from 'next/router';
import { useEffect } from 'react';

import Button from '@components/Button';

import Test from './test';

const Component = () => {
  const router = useRouter();

  useEffect(() => {}, []);

  return (
    <div>
      <Button />
    </div>
  );
};

export default Component;
