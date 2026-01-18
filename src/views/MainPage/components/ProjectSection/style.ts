import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import chevronRight from '@src/assets/icons/chevronRight.svg';

export const Wrapper = styled.section`
  position: relative;
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: space-between;
  padding: 215px 300px;

  /* 태블릿 뷰 */
  @media (max-width: 74.9375rem) {
    height: auto;
    min-height: 100vh;
    padding: 180px 64px;
    justify-content: center;
  }

  /* 모바일 뷰 */
  @media (max-width: 47.86875rem) {
    padding: 180px 24px;
  }
`;

export const InViewTrigger = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 1px;
  pointer-events: none;
  opacity: 0;
`;

export const ProjectList = styled.div<{ $active?: boolean }>`
  position: relative;
  flex-shrink: 0;
  overflow: visible;
  width: 460px;
  height: 430px;
  margin-bottom: 50px;
  grid-area: project;
  justify-self: center;

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

  /* 태블릿 뷰 */
  @media (max-width: 74.9375rem) {
    width: 240px;
    height: 260px;
    margin-bottom: 23px;

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
    @media (max-width: 74.9375rem) {
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
`;

export const GradientWrapper = styled.div<{ mainColor: string; highColor: string; active: boolean }>`
  display: grid;
  position: relative;
  width: 100%;
  align-items: center;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto auto;
  grid-template-areas:
    'title project'
    'title button';
  column-gap: 80px;
  row-gap: 30px;

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


  @media (hover: hover) and (pointer: fine) and (min-width: 75rem) {
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

  @media (max-width: 74.9375rem) {
    column-gap: 32px;
    row-gap: 24px;
  }

  @media (max-width: 47.86875rem) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      'project'
      'title'
      'button';
    justify-items: center;
    row-gap: 28px;
    column-gap: 0;

    &::before {
      top: 28%;
      left: 50%;
    }
  }
`;


export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  grid-area: title;

  /* 모바일 뷰 */
  @media (max-width: 47.86875rem) {
    align-items: center;
    text-align: center;
    gap: 16px;
  }
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

export const ButtonWrapper = styled.div`
  grid-area: button;
  justify-self: center;
`;