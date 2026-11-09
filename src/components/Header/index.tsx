import { useEffect, useState } from 'react';
import { useIsDesktop, useIsMobile, useIsTablet } from '@src/hooks/useDevice';
import { DEFAULT_COLOR } from '@src/lib/constants/brandingColor';
import DesktopHeader from './Desktop';
import MobileHeader from './Mobile';
import * as S from './style';
import useBrandingColor from './useBrandingColor';

export function Header() {
  // @TODO: 메인 페이지 구현 완료 후 모든 화면에서 컬러 전용 API를 사용하도록 변경 (장정훈)
  const { data: brandingColor } = useBrandingColor();

  const isDesktop = useIsDesktop('58.75rem');
  const isTablet = useIsTablet('48rem', '58.6875rem');
  const isMobile = useIsMobile();

  const [isTransparent, setIsTransparent] = useState<boolean>(false);

  useEffect(function synchronizeHeaderTransparencyWithScroll() {
    const handleScroll = () => {
      setIsTransparent(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <S.Wrapper isTransparent={isTransparent}>
      {isDesktop && <DesktopHeader mainColor={'#' + (brandingColor?.main || DEFAULT_COLOR)} />}
      {isTablet && <MobileHeader mainColor={'#' + (brandingColor?.main || DEFAULT_COLOR)} />}
      {isMobile && <MobileHeader mainColor={'#' + (brandingColor?.main || DEFAULT_COLOR)} />}
    </S.Wrapper>
  );
}
