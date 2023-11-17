import { useMotionTemplate, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import * as S from './style';

export default function Introduce() {
  const contentRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ['end center', 'start start'],
  });
  const scrollValue = useTransform(scrollYProgress, [1, 0.4], ['100%', '0%']);
  const clipPathValue = useMotionTemplate`inset(0% ${scrollValue} 0% 0%)`;
  const scaleValue = useTransform(scrollYProgress, [1, 0.4], [0.5, 1]);

  const content = '전국 최대 규모의 대학생 IT 연합 동아리, SOPT를 소개합니다.';

  return (
    <S.Background ref={contentRef}>
      <S.Wrapper>
        <S.Textcontainer style={{ scale: scaleValue }}>
          <S.MotionTitle style={{ clipPath: clipPathValue }} data-text={content} />
          <S.BackgroundTitle>{content}</S.BackgroundTitle>
        </S.Textcontainer>
      </S.Wrapper>
    </S.Background>
  );
}