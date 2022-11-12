import { useState } from 'react';
import styles from './project-filter-desktop.module.scss';
import { projectCategoryList, ProjectCategoryType } from '../../lib/constants';
import cc from 'classcat';
import { Condition } from '@src/lib';
import { ReactComponent as ToggleArrowBtn } from '@src/assets/icons/ToggleArrow.svg';

type ModalProps = {
  selectedCategory?: ProjectCategoryType;
  setCategory: (args: ProjectCategoryType) => void;
};

export function DesktopFilter({ selectedCategory, setCategory }: ModalProps) {
  const [isCategoryOpen, toggleCategoryOpenState] = useState(false);
  const handleSelect = (id: ProjectCategoryType) => {
    setCategory(id);
    toggleCategoryOpenState((prev) => !prev);
  };

  return (
    <div className={styles['project-filter']}>
      <div className={styles['title']}>
        <h3>프로젝트 필터</h3>
      </div>
      <div className={styles['content']}>
        <div
          className={styles['category-name']}
          onClick={() => toggleCategoryOpenState((prev) => !prev)}
        >
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
