import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { fontsObject } from '@sopt-makers/fonts';
import { media } from '@src/lib/styles/breakpoints';

export const Button = styled.button`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border-radius: 10px;
  border: 1px solid ${colors.white};
  gap: 4px;

  ${fontsObject.TITLE_6_16_SB}
  color: ${colors.white};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${colors.white};
    color: ${colors.black};
  }

  ${media.tablet} {
    padding: 9px 14px;
    ${fontsObject.LABEL_3_14_SB}
  }

  ${media.mobile} {
    padding: 9px 14px;
    ${fontsObject.LABEL_3_14_SB}
  }
`;
