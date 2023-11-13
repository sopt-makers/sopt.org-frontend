import Carousel from '@src/components/common/Carousel';
import { useDeviceType, useIsDesktop, useIsMobile } from '@src/hooks/useDevice';
import { ProjectCategoryType, ProjectPlatformType, ProjectType } from '@src/lib/types/project';
import { CarouselArrowType, CarouselOverflowType } from '@src/lib/types/universal';
import RecentProjectListItem from '@src/views/ProjectPage/components/RecentProjectList/Item';
import { useGetProjectList } from '@src/views/ProjectPage/hooks/queries';

export default function RecentProjectListCarousel() {
  const { data } = useGetProjectList(ProjectCategoryType.ALL, ProjectPlatformType.ALL);
  const recentProjectList = data as ProjectType[];

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
      {recentProjectList.slice(0, 6).map((project) => (
        <RecentProjectListItem key={project.id} {...project} />
      ))}
    </Carousel>
  );
}
