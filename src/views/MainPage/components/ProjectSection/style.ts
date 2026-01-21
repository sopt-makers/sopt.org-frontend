import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import chevronRight from '@src/assets/icons/chevronRight.svg';
import { convertRadialGradient } from '@src/lib/styles/gradient';

export const Wrapper = styled.section`
  position: relative;
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  margin: 275px 0;

  /* 태블릿 뷰 */
  @media (max-width: 1023px) {
    height: auto;
    min-height: 100vh;
    margin: 180px 0;
  }

  /* 모바일 뷰 */
  @media (max-width: 767px) {
    margin: 180px 0;
  }
`;

export const ProjectList = styled.div<{ $active?: boolean }>`
  position: relative;
  flex-shrink: 0;
  overflow: visible;
  width: 460px;
  height: 430px;
  margin-bottom: 30px;

  --project-transition-duration: 500ms;

  & > article {
    position: absolute;
    transform-origin: 50% 60%;
    transition: transform var(--project-transition-duration) cubic-bezier(0.45, 0, 0.55, 1);
    will-change: transform;
  }

  & > article:nth-of-type(1) {
    top: 120px;
    left: 60px;
    z-index: 3;
    transform: translateX(0) rotate(0deg);
  }

  & > article:nth-of-type(2) {
    top: 65px;
    left: -12.96px;
    z-index: 2;
    transform: translateX(0) rotate(4.31deg);
  }

  & > article:nth-of-type(3) {
    top: -16px;
    left: 127px;
    z-index: 1;
    transform: translateX(0) rotate(0deg);
  }

  & > article:nth-of-type(4) {
    top: -40px;
    left: -28px;
    transform: translateX(0) rotate(-7.542deg);
  }

  /* 태블릿 뷰 */
  @media (max-width: 1023px) {
    width: 240px;
    height: 260px;
    margin-bottom: 0;

    & > article:nth-of-type(1) {
      top: 80px;
      left: 32px;
    }

    & > article:nth-of-type(2) {
      top: 44px;
      left: 5px;
    }

    & > article:nth-of-type(3) {
      top: 8px;
      left: 48px;
    }

    & > article:nth-of-type(4) {
      top: -30px;
      left: 0px;
    }
  }

  ${({ $active }) =>
    $active
      ? `
    --project-transition-duration: 300ms;

    & > article {
      transform: translateX(0) rotate(0deg);
    }
    & > article:nth-of-type(2) {
      transition-delay: 30ms;
      transform: translateX(-5px) rotate(0deg);
    }
    & > article:nth-of-type(3) {
      transition-delay: 30ms;
      transform: translateY(30px) rotate(0deg);
    }
    & > article:nth-of-type(4) {
      transition-delay: 60ms;
      transform: translateX(85px) translateY(0px) rotate(0deg);
    }

    /* 태블릿 뷰 */
    @media (max-width: 1023px) {
      & > article:nth-of-type(2) {
        transform: translateX(-3px) translateY(9px) rotate(0deg);
      }
      & > article:nth-of-type(3) {
        transform: translateX(15px) translateY(18px) rotate(0deg);
      }
      & > article:nth-of-type(4) {
        transform: translateX(28px) translateY(30px) rotate(0deg);
      }
    }
  `
      : ''}

  @media (max-width: 767px) {
    order: 1;
  }
`;

export const GradientOverlay = styled.div<{ mainColor: string; highColor: string; active: boolean }>`
  position: relative;
  display: flex;
  width: 1200px;
  align-items: center;
  justify-content: space-between;
  gap: 80px;

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

    background: ${({ mainColor, highColor }) => convertRadialGradient(mainColor, highColor)};

    opacity: ${({ active }) => (active ? 1 : 0)};
    filter: blur(56px);
    transition: opacity 0.3s ease;
    pointer-events: none;
    z-index: 0;
  }


  @media (max-width: 1023px) {
    width: 640px;
    gap: 32px;

    &::before {
      background: ${({ mainColor, highColor }) => convertRadialGradient(mainColor, highColor)};
    }
  }

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 28px;

    &::before {
      top: 90%;
      left: 50%;
      background: ${({ mainColor, highColor }) => convertRadialGradient(mainColor, highColor)};
    }
  }
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  @media (max-width: 1023px) {
    gap: 24px;
  }

  @media (max-width: 767px) {
    display: contents;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  /* 모바일 뷰 */
  @media (max-width: 767px) {
    align-items: center;
    text-align: center;
    gap: 16px;
    order: 2;
  }
`;

export const Title = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: ${colors.gray100};

  /* 태블릿 뷰 */
  @media (max-width: 1023px) {
    font-size: 16px;
  }


`;

export const Strong = styled.p<{ mainColor: string }>`
  font-size: 36px;
  font-weight: 700;
  line-height: 43.2px;
  color: ${({ mainColor }) => mainColor ?? colors.gray100};
  white-space: pre-line;

  /* 태블릿 뷰 */
  @media (max-width: 1023px) {
    font-size: 24px;
    line-height: 28.8px;
  }
`;

export const RightArrowIcon = styled.i`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  font-style: normal;
  background-color: currentColor;
  -webkit-mask-image: url(${chevronRight});
  mask-image: url(${chevronRight});
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;

  /* 모바일 뷰 */
  @media (max-width: 767px) {
    order: 3;
    }
  }
`;
