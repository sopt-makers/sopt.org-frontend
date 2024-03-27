import Carousel from '@src/components/common/Carousel';
import { useDeviceType, useIsDesktop, useIsMobile } from '@src/hooks/useDevice';
import { staticReleaseProjectList } from '@src/lib/constants/project';
import RecentProjectListItem from '@src/views/ProjectPage/components/RecentProjectList/Item';

export default function RecentProjectListCarousel() {
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
      {staticReleaseProjectList.slice(0, 6).map((project, index) => (
        <RecentProjectListItem key={index} {...project} />
      ))}
    </Carousel>
  );
}
