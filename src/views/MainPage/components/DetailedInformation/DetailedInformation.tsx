import { track } from '@amplitude/analytics-browser';
import Image from 'next/image';
import { useRouter } from 'next/router';
import ArrowRight from '@src/assets/icons/arrow_right_grey.svg';
import { GTM_CLASS } from '@src/lib/constants/gtmClass';
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
        track('click_main_project');
        router.push('/project');
        break;
      case 'FAQ':
        track('click_main_faq');
        router.push('/FAQ');
        break;
      case 'Youtube':
        track('click_main_youtube');
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
                <div className={`${styles.arrow}`}>
                  <Image src={ArrowRight} alt={`${name} 더보기 이동 버튼`} fill sizes="100%" />
                </div>
              </div>
              <p className={`${styles.desc}  ${GTM_CLASS[`informationCard${name}`]}`}>{desc}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
