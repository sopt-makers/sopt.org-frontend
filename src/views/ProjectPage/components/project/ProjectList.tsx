import { Condition } from '@src/components/common/Condition';
import { State } from '@src/hooks/useFetchBase/types';
import { projectCategoryDescription } from '@src/lib/constants/project';
import { ProjectCategoryType, ProjectType } from '@src/lib/types/project';
import cc from 'classcat';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import { EmptyContent } from '../common/EmptyContent';
import { OvalSpinner } from '../common/OvalSpinner';
import { ProjectCard, ProjectEnrollSection } from '../project';
import styles from './project-list.module.scss';

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
          case 'LOADING':
            return (
              <div className={styles['list-container']}>
                <div className={styles['selection-description']}>
                  {ProjectCategoryDescription(selectedCategory)}
                </div>
                {ProjectListSkeletonUI()}
                <ProjectEnrollSection />
              </div>
            );
          case 'ERROR':
            return <p>ERROR</p>;
          case 'OK': {
            const { data: projectList } = state;
            const listLength = projectList.length;
            return (
              <div className={styles['list-container']}>
                <Condition statement={listLength > 0}>
                  <div className={styles['selection-description']}>
                    {ProjectCategoryDescription(selectedCategory)}
                    {ProjectListCount(listLength)}
                  </div>
                  {ProjectCardList(projectList)}
                </Condition>
                <Condition statement={listLength === 0}>
                  {ProjectCategoryDescription(selectedCategory)}
                  <EmptyContent />
                </Condition>
                <ProjectEnrollSection />
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

function ProjectListCount(count: number) {
  return <div className={styles['list-count']}>{count}개의 프로젝트</div>;
}

function ProjectCategoryDescription(category: ProjectCategoryType) {
  const description = projectCategoryDescription[category];
  if (description === '') return <p />;
  return <p className={styles['category-description']}>{description}</p>;
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
