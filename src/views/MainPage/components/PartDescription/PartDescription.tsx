import { useIsDesktop, useIsMobile, useIsTablet } from '@src/hooks/useDevice';
import { useTabs } from '@src/hooks/useTabs';
import cc from 'classcat';
import styles from './part-description.module.scss';

const partList = [
  {
    type: '기획',
    content:
      '린스타트업에 기초해 문제 정의 - 검증 - 솔루션 도출 - 전략 설정까지 IT 프로덕트를 기획하고 문제를 해결해 가는 전과정을 경험해요.',
  },
  {
    type: '디자인',
    content:
      '사용자와 서비스의 사용성을 위해 UX/UI를 이해하고, 사용자 경험과 서비스 전반의 시각적 요소를 디자인해요.',
  },
  {
    type: 'Android',
    content:
      '기존 문제점들을 기술적으로 해결하고자 하는 생각을 기반으로 사용자(고객)을 위한 안드로이드 어플리케이션을 개발해요.',
  },
  {
    type: 'iOS',
    content:
      '삶을 더 좋은 방향으로 변화시킬 아이디어들을 앱 서비스로 구현해 iOS 사용자들의 삶에 전달해요.',
  },
  {
    type: 'Web',
    content: '서비스의 사용성과 접근성을 위해 데이터를 관리하고 가공하여 웹뷰를 개발해요.',
  },
  {
    type: 'Server',
    content: '서비스를 안정적이고 효율적으로 운영할 수 있도록 서버와 데이터베이스를 만들어요.',
  },
];

function MobilePartDescription() {
  const { currentTab, changeTab } = useTabs(partList[0], partList);
  const handleClick = (tab: string) => {
    changeTab(tab);
  };

  return (
    <div className={styles.content}>
      <ul className={styles.partList}>
        {partList.map(({ type }) => {
          return (
            <li
              className={cc([currentTab.type === type && styles.selected])}
              onClick={() => handleClick(type)}
              key={type}
              role="presentation"
            >
              {type}
            </li>
          );
        })}
      </ul>
      <article className={styles.card}>
        <p className={styles.cardContent}>{currentTab.content}</p>
      </article>
    </div>
  );
}

function DesktopPartDescription() {
  return (
    <div className={styles.content}>
      {partList.map(({ type, content }) => {
        return (
          <article className={styles.card} key={type}>
            <span className={styles.type}>{type}</span>
            <p className={styles.cardContent}>{content}</p>
          </article>
        );
      })}
    </div>
  );
}

export function PartDescription() {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet('766px', '1299.9px');
  const isDesktop = useIsDesktop('1300px');

  return (
    <section className={styles.container}>
      <h3 className={styles.title}>
        <span>SOPT는 총 6개의</span>
        <span>파트로 이루어져 있어요.</span>
      </h3>
      <h5 className={styles.subTitle}>*2022년 하반기 31기 기준</h5>
      {(isMobile || isTablet) && <MobilePartDescription />}
      {isDesktop && <DesktopPartDescription />}
    </section>
  );
}
