import styled from '@emotion/styled';
import Link from 'next/link';
import { css } from '@emotion/react';
import { FadeIn, FadeInDown, FadeOut, FadeOutUp } from '@src/lib/styles/animation';

type MenuType = 'idle' | 'open' | 'close';

interface CloseButtonProps extends RootProps {
  src: string;
}

interface MenuTitleProps {
  isSelected?: boolean;
}

interface RootProps {
  isMenuShown: MenuType;
}

export const Root = styled.div<RootProps>`
  position: fixed;
  top: 48px;
  right: 0;

  z-index: 9;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);

  width: 100%;
  height: 100vh;

  ${(props) => {
    switch (props.isMenuShown) {
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
  /* padding: 0 30px; */
  height: 100%;
`;

export const Background = styled.div`
  height: 100vh;
  background: #181818;
  opacity: 0.8;
`;

export const CloseButton = styled.button<CloseButtonProps>`
  position: relative;
  top: 12px;
  left: 272px;

  background: url(${(props: CloseButtonProps) => props.src}) no-repeat;
  background-size: cover;
  cursor: pointer;

  width: 28px;
  height: 28px;

  ${(props) => {
    switch (props.isMenuShown) {
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
  background: #181818;

  padding-top: 50px;
  margin-bottom: 0px;

  height: 364px;
`;

export const MenuTitlesWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(1);
  row-gap: 20px;

  padding-bottom: 30px;
`;

export const MenuTitleAnchor = styled(Link)`
  display: block;

  color: inherit;
  text-decoration: none;
`;

export const MenuTitle = styled.div<MenuTitleProps>`
  font-size: 16px;
  font-weight: 500;
  line-height: 32px;
  font-weight: ${({ isSelected }) => (isSelected ? '700' : '500')};

  color: ${({ isSelected }) => (isSelected ? '#fff' : 'rgba(255, 255, 255, 0.5)')};
  cursor: pointer;

  &:not(:last-child) {
    padding-left: 30px;
    padding-right: 40px;
  }
`;

export const Rules = styled(Link)`
  cursor: pointer;
  text-decoration-line: underline;
  line-height: 20px;

  letter-spacing: -0.04em;

  color: #a9a9a9;
  font-size: 15px;
  font-weight: 800;
`;

export const ChannelWrap = styled.div`
  margin-top: 38px;
`;

export const ChannelTitle = styled.p`
  margin-bottom: 15px;
  line-height: 17px;
  letter-spacing: -0.04em;

  color: ${({ theme }) => theme.colors.soptWhite};
  font-size: 14px;
  font-weight: 600;
`;
