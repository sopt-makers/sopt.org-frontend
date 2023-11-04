import ProjectCardSkeletonUI from '@src/views/ProjectPage/components/project/ProjectListFallback/ProjectCardSkeletonUI';
import * as S from './style';

export default function ProjectListFallback() {
  return (
    <>
      <S.ProjectListHeader>
        <S.ProjectListCountSkeletonUI />
      </S.ProjectListHeader>
      <ProjectCardSkeletonUI />
    </>
  );
}
