import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ReactComponent as UpArrow } from '@src/assets/icons/upArrow.svg';
import { FadeIn, FadeOut } from '@src/lib/styles/animation';
import { UpButtonProps } from '../types';

function UpButton(props: UpButtonProps) {
  const { isScrolled } = props;

  return (
    <Root isScrolled={isScrolled} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <span>UP</span>
      <UpArrow />
    </Root>
  );
}

export default UpButton;

export const Root = styled.button<{ isScrolled: boolean }>`
  position: fixed;
  right: 20px;
  bottom: 30px;
  border-radius: 52px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  background: #242424;
  padding: 16px 32px;
  z-index: 999;
  cursor: pointer;
  ${({ isScrolled }) =>
    isScrolled
      ? css`
          ${FadeIn}
          animation:fadein 0.4s;
        `
      : css`
          ${FadeOut}
          animation:fadeout 0.4s;
          animation-fill-mode: forwards;
        `}

  /* 모바일 뷰 */
  @media (max-width: 767px) {
    padding: 16px;
  }

  & > span {
    font-weight: 600;
    font-size: 24px;
    line-height: 48px;
    color: #ffffff;
    /* 모바일 뷰 */
    @media (max-width: 767px) {
      display: none;
    }
  }
`;
