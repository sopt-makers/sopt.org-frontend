import { useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { HERO_TIMELINE_PERCENT, percentToProgress } from './scrollTimeline';

export default function useHeroScrollAnimation(reduceMotion: boolean | null) {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress: rawScrollProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });
  const smoothScrollProgress = useSpring(rawScrollProgress, {
    stiffness: 300,
    damping: 30,
    mass: 0.5,
    restDelta: 0.0001,
  });
  const scrollYProgress = reduceMotion ? rawScrollProgress : smoothScrollProgress;
  const { scrollYProgress: sceneProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const { button, intro } = HERO_TIMELINE_PERCENT;

  const sceneOpacity = useTransform(
    sceneProgress,
    [percentToProgress(HERO_TIMELINE_PERCENT.sceneFadeStart), 1],
    [1, 0],
  );
  const buttonOpacity = useTransform(
    scrollYProgress,
    [button.fadeInStart, button.fadeInEnd, button.fadeOutStart, button.fadeOutEnd].map(
      percentToProgress,
    ),
    [0, 1, 1, 0],
  );
  const buttonVisibility = useTransform([scrollYProgress, rawScrollProgress], ([value, raw]) =>
    Number(value) >= percentToProgress(button.fadeInStart) &&
    Number(value) < percentToProgress(button.fadeOutEnd) &&
    Number(raw) < percentToProgress(button.fadeOutEnd)
      ? 'visible'
      : 'hidden',
  );

  const smoothIntroOpacity = useTransform(
    scrollYProgress,
    [intro.fadeInStart, intro.fadeInEnd, intro.fadeOutStart, intro.fadeOutEnd].map(
      percentToProgress,
    ),
    [0, 1, 1, 0],
  );
  const introExitOpacity = useTransform(
    rawScrollProgress,
    [intro.fadeOutStart, intro.fadeOutEnd].map(percentToProgress),
    [1, 0],
  );
  const introOpacity = useTransform([smoothIntroOpacity, introExitOpacity], ([opacity, exit]) =>
    Math.min(Number(opacity), Number(exit)),
  );
  const firstLineFill = useTransform(
    scrollYProgress,
    [intro.fadeInEnd, intro.firstLineFillEnd].map(percentToProgress),
    [0, 1],
  );
  const secondLineFill = useTransform(
    scrollYProgress,
    [intro.firstLineFillEnd, intro.secondLineFillEnd].map(percentToProgress),
    [0, 1],
  );

  return {
    sectionRef,
    scrollYProgress,
    sceneOpacity,
    buttonStyle: { opacity: buttonOpacity, visibility: buttonVisibility },
    intro: { opacity: introOpacity, firstLineFill, secondLineFill },
  };
}
