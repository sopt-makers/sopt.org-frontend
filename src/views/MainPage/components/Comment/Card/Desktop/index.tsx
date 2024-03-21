import { useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { SoptCommentType } from '@src/lib/types/main';
import * as S from './style';

interface CommentCardProps {
  idx: number;
  setIsActive: (idx: number, isActive: boolean) => void;
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
    query: '(max-width: 1480px)',
  });
  const veryShortHeight = useMediaQuery({ query: '(max-height: 700px)' });
  const shortHeight = useMediaQuery({ query: '(max-height: 860px)' });
  const mediumHeight = useMediaQuery({ query: '(max-height: 1000px)' });
  const longHeight = useMediaQuery({ query: '(min-height: 1100px' });

  const margin = desktop
    ? longHeight
      ? '-600px 0px 0px 0px'
      : shortHeight
      ? '-500px 0px -200px 0px'
      : veryShortHeight
      ? '-500px 0px 0px 0px'
      : '-600px 0px -200px 0px'
    : shortHeight
    ? '-300px 0px -200px 0px'
    : mediumHeight
    ? '-486px 0px -324px 0px'
    : '-648px 0px -324px 0px';

  const wrapperRef = useRef(null);

  const isInView = useInView(wrapperRef, { margin });

  const [isInViewState, setIsInViewState] = useState(false);

  useEffect(() => {
    setIsInViewState(isInView);
  }, [isInView]);

  useEffect(() => {
    setIsActive(idx, isInViewState);
  }, [isInViewState, idx, setIsActive]);

  return (
    <S.Wrapper
      ref={wrapperRef}
      style={{
        transformOrigin: 'right center',
      }}
      animate={{
        backgroundColor: isActive ? color : '#232634',
        color: isActive ? '#fff' : '#767A89',
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
