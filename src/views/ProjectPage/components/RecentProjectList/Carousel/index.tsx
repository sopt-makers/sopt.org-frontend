import Carousel from '@src/components/common/Carousel';
import { useDeviceType, useIsTablet } from '@src/hooks/useDevice';
import { CarouselArrowType, CarouselOverflowType } from '@src/lib/types/universal';

function RecentProjectListCarousel({ children }: { children: JSX.Element[] }) {
  const isTabletSize = useIsTablet('767px');
  const deviceType = useDeviceType();

  const arrowType = deviceType === 'desktop' ? CarouselArrowType.External : CarouselArrowType.None;
  const overflowType =
    deviceType === 'desktop' ? CarouselOverflowType.Blur : CarouselOverflowType.Visible;

  return (
    <Carousel
      itemWidth={isTabletSize ? 588 : 345}
      leftArrowType={arrowType}
      rightArrowType={arrowType}
      overflowType={overflowType}
    >
      {children}
    </Carousel>
  );
}

export default RecentProjectListCarousel;
