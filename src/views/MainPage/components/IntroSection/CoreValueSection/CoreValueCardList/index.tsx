import { useState } from 'react';
import { useIsDesktop, useIsMobile, useIsTablet } from '@src/hooks/useDevice';
import { IntroContentType } from '@src/lib/types/main';
import CoreValueCard from '../CoreValueCard';
import * as S from './style';

interface CoreValueCardListProps {
  cards: IntroContentType[];
  highColor: string;
}

export default function CoreValueCardList({ cards, highColor }: CoreValueCardListProps) {
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
      {cards.map((card) => (
        <CoreValueCard
          key={card.id}
          card={card}
          isActive={isMobile ? true : activeCardId === card.id}
          onHover={() => handleMouseEnter(card.id)}
          onClick={() => handleClick(card.id)}
          isMobile={isMobile}
          highColor={highColor}
        />
      ))}
    </S.CardListContainer>
  );
}
