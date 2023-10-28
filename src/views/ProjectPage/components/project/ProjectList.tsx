import { Condition } from '@src/components/common/Condition';
import { State } from '@src/hooks/useFetchBase/types';
import { ProjectCategoryType, ProjectType } from '@src/lib/types/project';
import ProjectCardList from '@src/views/ProjectPage/components/project/ProjectCardList';
import ProjectCategoryDescription from '@src/views/ProjectPage/components/project/ProjectCategoryDescription';
import ProjectListCount from '@src/views/ProjectPage/components/project/ProjectListCount';
import { EmptyContent } from '../common/EmptyContent';
import styles from './project-list.module.scss';
import * as S from './style';

interface ProjectListProp {
  state: State<ProjectType[]>;
  selectedCategory: ProjectCategoryType;
}

export function ProjectList({ selectedCategory, state }: ProjectListProp) {
  return (
    <div>
      {(() => {
        switch (state._TAG) {
          case 'IDLE':
          case 'LOADING':
            return (
              <div>
                <ProjectCategoryDescription selectedCategory={selectedCategory} />
                {ProjectListSkeletonUI()}
              </div>
            );
          case 'ERROR':
            return <p>ERROR</p>;
          case 'OK': {
            const { data: projectList } = state;
            const listLength = projectList.length;
            return (
              <div>
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
              </div>
            );
          }
        }
      })()}
    </div>
  );
}

function ProjectListSkeletonUI() {
  const array = new Array(9).fill(undefined);
  return (
    <section className={styles['card-list']}>
      {array.map((_, index) => {
        return <CardSkeletonUI key={index} />;
      })}
    </section>
  );
}

function CardSkeletonUI() {
  return (
    <article className={styles['skeleton']}>
      <div className={styles['thumbnail']} />
      <div className={styles['type-list']}>
        <div className={styles['type']} />
        <div className={styles['type']} />
      </div>
      <div className={styles['description']}>
        <div className={styles['long-line']} />
        <div className={styles['long-line']} />
        <div className={styles['short-line']} />
      </div>
    </article>
  );
}
