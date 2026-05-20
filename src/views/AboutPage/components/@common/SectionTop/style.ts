import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { fontsObject } from '@sopt-makers/fonts';
import { media } from '@src/lib/styles/breakpoints';

export const SectionTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10.46px;

  /* 태블릿 뷰 */
  @media (max-width: 48rem) {
    gap: 10.54px;
  }

  /* 모바일 뷰 */
  @media (max-width: 26.75rem) {
    gap: 10.46px;
  }
`;

export const SectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;

  /* 태블릿 뷰 */
  @media (max-width: 48rem) {
    gap: 1.5px;
  }

  /* 모바일 뷰 */
  @media (max-width: 26.75rem) {
    gap: 2px;
  }
`;

export const EngTitle = styled.h1<{ mainColor: string }>(({ mainColor }) => ({
  color: mainColor,
  textAlign: 'center',
  ...fontsObject.BODY_2_16_M,

  [media.desktop]: {
    ...fontsObject.BODY_2_16_M,
  },

  [media.tablet]: {
    ...fontsObject.LABEL_4_12_SB,
  },

  [media.mobile]: {
    ...fontsObject.LABEL_4_12_SB,
  },
}));

export const KorTitle = styled.h1({
  color: colors.white,
  textAlign: 'center',

  ...fontsObject.HEADING_2_32_B,

  [media.desktop]: {
    ...fontsObject.HEADING_2_32_B,
  },

  [media.tablet]: {
    ...fontsObject.HEADING_6_18_B,
  },

  [media.mobile]: {
    ...fontsObject.HEADING_6_18_B,
  },
});

export const Description = styled.p({
  color: colors.white,
  textAlign: 'center',
  ...fontsObject.TITLE_5_18_SB,
  whiteSpace: 'pre-line',
  wordBreak: 'keep-all',

  [media.desktop]: {
    ...fontsObject.TITLE_5_18_SB,
  },

  [media.tablet]: {
    ...fontsObject.BODY_3_14_M,
  },

  [media.mobile]: {
    ...fontsObject.BODY_3_14_M,
  },
});
