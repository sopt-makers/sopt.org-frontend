import { useIsMobile } from '@src/hooks/useDevice';
import { checkIsTimeInRange } from '@src/lib/utils/date';
import RecruitButton from '../Banner/RecruitButton';
import * as S from './style';

interface RecruitMessageProp {
  mainColor: string;
  highColor: string;
  isRecruiting: boolean;
}
export default function RecruitMessage({ mainColor, highColor, isRecruiting }: RecruitMessageProp) {
  const isMobileSize = useIsMobile('48rem');

  return (
    <S.Background>
      <S.Title>솝트의 36번째{isMobileSize ? <br /> : ' '}열정이 되어주세요!</S.Title>
      {!isRecruiting && (
        <S.Description>
          아직 모집기간이 아니예요.{isMobileSize && <br />}알림 신청을 하시면, 봄에 찾아갈게요!
        </S.Description>
      )}
      <RecruitButton mainColor={mainColor} highColor={highColor}>
        {isRecruiting ? '36기 YB 지원하기 ' : '모집 알림 신청하기 '}&gt;
      </RecruitButton>
    </S.Background>
  );
}
