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
        color: isActive ? colors.white : colors.gray400,
      }}
      transition={{ duration: 0.4 }}
      onClick={onClick}
    >
      <S.Comment isActive={isActive}>{comment}</S.Comment>
      <S.Footer isActive={isActive}>
        <span>{commenter.name}</span>
        <span>|</span>
        <span>{commenter.history}</span>
        <span>|</span>
        <span>{commenter.part}</span>
      </S.Footer>
    </S.Wrapper>
  );
}
