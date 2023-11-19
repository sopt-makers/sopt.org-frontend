import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import * as S from './style';

export default function ScrollInteractiveLogo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });

  const soptLogoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 4]);
  const whiteBackgroundOpacity = useTransform(scrollYProgress, [0, 0.5, 0.96, 1], [0, 0, 1, 1]);

  return (
    <S.Container ref={containerRef}>
      <S.Wrapper>
        <motion.div style={{ opacity: whiteBackgroundOpacity }}>
          <S.WhiteBackground />
        </motion.div>
        <motion.div style={{ scale: soptLogoScale }}>
          <S.LogoWrapper>
            <S.DescriptionText>SHOUT OUR PASSION TOGETHER</S.DescriptionText>
            <S.Logo />
          </S.LogoWrapper>
        </motion.div>
      </S.Wrapper>
    </S.Container>
  );
}
