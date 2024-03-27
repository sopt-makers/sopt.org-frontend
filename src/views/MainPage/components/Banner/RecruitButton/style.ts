import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import Link from 'next/link';
import { BackgroundMove } from '@src/lib/styles/animation';

export const RecruitButtonWrapper = styled(Link)`
  margin-top: 41rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 99rem;
  background: linear-gradient(274deg, #bdec00 10%, #f0ffb6 100%);
  animation: ${BackgroundMove} 3s linear 0s infinite alternate;
  color: ${colors.gray800};
  text-align: center;
  font-family: SUIT;
  font-size: 28rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 36.4rem */

  /* 모바일 뷰 */
  @media (max-width: 1440px) {
    font-size: 24rem;
    margin-top: 51rem;
  }

  /* 모바일 뷰 */
  @media (max-width: 768px) {
    margin-top: 28rem;
    font-size: 18rem;
    line-height: 28rem; /* 155.556% */
    letter-spacing: -0.36rem;
  }

  &:hover {
    background: #f0ffaa;
  }
`;

export const MouseTrackerWrapper = styled.div<{ x: number; y: number }>`
  border-radius: 99rem;
  border: none;
  width: 289rem;
  height: 66rem;
  background: transparent;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 100%;

  /* 모바일 뷰 */
  @media (max-width: 1440px) {
    width: 256rem;
    height: 59rem;
  }

  /* 모바일 뷰 */
  @media (max-width: 768px) {
    width: 188rem;
    height: 44rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: radial-gradient(
        circle 110rem at ${(props) => props.x}rem ${(props) => props.y}rem,
        #bdec00,
        transparent
      ),
      radial-gradient(
        circle 180rem at ${(props) => props.x}rem ${(props) => props.y}rem,
        #fdffaa,
        transparent
      );
    opacity: 0;
    transition-duration: 0.4s;
    transition-delay: 0.2s;
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
