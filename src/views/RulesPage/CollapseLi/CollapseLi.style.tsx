import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ArrowDownAnimation, ArrowUpAnimation } from '@src/lib/styles/animation';
import theme from '@src/styles/theme';

interface ButtonStyleProps {
  isOpened: boolean;
}

export const Root = styled.li`
  border-bottom: 1px solid ${theme.colors.soptWhite};
  padding-bottom: 40px;
  width: 100%;
  @media (max-width: 768px) {
    padding-bottom: 20px;
  }
`;
export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  padding-top: 40px;
  width: 100%;
  @media (max-width: 768px) {
    padding-top: 20px;
  }
`;

export const TItle = styled.h3`
  text-align: center;
  line-height: 30px;
  color: ${theme.colors.soptWhite};
  font-family: 'SUIT', arial, sans-serif;
  font-size: 24px;
  font-weight: 700;
  font-style: normal;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Button = styled.button<ButtonStyleProps>`
  margin-right: 40px;
  outline: inherit;
  border: none;
  background: none;
  background: no-repeat url('/down_arrow.svg');
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
  padding: 0;
  width: 24px;
  height: 13px;

  /* stylelint-disable */
  @media (max-width: 768px) {
    margin-right: 15px;
    width: 16px;
    height: 13px;
  }
  ${ArrowDownAnimation}
  ${ArrowUpAnimation}
  
  animation: ${({ isOpened }) => (isOpened ? 'ArrowUp 0.3s forwards' : 'ArrowDown 0.3s forwards')};
  color: inherit;
  font: inherit;
`;

export const Contents = styled.div<ButtonStyleProps>`
  overflow: hidden;
  line-height: 180%;
  letter-spacing: -0.03em;
  white-space: pre-line;
  color: ${theme.colors.soptWhite};
  font-family: 'SUIT', arial, sans-serif;
  font-size: 20px;
  font-weight: 400;
  font-style: normal;
  @media (max-width: 768px) {
    font-size: 14px;
  }

  ${({ isOpened }) =>
    isOpened
      ? css`
          transition: max-height 0.2s ease-in;
          max-height: 3500px;
          @media screen and (max-width: 1280px) {
            max-height: 5000px;
          }
        `
      : css`
          transition: max-height 0.15s ease-out;
          max-height: 0;
        `}
`;
