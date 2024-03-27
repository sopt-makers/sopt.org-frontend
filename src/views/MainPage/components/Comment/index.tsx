import { useAnimationControls } from 'framer-motion';
import { Ref, forwardRef, useRef, useState } from 'react';
import { useIsDesktop, useIsMobile } from '@src/hooks/useDevice';
import { SOPT_COMMENT_LIST } from '@src/lib/constants/main';
import CommentCards from './Cards';
import * as S from './style';

function Comment(_props: unknown, ref: Ref<HTMLDivElement>) {
  const [activeIdx, setActiveIdx] = useState(0);
  const controls = useAnimationControls();
  const isWideScreen = useIsDesktop('1601rem');
  const wrapperRef = useRef(null);
  const isMobileSize = useIsMobile('768rem');
  const tab = isMobileSize ? 'Review' : '';

  const changeActiveIdx = (idx: number) => {
    setActiveIdx(idx);
    controls.start({
      opacity: [0, 1, 1],
      y: [0, -12, 0],
      rotateX: [45, -15, 0],
    });
  };

  return (
    <S.Wrapper id="review" ref={ref}>
      <S.TitleWrapper ref={wrapperRef}>
        {!isWideScreen && !isMobileSize && <S.TitleShadow />}
        {tab && <S.SectionSubTitle>{tab}</S.SectionSubTitle>}
        <S.SectionTitle>Q. 솝트 어때요?</S.SectionTitle>
        <S.Summary animate={controls} color={SOPT_COMMENT_LIST[activeIdx]?.color}>
          {SOPT_COMMENT_LIST[activeIdx]?.summary}
        </S.Summary>
      </S.TitleWrapper>
      <CommentCards activeIdx={activeIdx} changeActiveIdx={changeActiveIdx} />
    </S.Wrapper>
  );
}

export default forwardRef(Comment);
