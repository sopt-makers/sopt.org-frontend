import { useRouter } from 'next/router';

function useHeader() {
  const router = useRouter();

  const handleClickLogo = () => router.push('/');

  const handleIsSelected = (path: string) => {
    return router.pathname.startsWith(path);
  };

  return { handleClickLogo, handleIsSelected };
}

export default useHeader;
