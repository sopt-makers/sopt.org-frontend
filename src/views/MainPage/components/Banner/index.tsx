import imgMainPageBanner from '@src/assets/images/img_mainBanner.png';
import RecruitButton from '../@common/RecruitButton';
import * as S from './style';

interface BannerProps {
  mainColor: string;
  textColor: string;
  ctaText: string;
}
export default function Banner({ mainColor, textColor, ctaText }: BannerProps) {
  const onScrollMoveDown = () => {
    const element = document.getElementById('nextContainer');
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <S.Container>
        <S.ContentWrapper>
          <S.Content>
            <S.Title mainColor={mainColor}>
              {'함께이기에 외칠 수 있는 열정\n오직 이곳 솝트에서 —'}
            </S.Title>
            <RecruitButton size="sm" mainColor={mainColor} textColor={textColor}>
              {ctaText}
              &gt;
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
