import { useIsMobile } from '@src/hooks/useDevice';
import { checkIsTimeInRange } from '@src/lib/utils/date';
import RecruitButton from '../Banner/RecruitButton';
import * as S from './style';

export default function RecruitMessage() {
  const isMobileSize = useIsMobile('48rem');
  const isValid = checkIsTimeInRange('2024-09-08 10:00:00', '2024-09-13 18:00:00'); // 모집 여부

  return (
    <S.Background>
      <S.Title>솝트의 36번째{isMobileSize ? <br /> : ' '}열정이 되어주세요!</S.Title>
      {!isValid && (
        <S.Description>
          아직 모집기간이 아니예요.{isMobileSize && <br />}알림 신청을 하시면, 봄에 찾아갈게요!
        </S.Description>
      )}
      <RecruitButton>{isValid ? '36기 YB 지원하기 ' : '모집 알림 신청하기 '}&gt; </RecruitButton>
    </S.Background>
  );
}
