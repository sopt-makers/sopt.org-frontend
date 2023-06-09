import Image from 'next/image';
import { ReactComponent as ArrowLeft } from '@src/views/MainPage/assets/arrow-left-28x28.svg';
import { ReactComponent as ArrowRight } from '@src/views/MainPage/assets/arrow-right-28x28.svg';
import { useHorizontalScroll } from '@src/views/MainPage/lib';
import { corporatePartnerList } from './constants';
import styles from './corporate-partner.module.scss';

const CoporatePartner = () => {
  const {
    scrollableRef,
    onClickLeftButton,
    onClickRightButton,
    isLeftScrollable,
    isRightScrollable,
  } = useHorizontalScroll(900, 2);

  return (
    <section className={styles.container}>
      <h3 className={styles.title}>SOPT의 파트너</h3>
      <div className={styles.contentWrapper}>
        <div
          className={styles.arrowWrapper}
          onClick={() => onClickLeftButton(scrollableRef.current)}
        >
          <ArrowLeft stroke={isLeftScrollable ? 'white' : 'grey'} />
        </div>
        <div className={styles.content} ref={scrollableRef}>
          {corporatePartnerList.map(({ name, imgSrc }) => {
            return (
              <article className={styles.item} key={name}>
                <div className={styles.corporateLogoImageWrapper}>
                  <Image
                    src={imgSrc}
                    alt="corporate logo"
                    fill
                    sizes="(max-width: 766px) 138px 278px"
                  />
                </div>
                <p className={styles.name}>{name}</p>
              </article>
            );
          })}
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
};

export default CoporatePartner;
