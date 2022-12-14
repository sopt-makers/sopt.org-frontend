import { Condition } from '@src/lib';
import cc from 'classcat';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import { ProjectCategoryType } from '../../lib/constants';
import { ProjectType, State } from '../../types';
import { EmptyContent } from '../common/EmptyContent';
import { OvalSpinner } from '../common/OvalSpinner';
import { ProjectCard, ProjectEnrollSection } from '../project';
import styles from './project-list.module.scss';

interface ProjectListProp {
  state: State<ProjectType>;
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
      <div>{count} ?????? ??????????????? ?????????.</div>
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
                <p>5????????? ?????? ????????? ?????? </p>
                <p>
                  <span>??? ?????? ????????? ??????????????? ????????? ????????????, </span>
                  <span className={styles['category-summary']}>APPJAM</span>
                </p>
              </div>
            );
          case ProjectCategoryType.SOPKATHON:
            return (
              <div className={styles['category-description']}>
                <p>?????? 2????????? ???????????? ?????? ??????????????? </p>
                <p>
                  <span>????????? ??????????????? ??????????????? ????????????,</span>
                  <span className={styles['category-summary']}>SOPKATHON</span>
                </p>
              </div>
            );
          case ProjectCategoryType.SOPTERM:
            return (
              <div className={styles['category-description']}>
                <p>4???????????? ?????? ????????? ?????? </p>
                <p>
                  <span>??? ?????? ????????? ??????????????? ????????? ????????????,</span>
                  <span className={styles['category-summary']}>SOPT-TERM</span>
                </p>
              </div>
            );
          case ProjectCategoryType.STUDY:
            return (
              <div className={styles['category-description']}>
                <p>2????????? ?????? ????????? ???????????? ??????????????? </p>
                <p>
                  <span>????????? ????????? ??????????????? ??????????????? ????????????,</span>
                  <span className={styles['category-summary']}>?????????</span>
                </p>
              </div>
            );
          case ProjectCategoryType.JOINTSEMINAR:
            return (
              <div className={styles['category-description']}>
                <p>??????, ?????????, ?????? ????????? ?????? ????????? ?????? </p>
                <p>
                  <span>????????? ??????????????? ????????? ????????? ????????????, </span>
                  <span className={styles['category-summary']}>?????? ?????????</span>
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
