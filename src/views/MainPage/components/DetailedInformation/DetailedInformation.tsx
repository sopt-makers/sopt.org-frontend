import { useRouter } from 'next/router';
import { GTM_CLASS } from '@src/utils/const/gtmClass';
import ArrowRight from '@src/views/MainPage/assets/arrow-right-grey.svg';
import styles from './detailed-information.module.scss';

const cardList = [
  {
    name: '프로젝트',
    desc: 'SOPT에서 진행된 프로젝트',
  },
  {
    name: 'FAQ',
    desc: 'SOPT에 대해 자주 묻는 질문',
  },
  {
    name: 'Youtube',
    desc: 'SOPT 활동 스케치와 자체 콘텐츠',
  },
];

export function DetailedInformation() {
  const router = useRouter();
  const handleClickItem = (name: string) => {
    switch (name) {
      case '프로젝트':
        router.push('/project');
        break;
      case 'FAQ':
        router.push('/FAQ');
        break;
      case 'Youtube':
        window.open('https://www.youtube.com/c/SOPTMEDIA');
        break;
      default:
        throw new Error('unKnown Name');
    }
  };

  return (
    <section className={styles.container}>
      <h3 className={styles.title}>SOPT를 더 알고 싶다면, 둘러보세요.</h3>
      <div className={styles.content}>
        {cardList.map(({ name, desc }) => {
          return (
            <article
              className={`${styles.card} ${GTM_CLASS[`informationCard${name}`]}`}
              onClick={() => handleClickItem(name)}
              role="presentation"
              key={name}
            >
              <div className={`${styles.nameWrapper}  ${GTM_CLASS[`informationCard${name}`]}`}>
                <h4 className={`${styles.name}  ${GTM_CLASS[`informationCard${name}`]}`}>{name}</h4>
                <img className={`${styles.arrow}`} src={ArrowRight} alt="이동" />
              </div>
              <p className={`${styles.desc}  ${GTM_CLASS[`informationCard${name}`]}`}>{desc}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
