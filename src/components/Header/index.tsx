import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useIsDesktop, useIsMobile, useIsTablet } from '@src/hooks/useDevice';
import { remoteAdminAPI } from '@src/lib/api/remote/admin';
import { GetHomepageResponse } from '@src/lib/types/admin';
import DesktopHeader from './Desktop';
import MobileHeader from './Mobile';
import * as S from './style';

export function Header() {
  const { data: adminData } = useQuery<GetHomepageResponse>({
    queryKey: ['homepage'],
    queryFn: remoteAdminAPI.getHomepage,
  });

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
      {isDesktop && <DesktopHeader mainColor={'#' + adminData?.brandingColor.main} />}
      {isTablet && <MobileHeader mainColor={'#' + adminData?.brandingColor.main} />}
      {isMobile && <MobileHeader mainColor={'#' + adminData?.brandingColor.main} />}
    </S.Wrapper>
  );
}
