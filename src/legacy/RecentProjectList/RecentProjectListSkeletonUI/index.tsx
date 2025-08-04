import * as S from './style';

export default function RecentProjectListSkeletonUI() {
  const recentProjectListDummyArray = [1, 2];

  return (
    <S.Wrapper>
      <S.CarouselViewport>
        <S.CarouselWrapper>
          {recentProjectListDummyArray.map((index) => (
            <S.MarginWrapper key={index}>
              <S.GridWrapper>
                <S.ThumbnailImage />
                <S.DetailWrapper>
                  <S.Title />
                  <S.Description />
                </S.DetailWrapper>
                <S.DetailFooterWrapper>
                  <S.Chip />
                </S.DetailFooterWrapper>
              </S.GridWrapper>
            </S.MarginWrapper>
          ))}
        </S.CarouselWrapper>
      </S.CarouselViewport>
      <S.DotWrapper>
        {recentProjectListDummyArray.map((index) => (
          <S.Dot key={index} />
        ))}
      </S.DotWrapper>
    </S.Wrapper>
  );
}
