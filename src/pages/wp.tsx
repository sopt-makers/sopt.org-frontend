import { useRouter } from 'next/router';
import { useEffect } from 'react';

function LegacyHomePage() {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
}

export default LegacyHomePage;
