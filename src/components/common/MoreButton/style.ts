import styled from '@emotion/styled';
import { colorFg, colorStroke, typography } from '@sopt-mds/design-tokens';
import { ReactComponent as IcArrowMore } from '@src/assets/icons/ic_arrow_more.svg';

const EASE = 'cubic-bezier(0.2, 0.8, 0.3, 1)';
const DURATION = '0.55s';

const boxBase = `
  border: 1px solid ${colorStroke.neutral.default};
  border-radius: 10px;
  transition:
    border-color ${DURATION} ${EASE},
    background ${DURATION} ${EASE};
`;

export const LabelBox = styled.div`
  ${boxBase}
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 40px;
  padding: 8px 16px;
  color: ${colorFg.neutral.bold};
  ${typography.body2}
  white-space: nowrap;

  &::after {
    content: attr(data-label);
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }
`;

export const IconBox = styled.div`
  ${boxBase}
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
`;

export const Arrow = styled(IcArrowMore)`
  width: 13px;
  height: 13px;
  color: ${colorFg.neutral.bold};
  flex-shrink: 0;
  transition: transform ${DURATION} ${EASE};
`;

export const Root = styled.button<{ mainColor: string }>`
  position: relative;
  isolation: isolate;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    inset: -160px -240px;
    z-index: -1;
    background: radial-gradient(closest-side, ${({ mainColor }) => mainColor}, transparent);
    opacity: 0;
    pointer-events: none;
    transition: opacity ${DURATION} ${EASE};
  }

  &:hover::before {
    opacity: 0.05;
  }

  &:hover ${Arrow} {
    transform: translate(2px, -2px);
  }
`;
