import styled from '@emotion/styled';
import { IconArrowUpRight } from '@sopt-makers/icons';
import { colorBg, colorFg, colorStroke, typography } from '@sopt-mds/design-tokens';
import { css, keyframes } from '@emotion/react';
import { media } from '@src/lib/styles/breakpoints';
import { tablet } from '@src/views/MainPage/breakpoints';

const HOVER = '0.3s ease-out';
const REVEAL = '0.55s cubic-bezier(0.2, 0.8, 0.3, 1)';
const RING_DURATION = '1.6s';

const PART_GREEN = colorFg.success.default;
const SURFACE = colorBg.layer.basement;
const SURFACE_EDGE = '#1c1c20';

const spin = keyframes`
  to { transform: translate(-50%, -50%) rotate(360deg); }
`;

export const Reveal = styled.div`
  opacity: 0;
  transform: translateY(26px);
  transition: opacity ${REVEAL}, transform ${REVEAL};
  transition-delay: var(--reveal-delay, 0ms);

  &[data-seen='true'] {
    opacity: 1;
    transform: none;
  }

  ${media.mobile} {
    flex: none;
    scroll-snap-align: start;
  }

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
  }
`;

export const Ring = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150%;
  aspect-ratio: 1;
  background: conic-gradient(
    from 90deg,
    #28423a 0%,
    #28423a 68%,
    rgba(135, 252, 209, 0.55) 70%,
    rgba(185, 254, 228, 0.78) 82.5%,
    #ebfff7 95%,
    #ffffff 96.5%,
    #94a19c 98.25%,
    #28423a 100%
  );
  opacity: 0;
  transform: translate(-50%, -50%);
  transition: opacity ${HOVER};
`;

export const Surface = styled.span`
  position: absolute;
  inset: 1px;
  overflow: hidden;
  border-radius: 11px;
  background-color: ${SURFACE};
  transition: border-radius ${HOVER};

  ${tablet} {
    border-radius: 11px;
  }

  ${media.mobile} {
    border-radius: 11px;
  }
`;

export const Wash = styled.span`
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 50% 50% at 50% 50%, ${SURFACE} 0%, ${SURFACE_EDGE} 100%);
  transition: opacity ${HOVER};
`;

export const Glow = styled.span`
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle 250px at 50% 100%,
    rgba(22, 191, 129, 0.2) 0%,
    rgba(24, 150, 105, 0.2) 17.9%,
    rgba(25, 110, 81, 0.2) 35.8%,
    rgba(27, 69, 56, 0.2) 53.7%,
    rgba(27, 48, 44, 0.2) 62.6%,
    rgba(28, 28, 32, 0.2) 71.6%
  );
  opacity: 0;
  transition: opacity ${HOVER};
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  ${tablet} {
    gap: 8px;
  }
  ${media.mobile} {
    gap: 8px;
  }
`;

export const Tag = styled.span`
  padding: 3px 8px;
  border-radius: 4px;
  background-color: rgba(124, 242, 210, 0.1);
  color: ${PART_GREEN};
  ${typography.title5}

  ${tablet} {
    padding: 2px 6px;
    ${typography.body3}
  }

  ${media.mobile} {
    padding: 2px 6px;
    ${typography.body3}
  }
`;

export const Title = styled.h3`
  color: ${colorFg.neutral.bold};
  white-space: nowrap;
  ${typography.heading2}

  ${tablet} {
    ${typography.title5}
  }

  ${media.mobile} {
    ${typography.title5}
  }
`;

export const Description = styled.p`
  color: ${colorFg.neutral.default};
  ${typography.body1}

  ${tablet} {
    ${typography.body3}
  }

  ${media.mobile} {
    ${typography.body3}
  }
`;

export const CtaIcon = styled(IconArrowUpRight)`
  width: 30px;
  height: 30px;
  color: ${colorStroke.neutral.default};
  transition: translate ${HOVER};

  ${tablet} {
    width: 26px;
    height: 26px;
  }

  ${media.mobile} {
    width: 26px;
    height: 26px;
  }
`;

export const Cta = styled.span`
  position: absolute;
  right: 40px;
  bottom: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: #7cf2d2;
  opacity: 0;
  transform: scale(0.7);
  transition: opacity ${HOVER}, transform 0.35s cubic-bezier(0.3, 1.4, 0.5, 1);

  ${tablet} {
    right: 20px;
    bottom: 20px;
    width: 48px;
    height: 48px;
  }

  ${media.mobile} {
    right: 20px;
    bottom: 20px;
    width: 48px;
    height: 48px;
  }
`;

const activeState = css`
  border-radius: 48px;

  ${Surface} {
    border-radius: 47px;
  }

  ${Ring} {
    opacity: 1;

    @media (prefers-reduced-motion: no-preference) {
      animation: ${spin} ${RING_DURATION} linear infinite;
    }
  }

  ${Wash} {
    opacity: 0;
  }

  ${Glow} {
    opacity: 1;
  }

  ${Cta} {
    opacity: 1;
    transform: none;
  }

  ${CtaIcon} {
    translate: 2px -2px;
  }
`;

export const Card = styled.a`
  position: relative;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  height: 260px;
  padding: 40px;
  overflow: hidden;
  border-radius: 12px;
  background-color: ${SURFACE_EDGE};
  transform: none;
  transition: border-radius ${HOVER}, transform ${REVEAL};

  ${tablet} {
    height: 208px;
    padding: 20px;
    border-radius: 12px;
  }

  ${media.mobile} {
    height: 208px;
    width: 218px;
    padding: 20px;
    border-radius: 12px;
  }

  @media (hover: hover) {
    &:hover {
      ${activeState}
      border-radius: 32px;

      ${Surface} {
        border-radius: 31px;
      }
    }
  }

  &:focus-visible {
    outline: none;
    ${activeState}
    border-radius: 32px;

    ${Surface} {
      border-radius: 31px;
    }
  }

  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    &:hover {
      transform: perspective(900px) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg));
    }
  }
`;
