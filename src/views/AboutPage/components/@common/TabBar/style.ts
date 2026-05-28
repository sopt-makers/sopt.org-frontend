import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { fontsObject } from '@sopt-makers/fonts';
import { css } from '@emotion/react';
import { media } from '@src/lib/styles/breakpoints';

export const TabBar = styled.ul`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;

  ${media.tablet} {
    gap: 16px;
  }

  ${media.mobile} {
    gap: 8px;
  }
`;

export const Tab = styled.li<{ selected: boolean }>`
  flex-shrink: 0;
  box-sizing: border-box;
  padding: 14px 40px;
  border-radius: 14px;
  white-space: nowrap;
  color: ${colors.gray500};
  text-align: center;
  ${fontsObject.HEADING_4_24_B}
  cursor: pointer;

  ${({ selected }) =>
    selected &&
    css`
      background-color: ${colors.gray800};
      color: ${colors.white};
    `};

  ${media.tablet} {
    width: 108px;
    padding: 12px 20px;
    border-radius: 10px;
    ${fontsObject.LABEL_2_16_SB}
  }

  ${media.mobile} {
    padding: 9px 14px;
    border-radius: 8px;
    ${fontsObject.LABEL_3_14_SB}
  }
`;
