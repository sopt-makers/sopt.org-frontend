import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { fontsObject } from '@sopt-makers/fonts';
import { IconChevronLeft, IconChevronRight } from '@sopt-makers/icons';
import { media } from '@src/lib/styles/breakpoints';
import { CAROUSEL_GAP, CONTAINER_WIDTHS } from './constants';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  width: 100%;

  ${media.tablet} {
    gap: 24px;
  }

  ${media.mobile} {
    gap: 16px;
  }
`;

export const CarouselSection = styled.div`
  position: relative;
  width: 100%;
  height: 448px;
  margin: 0 auto;

  ${media.desktopLarge} {
    max-width: ${CONTAINER_WIDTHS.desktopLarge}px;
  }

  ${media.desktop} {
    max-width: ${CONTAINER_WIDTHS.desktop}px;
  }

  ${media.tablet} {
    max-width: ${CONTAINER_WIDTHS.tablet}px;
  }

  ${media.mobile} {
    max-width: ${CONTAINER_WIDTHS.mobile}px;
    height: auto;
  }
`;

export const CarouselClip = styled.div`
  width: 100%;
  height: 100%;

  ${media.mobile} {
    overflow: hidden;
    height: auto;
  }
`;

export const CarouselTrack = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  gap: ${CAROUSEL_GAP}px;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
`;

export const NavButton = styled.button<{ $direction: 'prev' | 'next' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $direction }) => ($direction === 'prev' ? 'left: 0;' : 'right: 0;')}

  width: 32px;
  height: 32px;
  border-radius: 999px;
  background-color: ${colors.gray700};
  box-shadow: 0px 6px 20px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  z-index: 1;

  ${media.mobile} {
    ${({ $direction }) =>
      $direction === 'prev' ? 'left: calc(50% - 182px);' : 'right: calc(50% - 182px);'}
  }
`;

export const ChevronRight = styled(IconChevronRight)`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;

export const ChevronLeft = styled(IconChevronLeft)`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;

export const IndicatorList = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const Indicator = styled.button<{ $active: boolean }>`
  height: 12px;
  border-radius: 99px;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: width 0.3s ease, background-color 0.3s ease;
  background-color: ${({ $active }) => ($active ? colors.white : colors.gray400)};
  width: ${({ $active }) => ($active ? '24px' : '12px')};

  ${media.mobile} {
    height: 8px;
    width: ${({ $active }) => ($active ? '16px' : '8px')};
  }
`;

export const MoreButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 42px;
  padding: 12px 20px;
  border: 1px solid ${colors.white};
  border-radius: 10px;
  background-color: transparent;
  color: ${colors.white};
  ${fontsObject.TITLE_6_16_SB}
  white-space: nowrap;

  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    background: ${colors.white};
    color: ${colors.black};
  }

  ${media.tablet} {
    height: 36px;
    padding: 9px 14px;
    border-radius: 8px;
    ${fontsObject.LABEL_3_14_SB}
  }

  ${media.mobile} {
    height: 36px;
    padding: 9px 14px;
    border-radius: 8px;
    ${fontsObject.LABEL_3_14_SB}
  }
`;

export const RightArrowIcon = styled(ChevronRight)`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
`;
