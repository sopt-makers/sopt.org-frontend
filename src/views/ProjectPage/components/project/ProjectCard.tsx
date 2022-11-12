import Image from 'next/image';
import Link from 'next/link';
import shortid from 'shortid';

import styles from './project-card.module.scss';
import { ProjectType, LinkType } from '../../types';

import { ReactComponent as PlayStore } from '../../assets/play-store-40x40.svg';
import { ReactComponent as AppStore } from '../../assets/app-store-40x40.svg';
import { ReactComponent as Github } from '../../assets/github-40x40.svg';
import { ReactComponent as Web } from '../../assets/website-40x40.svg';
import { ReactComponent as Instagram } from '../../assets/instagram-30x30.svg';
import { ReactComponent as Youtube } from '../../assets/youtube-30x30.svg';

export function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <Link href={`/project/${project.id}`}>
      <article className={styles.item}>
        {RepresentativeImageRender(project.logoImage, project?.thumbnailImage)}
        <div className={styles.content}>
          <div className={styles.types}>
            {ServiceTypeRender(project.serviceType)}
            {GenerationRender(project?.generation)}
          </div>
          <div className={styles.text}>
            <h5>{project.name}</h5>
            <p>{project.summary}</p>
          </div>
          <div className={styles.links}>
            {project.link?.map(({ title, url }) => {
              return <div key={shortid.generate()}>{LinkRender(title, url)}</div>;
            })}
          </div>
        </div>
      </article>
    </Link>
  );
}

function RepresentativeImageRender(logoImage: string, thumbnailImage?: string) {
  const isCardThumbnail = thumbnailImage && thumbnailImage?.length > 0;
  return (
    <div className={styles['image-wrapper']}>
      {isCardThumbnail && <Image src={thumbnailImage} width={370} height={170} alt="thumbnail" />}
      {!isCardThumbnail && <Image src={logoImage} width={100} height={100} alt="logo" />}
    </div>
  );
}

function ServiceTypeRender(serviceTypes: string[] | string) {
  if (!Array.isArray(serviceTypes)) return <div>{serviceTypes}</div>;

  return serviceTypes?.map((type) => {
    return <div key={shortid.generate()}>{type}</div>;
  });
}

function GenerationRender(generation?: number) {
  return generation ? <div>{generation}기</div> : <></>;
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
