import Image from 'next/image';
import { corporatedLinkedActivities } from './constants';
import styles from './corporate-linked-activities.module.scss';

export function CorporateLinkedActivities() {
  return (
    <section className={styles.container}>
      <div className={styles.summary}>
        <h3 className={styles.title}>SOPT와 함께한 기업 연계 활동</h3>
        <h4 className={styles.subtitle}>다양한 기업 및 단체와 함께 진행했어요.</h4>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          {corporatedLinkedActivities.map(({ year, name, description, subDescription, imgSrc }) => {
            return (
              <article className={styles.item} key={name}>
                <span className={styles.year}>{year}</span>
                <Image className={styles.activityImage} src={imgSrc} alt="activity image" />
                <h5 className={styles.name}>{name}</h5>
                <p className={styles.description}>{description}</p>
                {subDescription.length > 0 && (
                  <p className={styles.subDescription}>{subDescription}</p>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
