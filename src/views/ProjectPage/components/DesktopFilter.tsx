import styles from '../styles/desktop-filter.module.scss';
import { projectCategoryList, CategoryType } from '../lib/constants';
import cc from 'classcat';

type ModalProps = {
  selectedCategory: CategoryType | undefined;
  setCategory: (args: CategoryType) => void;
};

export function DesktopFilter({ selectedCategory, setCategory }: ModalProps) {
  const handleSelect = (id: CategoryType) => {
    setCategory(id);
  };

  return (
    <div className={styles['project-filter']}>
      <div className={styles['title']}>
        <h4>프로젝트 유형</h4>
      </div>
      <div className={styles['content']}>
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
    </div>
  );
}
