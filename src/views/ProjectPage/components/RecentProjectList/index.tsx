import { useQueryClient } from 'react-query';
import { ProjectCategoryType, ProjectPlatformType, ProjectType } from '@src/lib/types/project';
import { sortBy } from '@src/lib/utils/array';
import S from '../../styles';
import RecentProjectListCarousel from './Carousel';
import RecentProjectListItem from './Item';

export default function RecentProjectList() {
  const queryClient = useQueryClient();
  const projectList = queryClient.getQueryData<ProjectType[]>([
    'getProjectList',
    ProjectCategoryType.ALL,
    ProjectPlatformType.ALL,
  ]);
  const recentProjectList = projectList
    ? sortBy<ProjectType>(projectList, 'updatedAt')
    : projectList;

  return (
    <>
      <S.SectionTitle>최근 출시한 프로젝트</S.SectionTitle>
      {recentProjectList && (
        <RecentProjectListCarousel>
          {recentProjectList.slice(0, 6).map((d) => (
            <RecentProjectListItem key={d.id} {...d} />
          ))}
        </RecentProjectListCarousel>
      )}
    </>
  );
}
