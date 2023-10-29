import * as S from './style';

export default function BlogPostSkeletonUI() {
  const array = new Array(3).fill(0);

  return (
    <S.BlogPostListWrapper>
      <S.BlogPostList>
        {array.map((_, index) => (
          <S.BlogPost key={index}>
            <S.HeaderWrapper>
              <S.Header></S.Header>
              <S.Body>
                <S.Title />
                <S.Description />
              </S.Body>
              <S.TagList>
                <S.Tag />
                <S.Tag />
              </S.TagList>
            </S.HeaderWrapper>
            <S.ThumbnailWrapper>
              <S.Thumbnail />
            </S.ThumbnailWrapper>
          </S.BlogPost>
        ))}
      </S.BlogPostList>
    </S.BlogPostListWrapper>
  );
}
