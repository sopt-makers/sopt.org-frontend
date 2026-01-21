export const convertRadialGradient = (mainColor: string, highColor: string) =>
  `radial-gradient(
    45.16% 45.16% at 50% 50%,
    color-mix(in srgb, ${mainColor} 20%, transparent) 0%,
    color-mix(in srgb, ${highColor} 12%, transparent) 55%,
    rgba(15, 15, 18, 0) 100%
  )`;