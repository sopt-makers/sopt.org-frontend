import Image from 'next/image';
import { useRef } from 'react';
import MainPageBanner from '@src/assets/sopt/main-page_banner.png';
import { ReactComponent as ArrowDown } from '@src/views/MainPage/assets/arrow-down.svg';
import styles from './banner-image.module.scss';

export function BannerImage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const onScrollMoveDown = () => {
    if (containerRef.current) {
      const { height: containerHeight } = containerRef.current.getBoundingClientRect();
      window.scrollTo(0, containerHeight);
    }
  };

  return (
    <section className={styles.container} ref={containerRef}>
      <div className={styles.textWrapper}>
        <p className={styles.slogan}>{'SHOUT\nOUR PASSION\nTOGETHER'}</p>
        <p className={styles.description}>기획자, 디자이너, 개발자가 협업을 통해 성장하는 SOPT</p>
      </div>
      <div className={styles.downArrowWrapper} onClick={onScrollMoveDown}>
        <ArrowDown className={styles.downArrow} width="24" height="24" />
      </div>
      <div className={styles.bannerWrapper}>
        <Image src={MainPageBanner} className={styles.bannerImage} alt="banner" fill priority />
        <div className={styles.bannerGradient} />
      </div>
    </section>
  );
}
