import { useMemo } from 'react';
import { useIsMobile, useIsTablet } from '@src/hooks/useDevice';

const useResponsiveMember = () => {
  const isTablet = useIsTablet('766px', '1199.9px');
  const isMobile = useIsMobile();

  const memberCardsCount = useMemo(() => {
    if (isMobile) return 2;
    if (isTablet) return 3;
    return 4;
  }, [isMobile, isTablet]);

  return { memberCardsCount, shouldNotShownWithError: isMobile };
};

export default useResponsiveMember;
