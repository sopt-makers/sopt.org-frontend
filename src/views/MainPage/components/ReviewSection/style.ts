import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import icArrowComment from '@src/assets/icons/ic_arrow_comment.svg';
import icArrowLeft from '@src/assets/icons/ic_arrow_left.svg';
import icArrowRight from '@src/assets/icons/ic_arrow_right.svg';
import { media } from '@src/lib/styles/breakpoints';

export const Wrapper = styled.section`
  background-color: #000;
  padding: 232px 0 0;
  max-width: 1200px;
  margin: 0 auto;

  ${media.desktop} {
    padding: 232px 0 0;
    max-width: 944px;
  }

  ${media.tablet} {
    padding: 100px 0 0;
    max-width: 688px;
  }

  ${media.mobile} {
    padding: 100px 0 0;
  }
`;

export const Summary = styled(motion.div)<{ color: string }>`
  color: ${({ color }) => color};
  font-family: SUIT;
  font-size: 77rem;
  font-weight: 500;
  line-height: 79px;
  letter-spacing: -2.31px;
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
    font-size: 64rem;
    padding-left: 64px;

    &::before {
      width: 48px;
      height: 48px;
    }
  }

  ${media.tablet} {
    font-size: 52rem;
    line-height: 60px;
    padding-left: 52px;

    &::before {
      width: 40px;
      height: 40px;
      top: 10px;
    }
  }

  ${media.mobile} {
    font-size: 38rem;
    line-height: 44px;
    letter-spacing: -1.14px;
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

  ${media.desktop} {
    height: 520px;
  }

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

export const ArrowLeftIcon = styled.div`
  width: 20px;
  height: 20px;
  background-color: #fff;
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
  mask-image: url(${icArrowLeft});
`;

export const ArrowRightIcon = styled.div`
  width: 20px;
  height: 20px;
  background-color: #fff;
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
  mask-image: url(${icArrowRight});
`;
