import Pagination from '@src/components/common/Pagination';
import { ProjectCategoryType, ProjectPlatformType } from '@src/lib/types/project';
import ProjectCardList from '@src/views/ProjectPage/components/project/ProjectCardList';
import ProjectCategoryDescription from '@src/views/ProjectPage/components/project/ProjectCategoryDescription';
import ProjectListCount from '@src/views/ProjectPage/components/project/ProjectListCount';
import { useGetProjectList } from '@src/views/ProjectPage/hooks/useGetProjectList';
import * as S from './style';

interface ProjectListProp {
  selectedCategory: ProjectCategoryType;
  selectedPlatform: ProjectPlatformType;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export function ProjectList({ selectedCategory, selectedPlatform, currentPage, onPageChange }: ProjectListProp) {
  const { response } = useGetProjectList(selectedCategory, selectedPlatform, currentPage);

  return (
    <>
      <S.ProjectListHeader selectedCategory={selectedCategory}>
        <ProjectCategoryDescription selectedCategory={selectedCategory} />
        <ProjectListCount count={response?.totalCount ?? 0} />
      </S.ProjectListHeader>
      <ProjectCardList projectList={response?.data ?? []} />

      <Pagination
        currentPage={response?.currentPage ?? currentPage}
        totalPage={response?.totalPage ?? 1}
        hasPrevPage={response?.hasPrevPage ?? false}
        hasNextPage={response?.hasNextPage ?? false}
        onPageChange={onPageChange}
      />
    </>
  );
}
