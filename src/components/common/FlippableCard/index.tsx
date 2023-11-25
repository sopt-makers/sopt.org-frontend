import React from 'react';
import useBooleanState from '@src/hooks/useBooleanState';
import * as S from './style';

type FlippableCardProps = {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
};

export default function FlippableCard({ frontContent, backContent }: FlippableCardProps) {
  const [isFlipped, setIsFlipped, setIsUnflipped] = useBooleanState(false);

  const variants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 },
  };

  return (
    <div onMouseEnter={setIsFlipped} onMouseLeave={setIsUnflipped}>
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
