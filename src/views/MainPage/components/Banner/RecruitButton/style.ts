import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { BackgroundMove } from '@src/lib/styles/animation';

export const RecruitButtonWrapper = styled.div`
  cursor: pointer;

  margin-top: 40px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 99px;
  background: radial-gradient(
      9.16% 35.18% at 50% 50%,
      rgba(112, 149, 185, 0) 0%,
      rgba(184, 200, 216, 0) 100%
    ),
    linear-gradient(92deg, #e5eaef -4.46%, #fff 18.02%, #b7c8d8 78.53%);
  background-size: 200% 200%;
  animation: ${BackgroundMove} 3s linear 0s infinite alternate;
  color: ${colors.gray800};
  text-align: center;
  font-family: SUIT;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 36.4px */

  /* 모바일 뷰 */
  @media (max-width: 375px) {
    margin-top: 28px;
    display: flex;
    width: 182px;
    height: 44px;
    padding: 15px 18px;
    font-size: 18px;
    line-height: 28px; /* 155.556% */
    letter-spacing: -0.36px;
  }
`;

export const MouseTrackerWrapper = styled.div<{ x: number; y: number }>`
  border-radius: 99px;
  border: none;
  cursor: pointer;
  height: 60px;
  padding: 15px 28px;
  background: transparent;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: radial-gradient(
        circle 36px at ${(props) => props.x}px ${(props) => props.y}px,
        #3e5e7d90,
        transparent
      ),
      radial-gradient(
        circle 80px at ${(props) => props.x}px ${(props) => props.y}px,
        #3e5e7d50,
        transparent
      ),
      radial-gradient(
        circle 108px at ${(props) => props.x}px ${(props) => props.y}px,
        #3e5e7d50,
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
`;
