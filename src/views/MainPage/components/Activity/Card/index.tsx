import { motion } from 'framer-motion';
import useBooleanState from '@src/hooks/useBooleanState';
import { useDeviceType } from '@src/hooks/useDevice';
import { TextColorType } from '@src/lib/types/main';
import * as S from './style';

interface CardProps {
  img: string;
  navKor: string;
  navEng: string;
  description: TextColorType[];
}

const useShownDescription = () => {
  const deviceType = useDeviceType();
  const [isShownDescription, setIsShown, setIsNotShown, toggleShown] = useBooleanState(false);

  if (deviceType === 'desktop') {
    return { isShownDescription, onMouseEnter: setIsShown, onMouseLeave: setIsNotShown };
  }
  return { isShownDescription, onClick: toggleShown };
};

export default function Card({ img, navKor, navEng, description }: CardProps) {
  const { isShownDescription, ...eventListeners } = useShownDescription();

  const variants = {
    blurRest: { opacity: 0 },
    blurShown: { opacity: 1 },
    textRest: { y: 5 },
    textShown: { y: 0 },
  };

  return (
    <S.Background {...eventListeners}>
      <S.CardImage src={img} alt="카드 이미지" fill sizes="100%" />
      <S.Gradient />
      <S.CardKorNav>{isShownDescription ? navEng : navKor}</S.CardKorNav>
      <S.Blur
        animate={isShownDescription ? 'blurShown' : 'blurRest'}
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          animate={isShownDescription ? 'textShown' : 'textRest'}
          variants={variants}
          transition={{ duration: 0.5 }}
        >
          {description.map((textNode, index) => (
            <S.Content key={index} color={textNode.color}>
              {textNode.content}
            </S.Content>
          ))}
        </motion.div>
      </S.Blur>
    </S.Background>
  );
}
