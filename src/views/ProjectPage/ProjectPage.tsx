import { useEffect, useReducer, useState } from 'react';
import { to } from 'await-to-js';
import cc from 'classcat';
import Footer from '@src/components/common/Footer';
import { EmptyContent } from './EmptyContent';
import { getProjectList } from '@src/lib/project';
import { projectCategoryList, CategoryType } from './constants';

import { Condition } from '@src/lib';
import { ReactComponent as RightArrow } from '@src/assets/icons/enroll_rightArrow.svg';
import { ReactComponent as GithubIcon } from '@src/assets/icons/github_icon.svg';
import { ReactComponent as WebIcon } from '@src/assets/logo/website.svg';
import { ReactComponent as UpArrow } from '@src/assets/icons/upArrow.svg';
import { ReactComponent as MobileFilterBtn } from '@src/assets/icons/MobileFilterBtn.svg';
import { ReactComponent as ToggleArrowBtn } from '@src/assets/icons/ToggleArrow.svg';

import { reducer } from './reducer';
import { ProjectType } from './types';
import styles from './styles.module.scss';
import ProjectHeader from '@src/components/ProjectHeader';
import Image from 'next/image';
import Link from 'next/link';

function Projects() {
  const [selectedCategory, setCategory] = useState<CategoryType | undefined>(undefined);
  const [isModalOpen, toggleModalState] = useState(false);

  return (
    <>
      <ProjectList selectedCategory={selectedCategory} />
      <Condition statement={isModalOpen}>
        <FilterModal
          toggleModalState={toggleModalState}
          selectedCategory={selectedCategory}
          setCategory={setCategory}
        />
      </Condition>
      <MobileUtilityButtons prevState={isModalOpen} toggleModalState={toggleModalState} />
      <Footer />
    </>
  );
}

// TODO project category must be inclueded in data from from server
function ProjectList({ selectedCategory }: { selectedCategory: CategoryType | undefined }) {
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
            const { data: list } = state;
            const listLength = list.length;
            return (
              <>
                <ProjectHeader />
                <div className={styles['list-container']}>
                  <Condition statement={listLength > 0}>
                    <div className={styles['total-count']}>
                      <p>{listLength}개의 프로젝트가 있어요.</p>
                    </div>
                    <section>
                      {state.data.map((project, index) => (
                        <Project key={index} project={project} />
                      ))}
                    </section>
                    <ProjectEnrollSection />
                  </Condition>
                  <Condition statement={listLength === 0}>
                    <EmptyContent />
                    <ProjectEnrollSection />
                  </Condition>
                </div>
              </>
            );
          }
        }
      })()}
    </div>
  );
}

// TODO all project link type should be applied to links switch-case
// TODO project service type should be changed from array to string (also change project type)
// TODO thumbnail image should be applied to Image
function Project({ project }: { project: ProjectType }) {
  return (
    <Link href={`/project/${project.id}`}>
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
    </Link>
  );
}

function ProjectEnrollSection() {
  return (
    <section className={styles.enroll}>
      <p>혹시 SOPT 회원으로 진행한 프로젝트가 있다면?</p>
      <div onClick={() => alert('인터널 프로젝트와 연동 예정')}>
        <span>프로젝트 올리러 가기</span>
        <RightArrow />
      </div>
    </section>
  );
}

function MobileUtilityButtons({
  toggleModalState,
  prevState,
}: {
  prevState: boolean;
  toggleModalState: (arg: boolean) => void;
}) {
  const preventScroll = () => (document.body.style.overflow = 'hidden');
  const ableScroll = () => (document.body.style.overflow = 'scroll');

  const handleFilterBtnClick = () => {
    if (prevState) ableScroll();
    else preventScroll();

    toggleModalState(!prevState);
  };

  return (
    <div className={styles.utility}>
      <button type="button" className={styles.up} onClick={() => window.scrollTo(0, 0)}>
        <UpArrow />
      </button>
      <button type="button" className={styles.filter} onClick={() => handleFilterBtnClick()}>
        <MobileFilterBtn />
      </button>
    </div>
  );
}

type ModalProps = {
  toggleModalState: (args: boolean) => void;
  selectedCategory: CategoryType | undefined;
  setCategory: (args: CategoryType) => void;
};

export function FilterModal({ toggleModalState, selectedCategory, setCategory }: ModalProps) {
  const [isCategoryOpen, toggleCategoryOpenState] = useState(false);

  const handleSelect = (id: CategoryType) => {
    setCategory(id);
    toggleModalState(false);
  };

  return (
    <div className={styles.modal}>
      <div className={styles.overlay} onClick={() => toggleModalState(false)}></div>
      <div className={styles['content']}>
        <div className={styles['title']}>
          <ToggleArrowBtn
            className={cc([isCategoryOpen && styles.isRotated])}
            onClick={() => toggleCategoryOpenState((prev) => !prev)}
          />
          <h4>프로젝트 유형</h4>
        </div>
        <Condition statement={isCategoryOpen}>
          <div className={styles.categories}>
            {projectCategoryList.map(({ type, name }) => (
              <span
                key={type}
                className={cc([selectedCategory === type && styles.isClicked])}
                onClick={() => handleSelect(type)}
              >
                {name}
              </span>
            ))}
          </div>
        </Condition>
      </div>
    </div>
  );
}

export default Projects;
