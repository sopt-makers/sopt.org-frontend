import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import Link from 'next/link';
import { css } from '@emotion/react';
import { FadeIn, FadeInDown, FadeOut, FadeOutUp } from '@src/lib/styles/animation';
import { MenuTapType } from '../../types';

type MenuType = 'idle' | 'open' | 'close';

interface CloseButtonProps extends RootProps {
  src: string;
}

interface MenuTitleProps {
  isSelected?: boolean;
  menuColor: MenuTapType;
}

interface RootProps {
  isMenuShown: MenuType;
}

export const Root = styled.div<RootProps>`
  position: fixed;
  top: 48rem;
  right: 0;

  z-index: 9;
  box-shadow: 0rem 0rem 5rem rgba(0, 0, 0, 0.5);

  width: 100%;
  height: 100vh;

  ${({ isMenuShown }) => {
    switch (isMenuShown) {
      case 'open':
        return css`
          ${FadeInDown()}
          animation: fadeindown 0.6s;
          -moz-animation: fadeindown 0.6s; /* Firefox */
          -webkit-animation: fadeindown 0.6s; /* Safari and Chrome */
          -o-animation: fadeindown 0.6s; /* Opera */
        `;
      case 'close':
        return css`
          ${FadeOutUp}
          animation: fadeoutup 0.6s;
          -moz-animation: fadeoutup 0.6s; /* Firefox */
          -webkit-animation: fadeoutup 0.6s; /* Safari and Chrome */
          -o-animation: fadeoutup 0.6s; /* Opera */
          animation-fill-mode: forwards;
        `;
      default:
        return css`
          display: none;
        `;
    }
  }}
`;

export const MenuWrap = styled.div`
  /* padding: 0 30rem; */
  height: 100%;
`;

export const Background = styled.div`
  height: 100vh;
  background: ${colors.gray950};
  opacity: 0.8;
`;

export const CloseButton = styled.button<CloseButtonProps>`
  position: relative;
  top: 12rem;
  left: 272rem;

  background: url(${(props: CloseButtonProps) => props.src}) no-repeat;
  background-size: cover;
  cursor: pointer;

  width: 28rem;
  height: 28rem;

  ${({ isMenuShown }) => {
    switch (isMenuShown) {
      case 'open':
        return css`
          ${FadeIn}
          animation: fadein 0.2s;
          -moz-animation: fadein 0.2s; /* Firefox */
          -webkit-animation: fadein 0.2s; /* Safari and Chrome */
          -o-animation: fadein 0.2s; /* Opera */
        `;
      case 'close':
        return css`
          ${FadeOut}
          animation: fadeout 0.2s;
          -moz-animation: fadeout 0.2s; /* Firefox */
          -webkit-animation: fadeout 0.2s; /* Safari and Chrome */
          -o-animation: fadeout 0.2s; /* Opera */
          animation-fill-mode: forwards;
        `;
      default:
        return css`
          display: none;
        `;
    }
  }}
`;

export const ContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${colors.gray950};

  padding-top: 50rem;
  margin-bottom: 0rem;

  height: 364rem;
`;

export const MenuTitlesWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(1);
  row-gap: 20rem;

  padding-bottom: 30rem;
`;

export const MenuTitleAnchor = styled(Link)`
  display: block;

  color: inherit;
  text-decoration: none;
`;

export const MenuTitle = styled.div<MenuTitleProps>`
  font-size: 16rem;
  font-weight: 500;
  line-height: 32rem;
  font-weight: ${({ isSelected }) => (isSelected ? '700' : '500')};

  color: ${({ isSelected }) => (isSelected ? '#fff' : 'rgba(255, 255, 255, 0.5)')};
  cursor: pointer;
  width: fit-content;

  & * {
    font-size: 100%;
  }

  &:not(:last-child) {
    margin-left: 30rem;
  }

  ${({ menuColor }) =>
    menuColor === 'SPECIAL' &&
    css`
      padding: 0 20rem;
      border-radius: 5.869rem;
      border: 1.027rem solid #4786ff;
      background: rgba(71, 134, 255, 0.28);
      color: #267dff;
    `}
`;

export const Rules = styled(Link)`
  cursor: pointer;
  text-decoration-line: underline;
  line-height: 20rem;

  letter-spacing: -0.04em;

  color: #a9a9a9;
  font-size: 15rem;
  font-weight: 800;
`;

export const ChannelWrap = styled.div`
  margin-top: 38rem;
`;

export const ChannelTitle = styled.p`
  margin-bottom: 15rem;
  line-height: 17rem;
  letter-spacing: -0.04em;

  color: ${colors.gray10};
  font-size: 14rem;
  font-weight: 600;
`;
