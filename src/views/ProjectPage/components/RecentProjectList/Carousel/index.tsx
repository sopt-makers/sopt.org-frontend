import Carousel from '@src/components/common/Carousel';
import { useDeviceType, useIsDesktop, useIsMobile } from '@src/hooks/useDevice';
import { staticReleaseProjectList } from '@src/lib/constants/project';
import { ProjectCategoryType, ProjectPlatformType, ProjectType } from '@src/lib/types/project';
import RecentProjectListItem from '@src/views/ProjectPage/components/RecentProjectList/Item';
import { useGetProjectList } from '@src/views/ProjectPage/hooks/queries';

export default function RecentProjectListCarousel() {
  const { data } = useGetProjectList(ProjectCategoryType.ALL, ProjectPlatformType.ALL);
  const platform = ['website', 'appStore', 'googlePlay'];
  const filteredData = (data as ProjectType[])
    .filter(({ link }) => link.some(({ title }) => platform.includes(title)))
    .slice(0, 4);
  const recentProjectList = [...staticReleaseProjectList, ...filteredData];

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
