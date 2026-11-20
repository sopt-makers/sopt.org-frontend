import { useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { EXTERNAL_LINKS } from '@src/lib/constants/routes';
import IntroLine from './IntroLine';
import * as S from './style';
import useHeroScrollAnimation from './useHeroScrollAnimation';
import useOrbitScene from './useOrbitScene';

const NON_BREAKING_SPACE = '\u00a0';

interface HeroSectionProps {
  ctaText: string;
}

export default function HeroSection({ ctaText }: HeroSectionProps) {
  const reduceMotion = useReducedMotion();
  const sceneExtentRef = useRef<HTMLDivElement>(null);
  const isSceneInView = useInView(sceneExtentRef);
  const { sectionRef, rawScrollProgress, scrollYProgress, buttonStyle, intro } =
    useHeroScrollAnimation(reduceMotion);
  const { orbitRef, isSceneBlurred, isOrbitVisible } = useOrbitScene(
    rawScrollProgress,
    scrollYProgress,
    isSceneInView,
    reduceMotion,
  );
  return (
    <>
      <S.SceneExtent ref={sceneExtentRef} aria-hidden="true">
        <S.Scene>
          <S.OrbitCanvas ref={orbitRef} $isVisible={isOrbitVisible} $isBlurred={isSceneBlurred} />
        </S.Scene>
      </S.SceneExtent>

      <S.Section ref={sectionRef}>
        <S.Sticky>
          <S.VisuallyHiddenHeading>SHOUT OUR PASSION TOGETHER</S.VisuallyHiddenHeading>
          {ctaText && (
            <S.RecruitLink href={EXTERNAL_LINKS.RECRUIT} style={buttonStyle}>
              {ctaText}
            </S.RecruitLink>
          )}
          <S.Intro style={{ opacity: intro.opacity, visibility: intro.visibility }}>
            <IntroLine
              text={`전국 최대 규모의 대학생 연합 IT 벤처 창업${NON_BREAKING_SPACE}동아리,`}
              progress={intro.firstLineFill}
              reduceMotion={reduceMotion}
            />
            <IntroLine
              text="SOPT를 소개합니다"
              progress={intro.secondLineFill}
              reduceMotion={reduceMotion}
            />
          </S.Intro>
        </S.Sticky>
      </S.Section>
    </>
  );
}
