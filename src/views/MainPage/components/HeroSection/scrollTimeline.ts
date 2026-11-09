const HERO_SCROLL_SCREENS = 8.7;
const HERO_SECTION_SCREENS = 9.7;

const scrollPercent = (screens: number) => (screens / HERO_SCROLL_SCREENS) * 100;

// 각 값은 해당 스크롤 진행 범위에서의 백분율입니다.
export const HERO_TIMELINE_PERCENT = {
  orbit: {
    motionEnd: scrollPercent(1.2),
    blurStart: scrollPercent(2.8),
  },
  button: {
    fadeInStart: scrollPercent(0.9),
    fadeInEnd: scrollPercent(1.2),
    fadeOutStart: scrollPercent(3),
    fadeOutEnd: scrollPercent(3.4),
  },
  intro: {
    fadeInStart: scrollPercent(3.7),
    fadeInEnd: scrollPercent(4.3),
    firstLineFillEnd: scrollPercent(5.2),
    secondLineFillEnd: scrollPercent(5.7),
    fadeOutStart: scrollPercent(6.7),
    fadeOutEnd: scrollPercent(7.5),
  },
  sceneFadeStart: (HERO_SCROLL_SCREENS / HERO_SECTION_SCREENS) * 100,
} as const;

export const percentToProgress = (percent: number) => percent / 100;
