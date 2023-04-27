import { State } from '@src/hooks/useFetchBase/types';
import { Condition } from '@src/lib';
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
            return (
              <div className={styles['list-container']}>
                {ProjectCategoryDescription(selectedCategory)}
                {ProjectListSkeletonUI()}
                <ProjectEnrollSection />
              </div>
            );
          case 'LOADING':
            return (
              <div className={styles['list-container']}>
                {ProjectCategoryDescription(selectedCategory)}
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
                  {ProjectCategoryDescription(selectedCategory)}
                  {ProjectListCount(listLength)}
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
  return (
    <div className={styles['list-count']}>
      <div>{count} 개의 프로젝트가 있어요.</div>
    </div>
  );
}

function ProjectCategoryDescription(category: ProjectCategoryType) {
  return (
    <>
      {(() => {
        switch (category) {
          case ProjectCategoryType.APPJAM:
            return (
              <div className={styles['category-description']}>
                <p>5주간의 집중 협업을 통해 </p>
                <p>
                  <span>한 개의 온전한 프로덕트를 만드는 프로젝트, </span>
                  <span className={styles['category-summary']}>APPJAM</span>
                </p>
              </div>
            );
          case ProjectCategoryType.SOPKATHON:
            return (
              <div className={styles['category-description']}>
                <p>무박 2일간의 해커톤을 통해 아이디어를 </p>
                <p>
                  <span>빠르게 프로덕트로 만들어보는 프로젝트,</span>
                  <span className={styles['category-summary']}>SOPKATHON</span>
                </p>
              </div>
            );
          case ProjectCategoryType.SOPTERM:
            return (
              <div className={styles['category-description']}>
                <p>4개월간의 장기 협업을 통해 </p>
                <p>
                  <span>한 개의 온전한 프로덕트를 만드는 프로젝트,</span>
                  <span className={styles['category-summary']}>SOPT-TERM</span>
                </p>
              </div>
            );
          case ProjectCategoryType.STUDY:
            return (
              <div className={styles['category-description']}>
                <p>2개월간 지식 공유를 진행하며 아이디어를 </p>
                <p>
                  <span>시각화 하거나 프로덕트로 만들어보는 프로젝트,</span>
                  <span className={styles['category-summary']}>스터디</span>
                </p>
              </div>
            );
          case ProjectCategoryType.JOINTSEMINAR:
            return (
              <div className={styles['category-description']}>
                <p>기획, 디자인, 개발 파트가 배운 내용을 통해 </p>
                <p>
                  <span>간단한 아이디어를 시각화 해보는 프로젝트, </span>
                  <span className={styles['category-summary']}>합동 세미나</span>
                </p>
              </div>
            );
          case ProjectCategoryType.ALL:
          case ProjectCategoryType.ETC:
          default:
        }
      })()}
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
