import { useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useIsMobile } from '@src/hooks/useDevice';
import * as S from './style';

export default function Introduce() {
  const contentRef = useRef<HTMLElement>(null);
  const isMobileSize = useIsMobile('768px');
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ['end center', 'start start'],
  });
  const [clipPathValue, setClipPathValue] = useState<string>('inset(0% 0% 0% 0%)');

  const scrollValue = useTransform(scrollYProgress, [1, 0.4], ['100%', '0%']);
  const opacityValue = useTransform(scrollYProgress, [1, 0.4], ['0%', '100%']);
  const scaleValue = useTransform(scrollYProgress, [1, 0.4], [0.9, 1]);

  const content = '전국 최대 규모의 대학생 IT 연합 동아리, SOPT를 소개합니다.';

  useEffect(() => {
    const unsubscribe = scrollValue.on('change', (value) => {
      setClipPathValue(`inset(0% ${value} 0% 0%)`);
    });

    return () => {
      unsubscribe();
    };
  }, [scrollValue]);

  return (
    <S.Background ref={contentRef}>
      <S.Wrapper>
        <S.Textcontainer style={{ scale: scaleValue }}>
          <S.MotionTitle
            style={{
              clipPath: isMobileSize ? 'none' : clipPathValue,
              opacity: isMobileSize ? opacityValue : 1,
            }}
            data-text={content}
          />
          <S.BackgroundTitle>{content}</S.BackgroundTitle>
        </S.Textcontainer>
      </S.Wrapper>
    </S.Background>
  );
}
