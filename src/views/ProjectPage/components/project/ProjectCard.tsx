import { track } from '@amplitude/analytics-browser';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { useIsDesktop, useIsMobile, useIsTablet } from '@src/hooks/useDevice';
import { GTM_CLASS } from '@src/lib/constants/gtmClass';
import { LinkType, ProjectType } from '@src/lib/types/project';
import shortid from 'shortid';
import { ReactComponent as AppStore } from '../../assets/app-store-40x40.svg';
import { ReactComponent as Github } from '../../assets/github-40x40.svg';
import { ReactComponent as Instagram } from '../../assets/instagram-30x30.svg';
import { ReactComponent as PlayStore } from '../../assets/play-store-40x40.svg';
import { ReactComponent as Web } from '../../assets/website-40x40.svg';
import { ReactComponent as Youtube } from '../../assets/youtube-30x30.svg';
import styles from './project-card.module.scss';

// import * as S from './style';

export function ProjectCard({ project }: { project: ProjectType }) {

  return (
    <Link href={`/project/${project.id}`} onClick={() => track('click_project_detail')}>
      <article className={`${styles.item} ${GTM_CLASS.projectCard}`}>
        {RepresentativeImageRender(project.name, project.logoImage, project?.thumbnailImage)}
        <div className={`${styles.content} ${GTM_CLASS.projectCard}`}>
          <div className={`${styles.types} ${GTM_CLASS.projectCard}`}>
            {ServiceTypeRender(project.serviceType)}
            {GenerationRender(project?.generation)}
          </div>
          <div className={`${styles.text} ${GTM_CLASS.projectCard}`}>
            {TitleRender(project.name)}
            {SummaryRender(project.summary)}
          </div>
          <div className={`${styles.links} ${GTM_CLASS.projectCard}`}>
            {project.link
              ?.filter((project, index) => project?.title?.length > 0 && index <= 3)
              .map(({ title, url }) => {
                return <div key={shortid.generate()}>{LinkRender(title, url)}</div>;
              })}
          </div>
        </div>
      </article>
      {/* TODO: 서비스 이용 가능 및 창업 정보와 멤버 정보 추가 필요 
      <S.ProjectCard>
        <S.ProjectThumbnail
          src={project.thumbnailImage ?? project.logoImage}
          alt="프로젝트 썸네일"
          width={324}
          height={192}
        />
        <S.ProjectContent>
          <S.ProjectHeader>
            <S.ProjectTitle>{project.name}</S.ProjectTitle>
            {project.serviceType.map((type, index) => (
              <S.ProjectType key={type}>
                <span>{type}</span>
                {project.serviceType.length - 1 !== index && <S.Divider>∙</S.Divider>}
              </S.ProjectType>
            ))}
          </S.ProjectHeader>
          <S.ProjectSummary>{project.summary}</S.ProjectSummary>
        </S.ProjectContent>
      </S.ProjectCard> */}
    </Link>
  );
}

function RepresentativeImageRender(name: string, logoImage: string, thumbnailImage?: string) {
  const isDesktop = useIsDesktop();
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();

  return (
    <div className={styles['image-wrapper']}>
      {isDesktop && ProjectCardDesktopImage(name, logoImage, thumbnailImage)}
      {isTablet && ProjectCardMobileImage(name, logoImage, thumbnailImage)}
      {isMobile && ProjectCardMobileImage(name, logoImage, thumbnailImage)}
    </div>
  );
}

function ProjectCardMobileImage(name: string, logoImage: string, thumbnailImage?: string) {
  const isCardThumbnail = thumbnailImage && thumbnailImage?.length > 0;
  return (
    <>
      {isCardThumbnail && (
        <StyledThumbnail
          className={`${GTM_CLASS.projectCard}`}
          src={thumbnailImage}
          alt={`${name} 프로젝트 썸네일`}
          fill
          sizes="100%"
        />
      )}
      {!isCardThumbnail && (
        <Image
          className={`${GTM_CLASS.projectCard}`}
          src={logoImage}
          width={100}
          height={100}
          alt={`${name} 프로젝트 로고`}
        />
      )}
    </>
  );
}

const StyledThumbnail = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function ProjectCardDesktopImage(name: string, logoImage: string, thumbnailImage?: string) {
  const isCardThumbnail = thumbnailImage && thumbnailImage?.length > 0;
  return (
    <>
      {isCardThumbnail && (
        <Image
          className={`${GTM_CLASS.projectCard}`}
          src={thumbnailImage}
          width={368}
          height={208}
          alt={`${name} 프로젝트 썸네일`}
        />
      )}
      {!isCardThumbnail && (
        <Image
          className={`${GTM_CLASS.projectCard}`}
          src={logoImage}
          width={100}
          height={100}
          alt={`${name} 프로젝트 로고`}
        />
      )}
    </>
  );
}

function ServiceTypeRender(serviceType: string[]) {
  const convertEngToKorean = (text: string) => {
    switch (text) {
      case 'APP':
        return '앱';
      case 'WEB':
        return '웹';
      default:
        throw new Error('앱 또는 웹 타입이 아닙니다');
    }
  };

  return serviceType?.map((type) => {
    return <div key={shortid.generate()}>{convertEngToKorean(type)}</div>;
  });
}

function GenerationRender(generation?: number) {
  return generation ? <div>{generation}기</div> : <></>;
}

function TitleRender(text: string) {
  const titleWithoutParentheses = text.replace(/ *\([^)]*\) */g, '');
  if (titleWithoutParentheses.length > 12) {
    return (
      <h5 className={`${GTM_CLASS.projectCard}`}>{titleWithoutParentheses.slice(0, 12) + '...'}</h5>
    );
  }
  return <h5 className={`${GTM_CLASS.projectCard}`}>{titleWithoutParentheses}</h5>;
}

function SummaryRender(text: string) {
  return text.length > 20 ? (
    <p className={`${GTM_CLASS.projectCard}`}>{text.slice(0, 20) + '...'} </p>
  ) : (
    <p className={`${GTM_CLASS.projectCard}`}>{text}</p>
  );
}

function LinkRender(link: LinkType, url: string) {
  return (
    <div
      className={styles['icon-wrapper']}
      onClick={(e) => {
        window.open(url);
        e.stopPropagation();
      }}
    >
      {(() => {
        switch (link) {
          case LinkType.웹사이트:
            return <Web />;
          case LinkType['앱 스토어']:
            return <AppStore />;
          case LinkType['구글 플레이스토어']:
            return <PlayStore />;
          case LinkType.Github:
            return <Github />;
          case LinkType.instagram:
            return <Instagram />;
          case LinkType.발표영상:
          case LinkType['기타 관련자료']:
            return <Youtube />;
        }
      })()}
    </div>
  );
}
