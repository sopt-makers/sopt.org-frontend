import { type HomeCoreValueType } from '@src/lib/types/admin';
import * as S from './style';

interface CoreValueCardProps {
  coreValue: HomeCoreValueType;
  src: string;
  isActive: boolean;
  onHover: () => void;
  onClick: () => void;
  isMobile?: boolean;
  mainColor: string;
}

export default function CoreValueCard({
  coreValue,
  src,
  isActive,
  onHover,
  onClick,
  isMobile,
  mainColor,
}: CoreValueCardProps) {
  return (
    <S.CardContainer onMouseEnter={onHover} onClick={onClick} isActive={isActive}>
      <S.CoreValueImage
        src={src}
        alt={coreValue.description}
        width={540}
        height={360}
        loading="lazy"
      />
      <S.GradientOverlay isActive={isActive} />
      <S.CardContent isActive={isActive}>
        <S.CardTitle>
          {isMobile && <S.MobilePrimaryColorCircle mainColor={mainColor} />}
          {coreValue.description}
        </S.CardTitle>
        <S.CardDetail>{coreValue.detailDescription}</S.CardDetail>
      </S.CardContent>
      {!isMobile && (
        <>
          <S.CardValue isActive={isActive}>{coreValue.value}</S.CardValue>
          <S.PrimaryColorCircle isActive={isActive} mainColor={mainColor} />
        </>
      )}
    </S.CardContainer>
  );
}
