import { useRouter } from 'next/router';

function useHeader() {
  const router = useRouter();

  const handleClickLogo = () => router.push('/');

  const handleClickTap = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const currentMenu = e.currentTarget.id;

    if (currentMenu === '/review') {
      return window.open('https://sopt-official-review.oopy.io/');
    }
    if (currentMenu === '/recruit') {
      return window.open('https://sopt-recruiting.web.app/recruiting/apply/yb');
    }

    router.push(currentMenu);
  };

  const handleIsSelected = (path: string) => {
    if (path.includes('project') && router.pathname.includes('project')) return true;
    return router.pathname === path;
  };

  return { handleClickLogo, handleClickTap, handleIsSelected };

}

export default useHeader;
