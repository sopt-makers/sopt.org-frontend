import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FadeIn, FadeOut } from '@src/lib/styles/animation';
import theme from '@src/styles/theme';

type MenuType = 'idle' | 'open' | 'close';

interface CloseButtonProps extends RootProps {
  src: string;
}

interface MenuTitleProps {
  isSelected: boolean;
}

interface RootProps {
  isMenuShown: MenuType;
}

export const Root = styled.div<RootProps>`
  position: fixed;
  top: 0;
  right: 0;

  z-index: 10;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);

  background: #232323;

  height: 100vh;

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

  /* 데스크탑 뷰 */
  @media (min-width: 1280px) {
    width: calc((100vw - 1280px) / 2 + 400px);
  }

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    width: calc((100vw - 375px) / 2 + 250px);
  }
`;

export const MenuWrap = styled.div`
  padding: 0 60px;
  height: 100%;

  /* 데스크탑 뷰 */
  @media (min-width: 1280px) {
    width: 400px;
  }

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    padding: 0 30px;
  }
`;

export const CloseButton = styled.button<CloseButtonProps>`
  position: relative;
  top: 35px;
  right: -256px;

  background: url(${(props: CloseButtonProps) => props.src}) no-repeat;
  background-size: cover;
  cursor: pointer;

  width: 24px;
  height: 24px;

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

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    top: 47px;
    right: -90%;
    /* right: -170px; */
    width: 16px;
    height: 16px;
  }
`;

export const ContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 100px;
  margin-bottom: 50px;

  height: calc(100vh - 200px);

  /* 모바일 세로 짧은 기종 뷰 */
  @media (max-height: 700px) {
    margin-top: 50px;
    margin-bottom: 0px;

    height: calc(100vh - 150px);
  }
`;

export const MenuTitlesWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(1);
  row-gap: 20px;

  padding-bottom: 30px;
`;

export const MenuTitle = styled.a<MenuTitleProps>`
  border-bottom: ${(props: MenuTitleProps) =>
    props.isSelected && `3px solid ${theme.colors.mainColor}`};
  cursor: pointer;
  padding-bottom: 4px;

  width: max-content;

  text-align: left;
  line-height: 25px;
  letter-spacing: -0.03em;

  color: #a9a9a9;
  font-family: 'SUIT', Arial;
  font-size: 20px;
  font-weight: 500;

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    font-size: 16px;
  }
`;

export const BottomWrap = styled.div``;

export const Rules = styled.a`
  cursor: pointer;
  text-decoration-line: underline;
  line-height: 20px;

  letter-spacing: -0.04em;

  color: #a9a9a9;
  font-family: 'SUIT', Arial;
  font-size: 16px;
  font-weight: 800;

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    font-size: 15px;
  }
`;

export const ChannelWrap = styled.div`
  margin-top: 38px;
`;

export const ChannelTitle = styled.p`
  margin-bottom: 15px;
  line-height: 17px;
  letter-spacing: -0.04em;

  color: ${({ theme }) => theme.colors.soptWhite};
  font-family: 'SUIT', arial, sans-serif;
  font-size: 14px;
  font-weight: 600;
`;
