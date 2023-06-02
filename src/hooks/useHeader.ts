import { useRouter } from 'next/router';

function useHeader() {
  const router = useRouter();

  const handleClickLogo = () => router.push('/');

  const handleIsSelected = (path: string | string[]) => {
    if (typeof path === 'string') return router.pathname.startsWith(path);
    return path.some((p) => router.pathname.startsWith(p));
  };

  return { handleClickLogo, handleIsSelected };
}

export default useHeader;
