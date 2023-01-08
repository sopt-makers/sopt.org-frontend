import Image from 'next/image';
import MainPageBanner from '@src/assets/sopt/main-page_banner.png';
import { ReactComponent as ArrowDown } from '@src/views/MainPage/assets/arrow-down.svg';
import styles from './banner-image.module.scss';

export function BannerImage() {
  return (
    <section className={styles.container}>
      <p className={styles.description}>기획자, 디자이너, 개발자가 협업을 통해 성장하는 SOPT</p>
      <p className={styles.slogan}>SHOUT OUR PASSION TOGETHER</p>
      <div className={styles.downArrowWrapper}>
        <ArrowDown className={styles.downArrow} />
      </div>
      <Image
        src={MainPageBanner}
        className={styles.bannerImage}
        alt="banner image"
        layout="fill"
        objectFit={'cover'}
      />
    </section>
  );
}
