import { IconChevronLeft, IconChevronRight } from '@sopt-makers/icons';
import { useRef } from 'react';
import { PATHS } from '@src/lib/constants/routes';
import StatusBadges from './StatusBadges';
import useGetRelatedProjects from './hooks/useGetRelatedProjects';
import * as S from './style';
import scrollDetailCarousel from './utils/scrollDetailCarousel';

interface RelatedProjectsProps {
  currentId: number;
}

export default function RelatedProjects({ currentId }: RelatedProjectsProps) {
  const track = useRef<HTMLDivElement>(null);
  const { data: projects } = useGetRelatedProjects(currentId);
  if (!projects?.length) return null;

  return (
    <S.Related>
      <S.RelatedHeader>
        <div>
          <S.Heading>다른 프로젝트 더 보기</S.Heading>
          <S.Caption>SOPT에서 만들어진 다른 프로젝트도 둘러보세요.</S.Caption>
        </div>
        <S.Controls data-count={projects.length}>
          <S.Arrow
            type="button"
            aria-label="이전 프로젝트"
            onClick={() => scrollDetailCarousel(track.current, -1)}
          >
            <IconChevronLeft css={{ width: 30, height: 30 }} />
          </S.Arrow>
          <S.Arrow
            type="button"
            aria-label="다음 프로젝트"
            onClick={() => scrollDetailCarousel(track.current, 1)}
          >
            <IconChevronRight css={{ width: 30, height: 30 }} />
          </S.Arrow>
        </S.Controls>
      </S.RelatedHeader>

      <S.Track ref={track}>
        {projects.map((project) => (
          <S.Card key={project.id} href={PATHS.PROJECT + '/' + project.id}>
            <S.Thumbnail>
              {(project.thumbnailImage || project.logoImage) && (
                <S.Image src={project.thumbnailImage || project.logoImage} alt="" loading="lazy" />
              )}
              <StatusBadges
                isFounding={project.isFounding}
                isAvailable={project.isAvailable}
                overlay
              />
            </S.Thumbnail>

            <S.CardDetails>
              <S.NameRow>
                <S.CardTitle>{project.name}</S.CardTitle>
                <S.CardPlatform>{project.serviceType.filter(Boolean).join(' ∙ ')}</S.CardPlatform>
              </S.NameRow>
              <S.CardSummary>{project.summary}</S.CardSummary>
            </S.CardDetails>
          </S.Card>
        ))}
      </S.Track>
    </S.Related>
  );
}
