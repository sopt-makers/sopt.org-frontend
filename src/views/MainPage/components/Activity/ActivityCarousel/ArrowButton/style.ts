import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { IconChevronLeft, IconChevronRight } from '@sopt-makers/icons';
import { media } from '@src/lib/styles/breakpoints';

export const ArrowButton = styled.button`
  display: flex;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  background-color: ${colors.gray800};

  &:hover:not(:disabled) {
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.4;
    color: ${colors.gray400};
    cursor: not-allowed;
  }
`;

const iconStyle = `
  width: 24px;
  height: 24px;
  color: ${colors.white};

  ${media.mobile} {
    width: 18px;
    height: 18px;
  }
`;

export const PrevIcon = styled(IconChevronLeft)`
  ${iconStyle}
`;

export const NextIcon = styled(IconChevronRight)`
  ${iconStyle}
`;
