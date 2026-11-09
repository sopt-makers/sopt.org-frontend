import { useId } from 'react';
import { SoptCommentType } from '@src/lib/types/main';
import * as S from '../style';

interface ReviewItemProps {
  review: SoptCommentType;
  isOpen: boolean;
  onToggle: () => void;
}

export default function ReviewItem({ review, isOpen, onToggle }: ReviewItemProps) {
  const id = useId();
  const { name, history, part } = review.commenter;

  return (
    <S.Item open={isOpen}>
      <S.Trigger type="button" aria-expanded={isOpen} aria-controls={id} onClick={onToggle}>
        <S.Arrow open={isOpen} aria-hidden="true" />
        <S.ReviewTitle open={isOpen}>{review.summary}</S.ReviewTitle>
      </S.Trigger>
      <S.Fold id={id} open={isOpen} aria-hidden={!isOpen}>
        <S.FoldInner>
          <S.Body>
            <S.Comment>{review.comment}</S.Comment>
            <S.Author>{[name, history, part].filter(Boolean).join(' ㅣ ')}</S.Author>
          </S.Body>
        </S.FoldInner>
      </S.Fold>
    </S.Item>
  );
}
