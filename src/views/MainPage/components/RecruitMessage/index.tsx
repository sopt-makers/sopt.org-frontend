import { useIsMobile } from '@src/hooks/useDevice';
import * as S from './style';

export default function RecruitMessage() {
  const isMobileSize = useIsMobile('768px');

  return (
    <S.Background>
      <S.Title>SOPT의 34번째 {isMobileSize && <br />} 열정이 되어주세요!</S.Title>
      <S.Description>
        아직 모집기간이 아니에요. {isMobileSize && <br />} 알림 신청을 하시면, 봄에 찾아갈게요!
      </S.Description>
      <S.GoToRecruit href="/recruit">모집시 알림 받기</S.GoToRecruit>
    </S.Background>
  );
}
