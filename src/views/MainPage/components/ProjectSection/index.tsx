import Project from '@src/views/MainPage/components/ProjectSection/Project';
import * as S from './style';
import Button from '@src/views/MainPage/components/@common/Button';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { MAIN_PROJECT_LIST } from '@src/lib/constants/project';
import useInView from '@src/hooks/useInView';
import { useIsDesktop, useIsMobile, useIsTablet } from '@src/hooks/useDevice';

interface ProjectSectionProps {
  mainColor: string;
  highColor: string;
}

export default function ProjectSection({ mainColor, highColor }: ProjectSectionProps) {
  const [isGradientActive, setIsGradientActive] = useState(false);

  const router = useRouter();

  const isDesktopView = useIsDesktop('1260px');
  const isTabletView = useIsTablet('768px', '1023px');
  const isMobileView = useIsMobile('767px');

  const isSmallView = isTabletView || isMobileView;
  const { isInView, ref: inViewRef } = useInView({
    options: { threshold: isSmallView ? 0.5 : 0 },
  });

  const activateGradient = () => {
    setIsGradientActive(true);
  };

  const deactivateGradient = () => {
    setIsGradientActive(false);
  };

  useEffect(() => {
    if (!isSmallView) return;
    if (isInView) activateGradient();
    else deactivateGradient();
  }, [isSmallView, isInView]);

  return (
    <S.Wrapper>
      <S.GradientOverlay
        ref={inViewRef}
        mainColor={mainColor}
        highColor={highColor}
        active={isGradientActive}
      >
        <S.TitleWrapper>
          <S.Title>270개의 IT 서비스</S.Title>
          <S.Strong mainColor={mainColor}>{'매 기수\n+20개의 프로젝트'}</S.Strong>
        </S.TitleWrapper>

        <S.ProjectContainer
          onPointerEnter={isDesktopView ? activateGradient : undefined}
          onPointerLeave={isDesktopView ? deactivateGradient : undefined}
        >
          <S.ProjectList
            $active={isGradientActive}
          >
            {MAIN_PROJECT_LIST.map((project, idx) => (
              <Project key={`${project.title}-${idx}`} {...project} />
            ))}
          </S.ProjectList>

          <S.ButtonWrapper>
            <Button
              onClick={() => router.push('/project')}
              aria-label="프로젝트 페이지로 이동"
            >
              역대 프로젝트 더보기 <S.RightArrowIcon />
            </Button>
          </S.ButtonWrapper>
        </S.ProjectContainer>
      </S.GradientOverlay>
    </S.Wrapper>
  );
}
