import { useEffect, useReducer } from 'react';
import { to } from 'await-to-js';
import cc from 'classcat';

import Header from '@src/components/common/Header';
import Footer from '@src/components/common/Footer';
import { EmptyContent } from './EmptyContent';
import { getProjectList } from '@src/lib/project';

import { Condition } from '@src/lib';
import { ReactComponent as RightArrow } from '@src/assets/icons/enroll_rightArrow.svg';

import { reducer } from './reducer';
import { ProjectType } from './types';
import styles from './styles.module.scss';

function Projects() {
  const [state, dispatch] = useReducer(reducer, { _TAG: 'IDLE' });
  const fetchProjectList = async () => {
    dispatch({
      _TAG: 'FETCH',
    });

    const [error, response] = await to(getProjectList());

    if (error) {
      return dispatch({
        _TAG: 'FAILED',
        error,
      });
    }

    if (response) {
      return dispatch({ _TAG: 'SUCCESS', data: response.projects });
    }
  };

  useEffect(() => {
    fetchProjectList();
  }, []);

  return (
    <>
      <Header />
      <div className={cc([styles.container])}>
        {(() => {
          switch (state._TAG) {
            case 'IDLE':
              return <p>IDLE</p>;
            case 'LOADING':
              return <p>LOADING</p>;
            case 'ERROR':
              return <p>ERROR</p>;
            case 'OK':
              return <ProjectList list={state.data} />;
          }
        })()}
      </div>
      <Footer />
    </>
  );
}

function ProjectList({ list }: { list: ProjectType[] }) {
  const listLength = list.length;

  return (
    <>
      <Condition statement={listLength > 0}>
        {list?.map((project, index) => (
          <article key={index}>{project.name}</article>
        ))}
      </Condition>
      <Condition statement={listLength === 0}>
        <EmptyContent />
      </Condition>
      <ProjectEnrollSection />
    </>
  );
}

function ProjectEnrollSection() {
  return (
    <section className={cc([styles.enroll])} onClick={() => alert('인터널 프로젝트와 연동 예정')}>
      <p>혹시 SOPT 회원으로 진행한 프로젝트가 있다면?</p>
      <p>
        <span>프로젝트 올리러 가기</span>
        <RightArrow />
      </p>
    </section>
  );
}

export default Projects;
