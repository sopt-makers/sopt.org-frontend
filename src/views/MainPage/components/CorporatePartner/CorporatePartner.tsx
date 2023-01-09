import Image from 'next/image';
import { corporatePartnerList } from './constants';
import styles from './corporate-partner.module.scss';

export function CoporatePartner() {
  return (
    <section className={styles.container}>
      <h3 className={styles.title}>SOPT의 파트너</h3>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          {corporatePartnerList.map(({ name, imgSrc }) => {
            return (
              <article className={styles.item} key={name}>
                <Image className={styles.corporateLogoImage} src={imgSrc} alt="corporate logo" />
                <p className={styles.name}>{name}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
