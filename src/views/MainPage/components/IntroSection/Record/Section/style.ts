import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { fontsObject } from '@sopt-makers/fonts';
import chevronRight from '@src/assets/icons/chevronRight.svg';
import { media } from '@src/lib/styles/breakpoints';
import { convertRadialGradient } from '@src/lib/styles/gradient';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 32px;

  /* 태블릿 뷰 */
  @media (max-width: 1023px) {
    gap: 44px;
  }

  /* 모바일 뷰 */
  @media (max-width: 767px) {
    gap: 32px;
  }
`;

export const GradientWrapper = styled.div<{
  mainColor: string;
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
    background: ${({ mainColor }) => convertRadialGradient(mainColor)};
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
  @media (max-width: 1023px) {
    &::before {
      top: -20%;
      height: 115%;
    }
  }

  /* 모바일 뷰 */
  @media (max-width: 767px) {
    &::before {
      top: 50%;
      height: 30%;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 42px;
  padding: 12px 20px;
  border: 1px solid ${colors.white};
  border-radius: 10px;
  background-color: transparent;
  color: ${colors.white};
  ${fontsObject.TITLE_6_16_SB}
  white-space: nowrap;

  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: ${colors.white};
    color: ${colors.black};
  }

  ${media.tablet} {
    height: 36px;
    padding: 9px 14px;
    border-radius: 8px;
    ${fontsObject.LABEL_3_14_SB}
  }

  ${media.mobile} {
    height: 36px;
    padding: 9px 14px;
    border-radius: 8px;
    ${fontsObject.LABEL_3_14_SB}
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
