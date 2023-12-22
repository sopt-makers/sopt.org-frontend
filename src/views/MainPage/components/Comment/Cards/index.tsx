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
  return (
    <S.CardWrapper>
      {SOPT_COMMENT_LIST.map((comment, idx) => (
        <CommentCardDesktop
          key={idx}
          idx={idx}
          isActive={activeIdx === idx}
          setIsActive={changeActiveIdx}
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
