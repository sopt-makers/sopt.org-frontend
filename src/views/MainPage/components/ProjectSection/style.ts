import styled from '@emotion/styled';
import { IconChevronLeft, IconChevronRight } from '@sopt-makers/icons';
import { colorBg, colorFg, typography } from '@sopt-mds/design-tokens';
import { media } from '@src/lib/styles/breakpoints';
import { FEATURED_CARD_HEIGHT, SLIDE_TRANSITION } from './ProjectCard/style';

export const Root = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  width: 100%;
  padding: 160px 0;
  overflow: hidden;

  ${media.tablet} {
    gap: 32px;
    padding: 120px 0;
  }

  ${media.mobile} {
    gap: 24px;
    padding: 80px 0;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  width: 100%;

  ${media.tablet} {
    gap: 48px;
  }

  ${media.mobile} {
    gap: 32px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const Title = styled.h2`
  color: ${colorFg.neutral.bold};
  ${typography.heading1}

  ${media.mobile} {
    ${typography.heading2}
  }
`;

export const Carousel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 100%;
`;

export const Viewport = styled.div`
  --side-width: 324px;
  --featured-width: 500px;
  --gap: 24px;

  width: 100%;
  height: ${FEATURED_CARD_HEIGHT};

  ${media.tablet} {
    --side-width: 240px;
    --featured-width: 400px;
    --gap: 20px;
  }

  ${media.mobile} {
    --side-width: 160px;
    --featured-width: 280px;
    --gap: 12px;
  }
`;

export const Track = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap);
  height: 100%;
  width: max-content;
  /* 트랙 시작점을 화면 가운데에 두고, 가운데 카드의 중심이 화면 가운데 오도록 당긴다 */
  margin-left: 50%;
  transform: translateX(
    calc(-1 * (var(--position) * (var(--side-width) + var(--gap)) + var(--featured-width) / 2))
  );
  transition: transform ${SLIDE_TRANSITION};
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const ArrowButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${colorBg.neutral.ghost};
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

const iconStyle = `
  width: 24px;
  height: 24px;
  color: ${colorFg.neutral.bold};
`;

export const PrevIcon = styled(IconChevronLeft)`
  ${iconStyle}
`;

export const NextIcon = styled(IconChevronRight)`
  ${iconStyle}
`;

export const Dots = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const Dot = styled.button<{ $isActive: boolean }>`
  width: ${({ $isActive }) => ($isActive ? 24 : 12)}px;
  height: 12px;
  border-radius: 99px;
  background-color: ${({ $isActive }) =>
    $isActive ? colorFg.neutral.bold : colorBg.neutral.default};
  cursor: pointer;
  transition: width ${SLIDE_TRANSITION}, background-color ${SLIDE_TRANSITION};
`;
