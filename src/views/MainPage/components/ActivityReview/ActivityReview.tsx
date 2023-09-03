import Link from 'next/link';
import { ReactComponent as ArrowLeft } from '@src/views/MainPage/assets/arrow-left-28x28.svg';
import { ReactComponent as ArrowRight } from '@src/views/MainPage/assets/arrow-right-28x28.svg';
import ArrowRightGrey from '@src/views/MainPage/assets/arrow-right-grey.svg';
import { useHorizontalScroll } from '@src/views/MainPage/lib';
import cc from 'classcat';
import styles from './activity-review.module.scss';
import useFetch from './hooks/useFetch';
import { parsePartToKorean } from './utils/parsePartToKorean';

export function ActivityReview() {
  const reviews = useFetch();
  const {
    scrollableRef,
    onClickLeftButton,
    onClickRightButton,
    isLeftScrollable,
    isRightScrollable,
  } = useHorizontalScroll(1032, 1);

  if (reviews._TAG !== 'OK') return null;

  return (
    <section className={styles.container}>
      <h3 className={styles.title}>{'회원들의 후기로\n SOPT 활동을 미리보세요.'}</h3>
      <div className={styles.wrapper}>
        <div className={styles.contentWrapper}>
          <div
            className={cc([styles.arrowWrapper, !isLeftScrollable && styles.selected])}
            onClick={() => onClickLeftButton(scrollableRef.current)}
          >
            <ArrowLeft stroke={isLeftScrollable ? 'white' : 'lightGrey'} />
          </div>
          <div className={styles.content} ref={scrollableRef}>
            {reviews.data.map((review) => (
              <Link key={review.id} href={review.link}>
                <article className={styles.card} role="presentation">
                  <h4 className={styles.cardTitle}>{review.title}</h4>
                  <div className={styles.descWrapper}>
                    <p className={styles.desc}>
                      {parsePartToKorean(review.part)}파트 {review.semester}기{'\n'}
                      <strong className={styles.descName}>{review.reviewer}</strong>
                    </p>
                    <img className={`${styles.arrow}`} src={ArrowRightGrey} alt="이동" />
                  </div>
                </article>
              </Link>
            ))}
          </div>
          <div
            className={cc([styles.arrowWrapper, !isRightScrollable && styles.selected])}
            onClick={() => onClickRightButton(scrollableRef.current)}
          >
            <ArrowRight stroke={isRightScrollable ? 'white' : 'lightGrey'} />
          </div>
        </div>
        <Link href="/review">
          <h4 className={styles.moreLink}>활동후기 더보기</h4>
        </Link>
      </div>
    </section>
  );
}
