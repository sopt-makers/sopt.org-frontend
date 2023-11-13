import { track } from '@amplitude/analytics-browser';
import Image from 'next/image';
import Link from 'next/link';
import { ReactComponent as ArrowLeft } from '@src/assets/icons/arrow_left_28x28.svg';
import { ReactComponent as ArrowRight } from '@src/assets/icons/arrow_right_28x28.svg';
import ArrowRightGrey from '@src/assets/icons/arrow_right_grey.svg';
import { useHorizontalScroll } from '@src/hooks/useHorizontalScroll';
import { parsePartToKorean } from '@src/lib/utils/parsePartToKorean';
import cc from 'classcat';
import styles from './activity-review.module.scss';
import useFetch from './hooks/useFetch';

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
              <Link
                key={review.id}
                href={review.url}
                onClick={() => track('click_main_review_detail')}
              >
                <article className={styles.card} role="presentation">
                  <h4 className={styles.cardTitle}>{review.title}</h4>
                  <div className={styles.descWrapper}>
                    <p className={styles.desc}>
                      {parsePartToKorean(review.part)}파트 {review.generation}기{'\n'}
                      <strong className={styles.descName}>{review.author}</strong>
                    </p>
                    <div className={styles.arrow}>
                      <Image src={ArrowRightGrey} alt="이동" fill sizes="100%" />
                    </div>
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
        <Link href="/blog" onClick={() => track('click_main_review_more')}>
          <h4 className={styles.moreLink}>활동후기 더보기</h4>
        </Link>
      </div>
    </section>
  );
}
