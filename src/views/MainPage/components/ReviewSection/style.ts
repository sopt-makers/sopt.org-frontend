import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { fontsObject } from '@sopt-makers/fonts';
import { IconChevronLeft, IconChevronRight } from '@sopt-makers/icons';
import { motion } from 'framer-motion';
import icArrowComment from '@src/assets/icons/ic_arrow_comment.svg';
import { media } from '@src/lib/styles/breakpoints';

export const Wrapper = styled.section`
  width: 100%;
  scroll-margin-top: 100px;
`;

export const Summary = styled(motion.div)<{ color: string }>`
  color: ${({ color }) => color};

  font-size: 72rem;
  font-weight: 500;
  font-size: 72px;
  line-height: 1;
  letter-spacing: -0.03em;

  padding-left: 76px;
  white-space: pre-line;
  position: relative;
  margin-bottom: 48px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 12px;
    mask-image: url(${icArrowComment});
    mask-size: contain;
    mask-repeat: no-repeat;
    background-color: ${({ color }) => color};
    width: 58px;
    height: 58px;
  }

  ${media.desktop} {
    font-size: 72rem;
    font-weight: 500;
    font-size: 72px;
    line-height: 1;
    letter-spacing: -0.03em;

    padding-left: 64px;

    &::before {
      width: 48px;
      height: 48px;
    }
  }

  ${media.tablet} {
    /* mds X */
    font-family: 'SUIT', sans-serif;
    font-weight: 500;
    font-size: 64px;
    line-height: 1;
    letter-spacing: -0.03em;

    padding-left: 52px;

    &::before {
      width: 40px;
      height: 40px;
      top: 10px;
    }
  }

  ${media.mobile} {
    ${fontsObject.TITLE_2_28_SB}
    padding-left: 44px;
    margin-bottom: 24px;

    &::before {
      width: 32px;
      height: 32px;
      top: 8px;
    }
  }
`;

export const CardsWrapper = styled.div`
  height: 520px;
  overflow: visible;

  ${media.tablet} {
    height: 480px;
  }

  ${media.mobile} {
    height: 280px;
  }
`;

export const CardList = styled(motion.div)`
  display: flex;
  align-items: flex-end;
  height: 100%;
  gap: 24px;
  will-change: transform;
`;

export const NavButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 40px;

  ${media.mobile} {
    margin-top: 24px;
  }
`;

export const NavButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 999px;
  background-color: #17181c;
  cursor: pointer;
  border: none;
  outline: none;
  flex-shrink: 0;
  transition: opacity 0.2s;

  &:hover:not(:disabled) {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.3;
    cursor: default;
  }
`;

export const ArrowLeftIcon = styled(IconChevronLeft)`
  width: 20px;
  height: 20px;
  color: ${colors.white};
`;

export const ArrowRightIcon = styled(IconChevronRight)`
  width: 20px;
  height: 20px;
  color: ${colors.white};
`;
