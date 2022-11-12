import { useState, useEffect, useRef } from 'react';
import cc from 'classcat';
import { ProjectCategoryType } from '../../lib/constants';
import styles from './project-list.module.scss';

import { useInView } from 'react-intersection-observer';
import { OvalSpinner } from '../common/OvalSpinner';

import { Condition } from '@src/lib';
import { EmptyContent } from '../common/EmptyContent';
import { ProjectCard, ProjectEnrollSection } from '../project';
import { ProjectType, State } from '../../types';
import useScroll from '../../hooks/useScroll';

interface ProjectListProp {
  state: State<ProjectType>;
  selectedCategory?: ProjectCategoryType;
}

export function ProjectList({ selectedCategory, state }: ProjectListProp) {
  return (
    <div className={cc([styles['total-container']])}>
      {(() => {
        switch (state._TAG) {
          case 'IDLE':
            return <p>IDLE</p>;
          case 'LOADING':
            return <p>LOADING</p>;
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
  const [cardList, setCardList] = useState(list.slice(0, 15));
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const isScrollMoveDown = useScroll();
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: false,
  });
  const count = useRef<number | null>(1);

  useEffect(() => {
    if (count.current) {
      const isComplete = Math.floor(list.length / 15) <= count.current;

      if (inView && isScrollMoveDown && !isComplete) {
        count.current = count.current + 1;
        setIsFetching(true);
        setTimeout(() => {
          setCardList(list.slice(0, (count.current as number) * 15));
          setIsFetching(false);
        }, 600);
      }
    }
  }, [inView, isScrollMoveDown, list]);

  return (
    <>
      <section className={styles['card-list']}>
        {cardList.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </section>
      <div className={styles['observered']} ref={ref} />
      {isFetching && isScrollMoveDown && (
        <div className={styles['spinner']}>
          <OvalSpinner />
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

function ProjectCategoryDescription(category: ProjectCategoryType | undefined) {
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
                  <span>APPJAM</span>
                </p>
              </div>
            );
          case ProjectCategoryType.SOPKATHON:
            return (
              <div className={styles['category-description']}>
                <p>무박 2일간의 해커톤을 통해</p>
                <p>
                  <span>아이디어를 빠르게 프로덕트로 만들어보는 프로젝트,</span>
                  <span>SOPTKATHON</span>
                </p>
              </div>
            );
          case ProjectCategoryType.SOPTERM:
            return (
              <div className={styles['category-description']}>
                <p>4개월간의 장기 협업을 통해 </p>
                <p>
                  <span>한 개의 온전한 프로덕트를 만드는 프로젝트,</span>
                  <span>SOPT-TERM</span>
                </p>
              </div>
            );
          case ProjectCategoryType.STUDY:
            return (
              <div className={styles['category-description']}>
                <p>2개월간 지식 공유를 진행하며</p>
                <p>
                  <span>아이디어를 시각화 하거나 프로덕트로 만들어보는 프로젝트</span>
                  <span>스터디</span>
                </p>
              </div>
            );
          case ProjectCategoryType.JOINTSEMINAR:
            return (
              <div className={styles['category-description']}>
                <p>기획, 디자인, 개발 파트가 배운 내용을 통해 </p>
                <p>
                  <span>간단한 아이디어를 시각화 해보는 프로젝트, </span>
                  <span>합동 세미나</span>
                </p>
              </div>
            );
          case ProjectCategoryType.ETC:
          default:
        }
      })()}
    </>
  );
}
