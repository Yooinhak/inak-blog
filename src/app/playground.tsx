import { useEffect } from 'react';

import { useRouter } from 'next/router';

import Button from '@components/Button';

import Test from './test';

const Component = () => {
  const router = useRouter();

  useEffect(() => {}, []);

  return <div></div>;
};

export default Component;
