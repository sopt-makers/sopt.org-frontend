import { useEffect, useReducer } from 'react';
import { to } from 'await-to-js';
import cc from 'classcat';
import { SelectionType } from '../lib/constants';
import styles from '../styles/project-list.module.scss';
import { reducer } from '../lib/reducer';
import { getProjectList, getProjectByCategory } from '@src/lib/project';
import { Condition } from '@src/lib';
import { EmptyContent, ProjectCard, ProjectEnrollSection } from '../components';

// APPJAM | SOPKATHON | SOPTERM | STUDY | JOINTSEMINAR | ETC
export function ProjectList({ selectedCategory }: { selectedCategory: SelectionType }) {
  const [state, dispatch] = useReducer(reducer, { _TAG: 'IDLE' });
  const fetchProjectList = async () => {
    dispatch({
      _TAG: 'FETCH',
    });

    // 분기 처리
    // const [error, response] = await to(getProjectList());
    const [error, response] = await to(getProjectByCategory('APPJAM'));

    if (error) {
      return dispatch({
        _TAG: 'FAILED',
        error,
      });
    }

    if (response) {
      return dispatch({ _TAG: 'SUCCESS', data: response });
    }
  };

  useEffect(() => {
    fetchProjectList();
  }, []);

  return (
    <div className={cc([styles['total-container']])}>
      {(() => {
        switch (state._TAG) {
          case 'IDLE':
            return <p>HI</p>;
          case 'LOADING':
            return <p>LOADING</p>;
          case 'ERROR':
            return <p>ERROR</p>;
          case 'OK': {
            const { data: list } = state;
            const listLength = list.length;
            return (
              <div className={styles['list-container']}>
                <Condition statement={listLength > 0}>
                  <div className={styles['total-count']}>
                    <div>{listLength} 개의 프로젝트가 있어요.</div>
                  </div>
                  <section className={styles['list-data-container']}>
                    {state.data.map((project, index) => (
                      <ProjectCard key={index} project={project} />
                    ))}
                  </section>
                </Condition>
                <Condition statement={listLength === 0}>
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
