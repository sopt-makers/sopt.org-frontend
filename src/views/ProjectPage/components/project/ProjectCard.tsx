import Image from 'next/image';
import Link from 'next/link';
import { useIsDesktop, useIsMobile, useIsTablet } from '@src/hooks/useDevice';
import { LinkType, ProjectType } from '@src/lib/types/project';
import { GTM_CLASS } from '@src/utils/const/gtmClass';
import shortid from 'shortid';
import { ReactComponent as AppStore } from '../../assets/app-store-40x40.svg';
import { ReactComponent as Github } from '../../assets/github-40x40.svg';
import { ReactComponent as Instagram } from '../../assets/instagram-30x30.svg';
import { ReactComponent as PlayStore } from '../../assets/play-store-40x40.svg';
import { ReactComponent as Web } from '../../assets/website-40x40.svg';
import { ReactComponent as Youtube } from '../../assets/youtube-30x30.svg';
import styles from './project-card.module.scss';

export function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <Link href={`/project/${project.id}`}>
      <article className={`${styles.item} ${GTM_CLASS.projectCard}`}>
        {RepresentativeImageRender(project.logoImage, project?.thumbnailImage)}
        <div className={`${styles.content} ${GTM_CLASS.projectCard}`}>
          <div className={`${styles.types} ${GTM_CLASS.projectCard}`}>
            {ServiceTypeRender(project.serviceTypes)}
            {GenerationRender(project?.generation)}
          </div>
          <div className={`${styles.text} ${GTM_CLASS.projectCard}`}>
            {TitleRender(project.name)}
            {SummaryRender(project.summary)}
          </div>
          <div className={`${styles.links} ${GTM_CLASS.projectCard}`}>
            {project.link
              ?.filter(({ title }) => title?.length > 0)
              .map(({ title, url }) => {
                return <div key={shortid.generate()}>{LinkRender(title, url)}</div>;
              })}
          </div>
        </div>
      </article>
    </Link>
  );
}

function RepresentativeImageRender(logoImage: string, thumbnailImage?: string) {
  const isDesktop = useIsDesktop();
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();

  return (
    <div className={styles['image-wrapper']}>
      {isDesktop && ProjectCardDesktopImage(logoImage, thumbnailImage)}
      {isTablet && ProjectCardMobileImage(logoImage, thumbnailImage)}
      {isMobile && ProjectCardMobileImage(logoImage, thumbnailImage)}
    </div>
  );
}

function ProjectCardMobileImage(logoImage: string, thumbnailImage?: string) {
  const isCardThumbnail = thumbnailImage && thumbnailImage?.length > 0;
  return (
    <>
      {isCardThumbnail && (
        <Image
          className={`${GTM_CLASS.projectCard}`}
          src={thumbnailImage}
          width={316}
          height={176}
          alt="thumbnail"
        />
      )}
      {!isCardThumbnail && (
        <Image
          className={`${GTM_CLASS.projectCard}`}
          src={logoImage}
          width={100}
          height={100}
          alt="logo"
        />
      )}
    </>
  );
}

function ProjectCardDesktopImage(logoImage: string, thumbnailImage?: string) {
  const isCardThumbnail = thumbnailImage && thumbnailImage?.length > 0;
  return (
    <>
      {isCardThumbnail && (
        <Image
          className={`${GTM_CLASS.projectCard}`}
          src={thumbnailImage}
          width={368}
          height={208}
          alt="thumbnail"
        />
      )}
      {!isCardThumbnail && (
        <Image
          className={`${GTM_CLASS.projectCard}`}
          src={logoImage}
          width={100}
          height={100}
          alt="logo"
        />
      )}
    </>
  );
}

function ServiceTypeRender(serviceTypes: string[]) {
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

  return serviceTypes?.map((type) => {
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
