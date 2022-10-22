import { useEffect, useReducer } from 'react';
import { to } from 'await-to-js';
import cc from 'classcat';

import Header from '@src/components/common/Header';
import Footer from '@src/components/common/Footer';
import { EmptyContent } from './EmptyContent';
import { getProjectList } from '@src/lib/project';

import { Condition } from '@src/lib';
import { ReactComponent as RightArrow } from '@src/assets/icons/enroll_rightArrow.svg';
import { ReactComponent as GithubIcon } from '@src/assets/icons/github_icon.svg';
import { ReactComponent as WebIcon } from '@src/assets/logo/website.svg';

import { reducer } from './reducer';
import { ProjectType } from './types';
import styles from './styles.module.scss';
import Image from 'next/image';

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
      <div>
        <div className={cc([styles['total-container']])}>
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
      </div>
      <Footer />
    </>
  );
}

/* key should be changed from index to unique id*/
function ProjectList({ list }: { list: ProjectType[] }) {
  const listLength = list.length;

  return (
    <div className={styles['list-container']}>
      <Condition statement={listLength > 0}>
        <div className={styles['total-count']}>
          <p>{listLength}개의 프로젝트가 있어요.</p>
        </div>
        <section>
          {list?.map((project, index) => (
            <Project project={project} key={index} />
          ))}
        </section>
        <ProjectEnrollSection />
      </Condition>
      <Condition statement={listLength === 0}>
        <EmptyContent />
        <ProjectEnrollSection />
      </Condition>
    </div>
  );
}

// TODO all project link type should be applied to links switch-case
// TODO proejct service type should be changed from array to string (also change project type)
// TODO thumbnail image should be applied to Image
function Project({ project }: { project: ProjectType }) {
  return (
    <article className={styles.item}>
      <div className={styles['image-wrapper']}>
        <Image src={project.logoImageUrl} width={100} height={100} alt="logo" />
      </div>
      <div className={styles.content}>
        <div className={styles.types}>
          <div>{project.serviceType[0]}</div>
          <div>{project.semester}기</div>
        </div>
        <div className={styles.text}>
          <h5>{project.name}</h5>
          <p>{project.shortIntroduction}</p>
        </div>
        <div className={styles.links}>
          {project.link?.map(({ type, url }, index) => (
            <div key={index}>
              {(() => {
                switch (type) {
                  case 'github':
                    return (
                      <>
                        <div className={styles['icon-wrapper']} onClick={() => window.open(url)}>
                          <GithubIcon />
                        </div>
                        <div className={styles['icon-wrapper']} onClick={() => window.open(url)}>
                          <WebIcon />
                        </div>
                      </>
                    );
                  case 'website':
                    return <div>WEBSITE</div>;
                }
              })()}
            </div>
          ))}
        </div>
      </div>
    </article>
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
