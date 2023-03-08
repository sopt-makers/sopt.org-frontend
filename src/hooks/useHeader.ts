import { useRouter } from 'next/router';

function useHeader() {
  const router = useRouter();

  const handleClickLogo = () => router.push('/');

  const handleIsSelected = (path: string) => {
    if (path.includes('project') && router.pathname.includes('project')) return true;
    return router.pathname === path;
  };

  return { handleClickLogo, handleIsSelected };

}

export default useHeader;
