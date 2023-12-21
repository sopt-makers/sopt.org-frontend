import Carousel from '@src/components/common/Carousel';
import { useIsDesktop } from '@src/hooks/useDevice';
import { SOPT_COMMENT_LIST } from '@src/lib/constants/main';
import CommentCard from '../Card';
import * as S from '../style';

type CommentCardProps = {
  activeIdx: number;
  changeActiveIdx: (idx: number) => void;
};

export default function CommentCards({ activeIdx, changeActiveIdx }: CommentCardProps) {
  const isDesktop = useIsDesktop('768px');
  if (isDesktop)
    return <CommentCardsDesktop activeIdx={activeIdx} changeActiveIdx={changeActiveIdx} />;
  return (
    <Carousel itemWidth={516} gapWidth={0} stride={1}>
      {SOPT_COMMENT_LIST.map((comment, idx) => (
        <CommentCard
          key={idx}
          idx={idx}
          isActive={activeIdx === idx}
          setIsActive={changeActiveIdx}
          color={comment.color}
          comment={comment.comment}
          commenter={comment.commenter}
        />
      ))}
    </Carousel>
  );
}

function CommentCardsDesktop({ activeIdx, changeActiveIdx }: CommentCardProps) {
  return (
    <S.CardWrapper>
      {SOPT_COMMENT_LIST.map((comment, idx) => (
        <CommentCard
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
