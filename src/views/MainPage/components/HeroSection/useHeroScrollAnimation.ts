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
  const { button, intro } = HERO_TIMELINE_PERCENT;

  const buttonOpacity = useTransform(
    scrollYProgress,
    [button.fadeOutStart, button.fadeOutEnd].map(percentToProgress),
    [1, 0],
  );
  const buttonVisibility = useTransform([scrollYProgress, rawScrollProgress], ([value, raw]) =>
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
  const introVisibility = useTransform(introOpacity, (opacity) =>
    opacity > 0 ? 'visible' : 'hidden',
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
    rawScrollProgress,
    scrollYProgress,
    buttonStyle: { opacity: buttonOpacity, visibility: buttonVisibility },
    intro: { opacity: introOpacity, visibility: introVisibility, firstLineFill, secondLineFill },
  };
}
