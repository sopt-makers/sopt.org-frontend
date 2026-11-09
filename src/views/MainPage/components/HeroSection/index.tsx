import { useReducedMotion } from 'framer-motion';
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
  const { sectionRef, scrollYProgress, sceneOpacity, buttonStyle, intro } =
    useHeroScrollAnimation(reduceMotion);
  const { orbitRef, isOrbitReady, isSceneBlurred } = useOrbitScene(scrollYProgress, sceneOpacity);

  return (
    <S.Section ref={sectionRef}>
      <S.Scene $isLoading={!isOrbitReady} style={{ opacity: sceneOpacity }} aria-hidden="true">
        <S.OrbitCanvas
          ref={orbitRef}
          $isReady={isOrbitReady}
          $isBlurred={!reduceMotion && isSceneBlurred}
        />
      </S.Scene>

      <S.Sticky $isLoading={!isOrbitReady}>
        <S.VisuallyHiddenHeading>SHOUT OUR PASSION TOGETHER</S.VisuallyHiddenHeading>
        {ctaText && (
          <S.RecruitLink href={EXTERNAL_LINKS.RECRUIT} style={buttonStyle}>
            {ctaText}
          </S.RecruitLink>
        )}
        <S.Intro style={{ opacity: intro.opacity }}>
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
  );
}
