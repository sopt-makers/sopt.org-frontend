import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { api } from '@src/lib/api';
import { PATHS } from '@src/lib/constants/routes';
import { breakpoints } from '@src/lib/styles/breakpoints';
import { ProjectCategoryType, ProjectPlatformType, ProjectResponse } from '@src/lib/types/project';
import SectionTop from '@src/views/AboutPage/components/@common/SectionTop';
import Project from './Project';
import { CARD_WIDTHS, CAROUSEL_GAP, CONTAINER_WIDTHS } from './constants';
import * as S from './style';

type ProjectCardItem = {
  thumbnail: string;
  title: string;
  category: string;
  description: string;
  href: string;
};

interface ProjectSectionProps {
  mainColor: string;
}

export default function ProjectSection({ mainColor }: ProjectSectionProps) {
  const router = useRouter();
  const { data: projectData } = useQuery<ProjectResponse>({
    queryKey: ['mainAppjamProjects'],
    queryFn: () =>
      api.projectAPI.getProjectList(ProjectCategoryType.APPJAM, ProjectPlatformType.ALL, 1),
  });

  const projectList: ProjectCardItem[] = (projectData?.data ?? []).slice(0, 5).map((p) => ({
    thumbnail: p.thumbnailImage ?? '',
    title: p.name,
    category: p.serviceType[0] ?? '',
    description: p.summary,
    href: `${PATHS.PROJECT}/${p.id}`,
  }));

  const [currentIndex, setCurrentIndex] = useState(0);

  // TODO: useDevice hook breakpoint 최신화 (js활용 2차 추상화 훅 추가하기)
  const isMobile = useMediaQuery({ maxWidth: breakpoints.tablet - 1 });
  const isTablet = useMediaQuery({
    minWidth: breakpoints.tablet,
    maxWidth: breakpoints.desktop - 1,
  });
  const isDesktop = useMediaQuery({
    minWidth: breakpoints.desktop,
    maxWidth: breakpoints.desktopLarge - 1,
  });

  const containerWidth = isMobile
    ? CONTAINER_WIDTHS.mobile
    : isTablet
    ? CONTAINER_WIDTHS.tablet
    : isDesktop
    ? CONTAINER_WIDTHS.desktop
    : CONTAINER_WIDTHS.desktopLarge;

  const cardWidths = isMobile ? CARD_WIDTHS.mobile : CARD_WIDTHS.desktop;
  const activeCardWidth = cardWidths.active;
  const inactiveCardWidth = cardWidths.inactive;

  // 중앙 정렬을 위한 translateX 계산식: 컨테이너 중앙 - (현재 인덱스 * 카드 너비 + 간격) - (활성 카드 너비 / 2)
  const translateX =
    containerWidth / 2 - currentIndex * (inactiveCardWidth + CAROUSEL_GAP) - activeCardWidth / 2;

  const goTo = (index: number) => {
    setCurrentIndex(Math.max(0, Math.min(index, projectList.length - 1)));
  };

  return (
    <S.Wrapper>
      <SectionTop
        engTitle="270개의 IT 서비스"
        korTitle="매 기수 20개+의 프로젝트"
        mainColor={mainColor}
      />

      <S.CarouselSection>
        <S.CarouselClip>
          <S.CarouselTrack style={{ transform: `translateX(${translateX}px)` }}>
            {projectList.map((project, idx) => (
              <Project
                key={`${project.title}-${idx}`}
                thumbnail={project.thumbnail}
                title={project.title}
                category={project.category}
                description={project.description}
                isActive={idx === currentIndex}
                href={project.href}
              />
            ))}
          </S.CarouselTrack>
        </S.CarouselClip>

        <S.NavButton
          type="button"
          $direction="prev"
          onClick={() => goTo(currentIndex - 1)}
          aria-label="이전 프로젝트"
        >
          <S.ChevronLeft color="white" />
        </S.NavButton>

        <S.NavButton
          type="button"
          $direction="next"
          onClick={() => goTo(currentIndex + 1)}
          aria-label="다음 프로젝트"
        >
          <S.ChevronRight color="white" />
        </S.NavButton>
      </S.CarouselSection>

      <S.IndicatorList>
        {projectList.map((_, idx) => (
          <S.Indicator
            key={idx}
            type="button"
            $active={idx === currentIndex}
            onClick={() => goTo(idx)}
            aria-label={`${idx + 1}번째 프로젝트 보기`}
          />
        ))}
      </S.IndicatorList>

      <S.MoreButton type="button" onClick={() => router.push(PATHS.PROJECT)}>
        전체 프로젝트가 궁금하다면
        <S.RightArrowIcon />
      </S.MoreButton>
    </S.Wrapper>
  );
}
