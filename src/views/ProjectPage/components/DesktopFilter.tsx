import { useState } from 'react';
import styles from '../styles/desktop-filter.module.scss';
import { projectCategoryList, CategoryType } from '../lib/constants';
import cc from 'classcat';
import { Condition } from '@src/lib';
import { ReactComponent as ToggleArrowBtn } from '@src/assets/icons/ToggleArrow.svg';

type ModalProps = {
  selectedCategory: CategoryType | undefined;
  setCategory: (args: CategoryType) => void;
};

export function DesktopFilter({ selectedCategory, setCategory }: ModalProps) {
  const [isCategoryOpen, toggleCategoryOpenState] = useState(false);
  const handleSelect = (id: CategoryType) => {
    console.log(id);
    setCategory(id);
  };

  return (
    <div className={styles['project-filter']}>
      <div className={styles['title']}>
        <h3>프로젝트 필터</h3>
      </div>
      <div className={styles['content']}>
        <div className={styles['category-name']}>
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
