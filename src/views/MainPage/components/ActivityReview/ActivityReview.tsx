import Link from 'next/link';
import { ReactComponent as ArrowLeft } from '@src/views/MainPage/assets/arrow-left-28x28.svg';
import { ReactComponent as ArrowRight } from '@src/views/MainPage/assets/arrow-right-28x28.svg';
import ArrowRightWhite from '@src/views/MainPage/assets/arrow_right_white.svg';
import { useHorizontalScroll } from '@src/views/MainPage/lib';
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
      <div className={styles.titleWrapper}>
        <h3 className={styles.title}>{'회원들의 후기로\nSOPT 활동을 미리 만나보세요.'}</h3>
        <Link href="/review">
          <h4 className={styles.moreLink}>활동후기 더보기</h4>
        </Link>
      </div>
      <div className={styles.contentWrapper}>
        <div
          className={styles.arrowWrapper}
          onClick={() => onClickLeftButton(scrollableRef.current)}
        >
          <ArrowLeft stroke={isLeftScrollable ? 'white' : 'grey'} />
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
                  <img className={styles.arrow} src={ArrowRightWhite} alt="" />
                </div>
              </article>
            </Link>
          ))}
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
