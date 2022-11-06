import { useState } from 'react';
import { ReactComponent as ToggleArrowBtn } from '@src/assets/icons/ToggleArrow.svg';
import { projectCategoryList, ProjectCategoryType } from '../lib/constants';
import styles from '../styles/mobile-filter.module.scss';
import { Condition } from '@src/lib';
import cc from 'classcat';

type ModalProps = {
  toggleModalState: (args: boolean) => void;
  selectedCategory: ProjectCategoryType | undefined;
  setCategory: (args: ProjectCategoryType) => void;
};

export function MobileFilterModal({ toggleModalState, selectedCategory, setCategory }: ModalProps) {
  const [isCategoryOpen, toggleCategoryOpenState] = useState(false);

  const ableScroll = () => (document.body.style.overflow = 'scroll');

  const handleSelect = (id: ProjectCategoryType) => {
    setCategory(id);
    toggleModalState(false);
    ableScroll();
  };

  return (
    <div className={styles.modal}>
      <div className={styles.overlay} onClick={() => toggleModalState(false)}></div>
      <div className={styles['content']}>
        <div className={styles['title']} onClick={() => toggleCategoryOpenState((prev) => !prev)}>
          <ToggleArrowBtn className={cc([isCategoryOpen && styles.isRotated])} />
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
