import { ProjectCategoryType } from '@src/lib/types/project';
import ProjectCategoryDescription from '@src/views/ProjectPage/components/project/ProjectCategoryDescription';
import ProjectCardSkeletonUI from '@src/views/ProjectPage/components/project/ProjectListFallback/ProjectCardSkeletonUI';
import * as S from './style';

interface ProjectListFallbackProps {
  selectedCategory: ProjectCategoryType;
}

export default function ProjectListFallback({ selectedCategory }: ProjectListFallbackProps) {
  return (
    <>
      <S.ProjectListHeader selectedCategory={selectedCategory}>
        <ProjectCategoryDescription selectedCategory={selectedCategory} />
        <S.ProjectListCountSkeletonUI />
      </S.ProjectListHeader>
      <ProjectCardSkeletonUI />
    </>
  );
}
