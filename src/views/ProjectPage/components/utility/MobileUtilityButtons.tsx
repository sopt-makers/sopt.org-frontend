import { ReactComponent as MobileFilterBtn } from '@src/assets/icons/MobileFilterBtn.svg';
import { ReactComponent as UpArrow } from '@src/assets/icons/upArrow.svg';
import styles from './utility.module.scss';

export function MobileUtilityButtons({
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
    <div className={styles['mobile-utility']}>
      <button type="button" className={styles.up} onClick={() => window.scrollTo(0, 0)}>
        <UpArrow />
      </button>
      <button type="button" className={styles.filter} onClick={() => handleFilterBtnClick()}>
        <MobileFilterBtn />
      </button>
    </div>
  );
}
