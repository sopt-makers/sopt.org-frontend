import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { css } from '@emotion/react';
import { FadeInDown } from '@src/lib/styles/animation';

export const ItemContainer = styled.div<{ src: string; isInView: boolean; order: number }>`
  color: white;
  position: relative;

  width: 380rem;
  height: 323rem;

  padding: min(35.98rem, 5vw) 0 min(80.5rem, 4.19vw) 0;
  border-radius: 10rem;
  background: center bottom 0rem no-repeat #181818 url(${({ src }) => src});
  background-size: calc(170rem + 7vw);

  opacity: 0;

  ${FadeInDown(50)}
  animation: fadeindown 0.6s forwards;
  animation-play-state: ${({ isInView }) => (isInView ? 'running' : 'paused')};
  animation-delay: ${({ order }) => `${order * 0.2}s`};

  &:hover {
    backdrop-filter: blur(3.5rem);
  }

  /* 태블릿 뷰 */
  @media (max-width: 768px) {
    background-size: 90%;
    background-position: center bottom -20rem;
  }

  /* 모바일 뷰 */
  @media (max-width: 428px) {
    width: 269rem;
    height: 228rem;
    background-position: center bottom -20rem;
  }
`;

export const BackgroundBlur = styled.div<{ isHovered: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: 0.3s;
  border-radius: 10rem;

  ${({ isHovered }) =>
    isHovered &&
    css`
      backdrop-filter: blur(3.5rem);
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
  gap: 11rem;

  /* 태블릿 뷰 */
  @media (max-width: 768px) {
    font-size: 24rem;
  }
  /* 모바일 뷰 */
  @media (max-width: 428px) {
    font-size: 24rem;
    line-height: 33rem;
  }
`;

export const ValueNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  width: 25.154rem;
  height: 25.154rem;
  border-radius: 6rem;
  background: #364536;

  color: ${colors.white};
  font-family: SUIT;
  font-size: 17rem;
  font-style: normal;
  font-weight: 500;
  line-height: 17rem; /* 100% */
  letter-spacing: -0.17rem;

  /* 모바일 뷰 */
  @media (max-width: 428px) {
    width: 17.791rem;
    height: 17.791rem;

    font-size: 12.024rem;
    line-height: 12.024rem; /* 100% */
    letter-spacing: -0.12rem;
  }
`;

export const ValueTitle = styled.h2`
  color: ${colors.white};
  font-family: SUIT;
  font-size: 27rem;
  font-style: normal;
  font-weight: 700;
  line-height: 60rem; /* 222.222% */
  letter-spacing: -0.27rem;
  text-align: center;

  /* 모바일 뷰 */
  @media (max-width: 428px) {
    font-size: 19.097rem;
    line-height: 42.437rem; /* 222.222% */
    letter-spacing: -0.191rem;
  }
`;

export const ValueDescription = styled.div<{ isHovered: boolean }>`
  transition: 0.3s;
  white-space: pre-line;
  word-break: keep-all;

  width: 237rem;
  height: 117rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  color: #fff;
  text-align: center;
  font-family: SUIT;
  font-size: 23rem;

  font-style: normal;
  font-weight: 500;
  line-height: min(39rem, calc(29rem + 0.52vw));
  letter-spacing: -0.23rem;

  opacity: 0;
  ${({ isHovered }) => isHovered && 'opacity: 1'};

  /* 모바일 뷰 */
  @media (max-width: 428px) {
    width: 159rem;
    font-size: 16rem;
    line-height: 30rem;
  }
`;
