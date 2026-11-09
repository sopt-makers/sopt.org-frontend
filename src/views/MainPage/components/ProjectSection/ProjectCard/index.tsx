import { MouseEvent } from 'react';
import { PATHS } from '@src/lib/constants/routes';
import { ProjectType } from '@src/lib/types/project';
import * as S from './style';

const DETAIL_VARIANTS = ['side', 'featured'] as const;

interface ProjectCardProps {
  project: ProjectType;
  isFeatured: boolean;
  isClone: boolean;
  mainColor: string;
  onSelect: () => void;
}

function ProjectCard({ project, isFeatured, isClone, mainColor, onSelect }: ProjectCardProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (isFeatured) return;
    e.preventDefault();
    onSelect();
  };

  const statuses = [
    project.isAvailable && '서비스 운영 중',
    project.isFounding && '창업 중',
  ].filter(Boolean);

  return (
    <S.Card
      href={`${PATHS.PROJECT}/${project.id}`}
      data-featured={isFeatured}
      aria-label={isFeatured ? undefined : `${project.name} 보기`}
      aria-hidden={isClone || undefined}
      tabIndex={isClone ? -1 : undefined}
      onClick={handleClick}
    >
      <S.ImageBox>
        <S.Image src={project.thumbnailImage ?? project.logoImage} alt="" loading="lazy" />
        {statuses.length > 0 && (
          <S.StatusList>
            {statuses.map((status) => (
              <S.Status key={String(status)}>
                <S.StatusDot color={mainColor} />
                {status}
              </S.Status>
            ))}
          </S.StatusList>
        )}
      </S.ImageBox>
      <S.DetailsArea>
        {DETAIL_VARIANTS.map((variant) => (
          <S.Details
            key={variant}
            data-variant={variant}
            aria-hidden={(variant === 'featured') !== isFeatured}
          >
            <S.TitleRow>
              <S.Name>{project.name}</S.Name>
              <S.Platforms>{project.serviceType.join(' ∙ ')}</S.Platforms>
            </S.TitleRow>
            <S.Summary>{project.summary}</S.Summary>
          </S.Details>
        ))}
      </S.DetailsArea>
    </S.Card>
  );
}

export default ProjectCard;
