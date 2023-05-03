import styled from '@emotion/styled';
import React, { useMemo } from 'react';

type Responsive<T> = { mobile: T; tablet: T; desktop: T };
type SingleOrResponsive<T> = T | Responsive<T>;

type FlexProps = {
  dir: SingleOrResponsive<React.CSSProperties['flexDirection']>;
  gap: SingleOrResponsive<React.CSSProperties['gap']>;
  style?: React.CSSProperties;
};

function isResponsiveProp<T>(value: SingleOrResponsive<T>): value is Responsive<T> {
  return (
    value !== null &&
    typeof value === 'object' &&
    'mobile' in value &&
    'tablet' in value &&
    'desktop' in value
  );
}

function parseProp<T>(prop: SingleOrResponsive<T>): Responsive<T> {
  if (isResponsiveProp(prop)) {
    return prop;
  }
  return { mobile: prop, tablet: prop, desktop: prop };
}

const cssGapToString = (gap: React.CSSProperties['gap']): string | undefined => {
  if (typeof gap === 'number') return `${gap}px`;
  if (!gap) return '0px';
  return gap;
};

const Flex = ({ dir, gap, style, children }: React.PropsWithChildren<FlexProps>) => {
  const parsedGap = useMemo(() => parseProp(gap), [gap]);
  const parsedFlexDirection = useMemo(() => parseProp(dir), [dir]);

  const baseCssProps = useMemo(() => ({ ...style }), [style]);

  return (
    <Div
      style={{
        ...baseCssProps,
      }}
      gap={parsedGap}
      flexDirection={parsedFlexDirection}
    >
      {children}
    </Div>
  );
};

const Div = styled.div<{
  gap: Responsive<React.CSSProperties['gap']>;
  flexDirection: Responsive<React.CSSProperties['flexDirection']>;
}>`
  display: flex;
  gap: ${(props) => cssGapToString(props.gap.desktop)};
  flex-direction: ${(props) => props.flexDirection.desktop};

  @media (max-width: 1199px) {
    gap: ${(props) => cssGapToString(props.gap.tablet)};
    flex-direction: ${(props) => props.flexDirection.tablet};
  }

  @media (max-width: 765.9px) {
    gap: ${(props) => cssGapToString(props.gap.mobile)};
    flex-direction: ${(props) => props.flexDirection.mobile};
  }
`;

export default Flex;
