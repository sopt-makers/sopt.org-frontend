import styled from '@emotion/styled';
import { Tab } from '@sopt-makers/ui';
import { motion } from 'framer-motion';
import { media } from '@src/lib/styles/breakpoints';
import { IMAGE_SIZE } from '@src/views/MainPage/components/Activity/ActivityCarousel/ActivityCard/style';

export const CAROUSEL_GAP = 24;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: visible;
`;

export const TabContainer = styled(Tab)`
  ${media.mobile} {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const Track = styled(motion.div)`
  display: flex;
  align-items: stretch;
  width: fit-content;

  ${media.tablet} {
    width: 100%;
  }
  ${media.mobile} {
    width: 100%;
  }
`;

export const Slide = styled.div<{ $isActive: boolean }>`
  flex-shrink: 0;
  width: ${IMAGE_SIZE.desktop.width}px;
  margin-right: ${CAROUSEL_GAP}px;
  cursor: ${({ $isActive }) => ($isActive ? 'default' : 'pointer')};

  ${media.desktopLarge} {
    width: ${IMAGE_SIZE.desktopLarge.width}px;
  }
  ${media.tablet} {
    flex: 0 0 100%;
    width: 100%;
    margin-right: 0;
  }
  ${media.mobile} {
    flex: 0 0 100%;
    width: 100%;
    margin-right: 0;
  }
`;

export const ArrowLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  ${media.mobile} {
    gap: 6px;
  }
`;
