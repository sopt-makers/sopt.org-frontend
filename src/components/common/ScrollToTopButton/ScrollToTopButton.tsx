import { useEffect, useState } from 'react';
import { ReactComponent as UpArrow } from '@src/assets/icons/upArrow.svg';
import { debounce } from '@src/utils/debounce';
import cc from 'classcat';
import styles from './scroll-to-top-button.module.scss';

const SCROLL_MINIMUM_VALUE = 120;

export function ScrollToTopButton() {
  const [isScrolled, setIsScrolled] = useState(false);

  const checkScroll = debounce(() => {
    window.scrollY > SCROLL_MINIMUM_VALUE ? setIsScrolled(true) : setIsScrolled(false);
  });

  const handleUpBtnClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, [checkScroll]);

  return (
    <>
      {isScrolled && (
        <button className={cc([styles.wrapper])} onClick={handleUpBtnClick}>
          <span className={styles.text}>UP</span>
          <UpArrow />
        </button>
      )}
    </>
  );
}
