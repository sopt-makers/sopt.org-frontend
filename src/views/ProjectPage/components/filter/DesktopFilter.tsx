import { useState } from 'react';
import { ReactComponent as ToggleArrowBtn } from '@src/assets/icons/ToggleArrow.svg';
import { Condition } from '@src/lib';
import { ProjectCategoryType } from '@src/lib/types/project';
import cc from 'classcat';
import { projectCategoryList } from '../../lib/constants';
import styles from './project-filter-desktop.module.scss';

type ModalProps = {
  selectedCategory: ProjectCategoryType;
  setCategory: (args: ProjectCategoryType) => void;
};

export function DesktopFilter({ selectedCategory, setCategory }: ModalProps) {
  const [isCategoryOpen, toggleCategoryOpenState] = useState(true);
  const handleSelect = (id: ProjectCategoryType) => {
    setCategory(id);
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
