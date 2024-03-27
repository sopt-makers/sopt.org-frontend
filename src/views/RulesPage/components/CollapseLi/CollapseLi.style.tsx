import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { css } from '@emotion/react';
import { ArrowDownAnimation, ArrowUpAnimation } from '@src/lib/styles/animation';

interface ButtonStyleProps {
  isOpened: boolean;
}

export const Root = styled.li`
  border-bottom: 1rem solid ${colors.gray10};
  padding-bottom: 40rem;
  width: 100%;
  @media (max-width: 768rem) {
    padding-bottom: 20rem;
  }
`;
export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  padding-top: 40rem;
  width: 100%;
  @media (max-width: 768rem) {
    padding-top: 20rem;
  }
`;

export const TItle = styled.h3`
  text-align: center;
  line-height: 30rem;
  color: ${colors.gray10};
  font-size: 24rem;
  font-weight: 700;
  font-style: normal;
  @media (max-width: 768rem) {
    font-size: 16rem;
  }
`;

export const Button = styled.button<ButtonStyleProps>`
  margin-right: 40rem;
  outline: inherit;
  border: none;
  background: none;
  background: no-repeat url('/down_arrow.svg');
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
  padding: 0;
  width: 24rem;
  height: 13rem;

  /* stylelint-disable */
  @media (max-width: 768rem) {
    margin-right: 15rem;
    width: 16rem;
    height: 13rem;
  }
  ${ArrowDownAnimation}
  ${ArrowUpAnimation}
  
  animation: ${({ isOpened }) => (isOpened ? 'ArrowUp 0.3s forwards' : 'ArrowDown 0.3s forwards')};
  -moz-animation: ${({ isOpened }) =>
    isOpened ? 'ArrowUp 0.3s forwards' : 'ArrowDown 0.3s forwards'};
  -webkit-animation: ${({ isOpened }) =>
    isOpened ? 'ArrowUp 0.3s forwards' : 'ArrowDown 0.3s forwards'};
  -o-animation: ${({ isOpened }) =>
    isOpened ? 'ArrowUp 0.3s forwards' : 'ArrowDown 0.3s forwards'};
  color: inherit;
`;

export const Contents = styled.div<ButtonStyleProps>`
  overflow: hidden;
  line-height: 180%;
  letter-spacing: -0.03em;
  white-space: pre-line;
  color: ${colors.gray10};
  font-size: 20rem;
  font-weight: 400;
  font-style: normal;
  @media (max-width: 768rem) {
    font-size: 14rem;
  }

  ${({ isOpened }) =>
    isOpened
      ? css`
          transition: max-height 0.2s ease-in;
          max-height: 3500rem;
          @media screen and (max-width: 1280rem) {
            max-height: 5000rem;
          }
        `
      : css`
          transition: max-height 0.15s ease-out;
          max-height: 0;
        `}
`;
