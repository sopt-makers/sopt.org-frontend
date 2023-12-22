import { SoptCommentType } from '@src/lib/types/main';
import * as S from './style';

interface CommentCardProps {
  color: SoptCommentType['color'];
  comment: SoptCommentType['comment'];
  commenter: SoptCommentType['commenter'];
}

export default function CommentCard({ color, comment, commenter }: CommentCardProps) {
  return (
    <S.Wrapper color={color}>
      <div>{comment}</div>
      <S.Footer>
        <div>{commenter.name}</div>|<div>{commenter.history}</div>|<div>{commenter.part}</div>
      </S.Footer>
    </S.Wrapper>
  );
}
