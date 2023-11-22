import { motion } from 'framer-motion';
import { useState } from 'react';
import { ReactComponent as IcEllipseBlue } from '@src/assets/icons/ic_ellipse_blue.svg';
import { INTRO_CONTENT_LENGTH } from '@src/lib/constants/main';
import { IntroContentType } from '@src/lib/types/main';
import * as S from './style';

interface IntroContentProps {
  content: IntroContentType;
}

export default function IntroContent({ content }: IntroContentProps) {
  const contentDraw = {
    initial: { opacity: 0 },
    visible: { opacity: 1, transition: { opacity: { delay: 0.2, duration: 0.7 } } },
  };

  const upMotion = {
    initial: { y: 10 },
    visible: {
      y: 0,
      transition: { type: 'spring', damping: 20, stiffness: 120, y: { delay: 0.3, duration: 0.8 } },
    },
  };

  const lineDraw = {
    initial: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: 0.8, type: 'spring', duration: 3, bounce: 0, ease: 'easeInOut' },
        opacity: { delay: 0.8, duration: 0.4 },
      },
    },
  };

  const [isContentVisible, setIsContentVisible] = useState(false);

  return (
    <S.IntroWrapper>
      <S.Intro>
        {content.id !== INTRO_CONTENT_LENGTH && (
          <S.AnimatedLine initial="initial" whileInView="visible" viewport={{ amount: 0.2 }}>
            <motion.line x1="10" y1="10" x2="10" y2="100%" stroke="#d7f5ff" variants={lineDraw} />
          </S.AnimatedLine>
        )}
        <motion.div
          initial="initial"
          whileInView="visible"
          variants={contentDraw}
          viewport={{ amount: 0.5 }}
          onViewportEnter={() => setIsContentVisible(true)}
          onViewportLeave={() => setIsContentVisible(false)}
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
            <S.ContentImage
              src={content.src}
              width={707}
              height={471}
              loading="lazy"
              alt="SOPT 소개 이미지"
            />
          </S.Content>
        </motion.div>
      </S.Intro>
      <S.BackLight isContentVisible={isContentVisible} />
    </S.IntroWrapper>
  );
}
