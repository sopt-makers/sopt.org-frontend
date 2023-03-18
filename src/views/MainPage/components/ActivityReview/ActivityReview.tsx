import Link from 'next/link';
import { ReactComponent as ArrowLeft } from '@src/views/MainPage/assets/arrow-left-28x28.svg';
import { ReactComponent as ArrowRight } from '@src/views/MainPage/assets/arrow-right-28x28.svg';
import { useHorizontalScroll } from '@src/views/MainPage/lib';
import styles from './activity-review.module.scss';

export function ActivityReview() {
  const {
    scrollableRef,
    onClickLeftButton,
    onClickRightButton,
    isLeftScrollable,
    isRightScrollable,
  } = useHorizontalScroll(900, 2);

  return (
    <section className={styles.container}>
      <div className={styles.titleWrapper}>
        <h3 className={styles.title}>{'회원들의 후기로\nSOPT 활동을 미리 만나보세요.'}</h3>
        <Link href="/review">활동후기 더보기</Link>
      </div>
      <div className={styles.contentWrapper}>
        <div
          className={styles.arrowWrapper}
          onClick={() => onClickLeftButton(scrollableRef.current)}
        >
          <ArrowLeft stroke={isLeftScrollable ? 'white' : 'grey'} />
        </div>
        <div className={styles.content} ref={scrollableRef}>
          content!!!!!!!!!!!!!!!!!!
        </div>
        <div
          className={styles.arrowWrapper}
          onClick={() => onClickRightButton(scrollableRef.current)}
        >
          <ArrowRight stroke={isRightScrollable ? 'white' : 'grey'} />
        </div>
      </div>
    </section>
  );
}