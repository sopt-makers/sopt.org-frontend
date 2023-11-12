import { useRef } from 'react';
import ImageMainPageBanner from '@src/assets/images/main_banner.png';
import * as S from './style';

export default function Banner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const onScrollMoveDown = () => {
    if (containerRef.current) {
      const { height: containerHeight } = containerRef.current.getBoundingClientRect();
      window.scrollTo(0, containerHeight);
    }
  };

  return (
    <S.Container ref={containerRef}>
      <S.ContentWrapper>
        <S.Content>
          <S.Title>함께라서 외칠 수 있는 열정</S.Title>
          <S.Title>오직 이곳 SOPT에서만.</S.Title>
          <S.RecruitButton>모집 알림 신청하기 &gt; </S.RecruitButton>
        </S.Content>
        <S.DownScrollIcon onClick={onScrollMoveDown} />
      </S.ContentWrapper>
      <S.BannerWrapper>
        <S.BannerImage
          src={ImageMainPageBanner}
          alt="솝트 공식홈페이지 메인페이지 배너 사진"
          fill
          priority
        />
        <S.BannerGradient />
      </S.BannerWrapper>
    </S.Container>
  );
}
