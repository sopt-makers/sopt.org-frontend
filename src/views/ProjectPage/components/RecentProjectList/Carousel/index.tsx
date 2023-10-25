import Carousel from '@src/components/common/Carousel';
import { useDeviceType, useIsDesktop, useIsTablet } from '@src/hooks/useDevice';
import { CarouselArrowType, CarouselOverflowType } from '@src/lib/types/universal';

export default function RecentProjectListCarousel({ children }: { children: JSX.Element[] }) {
  const isDesktopSize = useIsDesktop('1239px');
  const isTabletSize = useIsTablet('767px');
  const deviceType = useDeviceType();

  const arrowType = deviceType === 'desktop' ? CarouselArrowType.External : CarouselArrowType.None;
  const overflowType =
    deviceType === 'desktop' ? CarouselOverflowType.Blur : CarouselOverflowType.Visible;

  return (
    <Carousel
      stride={isDesktopSize ? 2 : 1}
      itemWidth={isTabletSize ? 588 : 345}
      leftArrowType={arrowType}
      rightArrowType={arrowType}
      overflowType={overflowType}
    >
      {children}
    </Carousel>
  );
}
