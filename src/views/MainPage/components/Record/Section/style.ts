import styled from '@emotion/styled';
import chevronRight from '@src/assets/icons/chevronRight.svg';

export const Wrapper = styled.section`
  display: flex;
  
  flex-direction: column;
  align-items: center;
    gap: 32px;

  @media (max-width: 47.875rem) and (min-width: 26.75rem) {
    gap: 44px;
  }

  /* 모바일 뷰 */
  @media (max-width: 26.75rem) {
    margin-top: 120px;
    gap: 32px;
  }
`;

export const GradientWrapper = styled.div<{
  mainColor: string;
  highColor: string;
  active: boolean;
}>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 24px;

  &::before {
    content: '';
    position: absolute;
    top: -10%;
    left: 50%;
    width: 90%;
    height: 150%;
    transform: translateX(-50%);
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

    opacity: ${({ active }) => (active ? 0.45 : 0)};
    filter: blur(56px);
    transition: opacity 0.3s ease;
    pointer-events: none;
    z-index: 0;
  }

  & > * {
    position: relative;
    z-index: 1;
  }

  /* 태블릿 뷰 */
  @media (max-width: 74.9375rem) and (min-width: 47.875rem) {
    &::before {
      top: -20%;
      height: 115%;
    }
  }

  /* 모바일 뷰 */
  @media (max-width: 47.86875rem) {
    &::before {
      top: 50%;
      height: 30%;
    }
  }
`;

export const RightArrowIcon = styled.span`
  width: 24px;
  height: 24px;
  display: inline-block;
  background-color: currentColor;
  -webkit-mask-image: url(${chevronRight});
  mask-image: url(${chevronRight});
`;
