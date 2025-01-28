import { useIsMobile } from '@src/hooks/useDevice';
import RecruitButton from '../Banner/RecruitButton';
import * as S from './style';

interface RecruitMessageProp {
  generation: number;
  mainColor: string;
  highColor: string;
  ctaText: string;
}
export default function RecruitMessage({
  generation,
  mainColor,
  highColor,
  ctaText,
}: RecruitMessageProp) {
  const isMobileSize = useIsMobile('48rem');

  return (
    <S.Background>
      <S.Title>
        솝트의 {generation + 1}번째{isMobileSize ? <br /> : ' '}열정이 되어주세요!
      </S.Title>
      {ctaText === '모집 알림 신청하기 ' && (
        <S.Description>
          아직 모집기간이 아니예요.{isMobileSize && <br />}알림 신청을 하시면, 봄에 찾아갈게요!
        </S.Description>
      )}
      <RecruitButton mainColor={mainColor} highColor={highColor}>
        {ctaText}&gt;
      </RecruitButton>
    </S.Background>
  );
}
