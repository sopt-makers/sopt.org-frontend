import OvalSpinner from '@src/components/common/OvalSpinner';
import Select from '@src/components/common/Select';
import { pageBreakPoint } from '@src/lib/constants/project';
import { sortLabel, sortValues } from '@src/lib/constants/tabs';
import type { PartCategoryType, SortType } from '@src/lib/types/blog';
import { PageType } from '@src/lib/types/universal';
import BlogPost from '@src/views/BlogPage/components/BlogPost';
import OfficialVideo from '@src/views/BlogPage/components/OfficialVideo';
import { useGetResponse } from '../../hooks/useGetResponse';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import { BlogTabType, selectedType } from '../BlogTab/types';
import EmptyBlogPostList from '../EmptyBlogPostList';
import * as S from './style';

interface BlogPostListProps {
  selected: selectedType;
  selectedTab: BlogTabType;
  selectedSort: SortType;
  setMajorCategory: (newValue: number) => void;
  setSubCategory: (newValue: PartCategoryType) => void;
  setSelectedSort: (newValue: SortType) => void;
}

export default function BlogPostList({
  selected,
  selectedTab,
  selectedSort,
  setMajorCategory,
  setSubCategory,
  setSelectedSort,
}: BlogPostListProps) {
  const { selectedMajorCategory, selectedSubCategory } = selected;

  const { response, hasNextPage, fetchNextPage } = useGetResponse(
    selectedTab,
    selectedMajorCategory,
    selectedSubCategory,
  );

  const { ref } = useInfiniteScroll(fetchNextPage);

  return (
    <S.Wrapper>
      <S.Container>
        {selectedTab === BlogTabType.ARTICLE && <OfficialVideo />}
        {response?.length == 0 ? (
          <EmptyBlogPostList
            selectedTab={selectedTab}
            setMajorCategory={setMajorCategory}
            setSubCategory={setSubCategory}
          />
        ) : (
          <>
            {selectedTab === BlogTabType.ARTICLE && (
              <S.Layout>
                <S.Title>✍️ SOPT 회원들의 이야기를 확인해보세요</S.Title>
                <Select
                  options={sortValues}
                  baseValue={sortValues[0]}
                  baseLabel={sortLabel[sortValues[0]]}
                  selectedValue={selectedSort}
                  setSelectedValue={setSelectedSort}
                  labels={sortLabel}
                  breakPoint={pageBreakPoint[PageType.PROJECT]}
                  variant="square"
                  isSort
                />
              </S.Layout>
            )}
            <S.BlogPostList>
              {response?.map((blogPost) => (
                <BlogPost key={blogPost.title} blogPost={blogPost} selectedTab={selectedTab} />
              ))}
            </S.BlogPostList>
            {hasNextPage && (
              <S.SpinnerWrapper ref={hasNextPage ? ref : undefined}>
                <OvalSpinner />
              </S.SpinnerWrapper>
            )}
          </>
        )}
      </S.Container>
    </S.Wrapper>
  );
}
