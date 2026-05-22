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
    display: block;
  }
`;

export const MenuOffset = styled.div`
  height: 100px;
  flex-shrink: 0;
`;

export const FloatingMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9.27px;
  position: sticky;
  top: 104px;
  height: fit-content;
  z-index: 100;
`;

export const MenuWrapper = styled.div<{ isInView?: boolean; mainColor: string }>`
  position: relative;
  border-radius: 10px;
  color: ${colors.white};
  background-color: ${colors.gray950};
  ${fontsObject.LABEL_1_18_SB}

  ${({ isInView, mainColor }) =>
    isInView &&
    css`
      background-color: ${mainColor};
      color: ${colors.white};
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
