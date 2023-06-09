import Image from 'next/image';
import { useIsDesktop, useIsMobile, useIsTablet } from '@src/hooks/useDevice';
import { useTabs } from '@src/hooks/useTabs';
import appJamImage from '@src/views/MainPage/assets/sopt-activity/appjam.png';
import managementMediaTeamImage from '@src/views/MainPage/assets/sopt-activity/management-media-team.png';
import seminarImage from '@src/views/MainPage/assets/sopt-activity/seminar.png';
import sopkathonImage from '@src/views/MainPage/assets/sopt-activity/sopkathon.png';
import soptTermImage from '@src/views/MainPage/assets/sopt-activity/sopt-term.png';
import studyAndNetworkingImage from '@src/views/MainPage/assets/sopt-activity/study-networking.png';
import cc from 'classcat';
import styles from './activity-description.module.scss';

const activityList = [
  {
    type: '정기세미나',
    imgSrc: seminarImage,
    content:
      '활동 기간 동안 총 8회의 파트별 세미나를 통해 각자 자신의 파트에서 실력을 다져요. 각 파트장의 강연, 파트원간의 지식 공유, 외부 연사 초청 등 다양한 유형의 세미나가 진행돼요.',
  },
  {
    type: '솝커톤',
    imgSrc: sopkathonImage,
    content:
      '무박 2일간 기획, 디자인, 개발 파트가 팀을 이뤄 최소 단위의 서비스를 제작하는 SOPT 내 단기 프로젝트예요. 앱잼에 앞서 팀 단위의 협업 과정을 빠르게 경험하며 IT 프로젝트에 대한 협업 감각을 익힐 수 있어요.',
    nickName: 'SOPKATHON',
  },
  {
    type: '앱잼',
    imgSrc: appJamImage,
    content:
      '3~5주간 기획, 디자인, 개발 파트가 팀을 이뤄 하나의 웹 또는 앱 서비스를 제작하는 SOPT 내 장기 프로젝트예요. IT 창업을 위한 협업 과정을 경험하고, 최종 데모데이에서 각 파트 현직자들과 결과물을 공유하고 피드백을 받아요.',
    nickName: 'APPJAM',
  },
  {
    type: '솝텀',
    imgSrc: soptTermImage,
    content:
      'SOPT를 한 기수 이상 수료한 회원끼리 모여 자유로운 주제로 IT 프로젝트를 진행해요. SOPT에서 쌓은 실력을 기반으로 보다 자율적인 프로젝트를 진행할 수 있어요.',
    nickName: 'SOPT-TERM',
  },
  {
    type: '스터디&네트워킹',
    imgSrc: studyAndNetworkingImage,
    content:
      '각 파트의 실력을 심도있게 다질 수 있는 스터디와 다양한 파트원들과 친목을 쌓을 수 있는 네트워킹이 열려요. 자율적으로 참여하며 SOPT 활동을 더욱 유익하게 만들어 나갈 수 있어요.',
  },
  {
    type: '운영팀&미디어팀',
    imgSrc: managementMediaTeamImage,
    content:
      '운영팀에서는 SOPT 회원들의 원활한 네트워킹을 위한 다양한 행사를 기획해요. 미디어팀에서는 SOPT의 활동과 관련된 콘텐츠를 제작하여 SOPT를 대내외적으로 알려요.',
  },
];

function MobileActivityDescription() {
  const { currentTab, changeTab } = useTabs(activityList[0], activityList);
  const handleClick = (tab: string) => {
    changeTab(tab);
  };

  return (
    <div className={styles.content}>
      <ul className={styles.activityList}>
        {activityList.map(({ type }) => {
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
        <div className={styles.imageWrapper}>
          <Image
            className={styles.cardImage}
            src={currentTab.imgSrc}
            alt="card"
            fill
            sizes="(max-width: 766px) 328px 585px"
          />
        </div>
        <div className={styles.imageDesc}>
          <span className={styles.type}>{currentTab.type}</span>
          {currentTab.nickName && <span className={styles.nickName}>{currentTab.nickName}</span>}
        </div>
        <p className={styles.cardContent}>{currentTab.content}</p>
      </article>
    </div>
  );
}

function DesktopActivityDescription() {
  return (
    <div className={styles.content}>
      {activityList.map(({ type, imgSrc, nickName, content }) => {
        return (
          <article className={styles.card} key={type}>
            <div className={styles.imageWrapper}>
              <Image
                className={styles.cardImage}
                src={imgSrc}
                alt="card"
                fill
                sizes="
              540px"
              />
            </div>
            <div className={cc([styles.imageDesc, nickName && styles.nickNameInclude])}>
              <span className={styles.type}>{type}</span>
              {nickName && <span className={styles.nickName}>{nickName}</span>}
            </div>
            <p className={styles.cardContent}>{content}</p>
          </article>
        );
      })}
    </div>
  );
}

export function ActivityDescription() {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet('766px', '1299.9px');
  const isDesktop = useIsDesktop('1300px');

  return (
    <section className={styles.container}>
      <h3 className={styles.title}>SOPT에서는 이렇게 다양한 활동을 하고 있어요.</h3>
      {(isMobile || isTablet) && <MobileActivityDescription />}
      {isDesktop && <DesktopActivityDescription />}
    </section>
  );
}
