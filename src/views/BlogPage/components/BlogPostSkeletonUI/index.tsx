import * as S from './style';

export default function BlogPostSkeletonUI() {
  const BlogPostSkeletonUIList = [0, 1, 2];

  return (
    <S.BlogPostListWrapper>
      <S.BlogPostList>
        {BlogPostSkeletonUIList.map((value) => (
          <S.BlogPost key={value}>
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
