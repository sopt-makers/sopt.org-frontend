import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import MotionTitle from './MotionTitle';
import * as S from './style';

export default function Introduce() {
  const contentRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ['end center', 'start start'],
  });

  const scaleValue = useTransform(scrollYProgress, [1, 0.4], [0.9, 1]);
  const content = '전국 최대 규모의 대학생 IT 연합 동아리, SOPT를 소개합니다.';

  return (
    <S.Background ref={contentRef}>
      <S.Wrapper>
        <S.TextContainer style={{ scale: scaleValue }}>
          <MotionTitle contentRef={contentRef} content={content} />
          <S.BackgroundTitle>{content}</S.BackgroundTitle>
        </S.TextContainer>
      </S.Wrapper>
    </S.Background>
  );
}
