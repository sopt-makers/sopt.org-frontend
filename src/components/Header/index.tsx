import { useEffect, useState } from 'react';
import { useIsDesktop, useIsMobile, useIsTablet } from '@src/hooks/useDevice';
import DesktopHeader from './Desktop';
import MobileHeader from './Mobile';
import * as S from './style';

export function Header() {
  const isDesktop = useIsDesktop('58.75rem');
  const isTablet = useIsTablet('48rem', '58.6875rem');
  const isMobile = useIsMobile();

  const [isTransparent, setIsTransparent] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      scrollPosition <= 0 ? setIsTransparent(false) : setIsTransparent(true);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <S.Wrapper isTransparent={isTransparent}>
      {isDesktop && <DesktopHeader />}
      {isTablet && <MobileHeader />}
      {isMobile && <MobileHeader />}
    </S.Wrapper>
  );
}
