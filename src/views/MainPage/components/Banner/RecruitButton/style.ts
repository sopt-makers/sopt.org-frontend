import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import Link from 'next/link';
import { BackgroundMove } from '@src/lib/styles/animation';

export const RecruitButtonWrapper = styled(Link)<{ mainColor: string; highColor: string }>`
  margin-top: 41px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 99px;
  background: ${({ mainColor, highColor }) =>
    `linear-gradient(274deg,${mainColor}, ${highColor}, ${highColor})`};
  background-size: 200% 200%;
  animation: ${BackgroundMove} 1.8s ease-out infinite alternate;

  color: ${colors.gray800};
  text-align: center;

  font-size: 28rem;
  font-style: normal;
  font-weight: 600;
  line-height: 130%; /* 36.4px */

  /* 모바일 뷰 */
  @media (max-width: 90rem) {
    font-size: 24rem;
    margin-top: 51px;
  }

  /* 모바일 뷰 */
  @media (max-width: 48rem) {
    margin-top: 28px;
    font-size: 18rem;
    line-height: 28px; /* 155.556% */
    letter-spacing: -0.36px;
  }

  &:hover {
    background: ${({ highColor }) => highColor};
  }
`;

export const MouseTrackerWrapper = styled.div<{
  x: number;
  y: number;
  mainColor: string;
  highColor: string;
}>`
  border-radius: 99px;
  border: none;
  width: 289px;
  height: 66px;
  background: transparent;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 100%;

  /* 모바일 뷰 */
  @media (max-width: 90rem) {
    width: 256px;
    height: 59px;
  }

  /* 모바일 뷰 */
  @media (max-width: 48rem) {
    width: 188px;
    height: 44px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: ${({ x, y, mainColor, highColor }) => `
    radial-gradient(
        circle 110px at ${x}px ${y}px,
        ${mainColor},
        transparent
      ), radial-gradient(
        circle 180px at ${x}px ${y}px,
       ${highColor},
        transparent
      )
    `};
    opacity: 0;
    transition-duration: 0.4s;
  }

  &:hover::before {
    opacity: 1;
  }

  > * {
    transition: transform 0.2s;
  }

  &:hover > * {
    transform: scale(0.96);
  }

  & > div {
    font-size: 100%;
  }
`;
