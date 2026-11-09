import styled from '@emotion/styled';
import { colorBg, colorFg, typography } from '@sopt-mds/design-tokens';
import CommonTab from '@src/components/common/Tab';
import { media } from '@src/lib/styles/breakpoints';
import { SLIDE_TRANSITION } from './ActivitiesCard/style';

const TAB_TRANSITION = '0.55s cubic-bezier(0.2, 0.8, 0.3, 1)';

export const Root = styled.section`
  display: flex;
  justify-content: center;
  padding: 160px 40px;
  overflow: hidden;

  ${media.tablet} {
    padding: 120px 40px;
  }

  ${media.mobile} {
    padding: 80px 20px;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 32px;
  margin-bottom: 34px;

  ${media.tablet} {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    margin-bottom: 4px;
  }

  ${media.mobile} {
    flex-direction: column;
    align-items: center;
    gap: 32px;
    margin-bottom: 16px;
  }
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  ${media.mobile} {
    align-items: center;
    gap: 8px;
  }
`;

export const Title = styled.h2`
  color: ${colorFg.neutral.bold};
  white-space: nowrap;
  ${typography.heading1}

  ${media.mobile} {
    ${typography.title3}
  }
`;

export const Tabs = styled(CommonTab.List)`
  display: flex;
  flex: none;
  align-items: flex-end;
  gap: 18px;
  padding-top: 12px;

  ${media.tablet} {
    padding: 12px 0;
  }

  ${media.mobile} {
    flex-wrap: wrap;
    justify-content: center;
    gap: 4px 12px;
    width: 100%;
    padding: 0;
  }
`;

export const Tab = styled(CommonTab.Item)`
  position: relative;
  padding-bottom: 8px;
  color: ${colorFg.neutral.ghost};
  white-space: nowrap;
  cursor: pointer;
  transition: color ${TAB_TRANSITION};
  ${typography.heading2}

  &::after {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 2px;
    background-color: ${colorBg.neutral.inverse};
    content: '';
    transform: scaleX(0);
    transition: transform ${TAB_TRANSITION};
  }

  &[aria-selected='true'] {
    color: ${colorFg.neutral.bold};
  }

  &[aria-selected='true']::after {
    transform: scaleX(1);
  }

  @media (hover: hover) {
    &:not([aria-selected='true']):hover {
      color: ${colorFg.neutral.default};
    }
  }

  &:focus-visible {
    outline: 2px solid ${colorFg.neutral.bold};
    outline-offset: 3px;
  }

  ${media.tablet} {
    ${typography.title4}
  }

  ${media.mobile} {
    ${typography.body2}
    font-weight: 700;
  }

  @media (prefers-reduced-motion: reduce) {
    &,
    &::after {
      transition: none;
    }
  }
`;

export const Viewport = styled.div`
  --card-width: 320px;
  --active-width: 689px;
  --gap: 24px;
  --shot-height: 374px;
  --slide-duration: 0.75s;

  container-type: inline-size;
  overflow: hidden;
  margin-right: calc((100% - 100vw) / 2);
  touch-action: pan-y;
  user-select: none;

  ${media.tablet} {
    --active-width: 688px;
    margin-right: 0;
  }

  ${media.mobile} {
    --card-width: 100cqw;
    --active-width: var(--card-width);
    --shot-height: 152px;
    margin-right: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    --slide-duration: 0s;
  }
`;

export const Track = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--gap);
  width: max-content;
  transform: translateX(calc(-1 * var(--position) * (var(--card-width) + var(--gap))));
  transition: transform ${SLIDE_TRANSITION};
`;

export const Controls = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 24px;

  ${media.tablet} {
    margin-top: 32px;
  }

  ${media.mobile} {
    margin-top: 32px;
  }
`;
