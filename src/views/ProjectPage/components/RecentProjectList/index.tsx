import { ProjectCategoryType, ProjectPlatformType, ProjectType } from '@src/lib/types/project';
import { useGetProjectList } from '@src/views/ProjectPage/hooks/queries';
import S from '../../styles';
import RecentProjectListCarousel from './Carousel';
import RecentProjectListItem from './Item';

export default function RecentProjectList() {
  const { data } = useGetProjectList(ProjectCategoryType.ALL, ProjectPlatformType.ALL, 'updatedAt');
  const recentProjectList = data as ProjectType[];

  return (
    <>
      <S.SectionTitle>최근 출시한 프로젝트</S.SectionTitle>
      <RecentProjectListCarousel>
        {recentProjectList.slice(0, 6).map((project) => (
          <RecentProjectListItem key={project.id} {...project} />
        ))}
      </RecentProjectListCarousel>
    </>
  );
}
