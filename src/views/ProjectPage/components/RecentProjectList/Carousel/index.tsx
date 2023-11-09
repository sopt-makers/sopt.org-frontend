import Carousel from '@src/components/common/Carousel';
import { useDeviceType, useIsDesktop, useIsMobile } from '@src/hooks/useDevice';
import { CarouselArrowType, CarouselOverflowType } from '@src/lib/types/universal';

export default function RecentProjectListCarousel({ children }: { children: JSX.Element[] }) {
  const isDesktopSize = useIsDesktop('1280px');
  const isMobileSize = useIsMobile('899px');
  const deviceType = useDeviceType();

  const arrowType = deviceType === 'desktop' ? CarouselArrowType.External : CarouselArrowType.None;
  const overflowType =
    deviceType === 'desktop' ? CarouselOverflowType.Blur : CarouselOverflowType.Visible;

  return (
    <Carousel
      stride={isDesktopSize ? 2 : 1}
      itemWidth={isMobileSize ? 320 : 544}
      gapWidth={isMobileSize ? 14 : 24}
      leftArrowType={arrowType}
      rightArrowType={arrowType}
      overflowType={overflowType}
    >
      {children}
    </Carousel>
  );
}
