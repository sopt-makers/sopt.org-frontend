import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import { TouchEvent, useRef } from 'react';
import MoreButton from '@src/components/common/MoreButton';
import SectionLabel from '@src/components/common/SectionLabel';
import useLoopCarousel from '@src/hooks/useLoopCarousel';
import { api } from '@src/lib/api';
import { PATHS } from '@src/lib/constants/routes';
import { ProjectCategoryType, ProjectPlatformType } from '@src/lib/types/project';
import ProjectCard from './ProjectCard';
import * as S from './style';

const PROJECT_COUNT = 5;
const SWIPE_THRESHOLD = 50;

interface ProjectSectionProps {
  brandingColor: string;
}

const ProjectSection = ({ brandingColor }: ProjectSectionProps) => {
  const router = useRouter();
  const mainColor = '#' + brandingColor;

  const { data: projects = [] } = useQuery({
    queryKey: ['mainProjects'],
    queryFn: () =>
      api.projectAPI.getProjectList(ProjectCategoryType.ALL, ProjectPlatformType.ALL, 1),
    select: (res) => res.data.slice(0, PROJECT_COUNT),
  });

  const { position, slides, activeIndex, trackRef, onPrev, onNext, onSelect, onSelectDot } =
    useLoopCarousel(projects);

  const touchStartX = useRef(0);
  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: TouchEvent) => {
    const deltaX = touchStartX.current - e.changedTouches[0].clientX;
    if (deltaX > SWIPE_THRESHOLD) onNext();
    else if (deltaX < -SWIPE_THRESHOLD) onPrev();
  };

  return (
    <S.Root>
      <S.Body>
        <S.Header>
          <SectionLabel label="Project" color={mainColor} />
          <S.Title>매 기수 20개+의 프로젝트</S.Title>
        </S.Header>

        {projects.length > 0 && (
          <S.Carousel>
            <S.Viewport onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
              <S.Track ref={trackRef} style={{ '--position': position } as React.CSSProperties}>
                {slides.map(({ item, index, isFeatured, isClone }) => (
                  <ProjectCard
                    key={`${item.id}-${index}`}
                    project={item}
                    isFeatured={isFeatured}
                    isClone={isClone}
                    mainColor={mainColor}
                    onSelect={() => onSelect(index)}
                  />
                ))}
              </S.Track>
            </S.Viewport>

            <S.Controls>
              <S.ArrowButton type="button" aria-label="이전 프로젝트" onClick={onPrev}>
                <S.PrevIcon />
              </S.ArrowButton>
              <S.Dots>
                {projects.map((project, index) => (
                  <S.Dot
                    key={project.id}
                    type="button"
                    aria-label={`${index + 1}번째 프로젝트`}
                    aria-current={index === activeIndex}
                    $isActive={index === activeIndex}
                    onClick={() => onSelectDot(index)}
                  />
                ))}
              </S.Dots>
              <S.ArrowButton type="button" aria-label="다음 프로젝트" onClick={onNext}>
                <S.NextIcon />
              </S.ArrowButton>
            </S.Controls>
          </S.Carousel>
        )}
      </S.Body>

      <MoreButton
        label="전체 프로젝트가 궁금하다면"
        mainColor={mainColor}
        onClick={() => router.push(PATHS.PROJECT)}
      />
    </S.Root>
  );
};

export default ProjectSection;
