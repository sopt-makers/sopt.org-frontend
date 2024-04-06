import OvalSpinner from '@src/components/common/OvalSpinner';
import { ProjectCategoryType, ProjectPlatformType, ProjectType } from '@src/lib/types/project';
import useInfiniteScroll from '@src/views/BlogPage/hooks/useInfiniteScroll';
import ProjectCardList from '@src/views/ProjectPage/components/project/ProjectCardList';
import ProjectCategoryDescription from '@src/views/ProjectPage/components/project/ProjectCategoryDescription';
import ProjectListCount from '@src/views/ProjectPage/components/project/ProjectListCount';
import { useGetProjectList } from '@src/views/ProjectPage/hooks/queries';
import * as S from './style';

interface ProjectListProp {
  selectedCategory: ProjectCategoryType;
  selectedPlatform: ProjectPlatformType;
}

export function ProjectList({ selectedCategory, selectedPlatform }: ProjectListProp) {
  const { data, hasNextPage, fetchNextPage } = useGetProjectList(
    selectedCategory,
    selectedPlatform,
  );
  const projectList = data as ProjectType[];

  const { ref } = useInfiniteScroll(fetchNextPage);

  return (
    <>
      <S.ProjectListHeader selectedCategory={selectedCategory}>
        <ProjectCategoryDescription selectedCategory={selectedCategory} />
        <ProjectListCount count={projectList?.length ?? 0} />
      </S.ProjectListHeader>
      <ProjectCardList projectList={projectList} />
      {hasNextPage && (
        <S.SpinnerWrapper ref={hasNextPage ? ref : undefined}>
          <OvalSpinner />
        </S.SpinnerWrapper>
      )}
    </>
  );
}
