import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { fontsObject } from '@sopt-makers/fonts';
import Link from 'next/link';
import { css } from '@emotion/react';
import { media } from '@src/lib/styles/breakpoints';

const wrapperStyle = css`
  width: 282px;
  height: 200px;
  background-color: ${colors.gray900};
  border-radius: 10px;

  ${media.desktop} {
    width: 218px;
    height: 200px;
  }

  /* 태블릿 뷰 */
  ${media.tablet} {
    width: 160px;
    height: 154px;
  }

  /* 모바일 뷰 */
  ${media.mobile} {
    width: 100%;
    height: 154px;
  }
`;

export const LinkWrapper = styled(Link)`
  ${wrapperStyle}
`;

export const BlockWrapper = styled.div`
  ${wrapperStyle}
`;

export const Title = styled.div({
  ...fontsObject.TITLE_4_20_SB,
  color: 'white',

  [media.desktop]: {
    ...fontsObject.TITLE_4_20_SB,
  },

  [media.tablet]: {
    ...fontsObject.TITLE_6_16_SB,
  },

  [media.mobile]: {
    ...fontsObject.TITLE_6_16_SB,
  },
});

export const Count = styled.div<{ mainColor: string }>(({ mainColor }) => ({
  position: 'relative',
  color: mainColor,
  // TODO: makers fonts에 Heading_40_B가 없음..
  fontSize: 40,
  lineHeight: '60px',
  fontWeight: 700,

  [media.desktop]: {
    fontSize: 40,
    lineHeight: '60px',
    fontWeight: 700,
  },

  [media.tablet]: {
    ...fontsObject.HEADING_3_28_B,
  },

  [media.mobile]: {
    ...fontsObject.HEADING_3_28_B,
  },
}));
