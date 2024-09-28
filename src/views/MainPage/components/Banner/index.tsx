import imgMainPageBanner from '@src/assets/images/img_mainBanner.png';
import { checkIsTimeInRange } from '@src/lib/utils/date';
import RecruitButton from './RecruitButton';
import * as S from './style';

export default function Banner() {
  const isValid = checkIsTimeInRange('2024-09-08 10:00:00', '2024-09-13 18:00:00'); // 모집 여부

  const onScrollMoveDown = () => {
    const element = document.getElementById('nextContainer');
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <S.Container>
        <S.ContentWrapper>
          <S.Content>
            <S.Title>함께라서 외칠 수 있는 열정</S.Title>
            <S.Title>오직 이곳 SOPT에서만.</S.Title>
            <RecruitButton>
              {isValid ? '36기 YB 지원하기 ' : '모집 알림 신청하기 '}&gt;{' '}
            </RecruitButton>
          </S.Content>
          <S.DownScrollIcon onClick={onScrollMoveDown} />
        </S.ContentWrapper>
        <S.BannerWrapper>
          <S.BannerImage
            src={imgMainPageBanner}
            alt="솝트 공식홈페이지 메인페이지 배너 사진"
            fill
            priority
          />
          <S.BannerGradient />
        </S.BannerWrapper>
      </S.Container>
      <div id="nextContainer" />
    </>
  );
}
