import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { fontsObject } from '@sopt-makers/fonts';
import Image from 'next/image';
import { media } from '@src/lib/styles/breakpoints';

export const IMAGE_SIZE = {
  desktopLarge: { width: 996, height: 540 },
  desktop: { width: 944, height: 512 },
  tablet: { width: 688, height: 373 },
  mobile: { width: 282, height: 162 },
} as const;

type Dimensions = { width: number; height: number };

const setImageSize = ({ width, height }: Dimensions) => `
  width: ${width}px;
  height: ${height}px;
`;

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ImageWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;

  ${media.desktopLarge} {
    ${setImageSize(IMAGE_SIZE.desktopLarge)}
  }
  ${media.desktop} {
    ${setImageSize(IMAGE_SIZE.desktop)}
  }
  ${media.tablet} {
    width: 100%;
    aspect-ratio: ${IMAGE_SIZE.tablet.width} / ${IMAGE_SIZE.tablet.height};
  }
  ${media.mobile} {
    width: 100%;
    aspect-ratio: ${IMAGE_SIZE.mobile.width} / ${IMAGE_SIZE.mobile.height};
  }
`;

export const CardImage = styled(Image)`
  object-fit: cover;

  ${media.desktopLarge} {
    ${setImageSize(IMAGE_SIZE.desktopLarge)}
  }
  ${media.desktop} {
    ${setImageSize(IMAGE_SIZE.desktop)}
  }
  ${media.tablet} {
    width: 100%;
    height: 100%;
  }
  ${media.mobile} {
    width: 100%;
    height: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const TitleRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
`;

export const TitleKor = styled.h3`
  color: ${colors.white};
  ${fontsObject.TITLE_1_32_SB}

  ${media.tablet} {
    ${fontsObject.TITLE_2_28_SB}
  }
  ${media.mobile} {
    ${fontsObject.TITLE_6_16_SB}
  }
`;

export const TitleEng = styled.span`
  color: ${colors.white};
  ${fontsObject.BODY_1_18_M}

  ${media.tablet} {
    ${fontsObject.BODY_2_16_M}
  }
  ${media.mobile} {
    ${fontsObject.BODY_4_13_M}
  }
`;

export const Description = styled.p`
  color: ${colors.white};
  word-break: keep-all;
  white-space: pre-line;
  padding-bottom: 8px;

  ${media.desktopLarge} {
    ${fontsObject.BODY_2_16_M}
  }
  ${media.desktop} {
    ${fontsObject.BODY_2_16_M}
  }
  ${media.tablet} {
    ${fontsObject.BODY_3_14_M}
  }
  ${media.mobile} {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.24px;
  }
`;
