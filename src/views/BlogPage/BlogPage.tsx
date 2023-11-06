import { css } from '@emotion/react';
import PageLayout from '@src/components/common/PageLayout';
import useStorage from '@src/hooks/useStorage';
import { activeGenerationCategoryList } from '@src/lib/constants/tabs';
import { PartCategoryType } from '@src/lib/types/blog';
import BlogPostSkeletonUI from '@src/views/BlogPage/components/BlogPostSkeletonUI';
import { OvalSpinner } from '@src/views/ProjectPage/components';
import BlogPostList from './components/BlogPostList';
import BlogTab from './components/BlogTab';
import { BlogTabType } from './components/BlogTab/types';
import { useGetResponse } from './hooks/queries/useGetResponse';
import useInfiniteScroll from './hooks/useInfiniteScroll';
import * as S from './style';

export default function BlogPage() {
  const [selectedTab, setSelectedTab] = useStorage(
    'selectedTab',
    'sessionStorage',
    BlogTabType.REVIEW,
  );
  const [selectedMajorCategory, setMajorCategory] = useStorage(
    'selectedMajorCategory',
    'sessionStorage',
    activeGenerationCategoryList[0],
  );
  const [selectedSubCategory, setSubCategory] = useStorage(
    'selectedSubCategory',
    'sessionStorage',
    PartCategoryType.ALL,
  );

  const { response, hasNextPage, fetchNextPage, isFetching } = useGetResponse(
    selectedTab,
    selectedMajorCategory,
    selectedSubCategory,
  );
  const { ref } = useInfiniteScroll(fetchNextPage);

  const showTotalPostList = () => {
    setMajorCategory(activeGenerationCategoryList[0]);
    setSubCategory(PartCategoryType.ALL);
  };

  return (
    <PageLayout
      showScrollTopButton
      moreStyle={css`
        justify-content: space-between;
        height: 100vh;
      `}
    >
      <BlogTab
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        selectedMajorCategory={selectedMajorCategory}
        setMajorCategory={setMajorCategory}
        selectedSubCategory={selectedSubCategory}
        setSubCategory={setSubCategory}
      />
      {!response ? (
        <BlogPostSkeletonUI />
      ) : (
        <>
          {response.length === 0 ? (
            <S.EmptyBlogPostListWrapper>
              <S.EmptyBlogPostList>
                {`아직 올라온 ${selectedTab === 'article' ? '아티클이' : '활동후기가'} 없어요`}
              </S.EmptyBlogPostList>
              <S.Total onClick={showTotalPostList}>{`${
                selectedTab === 'article' ? '아티클' : '활동후기'
              } 전체 보기`}</S.Total>
            </S.EmptyBlogPostListWrapper>
          ) : (
            <>
              <BlogPostList selectedTap={selectedTab} blogPostList={response} />
              {(hasNextPage || isFetching) && (
                <S.SpinnerWrapper ref={hasNextPage ? ref : undefined}>
                  <OvalSpinner />
                </S.SpinnerWrapper>
              )}
            </>
          )}
        </>
      )}
    </PageLayout>
  );
}
