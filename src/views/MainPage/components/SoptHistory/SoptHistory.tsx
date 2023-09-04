import styles from './sopt-history.module.scss';

const historyList = [
  { category: '창립 년도', content: '2008년' },
  { category: '누적 대학 수', content: '110개' },
  { category: '누적 회원 수', content: '2600명+' },
  { category: '런칭 서비스', content: '300개+' },
];

export function SoptHistory() {
  return (
    <section className={styles.container}>
      <h3 className={styles.title}>{'국내 최대 규모의 대학생 연합\n IT벤처창업 동아리 SOPT'}</h3>
      <div className={styles.content}>
        {historyList.map(({ category, content }) => {
          return (
            <article className={styles.item} key={category}>
              <h5>{category}</h5>
              <span>{content}</span>
            </article>
          );
        })}
      </div>
    </section>
  );
}
