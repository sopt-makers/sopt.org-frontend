// 35%는 대충 맞춘 값 — 그라디언트가 너무 밝거나 흐리면 이 % 값만 조정
const HIGHLIGHT_WHITE_MIX = '35%';

export const convertRadialGradient = (mainColor: string) =>
  `radial-gradient(
    45.16% 45.16% at 50% 50%,
    color-mix(in srgb, ${mainColor} 20%, transparent) 0%,
    color-mix(in srgb, color-mix(in srgb, ${mainColor}, white ${HIGHLIGHT_WHITE_MIX}) 12%, transparent) 55%,
    rgba(15, 15, 18, 0) 100%
  )`;
