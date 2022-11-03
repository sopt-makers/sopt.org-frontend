import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/project.module.scss';
import { ProjectType } from '../types';

import { ReactComponent as GithubIcon } from '@src/assets/icons/github_icon.svg';
import { ReactComponent as WebIcon } from '@src/assets/logo/website.svg';

// TODO all project link type should be applied to links switch-case
// TODO project service type should be changed from array to string (also change project type)
// TODO thumbnail image should be applied to Image
export function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <Link href={`/project/${project.id}`}>
      <article className={styles.item}>
        <div className={styles['image-wrapper']}>
          <Image src={project.logoImageUrl} width={100} height={100} alt="logo" />
        </div>
        <div className={styles.content}>
          <div className={styles.types}>
            <div>{project.serviceType[0]}</div>
            <div>{project.semester}기</div>
          </div>
          <div className={styles.text}>
            <h5>{project.name}</h5>
            <p>{project.shortIntroduction}</p>
          </div>
          <div className={styles.links}>
            {project.link?.map(({ type, url }, index) => (
              <div key={index}>
                {(() => {
                  switch (type) {
                    case 'github':
                      return (
                        <>
                          <div
                            className={styles['icon-wrapper']}
                            onClick={(e) => {
                              window.open(url);
                              e.stopPropagation();
                            }}
                          >
                            <GithubIcon />
                          </div>
                          <div
                            className={styles['icon-wrapper']}
                            onClick={(e) => {
                              window.open(url);
                              e.stopPropagation();
                            }}
                          >
                            <WebIcon />
                          </div>
                        </>
                      );
                    case 'website':
                      return <div>WEBSITE</div>;
                  }
                })()}
              </div>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
