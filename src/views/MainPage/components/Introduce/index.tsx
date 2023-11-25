import { useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useIsMobile } from '@src/hooks/useDevice';
import * as S from './style';

export default function Introduce() {
  const isMobileSize = useIsMobile('768px');
  const contentRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ['end center', 'start'],
  });

  const scaleValue = useTransform(scrollYProgress, [1, 0.4], [0.9, 1]);
  const content = '전국 최대 규모의 대학생 IT 연합 동아리, SOPT를 소개합니다.';

  const [style, setStyle] = useState<{ opacity?: number; clipPath?: string }>();
  const scrollValue = useTransform(scrollYProgress, [1, 0.4], [100, 0]);

  useEffect(() => {
    const unsubscribe = scrollValue.on('change', (value) => {
      const newStyle = isMobileSize
        ? { opacity: 1 - value / 100 }
        : { clipPath: `inset(0% ${value}% 0% 0%)`, opacity: 1 };
      setStyle(newStyle);
    });

    return () => {
      unsubscribe();
    };
  }, [scrollValue, isMobileSize]);
  return (
    <S.Background ref={contentRef}>
      <S.Wrapper>
        <S.TextContainer style={{ scale: scaleValue }}>
          <S.MotionTitle style={style} data-text={content} />
          <S.BackgroundTitle>{content}</S.BackgroundTitle>
        </S.TextContainer>
      </S.Wrapper>
    </S.Background>
  );
}
