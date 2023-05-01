import React, { useMemo } from 'react';
import { useIsDesktop, useIsMobile, useIsTablet } from '@src/hooks/useDevice';

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

const Flex = ({ dir, gap, style, children }: React.PropsWithChildren<FlexProps>) => {
  const isDesktop = useIsDesktop('1200px');
  const isTablet = useIsTablet('766px', '1199.9px');
  const isMobile = useIsMobile('765.9px');
  const parsedGap = useMemo(() => parseProp(gap), [gap]);
  const parsedFlexDirection = useMemo(() => parseProp(dir), [dir]);
  console.log({ style });

  const baseCssProps = useMemo(() => ({ ...style, display: 'flex' }), [style]);
  if (isDesktop)
    return (
      <div
        style={{
          ...baseCssProps,
          gap: parsedGap.desktop,
          flexDirection: parsedFlexDirection.desktop,
        }}
      >
        {children}
      </div>
    );
  if (isTablet)
    return (
      <div
        style={{
          ...baseCssProps,
          gap: parsedGap.tablet,
          flexDirection: parsedFlexDirection.tablet,
        }}
      >
        {children}
      </div>
    );
  if (isMobile)
    return (
      <div
        style={{
          ...baseCssProps,
          gap: parsedGap.mobile,
          flexDirection: parsedFlexDirection.mobile,
        }}
      >
        {children}
      </div>
    );
  return <div style={baseCssProps}>{children}</div>;
};

export default Flex;
