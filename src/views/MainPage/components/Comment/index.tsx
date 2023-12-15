import { useAnimationControls } from 'framer-motion';
import { useState } from 'react';
import { SOPT_COMMENT_LIST } from '@src/lib/constants/main';
import CommentCard from './Card';
import * as S from './style';

export default function Comment() {
  const [activeIdx, setActiveIdx] = useState(0);
  const controls = useAnimationControls();

  const changeActiveIdx = (idx: number) => {
    setActiveIdx(idx);
    controls.start({
      opacity: [0, 1, 1],
      y: [0, -12, 0],
      rotateX: [45, -15, 0],
    });
  };

  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.SectionTitle>Q. 솝트 어때요?</S.SectionTitle>
        <S.Summary animate={controls} color={SOPT_COMMENT_LIST[activeIdx]?.color}>
          {SOPT_COMMENT_LIST[activeIdx]?.summary}
        </S.Summary>
      </S.TitleWrapper>
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
    </S.Wrapper>
  );
}
