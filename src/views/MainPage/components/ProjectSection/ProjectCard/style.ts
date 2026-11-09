import styled from '@emotion/styled';
import { colorBg, colorFg, typography } from '@sopt-mds/design-tokens';
import Link from 'next/link';

export const SLIDE_TRANSITION = '0.65s cubic-bezier(0.33, 1, 0.68, 1)';

const IMAGE_RATIO = 192 / 324;

const LEAD2 = { fontSize: '18px', fontWeight: 400, lineHeight: '30px', letterSpacing: '-0.015em' };

const lineHeight = (font: { lineHeight: string }) => parseFloat(font.lineHeight);
const SIDE = {
  gap: 18,
  titleHeight: lineHeight(typography.title5),
  detailsGap: 4,
  summaryHeight: lineHeight(typography.body2) * 2,
};
const FEATURED = {
  gap: 28,
  titleHeight: lineHeight(typography.heading2),
  detailsGap: 6,
  summaryHeight: lineHeight(LEAD2) * 2,
};

const detailsHeight = (size: typeof SIDE) =>
  size.titleHeight + size.detailsGap + size.summaryHeight;

export const FEATURED_CARD_HEIGHT = `calc(var(--featured-width) * ${IMAGE_RATIO} + ${
  FEATURED.gap + detailsHeight(FEATURED)
}px)`;

export const ImageBox = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / ${IMAGE_RATIO};
  overflow: hidden;
  border-radius: 8px;
  background-color: ${colorBg.neutral.ghost};
  transition: border-radius ${SLIDE_TRANSITION};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-out;
`;

export const StatusList = styled.div`
  position: absolute;
  left: 16px;
  bottom: 16px;
  display: flex;
  gap: 8px;
  opacity: 0;
  transition: opacity ${SLIDE_TRANSITION};
`;

export const Status = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: ${colorBg.dim.default};
  color: ${colorFg.neutral.bold};
  ${typography.label4}
  white-space: nowrap;
`;

export const StatusDot = styled.span<{ color: string }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
`;

export const DetailsArea = styled.div`
  position: relative;
  width: 100%;
  height: ${detailsHeight(SIDE)}px;
  overflow: hidden;
  transition: height ${SLIDE_TRANSITION};
`;

export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  white-space: nowrap;
`;

export const Name = styled.p`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${colorFg.neutral.bold};
  ${typography.title5}
`;

export const Platforms = styled.p`
  flex-shrink: 0;
  color: ${colorFg.neutral.subtle};
  ${typography.body3}
`;

export const Summary = styled.p`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  height: ${SIDE.summaryHeight}px;
  overflow-wrap: anywhere;
  color: ${colorFg.neutral.subtle};
  ${typography.body2}
`;

export const Details = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: ${SIDE.detailsGap}px;
  width: var(--side-width);
  padding: 0 12px;
  text-align: left;
  transition: opacity ${SLIDE_TRANSITION};

  &[data-variant='featured'] {
    gap: ${FEATURED.detailsGap}px;
    width: var(--featured-width);

    ${TitleRow} {
      gap: 8px;
    }

    ${Name} {
      ${typography.heading2}
    }

    ${Platforms} {
      ${typography.title5}
    }

    ${Summary} {
      height: ${FEATURED.summaryHeight}px;
      color: ${colorFg.neutral.default};
      ${LEAD2}
    }
  }
`;

export const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${SIDE.gap}px;
  flex-shrink: 0;
  width: var(--side-width);
  opacity: 0.6;
  transition: width ${SLIDE_TRANSITION}, gap ${SLIDE_TRANSITION}, opacity ${SLIDE_TRANSITION};

  &:hover ${Image} {
    transform: scale(1.06);
  }

  ${Details}[data-variant='featured'] {
    opacity: 0;
  }

  &[data-featured='true'] {
    width: var(--featured-width);
    gap: ${FEATURED.gap}px;
    opacity: 1;

    ${ImageBox} {
      border-radius: 12px;
    }

    ${StatusList} {
      opacity: 1;
    }

    ${DetailsArea} {
      height: ${detailsHeight(FEATURED)}px;
    }

    ${Details}[data-variant='side'] {
      opacity: 0;
    }

    ${Details}[data-variant='featured'] {
      opacity: 1;
    }
  }
`;
