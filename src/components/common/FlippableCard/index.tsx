import React from 'react';
import useBooleanState from '@src/hooks/useBooleanState';
import { useDeviceType } from '@src/hooks/useDevice';
import * as S from './style';

type FlippableCardProps = {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
};

const useFlippableCard = () => {
  const [isFlipped, setIsFlipped, setIsUnflipped, toggleFlipped] = useBooleanState(false);
  const deviceType = useDeviceType();

  if (deviceType === 'desktop') {
    return { isFlipped, onMouseEnter: setIsFlipped, onMouseLeave: setIsUnflipped };
  }
  return { isFlipped, onClick: () => toggleFlipped() };
};

export default function FlippableCard({ frontContent, backContent }: FlippableCardProps) {
  const { isFlipped, ...eventListeners } = useFlippableCard();

  const variants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 },
  };

  return (
    <div {...eventListeners}>
      <S.CardWrapper
        animate={isFlipped ? 'back' : 'front'}
        variants={variants}
        transition={{ duration: 0.2 }}
      >
        <S.FrontSideCardWrapper>{frontContent}</S.FrontSideCardWrapper>
        <S.BackSideCardWrapper>{backContent}</S.BackSideCardWrapper>
      </S.CardWrapper>
    </div>
  );
}
