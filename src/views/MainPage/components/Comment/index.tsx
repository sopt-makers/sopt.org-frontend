import { useAnimationControls } from 'framer-motion';
import { useState } from 'react';
import { SOPT_COMMENT_LIST } from '@src/lib/constants/main';
import CommentCards from './Cards';
import * as S from './style';

export default function CommentSection() {
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
      <S.TitleWrapper activeIdx={activeIdx}>
        <S.SectionTitle>Q. 솝트 어때요?</S.SectionTitle>
        <S.Summary animate={controls} color={SOPT_COMMENT_LIST[activeIdx]?.color}>
          {SOPT_COMMENT_LIST[activeIdx]?.summary}
        </S.Summary>
      </S.TitleWrapper>
      <CommentCards activeIdx={activeIdx} changeActiveIdx={changeActiveIdx} />
    </S.Wrapper>
  );
}
