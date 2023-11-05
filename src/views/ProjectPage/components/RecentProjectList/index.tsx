import { Suspense } from 'react';
import { useIsDesktop, useIsMobile } from '@src/hooks/useDevice';
import { ProjectCategoryType, ProjectPlatformType, ProjectType } from '@src/lib/types/project';
import { useGetProjectList } from '@src/views/ProjectPage/hooks/queries';
import S from '../../styles';
import RecentProjectListCarousel from './Carousel';
import RecentProjectListItem from './Item';
import RecentProjectListSkeletonUI from './RecentProjectListSkeletonUI';

export default function RecentProjectList() {
  const { data } = useGetProjectList(ProjectCategoryType.ALL, ProjectPlatformType.ALL, 'updatedAt');
  const recentProjectList = data as ProjectType[];

  const isDesktopSize = useIsDesktop('1920px');
  const isMobileSize = useIsMobile('899px');

  return (
    <>
      <S.SectionTitle>최근 출시한 프로젝트</S.SectionTitle>
      <Suspense
        fallback={
          <RecentProjectListSkeletonUI
            stride={isDesktopSize ? 2 : 1}
            itemWidth={isMobileSize ? 345 : 588}
          />
        }
      >
        <RecentProjectListCarousel>
          {recentProjectList.slice(0, 6).map((project) => (
            <RecentProjectListItem key={project.id} {...project} />
          ))}
        </RecentProjectListCarousel>
      </Suspense>
    </>
  );
}
