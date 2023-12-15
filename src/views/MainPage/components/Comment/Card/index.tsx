import { useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { SoptCommentType } from '@src/lib/types/main';
import * as S from './style';

interface CommentCardProps {
  idx: number;
  setIsActive: (idx: number) => void;
  isActive: boolean;
  color: SoptCommentType['color'];
  comment: SoptCommentType['comment'];
  commenter: SoptCommentType['commenter'];
}

export default function CommentCard({
  idx,
  setIsActive,
  isActive,
  color,
  comment,
  commenter,
}: CommentCardProps) {
  const desktop = useMediaQuery({
    query: '(max-width: 1440px)',
  });
  const margin = desktop ? '-300px 0px -300px 0px' : '-100px 0px -600px 0px';

  const wrapperRef = useRef(null);

  const isInView = useInView(wrapperRef, { margin });

  useEffect(() => {
    if (isInView) setIsActive(idx);
  }, [isInView, idx, setIsActive]);

  return (
    <S.Wrapper
      ref={wrapperRef}
      style={{
        transformOrigin: 'right center',
      }}
      animate={{
        backgroundColor: isActive ? color : '#232634',
        color: isActive ? '#23305C' : '#767A89',
        scale: isActive ? 1 : 0.92,
      }}
      transition={{ duration: 0.8 }}
    >
      <div>{comment}</div>
      <S.Footer>
        <div>{commenter.name}</div>|<div>{commenter.history}</div>|<div>{commenter.part}</div>
      </S.Footer>
    </S.Wrapper>
  );
}
