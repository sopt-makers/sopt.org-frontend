import { useIsMobile } from '@src/hooks/useDevice';
import * as S from './style';
import RecruitButton from '../Banner/RecruitButton';

export default function RecruitMessage() {
  const isMobileSize = useIsMobile('768px');

  return (
    <S.Background>
      <S.Title>SOPT의 34번째 {isMobileSize && <br />} 열정이 되어주세요!</S.Title>
      <RecruitButton>34기 YB 지원하기 &gt; </RecruitButton>
    </S.Background>
  );
}
