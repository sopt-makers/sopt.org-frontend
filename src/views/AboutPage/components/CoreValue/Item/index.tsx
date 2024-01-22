import { useMemo, useState } from 'react';
import { useIsDesktop, useIsMobile, useIsTablet } from '@src/hooks/useDevice';
import useInView from '@src/hooks/useInView';
import { CoreValueType } from '@src/lib/types/about';
import * as S from './style';

type CoreValueProps = {
  coreValue: CoreValueType;
  order: number;
};

const getBackgroundBlurStrength = (
  isDesktop: boolean,
  isTablet: boolean,
  isMobile: boolean,
  isHovered: boolean,
): S.BlurStrengthType => {
  if (isTablet) return 'small';
  if (isMobile) return 'medium';
  if (isDesktop) {
    if (isHovered) return 'strong';
    return 'none';
  }
  return 'none';
};

const CoreValueItem = ({ coreValue, order }: CoreValueProps) => {
  const isDesktop = useIsDesktop('769px');
  const isTablet = useIsTablet('768px', '429px');
  const isMobile = useIsMobile('428px');
  const [isHovered, setIsHovered] = useState(false);

  const { isInView, ref: wrapperRef } = useInView();

  const blurStrength = useMemo(
    () => getBackgroundBlurStrength(isDesktop, isTablet, isMobile, isHovered),
    [isDesktop, isTablet, isMobile, isHovered],
  );

  return (
    <S.ItemContainer
      src={coreValue.src}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      order={order}
      isInView={isInView}
      ref={wrapperRef}
    >
      <S.BackgroundBlur strength={blurStrength} isHovered={isHovered} />
      <S.CoreValue>
        <S.ValueTop>
          <S.ValueNumber>{order + 1}</S.ValueNumber>
          <S.ValueTitle>{coreValue.title}</S.ValueTitle>
        </S.ValueTop>
        <S.ValueDescription isHovered={isHovered}>{coreValue.description}</S.ValueDescription>
      </S.CoreValue>
    </S.ItemContainer>
  );
};

export default CoreValueItem;
