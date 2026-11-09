import { useId } from 'react';
import { RawReviewType } from '@src/lib/types/admin';
import * as S from '../style';

interface ReviewItemProps {
  review: RawReviewType;
  isOpen: boolean;
  onToggle: () => void;
}

export default function ReviewItem({ review, isOpen, onToggle }: ReviewItemProps) {
  const id = useId();

  return (
    <S.Item open={isOpen}>
      <S.Trigger type="button" aria-expanded={isOpen} aria-controls={id} onClick={onToggle}>
        <S.Arrow open={isOpen} aria-hidden="true" />
        <S.ReviewTitle open={isOpen}>{review.title}</S.ReviewTitle>
      </S.Trigger>
      <S.Fold id={id} open={isOpen} aria-hidden={!isOpen}>
        <S.FoldInner>
          <S.Body>
            <S.Comment>{review.content}</S.Comment>
            <S.Author>{review.authorInfo}</S.Author>
          </S.Body>
        </S.FoldInner>
      </S.Fold>
    </S.Item>
  );
}
