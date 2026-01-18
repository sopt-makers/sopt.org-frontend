import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProjectList = styled.div`
  position: relative;
  flex-shrink: 0;
  overflow: visible;
  width: 460px;
  height: 430px;

  --project-transition-duration: 500ms;

  & > article {
    position: absolute;
    transform-origin: 50% 60%;
    transition: transform var(--project-transition-duration) cubic-bezier(0.45, 0, 0.55, 1);
    will-change: transform;
  }

  & > article:nth-of-type(1) {
    top: 120px;
    left: 40px;
    z-index: 3;
    transform: translateX(0) rotate(0deg);
  }

  & > article:nth-of-type(2) {
    top: 65px;
    left: -32.96px;
    z-index: 2;
    transform: translateX(0) rotate(4.31deg);
  }

  & > article:nth-of-type(3) {
    top: -16px;
    left: 86px;
    z-index: 1;
    transform: translateX(0) rotate(0deg);
  }

  & > article:nth-of-type(4) {
    top: -59px;
    left: -45px;
    transform: translateX(0) rotate(-7.542deg);
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      --project-transition-duration: 300ms;
    }
    &:hover > article {
      transform: translateX(0) rotate(0deg);
    }
    &:hover > article:nth-of-type(2) {
      transition-delay: 30ms;
      transform: translateX(-5px) rotate(0deg);
    }
    &:hover > article:nth-of-type(4) {
      transition-delay: 60ms;
      transform: translateX(104px) rotate(0deg);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    & > article {
      transition: none;
    }
  }

  /* 모바일 뷰 */
  @media (max-width: 47.86875rem) {
    width: 360px;
    height: 420px;

    & > article:nth-of-type(1) {
      top: 120px;
      left: 4px;
    }

    & > article:nth-of-type(2) {
      top: 70px;
      left: 16px;
    }

    & > article:nth-of-type(3) {
      top: 30px;
      left: 0px;
    }

    & > article:nth-of-type(4) {
      top: 0;
      left: 18px;
    }
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: ${colors.gray100};
`;

export const Strong = styled.p<{ mainColor: string }>`
  font-size: 36px;
  font-weight: 700;
  line-height: 43.2px;
  color: ${({ mainColor }) => mainColor ?? colors.gray100};
  white-space: pre-line;
`;