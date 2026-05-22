import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { fontsObject } from '@sopt-makers/fonts';
import { media } from '@src/lib/styles/breakpoints';
import { CARD_WIDTHS } from '../constants';

export const Wrapper = styled.article<{ $isActive: boolean }>`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  background-color: ${colors.gray900};
  cursor: pointer;
  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1), height 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    padding 0.4s cubic-bezier(0.4, 0, 0.2, 1), border-radius 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  ${({ $isActive }) =>
    $isActive
      ? `
    width: ${CARD_WIDTHS.desktop.active}px;
    height: 448px;
    gap: 14px;
    padding: 24px 24px 48px;
    border-radius: 32px;
  `
      : `
    width: ${CARD_WIDTHS.desktop.inactive}px;
    height: 324px;
    gap: 16px;
    padding: 16px;
    border-radius: 24px;
  `}

  ${media.mobile} {
    width: ${CARD_WIDTHS.mobile.active}px;
    height: auto;
    gap: 14px;
    padding: 16px 24px;
    border-radius: 32px;
  }
`;

export const Thumbnail = styled.img<{ $isActive: boolean }>`
  width: 100%;
  object-fit: cover;
  flex-shrink: 0;
  transition: height 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    border-radius 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  ${({ $isActive }) =>
    $isActive
      ? `
    height: 270px;
    border-radius: 12px;
  `
      : `
    height: 192px;
    border-radius: 8px;
  `}

  ${media.mobile} {
    height: 154px;
    border-radius: 12px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Title = styled.h3<{ $isActive: boolean }>(({ $isActive }) => ({
  color: colors.white,
  ...($isActive ? fontsObject.HEADING_4_24_B : fontsObject.HEADING_6_18_B),

  [media.mobile]: {
    ...fontsObject.HEADING_7_16_B,
  },
}));

export const Category = styled.p<{ $isActive: boolean }>(({ $isActive }) => ({
  color: colors.gray400,
  ...($isActive ? fontsObject.TITLE_6_16_SB : fontsObject.LABEL_4_12_SB),

  [media.mobile]: {
    ...fontsObject.LABEL_4_12_SB,
  },
}));

export const Description = styled.p<{ $isActive: boolean }>(({ $isActive }) => ({
  color: colors.gray50,
  ...($isActive ? fontsObject.TITLE_4_20_SB : fontsObject.BODY_3_14_R),
  ...(!$isActive && {
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  }),

  [media.mobile]: {
    ...fontsObject.BODY_3_14_M,
  },
}));
