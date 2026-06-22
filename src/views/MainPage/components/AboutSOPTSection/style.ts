import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { fontsObject } from '@sopt-makers/fonts';
import Link from 'next/link';
import { css } from '@emotion/react';
import { media } from '@src/lib/styles/breakpoints';

export const Wrapper = styled.section`
  display: flex;
  width: 100%;
  padding: 154px 40px 0 40px;
  gap: 40px;

  @media (min-width: 1580px) {
    display: grid;
    grid-template-columns: 1fr minmax(0, 1200px) 1fr;
    gap: 0;
  }

  ${media.tablet} {
    padding-top: 100px;
  }

  ${media.mobile} {
    padding: 0 20px;
    padding-top: 100px;
  }
`;

export const MenuLayout = styled.div`
  display: none;

  @media (min-width: 1580px) {
    display: flex;
    flex-direction: column;
    justify-self: end;
    padding-right: 40px;
  }
`;

export const MenuOffset = styled.div`
  height: 100px;
  flex-shrink: 0;

  @media (min-width: 1580px) {
    height: 0;
  }
`;

export const FloatingMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9.27px;
  position: sticky;
  top: 104px;
  height: fit-content;
  z-index: 10;
`;

export const MenuWrapper = styled.div<{
  isInView?: boolean;
  mainColor: string;
  textColor: string;
}>`
  position: relative;
  border-radius: 10px;
  color: ${colors.white};
  background-color: ${colors.gray950};
  ${fontsObject.LABEL_1_18_SB}

  ${({ isInView, mainColor, textColor }) =>
    isInView &&
    css`
      background-color: ${mainColor};
      color: ${textColor};
    `};
`;

export const Menu = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  ${fontsObject.LABEL_1_18_SB}
`;

export const ScrollContentLayout = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  z-index: 1;
  overflow: visible;

  @media (min-width: 1580px) {
    margin: 0;
    max-width: 100%;
  }

  ${media.desktop} {
    max-width: 944px;
  }
`;

export const ScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 232px;

  ${media.tablet} {
    gap: 100px;
  }

  ${media.mobile} {
    gap: 100px;
  }
`;
