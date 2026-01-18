import Project from '@src/views/MainPage/components/ProjectSection/Project';
import * as S from './style';
import Button from '@src/views/MainPage/components/@common/Button';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { MAIN_PROJECT_LIST } from '@src/lib/constants/project';
import useInView from '@src/hooks/useInView';
import { useIsMobile } from '@src/hooks/useDevice';

interface ProjectSectionProps {
  mainColor: string;
  highColor: string;
}

export default function ProjectSection({ mainColor, highColor }: ProjectSectionProps) {
  const [isGradientActive, setIsGradientActive] = useState(false);

  const router = useRouter();

  const isMobileView = useIsMobile('74.9375rem');
  const { isInView, ref: inViewRef } = useInView({ options: { threshold: 0.2 } });

  const activateGradient = () => {
    if (!isMobileView) {
      setIsGradientActive(true);
    }
  };

  const deactivateGradient = () => {
    if (!isMobileView) {
      setIsGradientActive(false);
    }
  };

  useEffect(() => {
    if (!isMobileView) return;
    setIsGradientActive(isInView);
  }, [isMobileView, isInView]);

  return (
    <S.Wrapper ref={inViewRef}>
      <S.GradientWrapper mainColor={mainColor} highColor={highColor} active={isGradientActive}>
        <S.TitleWrapper>
          <S.Title>270개의 IT 서비스</S.Title>
          <S.Strong mainColor={mainColor}>{'매 기수\n+20개의 프로젝트'}</S.Strong>
        </S.TitleWrapper>

        <S.ProjectList
          $active={isMobileView ? isGradientActive : false}
          onPointerEnter={activateGradient}
          onPointerLeave={deactivateGradient}
        >
          {MAIN_PROJECT_LIST.map((project, idx) => (
            <Project key={`${project.title}-${idx}`} {...project} />
          ))}
        </S.ProjectList>

        <S.ButtonWrapper>
          <Button
            onMouseEnter={activateGradient}
            onMouseLeave={deactivateGradient}
            onClick={() => router.push('/project')}
            aria-label="프로젝트 페이지로 이동"
          >
            역대 프로젝트 더보기 <S.RightArrowIcon />
          </Button>
        </S.ButtonWrapper>
      </S.GradientWrapper>
    </S.Wrapper>
  );
}