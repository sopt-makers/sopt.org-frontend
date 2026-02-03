import { useEffect, useState } from 'react';
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
}

const INIT_PAGE = 1;

export function ProjectList({ selectedCategory, selectedPlatform }: ProjectListProp) {
  const [currentPage, setCurrentPage] = useState(INIT_PAGE);

  const { response } = useGetProjectList(selectedCategory, selectedPlatform, currentPage);

  useEffect(() => {
    setCurrentPage(INIT_PAGE);
  }, [selectedCategory, selectedPlatform]);

  return (
    <>
      <S.ProjectListHeader selectedCategory={selectedCategory}>
        <ProjectCategoryDescription selectedCategory={selectedCategory} />
        <ProjectListCount count={response?.totalCount ?? 0} />
      </S.ProjectListHeader>
      <ProjectCardList projectList={response?.data ?? []} />

      <Pagination
        currentPage={response?.currentPage ?? INIT_PAGE}
        totalPage={response?.totalPage ?? INIT_PAGE}
        hasPrevPage={response?.hasPrevPage ?? false}
        hasNextPage={response?.hasNextPage ?? false}
        onPageChange={setCurrentPage}
      />
    </>
  );
}
