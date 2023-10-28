import { Condition } from '@src/components/common/Condition';
import { State } from '@src/hooks/useFetchBase/types';
import { ProjectCategoryType, ProjectType } from '@src/lib/types/project';
import ProjectCard from '@src/views/ProjectPage/components/project/ProjectCard';
import ProjectCategoryDescription from '@src/views/ProjectPage/components/project/ProjectCategoryDescription';
import ProjectListCount from '@src/views/ProjectPage/components/project/ProjectListCount';
import cc from 'classcat';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import { EmptyContent } from '../common/EmptyContent';
import { OvalSpinner } from '../common/OvalSpinner';
import styles from './project-list.module.scss';
import * as S from './style';

interface ProjectListProp {
  state: State<ProjectType[]>;
  selectedCategory: ProjectCategoryType;
}

export function ProjectList({ selectedCategory, state }: ProjectListProp) {
  return (
    <div className={cc([styles['total-container']])}>
      {(() => {
        switch (state._TAG) {
          case 'IDLE':
            return (
              <div>
                <ProjectCategoryDescription selectedCategory={selectedCategory} />
                {ProjectListSkeletonUI()}
              </div>
            );
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
                  <S.ProjectListHeader>
                    <ProjectCategoryDescription selectedCategory={selectedCategory} />
                    <ProjectListCount count={listLength} />
                  </S.ProjectListHeader>
                  {ProjectCardList(projectList)}
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

function ProjectCardList(list: ProjectType[]) {
  const { data, isNextPage, ref } = useInfiniteScroll(list);

  return (
    <>
      <section className={styles['card-list']}>
        {data.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </section>
      {isNextPage && (
        <div className={styles['observered']} ref={ref}>
          <div className={styles['spinner']}>
            <OvalSpinner />
          </div>
        </div>
      )}
    </>
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
