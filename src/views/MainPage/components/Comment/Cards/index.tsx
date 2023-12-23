import { useCallback, useEffect, useRef, useState } from 'react';
import { useIsMobile } from '@src/hooks/useDevice';
import { SOPT_COMMENT_LIST } from '@src/lib/constants/main';
import CommentCardDesktop from '../Card/Desktop';
import CommentCardMobile from '../Card/Mobile';
import * as S from '../style';

type CommentCardsProps = {
  activeIdx: number;
  changeActiveIdx: (idx: number) => void;
};

export default function CommentCards({ activeIdx, changeActiveIdx }: CommentCardsProps) {
  const isMobile = useIsMobile('768px');
  if (isMobile)
    return <CommentCardsMobile activeIdx={activeIdx} changeActiveIdx={changeActiveIdx} />;
  return <CommentCardsDesktop activeIdx={activeIdx} changeActiveIdx={changeActiveIdx} />;
}

function CommentCardsDesktop({ activeIdx, changeActiveIdx }: CommentCardsProps) {
  const [activeIndices, setActiveIndices] = useState<number[]>([]);
  const activeIndexSet = useRef<Set<number>>(new Set());

  const setIsActive = useCallback((idx: number, isActive: boolean) => {
    if (isActive) activeIndexSet.current.add(idx);
    else activeIndexSet.current.delete(idx);
    setActiveIndices(Array.from(activeIndexSet.current));
  }, []);

  useEffect(() => {
    console.log(activeIndices);
    if (activeIndices.length > 0 && activeIndices[0] !== activeIdx) {
      changeActiveIdx(activeIndices[0]);
    }
  }, [activeIndices, changeActiveIdx, activeIdx]);

  return (
    <S.CardWrapper>
      {SOPT_COMMENT_LIST.map((comment, idx) => (
        <CommentCardDesktop
          key={idx}
          idx={idx}
          isActive={activeIdx === idx}
          setIsActive={setIsActive}
          color={comment.color}
          comment={comment.comment}
          commenter={comment.commenter}
        />
      ))}
    </S.CardWrapper>
  );
}

function CommentCardsMobile({ activeIdx, changeActiveIdx }: CommentCardsProps) {
  const activeCard = SOPT_COMMENT_LIST[activeIdx];
  const commentLength = SOPT_COMMENT_LIST.length;
  return (
    <S.CardWrapper>
      <S.LeftArrow
        onClick={() => changeActiveIdx((activeIdx - 1 + commentLength) % commentLength)}
      />
      <CommentCardMobile {...activeCard} />
      <S.RightArrow onClick={() => changeActiveIdx((activeIdx + 1) % commentLength)} />
    </S.CardWrapper>
  );
}
