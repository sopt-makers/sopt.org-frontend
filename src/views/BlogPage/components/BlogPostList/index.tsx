import OvalSpinner from '@src/components/common/OvalSpinner';
import type { PartCategoryType } from '@src/lib/types/blog';
import BlogPost from '@src/views/BlogPage/components/BlogPost';
import { useGetResponse } from '../../hooks/queries/useGetResponse';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import { selectedType } from '../BlogTab/types';
import EmptyBlogPostList from '../EmptyBlogPostList';
import * as S from './style';

interface BlogPostListProps {
  selected: selectedType;
  setMajorCategory: (newValue: number) => void;
  setSubCategory: (newValue: PartCategoryType) => void;
}

export default function BlogPostList({
  selected,
  setMajorCategory,
  setSubCategory,
}: BlogPostListProps) {
  const { selectedTab, selectedMajorCategory, selectedSubCategory } = selected;

  const { response, hasNextPage, fetchNextPage, isFetching } = useGetResponse(
    selectedTab,
    selectedMajorCategory,
    selectedSubCategory,
  );
  const { ref } = useInfiniteScroll(fetchNextPage);

  return (
    <>
      {response?.length == 0 ? (
        <EmptyBlogPostList
          selectedTab={selectedTab}
          setMajorCategory={setMajorCategory}
          setSubCategory={setSubCategory}
        />
      ) : (
        <>
          <S.BlogPostList>
            {response?.map((blogPost) => (
              <BlogPost key={blogPost.id} blogPost={blogPost} selectedTab={selectedTab} />
            ))}
          </S.BlogPostList>
          {(hasNextPage || isFetching) && (
            <S.SpinnerWrapper ref={hasNextPage ? ref : undefined}>
              <OvalSpinner />
            </S.SpinnerWrapper>
          )}
        </>
      )}
    </>
  );
}
