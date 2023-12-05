import Carousel from '@src/components/common/Carousel';
import { useDeviceType, useIsDesktop, useIsMobile } from '@src/hooks/useDevice';
import { StaticReleaseProjectList } from '@src/lib/constants/project';
import { ProjectCategoryType, ProjectPlatformType, ProjectType } from '@src/lib/types/project';
import RecentProjectListItem from '@src/views/ProjectPage/components/RecentProjectList/Item';
import { useGetProjectList } from '@src/views/ProjectPage/hooks/queries';

export default function RecentProjectListCarousel() {
  const { data } = useGetProjectList(ProjectCategoryType.ALL, ProjectPlatformType.ALL);
  const recentProjectList = [...StaticReleaseProjectList, ...(data as ProjectType[]).slice(0, 4)];

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
      {recentProjectList.map((project, index) => (
        <RecentProjectListItem key={index} {...project} />
      ))}
    </Carousel>
  );
}
