import { TextColorType } from '@src/lib/types/main';
import * as S from './style';

interface CardProps {
  img: string;
  navKor: string;
  navEng: string;
  description: TextColorType[];
}

export default function Card({ img, navKor, navEng, description }: CardProps) {
  const blurMotion = {
    rest: {
      display: 'none',
    },
    hover: {
      display: 'flex',
    },
  };

  return (
    <S.Background initial="rest" whileHover="hover" animate="rest">
      <S.CardImage src={img} alt="카드 이미지" fill />
      <S.Gradient />
      <S.CardKorNav>{navKor}</S.CardKorNav>
      <S.Blur variants={blurMotion}>
        <S.CardEngNav>{navEng}</S.CardEngNav>
        <div>
          {description.map((textNode, index) => (
            <S.Content key={index} color={textNode.color}>
              {textNode.content}
            </S.Content>
          ))}
        </div>
      </S.Blur>
    </S.Background>
  );
}
