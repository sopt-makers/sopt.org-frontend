import * as S from './style';

interface CarouselProps {
  itemWidth: number;
  stride: number;
}

export default function RecentProjectListSkeletonUI({ itemWidth }: CarouselProps) {
  const recentProjectListDummyArray = [1, 2, 3];

  return (
    <S.Wrapper>
      <S.RightBlur />
      <S.CarouselViewport>
        <S.CarouselWrapper itemWidth={itemWidth} itemCount={3}>
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
      <S.RightArrow />
      <S.DotWrapper>
        {recentProjectListDummyArray.map((index) => (
          <S.Dot key={index} />
        ))}
      </S.DotWrapper>
    </S.Wrapper>
  );
}
