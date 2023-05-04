import { useState } from 'react';
import { ReactComponent as ToggleArrowBtn } from '@src/assets/icons/ToggleArrow.svg';
import { Condition } from '@src/lib';
import { ProjectCategoryType } from '@src/lib/types/project';
import cc from 'classcat';
import { projectCategoryList } from '../../lib/constants';
import styles from './project-filter-mobile.module.scss';

type ModalProps = {
  toggleModalState: (args: boolean) => void;
  selectedCategory: ProjectCategoryType | undefined;
  setCategory: (args: ProjectCategoryType) => void;
};

export function MobileFilterModal({ toggleModalState, selectedCategory, setCategory }: ModalProps) {
  const [isCategoryOpen, toggleCategoryOpenState] = useState(true);

  const ableScroll = () => (document.body.style.overflow = 'scroll');

  const handleSelect = (id: ProjectCategoryType) => {
    setCategory(id);
    toggleModalState(false);
    ableScroll();
  };

  const handleOverlayClick = () => {
    toggleModalState(false);
    ableScroll();
  };

  return (
    <div className={styles.modal}>
      <div className={styles.overlay} onClick={() => handleOverlayClick()}></div>
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
