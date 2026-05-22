import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { fontsObject } from '@sopt-makers/fonts';
import Image from 'next/image';
import { media } from '@src/lib/styles/breakpoints';

export const Background = styled.main`
  width: 286px;
  height: 381px;
  border-radius: 14px;
  margin-top: 51px;
  margin-right: 27px;
  position: relative;
  flex-shrink: 0;

  cursor: pointer;

  transition: all 0.2s linear;

  ${media.tablet} {
    height: 315px;
    width: 237px;
  }

  ${media.mobile} {
    margin-top: 24px;
    width: 136px;
    height: 182px;
    margin-right: 12px;
  }
`;

export const Title = styled.h1`
  position: absolute;
  top: 0;
  margin: 18px;
  z-index: 2;

  color: ${colors.white};
  ${fontsObject.HEADING_5_20_B}

  ${media.tablet} {
    ${fontsObject.HEADING_7_16_B}
  }

  ${media.mobile} {
    ${fontsObject.TITLE_7_14_SB}
  }
`;

export const CardImage = styled(Image)`
  object-fit: cover;
  border-radius: 14px;
`;
