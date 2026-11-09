import styled from '@emotion/styled';
import { colorBg, colorFg, colorStroke, typography } from '@sopt-mds/design-tokens';
import NextImage from 'next/image';
import { media } from '@src/lib/styles/breakpoints';

export const SLIDE_DURATION = 'var(--slide-duration, 0.75s)';
export const SLIDE_TRANSITION = `${SLIDE_DURATION} cubic-bezier(0.2, 0.8, 0.3, 1)`;
const IMAGE_ZOOM = '0.9s cubic-bezier(0.2, 0.7, 0.3, 1)';

const LEAD2 = { fontSize: '18px', fontWeight: 400, lineHeight: '30px', letterSpacing: '-0.015em' };

const DESCRIPTION_LINES = { desktop: 2, mobile: 3 };
const lineHeight = (font: { lineHeight: string }) => parseFloat(font.lineHeight);
const DESCRIPTION_HEIGHT = {
  desktop: lineHeight(typography.body1) * DESCRIPTION_LINES.desktop,
  mobile: lineHeight(typography.body3) * DESCRIPTION_LINES.mobile,
};
const DETAILS_GAP = 24;
const MORE_BUTTON_HEIGHT = 40;

export const IMAGE_SIZES = '(max-width: 767px) calc(100vw - 40px), 689px';

export const Image = styled(NextImage)`
  object-fit: cover;
  transition: transform ${IMAGE_ZOOM};
`;

export const Dim = styled.span`
  position: absolute;
  inset: 0;
  background-color: ${colorBg.dim.default};
  transition: opacity ${SLIDE_TRANSITION};

  ${media.mobile} {
    opacity: 0;
  }
`;

export const Shot = styled.div`
  position: relative;
  width: 100%;
  height: var(--shot-height);
  overflow: hidden;
  border: 1.5px solid ${colorStroke.neutral.ghost};
  border-radius: 12px;
  background-color: ${colorBg.neutral.ghost};

  ${media.mobile} {
    border-radius: 6px;
  }
`;

export const Titles = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
  color: ${colorFg.neutral.ghost};
  white-space: nowrap;
  transition: color ${SLIDE_TRANSITION};

  ${media.mobile} {
    margin-top: 8px;
    color: ${colorFg.neutral.bold};
  }
`;

export const Ko = styled.span`
  ${typography.heading1}

  ${media.mobile} {
    ${typography.title3}
  }
`;

export const En = styled.span`
  ${LEAD2}

  ${media.mobile} {
    ${typography.body2}
  }
`;

export const Description = styled.p`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${DESCRIPTION_LINES.desktop};
  height: ${DESCRIPTION_HEIGHT.desktop}px;
  color: ${colorFg.neutral.default};
  ${typography.body1}

  ${media.mobile} {
    -webkit-line-clamp: ${DESCRIPTION_LINES.mobile};
    height: ${DESCRIPTION_HEIGHT.mobile}px;
    ${typography.body3}
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${DETAILS_GAP}px;
  width: var(--active-width);
  height: ${DESCRIPTION_HEIGHT.desktop + DETAILS_GAP + MORE_BUTTON_HEIGHT}px;
  margin-top: 16px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: opacity ${SLIDE_TRANSITION}, transform ${SLIDE_TRANSITION},
    visibility 0s linear ${SLIDE_DURATION};

  ${media.mobile} {
    height: ${DESCRIPTION_HEIGHT.mobile + DETAILS_GAP + MORE_BUTTON_HEIGHT}px;
    margin-top: 8px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: var(--card-width);
  overflow: hidden;
  cursor: pointer;
  transition: width ${SLIDE_TRANSITION};

  &[data-active='true'] {
    width: var(--active-width);
    cursor: default;

    ${Dim} {
      opacity: 0;
    }

    ${Titles} {
      color: ${colorFg.neutral.bold};
    }

    ${Details} {
      opacity: 1;
      visibility: visible;
      transform: none;
      transition: opacity ${SLIDE_TRANSITION}, transform ${SLIDE_TRANSITION}, visibility 0s;
    }
  }

  @media (hover: hover) {
    &[data-active='true']:hover ${Image} {
      transform: scale(1.06);
    }

    &[data-active='false']:hover ${Dim} {
      opacity: 0.7;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    ${Image} {
      transition: none;
    }
  }
`;
