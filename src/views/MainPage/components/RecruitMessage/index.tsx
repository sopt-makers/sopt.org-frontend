import { useIsMobile } from '@src/hooks/useDevice';
import { checkIsTimeInRange } from '@src/lib/utils/date';
import RecruitButton from '../Banner/RecruitButton';
import * as S from './style';

interface RecruitMessageProp {
  mainColor: string;
  highColor: string;
}
export default function RecruitMessage({ mainColor, highColor }: RecruitMessageProp) {
  const isMobileSize = useIsMobile('48rem');
  // TODO: API 필드 추가된 후에 RecruitPage처럼 바뀌어야 함
  const isValid = checkIsTimeInRange('2024-09-08 10:00:00', '2024-09-13 18:00:00'); // 모집 여부

  return (
    <S.Background>
      <S.Title>솝트의 36번째{isMobileSize ? <br /> : ' '}열정이 되어주세요!</S.Title>
      {!isValid && (
        <S.Description>
          아직 모집기간이 아니예요.{isMobileSize && <br />}알림 신청을 하시면, 봄에 찾아갈게요!
        </S.Description>
      )}
      <RecruitButton mainColor={mainColor} highColor={highColor}>
        {isValid ? '36기 YB 지원하기 ' : '모집 알림 신청하기 '}&gt;{' '}
      </RecruitButton>
    </S.Background>
  );
}
