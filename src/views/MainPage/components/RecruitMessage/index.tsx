import { useIsMobile } from '@src/hooks/useDevice';
import * as S from './style';
import RecruitButton from '../Banner/RecruitButton';

export default function RecruitMessage() {
  const isMobileSize = useIsMobile('768px');

  return (
    <S.Background>
      <S.Title>지금은 모집기간이 아니에요. {isMobileSize && <br />} 모집 기간이 되면 메일로 알려드릴게요.</S.Title>
      <RecruitButton>모집 알림 신청하기 &gt; </RecruitButton>
    </S.Background>
  );
}
