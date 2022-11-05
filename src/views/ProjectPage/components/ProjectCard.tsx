import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/project.module.scss';
import { ProjectType } from '../types';

import { ReactComponent as GithubIcon } from '@src/assets/icons/github_icon.svg';
import { ReactComponent as WebIcon } from '@src/assets/logo/website.svg';

export function ProjectCard({ project }: { project: ProjectType }) {
  console.log(project);

  return (
    <Link href={`/project/${project.id}`}>
      <article className={styles.item}>
        <div className={styles['image-wrapper']}>
          <Image src={project.logoImage} width={100} height={100} alt="logo" />
        </div>
        <div className={styles.content}>
          <div className={styles.types}>
            {serviceTypeRender(project.serviceType)}
            {!project.generation && <div>{project.generation}기</div>}
          </div>
          <div className={styles.text}>
            <h5>{project.name}</h5>
            <p>{project.summary}</p>
          </div>
          <div className={styles.links}>
            {project.link?.map(({ title, url }, index) => (
              <div key={index}>
                {(() => {
                  switch (title) {
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

function serviceTypeRender(serviceTypes: string[] | string) {
  if (!Array.isArray(serviceTypes)) return <div>{serviceTypes}</div>;

  return serviceTypes?.map((type, index) => {
    return <div key={index}>{type}</div>;
  });
}
