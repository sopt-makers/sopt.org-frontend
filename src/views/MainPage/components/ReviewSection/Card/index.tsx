import { colors } from '@sopt-makers/colors';
import { SoptCommentType } from '@src/lib/types/main';
import * as S from './style';

interface ReviewCardProps {
  isActive: boolean;
  color: SoptCommentType['color'];
  comment: SoptCommentType['comment'];
  commenter: SoptCommentType['commenter'];
  onClick?: () => void;
}

export default function ReviewCard({
  isActive,
  color,
  comment,
  commenter,
  onClick,
}: ReviewCardProps) {
  return (
    <S.Wrapper
      isActive={isActive}
      animate={{
        backgroundColor: isActive ? color : colors.gray900,
      }}
      transition={{ duration: 0.4 }}
      onClick={onClick}
    >
      <S.Comment isActive={isActive}>{comment}</S.Comment>
      <S.Footer isActive={isActive}>
        {commenter.name} | {commenter.history} | {commenter.part}
      </S.Footer>
    </S.Wrapper>
  );
}
