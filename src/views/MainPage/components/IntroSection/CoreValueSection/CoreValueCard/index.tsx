import { IntroContentType } from '@src/lib/types/main';
import * as S from './style';

interface CoreValueCardProps {
  card: IntroContentType;
  isActive: boolean;
  onHover: () => void;
  onClick: () => void;
  isMobile?: boolean;
  mainColor: string;
}

export default function CoreValueCard({
  card,
  isActive,
  onHover,
  onClick,
  isMobile,
  mainColor,
}: CoreValueCardProps) {
  return (
    <S.CardContainer onMouseEnter={onHover} onClick={onClick} isActive={isActive}>
      <S.CoreValueImage src={card.src} alt={card.title} width={540} height={360} loading="lazy" />
      <S.GradientOverlay isActive={isActive} />
      <S.CardContent isActive={isActive}>
        <S.CardTitle>
          {isMobile && <S.MobilePrimaryColorCircle mainColor={mainColor} />}
          {card.title}
        </S.CardTitle>
        <S.CardDetail>{card.detail}</S.CardDetail>
      </S.CardContent>
      {!isMobile && (
        <>
          <S.CardValue isActive={isActive}>{card.value}</S.CardValue>
          <S.PrimaryColorCircle isActive={isActive} mainColor={mainColor} />
        </>
      )}
    </S.CardContainer>
  );
}
