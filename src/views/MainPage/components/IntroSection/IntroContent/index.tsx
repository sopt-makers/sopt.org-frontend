import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ReactComponent as IcEllipseBlue } from '@src/assets/icons/ic_ellipse_blue.svg';
import { INTRO_CONTENT_LENGTH } from '@src/lib/constants/main';
import { IntroContentType } from '@src/lib/types/main';
import { throttle } from 'lodash';
import * as S from './style';

interface IntroContentProps {
  content: IntroContentType;
}

export default function IntroContent({ content }: IntroContentProps) {
  const lineDraw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: 0.8, type: 'spring', duration: 3, bounce: 0, ease: 'easeInOut' },
        opacity: { delay: 0.8, duration: 0.4 },
      },
    },
  };

  const contentMotion = {
    initial: { opacity: 0 },
    visible: { opacity: 1, transition: { opacity: { delay: 0.2, duration: 0.7 } } },
  };

  const upMotion = {
    initial: { y: 10 },
    visible: {
      y: 0,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 120,
        y: { delay: 0.3, duration: 0.8 },
      },
    },
  };

  const backLightMotion = {
    initial: { opacity: 0 },
    visible: { opacity: 1, transition: { opacity: { delay: 0.5, duration: 1 } } },
  };

  const contentRef = useRef<HTMLDivElement>(null);
  const [lineTop, setLineTop] = useState(0);

  useEffect(() => {
    const handleResize = throttle(() => {
      if (contentRef.current) {
        setLineTop(contentRef.current.offsetTop);
      }
    }, 500);

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <S.IntroContentWrapper>
      <S.HeaderShadow />
      {content.id !== INTRO_CONTENT_LENGTH && (
        <S.MotionSvg
          viewBox="0 0 20 calc(100vh + 2px)"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          top={lineTop}
        >
          <motion.line x1="10" y1="10" x2="10" y2="99.8%" stroke="#d7f5ff" variants={lineDraw} />
        </S.MotionSvg>
      )}
      <S.IntroContent>
        <S.ContentWithCircle
          ref={contentRef}
          initial="initial"
          whileInView="visible"
          variants={contentMotion}
          viewport={{ amount: 0.2 }}
        >
          <S.Circle>
            <IcEllipseBlue />
          </S.Circle>
          <S.Content
            initial="initial"
            whileInView="visible"
            variants={upMotion}
            viewport={{ amount: 0.2 }}
          >
            <S.ContentTitle>{content.title}</S.ContentTitle>
            <S.ContentDetail>{content.detail}</S.ContentDetail>
            <S.ContentImage src={content.src} width={707} height={471} alt="SOPT 소개 이미지" />
          </S.Content>
        </S.ContentWithCircle>
        <S.BackLight
          initial="initial"
          whileInView="visible"
          variants={backLightMotion}
          viewport={{ amount: 0.2 }}
        />
      </S.IntroContent>
      <S.FooterShadow />
    </S.IntroContentWrapper>
  );
}
