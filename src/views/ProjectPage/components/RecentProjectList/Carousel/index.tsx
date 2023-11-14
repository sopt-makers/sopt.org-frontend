import Carousel from '@src/components/common/Carousel';
import { useDeviceType, useIsDesktop, useIsMobile } from '@src/hooks/useDevice';

export default function RecentProjectListCarousel({ children }: { children: JSX.Element[] }) {
  const isDesktopSize = useIsDesktop('1280px');
  const isMobileSize = useIsMobile('899px');
  const deviceType = useDeviceType();

  const isDesktop = deviceType === 'desktop';

  return (
    <Carousel
      stride={isDesktopSize ? 2 : 1}
      itemWidth={isMobileSize ? 320 : 544}
      gapWidth={isMobileSize ? 14 : 24}
      isDesktop={isDesktop}
    >
      {children}
    </Carousel>
  );
}
