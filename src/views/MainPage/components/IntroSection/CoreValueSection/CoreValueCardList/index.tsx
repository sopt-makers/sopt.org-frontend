import { useState } from 'react';
import { useIsDesktop, useIsMobile, useIsTablet } from '@src/hooks/useDevice';
import { INTRO_CONTENT_LIST } from '@src/lib/constants/main';
import { type HomeCoreValueType } from '@src/lib/types/admin';
import CoreValueCard from '../CoreValueCard';
import * as S from './style';

interface CoreValueCardListProps {
  coreValues: HomeCoreValueType[];
  mainColor: string;
}

export default function CoreValueCardList({ coreValues, mainColor }: CoreValueCardListProps) {
  const isDesktop = useIsDesktop('1024px');
  const isTablet = useIsTablet('768px', '1023px');
  const isMobile = useIsMobile('767px');

  const [activeCardId, setActiveCardId] = useState<number | null>(1);

  // 데스크탑: 호버 시 활성화
  const handleMouseEnter = (id: number) => {
    if (isDesktop) {
      setActiveCardId(id);
    }
  };

  // 태블릿: 클릭 시 토글
  const handleClick = (id: number) => {
    if (isTablet) {
      setActiveCardId(id);
    }
  };

  return (
    <S.CardListContainer>
      {coreValues?.slice(0, INTRO_CONTENT_LIST.length).map((coreValue, index) => {
        const id = index + 1;

        return (
          <CoreValueCard
            key={id}
            coreValue={coreValue}
            src={INTRO_CONTENT_LIST[index].src}
            isActive={isMobile ? true : activeCardId === id}
            onHover={() => handleMouseEnter(id)}
            onClick={() => handleClick(id)}
            isMobile={isMobile}
            mainColor={mainColor}
          />
        );
      })}
    </S.CardListContainer>
  );
}
