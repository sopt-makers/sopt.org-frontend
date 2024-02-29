import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { css } from '@emotion/react';
import { FadeInDown } from '@src/lib/styles/animation';

export const ItemContainer = styled.div<{ src: string; isInView: boolean; order: number }>`
  color: white;
  position: relative;

  max-width: 380px;
  width: calc(230px + 7.8vw);
  max-height: 323px;
  height: calc(196px + 6.6vw);

  padding: min(35.98px, 1.87vw) 0 min(80.5px, 4.19vw) 0;
  border-radius: 10px;
  background: center bottom 0 no-repeat #181818 url(${({ src }) => src});
  background-size: min(200px + 9.37vw) min(170px + 7.96vw);

  opacity: 0;

  ${FadeInDown(50)}
  animation: fadeindown 0.6s forwards;
  animation-play-state: ${({ isInView }) => (isInView ? 'running' : 'paused')};
  animation-delay: ${({ order }) => `${order * 0.2}s`};

  &:hover {
    backdrop-filter: blur(3.5px);
  }

  /* 태블릿 뷰 */
  @media (max-width: 768px) {
    width: 380px;
    height: 323px;
    background-size: 100%;
  }

  /* 모바일 뷰 */
  @media (max-width: 428px) {
    width: 268.769px;
    height: 228.454px;
  }
`;

export const BackgroundBlur = styled.div<{ isHovered: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: 0.3s;
  border-radius: 10px;

  ${({ isHovered }) =>
    isHovered &&
    css`
      backdrop-filter: blur(3.5px);
      background-color: rgba(0, 0, 0, 60%);
    `};
`;

export const CoreValue = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
  z-index: 99;
  height: 100%;
`;

export const ValueTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 11px;

  /* 태블릿 뷰 */
  @media (max-width: 768px) {
    font-size: 24px;
  }
  /* 모바일 뷰 */
  @media (max-width: 428px) {
    font-size: 24px;
    line-height: 33px;
  }
`;

export const ValueNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  width: 25.154px;
  height: 25.154px;
  border-radius: 6px;
  background: #364536;

  color: ${colors.white};
  font-family: SUIT;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: 17px; /* 100% */
  letter-spacing: -0.17px;

  /* 모바일 뷰 */
  @media (max-width: 428px) {
    width: 17.791px;
    height: 17.791px;

    font-size: 12.024px;
    line-height: 12.024px; /* 100% */
    letter-spacing: -0.12px;
  }
`;

export const ValueTitle = styled.h2`
  color: ${colors.white};
  font-family: SUIT;
  font-size: 27px;
  font-style: normal;
  font-weight: 700;
  line-height: 60px; /* 222.222% */
  letter-spacing: -0.27px;
  text-align: center;

  /* 모바일 뷰 */
  @media (max-width: 428px) {
    font-size: 19.097px;
    line-height: 42.437px; /* 222.222% */
    letter-spacing: -0.191px;
  }
`;

export const ValueDescription = styled.div<{ isHovered: boolean }>`
  transition: 0.3s;
  white-space: pre-line;
  word-break: keep-all;

  width: 237.081px;
  height: 117px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  color: #fff;
  text-align: center;
  font-family: SUIT;
  font-size: min(23px, calc(17px + 0.26vw));

  font-style: normal;
  font-weight: 500;
  line-height: min(39px, calc(29px + 0.52vw));
  letter-spacing: -0.23px;

  opacity: 0;
  ${({ isHovered }) => isHovered && 'opacity: 1'};

  /* 태블릿 뷰 */
  @media (max-width: 768px) {
    font-size: 23px;
    line-height: 39px;
  }

  /* 모바일 뷰 */
  @media (max-width: 428px) {
    width: 159px;
    font-size: 16px;
    line-height: 30px;
  }
`;
