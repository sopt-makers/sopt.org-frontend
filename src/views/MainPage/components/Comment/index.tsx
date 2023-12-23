import { useAnimationControls, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { useIsDesktop, useIsMobile } from '@src/hooks/useDevice';
import { SOPT_COMMENT_LIST } from '@src/lib/constants/main';
import CommentCards from './Cards';
import * as S from './style';

export default function CommentSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const controls = useAnimationControls();
  const isWideScreen = useIsDesktop('1480px');
  const isMobile = useIsMobile('768px');
  const wrapperRef = useRef(null);

  const changeActiveIdx = (idx: number) => {
    setActiveIdx(idx);
    controls.start({
      opacity: [0, 1, 1],
      y: [0, -12, 0],
      rotateX: [45, -15, 0],
    });
  };

  const { scrollYProgress } = useScroll({ target: wrapperRef, offset: ['start center', 'start'] });
  const titleShadowOpacity = useTransform(scrollYProgress, [0, 0.9, 1], [0, 0, 1]);

  return (
    <S.Wrapper>
      <S.TitleWrapper ref={wrapperRef}>
        {!isWideScreen && !isMobile && <S.TitleShadow style={{ opacity: titleShadowOpacity }} />}
        <S.SectionSubTitle>활동 후기</S.SectionSubTitle>
        <S.SectionTitle>Q. 솝트 어때요?</S.SectionTitle>
        <S.Summary animate={controls} color={SOPT_COMMENT_LIST[activeIdx]?.color}>
          {SOPT_COMMENT_LIST[activeIdx]?.summary}
        </S.Summary>
      </S.TitleWrapper>
      <CommentCards activeIdx={activeIdx} changeActiveIdx={changeActiveIdx} />
    </S.Wrapper>
  );
}
