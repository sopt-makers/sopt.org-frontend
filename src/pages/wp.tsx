import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

function LegacyHomePage() {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
}

export default LegacyHomePage;
