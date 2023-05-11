import styled from '@emotion/styled';
import { FadeInDown } from '@src/lib/styles/animation';

export const ItemContainer = styled.div<{ src: string; isInView: boolean; order: number }>`
  color: white;
  position: relative;
  width: 380px;
  height: 380px;
  background-image: url(${({ src }) => src});
  background-size: 100%;
  opacity: 0;
  cursor: default;
  ${FadeInDown(50)}
  animation: fadeindown 0.6s forwards;
  animation-play-state: ${({ isInView }) => (isInView ? 'running' : 'paused')};
  animation-delay: ${({ order }) => `${order * 0.2}s`};

  /* 태블릿 뷰 */
  @media (max-width: 1199px) and (min-width: 766px) {
    height: 209px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    width: 332px;
    height: 332px;
  }
`;

export type BlurStrengthType = 'none' | 'small' | 'medium' | 'strong';
const backgroundBlur: Record<BlurStrengthType, number> = {
  none: 0,
  small: 10,
  medium: 20,
  strong: 60,
};

export const BackgroundBlur = styled.div<{ strength: BlurStrengthType }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, ${({ strength }) => backgroundBlur[strength]}%);
  transition: 0.3s;
`;

export const CoreValue = styled.div`
  text-align: center;
  font-weight: 700;
  font-size: 60px;
  letter-spacing: -1%;

  /* 태블릿 뷰 */
  @media (max-width: 1199px) and (min-width: 766px) {
    font-size: 24px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    font-size: 24px;
    line-height: 33px;
  }
`;

export const CoreValueSub = styled.div<{ isHovered: boolean }>`
  text-align: center;
  font-size: 28px;
  line-height: 150%;
  letter-spacing: -1%;
  color: rgba(#ffffff, 70%);
  transition: 0.3s;
  white-space: pre-line;
  word-break: keep-all;

  /* 데스크탑 뷰 */
  @media (min-width: 1200px) {
    ${({ isHovered }) => !isHovered && 'display: none'}
  }

  /* 태블릿, 모바일 뷰 */
  @media (max-width: 1199px) {
    font-size: 16px;
  }
`;
