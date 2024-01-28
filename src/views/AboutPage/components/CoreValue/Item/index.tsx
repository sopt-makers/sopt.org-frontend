import { useState } from 'react';
import useInView from '@src/hooks/useInView';
import { CoreValueType } from '@src/lib/types/about';
import * as S from './style';

type CoreValueProps = {
  coreValue: CoreValueType;
  order: number;
};

const CoreValueItem = ({ coreValue, order }: CoreValueProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { isInView, ref: wrapperRef } = useInView();

  return (
    <S.ItemContainer
      src={coreValue.src}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      order={order}
      isInView={isInView}
      ref={wrapperRef}
    >
      <S.BackgroundBlur isHovered={isHovered} />
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
