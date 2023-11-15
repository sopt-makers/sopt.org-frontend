import { motion } from 'framer-motion';
import { ReactComponent as IcEllipseBlue } from '@src/assets/icons/ic_ellipse_blue.svg';
import { IntroCardType } from '@src/lib/types/main';
import * as S from './style';

interface IntroCardProps {
  card: IntroCardType;
}

export default function IntroCard({ card }: IntroCardProps) {
  const circleDraw = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 120,
        opacity: { delay: 0.2, duration: 0.3 },
      },
    },
  };

  const lineDraw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: 0.6, type: 'spring', duration: 2.5, bounce: 0 },
        opacity: { delay: 0.6, duration: 0.2 },
      },
    },
  };

  const cardDraw = {
    hidden: { x: -10, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 120,
        x: { delay: 0.3, duration: 0.8 },
        opacity: { delay: 0.3, duration: 1 },
      },
    },
  };

  return (
    <S.IntroCard>
      <S.Box>
        <S.MotionCircle
          initial="hidden"
          whileInView="visible"
          variants={circleDraw}
          viewport={{ amount: 0.4 }}
        >
          <IcEllipseBlue />
        </S.MotionCircle>
        {card.id !== 3 && (
          <S.MotionLine
            viewBox="0 0 20 calc(100vh + 2px)"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0 }}
          >
            <motion.line x1="10" y1="10" x2="10" y2="100vh" stroke="#d7f5ff" variants={lineDraw} />
          </S.MotionLine>
        )}
        <S.MotionDiv
          initial="hidden"
          whileInView="visible"
          variants={cardDraw}
          viewport={{ amount: 0.2 }}
        >
          <S.CardTitle>{card.title}</S.CardTitle>
          <S.CardDetail>{card.detail}</S.CardDetail>
          <S.CardImage src={card.src} width={707} height={471} alt="SOPT 소개 이미지" />
          <S.BackLight />
        </S.MotionDiv>
      </S.Box>
    </S.IntroCard>
  );
}
