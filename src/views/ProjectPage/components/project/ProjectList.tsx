import { Condition } from '@src/components/common/Condition';
import { State } from '@src/hooks/useFetchBase/types';
import { ProjectCategoryType, ProjectType } from '@src/lib/types/project';
import ProjectCardList from '@src/views/ProjectPage/components/project/ProjectCardList';
import ProjectCardSkeletonUI from '@src/views/ProjectPage/components/project/ProjectCardSkeletonUI';
import ProjectCategoryDescription from '@src/views/ProjectPage/components/project/ProjectCategoryDescription';
import ProjectListCount from '@src/views/ProjectPage/components/project/ProjectListCount';
import { EmptyContent } from '../common/EmptyContent';
import * as S from './style';

interface ProjectListProp {
  state: State<ProjectType[]>;
  selectedCategory: ProjectCategoryType;
}

export function ProjectList({ selectedCategory, state }: ProjectListProp) {
  return (
    <>
      {(() => {
        switch (state._TAG) {
          case 'IDLE':
          case 'LOADING':
            return (
              <>
                <S.ProjectListHeader selectedCategory={selectedCategory}>
                  <ProjectCategoryDescription selectedCategory={selectedCategory} />
                  <S.ProjectListCountSkeletonUI />
                </S.ProjectListHeader>
                <ProjectCardSkeletonUI />
              </>
            );
          case 'ERROR':
            return <p>ERROR</p>;
          case 'OK': {
            const { data: projectList } = state;
            const listLength = projectList.length;
            return (
              <>
                <Condition statement={listLength > 0}>
                  <S.ProjectListHeader selectedCategory={selectedCategory}>
                    <ProjectCategoryDescription selectedCategory={selectedCategory} />
                    <ProjectListCount count={listLength} />
                  </S.ProjectListHeader>
                  <ProjectCardList projectList={projectList} />
                </Condition>
                <Condition statement={listLength === 0}>
                  <ProjectCategoryDescription selectedCategory={selectedCategory} />
                  <EmptyContent />
                </Condition>
              </>
            );
          }
        }
      })()}
    </>
  );
}
