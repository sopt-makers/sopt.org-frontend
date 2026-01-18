import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import chevronRight from '@src/assets/icons/chevronRight.svg';

export const Wrapper = styled.section`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: space-between;
  padding: 215px 300px;
`;

export const GradientWrapper = styled.div<{ mainColor: string; highColor: string; active: boolean }>`
  display: flex;
  position: relative;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  & > * {
    position: relative;
    z-index: 1;
  }


 &::before {
    content: '';
    position: absolute;
    top: 65%;
    left: 80%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
    border-radius: 999px;

    background:
      radial-gradient(
        45.16% 45.16% at 50% 50%,
        color-mix(in srgb, ${({ mainColor }) => mainColor} 20%, transparent) 0%,
        rgba(15, 15, 18, 0) 100%
      ),
      radial-gradient(
        45.16% 45.16% at 50% 50%,
        color-mix(in srgb, ${({ highColor }) => highColor} 20%, transparent) 0%,
        rgba(15, 15, 18, 0) 100%
      );

    opacity: ${({ active }) => (active ? 1 : 0)};
    filter: blur(56px);
    transition: opacity 0.3s ease;
    pointer-events: none;
    z-index: 0;
  }
`;

export const ProjectList = styled.div`
  position: relative;
  flex-shrink: 0;
  overflow: visible;
  width: 460px;
  height: 430px;
  margin-bottom: 50px;

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
    left: 107px;
    z-index: 1;
    transform: translateX(0) rotate(0deg);
  }

  & > article:nth-of-type(4) {
    top: -40px;
    left: -48px;
    transform: translateX(0) rotate(-7.542deg);
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
    margin-bottom: 110px;

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

export const ProjectListLayout = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  gap: 30px;

  @media (hover: hover) and (pointer: fine) {
    &:hover ${ProjectList} {
      --project-transition-duration: 300ms;
    }

    &:hover ${ProjectList} > article {
      transform: translateX(0) rotate(0deg);
    }

    &:hover ${ProjectList} > article:nth-of-type(2) {
      transition-delay: 30ms;
      transform: translateX(-5px) rotate(0deg);
    }

    &:hover ${ProjectList} > article:nth-of-type(3) {
      transition-delay: 30ms;
      transform: translateY(30px) rotate(0deg);
    }

    &:hover ${ProjectList} > article:nth-of-type(4) {
      transition-delay: 60ms;
      transform: translateX(85px) translateY(0px) rotate(0deg);
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

export const RightArrowIcon = styled.span`
  width: 24px;
  height: 24px;
  background-color: currentColor;
  -webkit-mask-image: url(${chevronRight});
  mask-image: url(${chevronRight});
`;