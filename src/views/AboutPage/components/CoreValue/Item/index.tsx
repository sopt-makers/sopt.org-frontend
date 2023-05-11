import { useMemo, useState } from 'react';
import Flex from '@src/components/common/Flex';
import { useIsDesktop, useIsMobile, useIsTablet } from '@src/hooks/useDevice';
import useInView from '@src/hooks/useInView';
import { CoreValueType } from '@src/lib/types/about';
import * as St from './style';

type CoreValueProps = {
  coreValue: CoreValueType;
  order: number;
};

const getBackgroundBlurStrength = (
  isDesktop: boolean,
  isTablet: boolean,
  isMobile: boolean,
  isHovered: boolean,
): St.BlurStrengthType => {
  if (isTablet) return 'small';
  if (isMobile) return 'medium';
  if (isDesktop) {
    if (isHovered) return 'strong';
    return 'none';
  }
  return 'none';
};

const CoreValueItem = ({ coreValue, order }: CoreValueProps) => {
  const isDesktop = useIsDesktop('1200px');
  const isTablet = useIsTablet('766px', '1199.9px');
  const isMobile = useIsMobile('765.9px');
  const [isHovered, setIsHovered] = useState(false);

  const { isInView, ref: wrapperRef } = useInView();

  const blurStrength = useMemo(
    () => getBackgroundBlurStrength(isDesktop, isTablet, isMobile, isHovered),
    [isDesktop, isTablet, isMobile, isHovered],
  );

  return (
    <St.ItemContainer
      src={coreValue.src}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      order={order}
      isInView={isInView}
      ref={wrapperRef}
    >
      <St.BackgroundBlur strength={blurStrength} />
      <Flex
        dir="column"
        gap={{ desktop: 16, tablet: 8, mobile: 8 }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <St.CoreValue>{coreValue.title}</St.CoreValue>
        <St.CoreValueSub isHovered={isHovered}>{coreValue.description}</St.CoreValueSub>
      </Flex>
    </St.ItemContainer>
  );
};

export default CoreValueItem;
