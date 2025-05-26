import { useState } from 'react';
import IcSort from '@src/assets/icons/ic_sort.svg';
import Pagination from '@src/components/common/Pagination';
import Select from '@src/components/common/Select';
import { pageBreakPoint } from '@src/lib/constants/project';
import { sortLabel, sortValues } from '@src/lib/constants/tabs';
import { BlogCategoryType, SortType } from '@src/lib/types/blog';
import { PageType } from '@src/lib/types/universal';
import BlogPost from '@src/views/BlogPage/components/BlogPost';
import EmptyBlogPostList from '@src/views/BlogPage/components/EmptyBlogPostList';
import OfficialVideo from '@src/views/BlogPage/components/OfficialVideo';
import { useGetResponse } from '../../hooks/useGetResponse';
import { BlogTabType, SelectedType } from '../BlogTab/types';
import * as S from './style';

interface BlogPostListProps {
  selected: SelectedType;
  setSelected: (newValue: SelectedType) => void;
  selectedSort: SortType;
  setSelectedSort: (newValue: SortType) => void;
}

const INIT_PAGE = 1;

export default function BlogPostList({
  selected,
  setSelected,
  selectedSort,
  setSelectedSort,
}: BlogPostListProps) {
  const selectedTab = selected.selectedTab;
  const selectedReviewTag =
    selected.tag === 'recruit'
      ? BlogCategoryType.DOCUMENT_INTERVIEW
      : BlogCategoryType.ALL_ACTIVITIES;

  const { selectedMajorCategory, selectedSubCategory } = selected;
  const [currentPage, setCurrentPage] = useState(INIT_PAGE);

  const { response } = useGetResponse(
    selectedTab,
    selectedMajorCategory,
    selectedSubCategory,
    selectedSort,
    currentPage,
    selected,
  );

  return (
    <>
      <S.Wrapper>
        <S.Container>
          {selectedTab === BlogTabType.ARTICLE && <OfficialVideo />}
          {response?.response.length === 0 ? (
            <EmptyBlogPostList
              selected={selected}
              setSelected={setSelected}
              selectedTab={selectedTab}
              selectedReviewTag={selectedReviewTag}
            />
          ) : (
            <>
              {selectedTab === BlogTabType.ARTICLE && (
                <S.Layout>
                  <S.Title>✍️ SOPT 회원들의 이야기를 확인해보세요</S.Title>
                  <Select
                    options={sortValues}
                    baseLabel={sortLabel[sortValues[0]]}
                    selectedValue={selectedSort}
                    setSelectedValue={setSelectedSort}
                    labels={sortLabel}
                    breakPoint={pageBreakPoint[PageType.PROJECT]}
                    variant="square"
                    icon={IcSort}
                    style={{ minWidth: '160px' }}
                  />
                </S.Layout>
              )}
              <S.BlogPostList selectedTab={selectedTab}>
                {response?.response.map((blogPost) => (
                  <BlogPost
                    key={blogPost.id}
                    blogPost={blogPost}
                    selectedTab={selectedTab}
                    selectedReviewTag={selectedReviewTag}
                  />
                ))}
              </S.BlogPostList>
            </>
          )}
        </S.Container>
      </S.Wrapper>

      <Pagination
        currentPage={response?.currentPage ?? INIT_PAGE}
        totalPage={response?.totalPage ?? INIT_PAGE}
        hasPrevPage={response?.hasPrevPage ?? false}
        hasNextPage={response?.hasNextPage ?? false}
        onPageChange={setCurrentPage}
      />
    </>
  );
}
