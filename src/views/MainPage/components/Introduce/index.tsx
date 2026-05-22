import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useIsMobile } from '@src/hooks/useDevice';
import { breakpoints } from '@src/lib/styles/breakpoints';
import * as S from './style';

const SCROLL_CONFIG = {
  mobile: {
    content: '전국 최대 규모의\n대학생 연합 IT 벤처 창업 동아리,\n솝트를 소개합니다',
    offset: ['end center', 'start end'],
    scrollEnd: 0.1,
  },
  desktop: {
    content: '전국 최대 규모의 대학생 연합 IT 벤처 창업 동아리,\n솝트를 소개합니다',
    offset: ['end center', 'start'],
    scrollEnd: 0.7,
  },
} as const;
interface IntroduceContentProps {
  isMobileSize: boolean;
}

function IntroduceContent({ isMobileSize }: IntroduceContentProps) {
  const { content, offset, scrollEnd } = SCROLL_CONFIG[isMobileSize ? 'mobile' : 'desktop'];

  const contentRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: [...offset],
  });

  const scaleValue = useTransform(scrollYProgress, [1, scrollEnd], [0.9, 1]);
  const scrollValue = useTransform(scrollYProgress, [1, scrollEnd], [100, 0]);
  const clipPath = useTransform(scrollValue, (value) => `inset(0% ${value}% 0% 0%)`);

  return (
    <S.Background ref={contentRef}>
      <S.Wrapper>
        <S.TextContainer style={{ scale: scaleValue }}>
          <S.MotionTitle style={{ clipPath }}>{content}</S.MotionTitle>
          <S.BackgroundTitle>{content}</S.BackgroundTitle>
        </S.TextContainer>
      </S.Wrapper>
    </S.Background>
  );
}

export default function Introduce() {
  const isMobileSize = useIsMobile(`${breakpoints.tablet - 1}px`);

  // key를 통해 화면 크기 변경 시 리마운트
  return <IntroduceContent key={isMobileSize ? 'mobile' : 'desktop'} isMobileSize={isMobileSize} />;
}
