import IcSort from '@src/assets/icons/ic_sort.svg';
import Pagination from '@src/components/common/Pagination';
import Select from '@src/components/common/Select';
import { pageBreakPoint } from '@src/lib/constants/project';
import { sortLabel, sortValues } from '@src/lib/constants/tabs';
import type { PartCategoryType, SortType } from '@src/lib/types/blog';
import { PageType } from '@src/lib/types/universal';
import BlogPost from '@src/views/BlogPage/components/BlogPost';
import EmptyBlogPostList from '@src/views/BlogPage/components/EmptyBlogPostList';
import OfficialVideo from '@src/views/BlogPage/components/OfficialVideo';
import { useGetResponse } from '../../hooks/useGetResponse';
import { BlogTabType, selectedType } from '../BlogTab/types';
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

  const { response } = useGetResponse(selectedTab, selectedMajorCategory, selectedSubCategory);

  console.log(response);

  return (
    <>
      <S.Wrapper>
        <S.Container>
          {selectedTab === BlogTabType.ARTICLE && <OfficialVideo />}
          {response?.response.length == 0 ? (
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
                    icon={IcSort}
                    style={{ minWidth: '160px' }}
                  />
                </S.Layout>
              )}
              <S.BlogPostList>
                {response?.response.map((blogPost) => (
                  <BlogPost key={blogPost.title} blogPost={blogPost} selectedTab={selectedTab} />
                ))}
              </S.BlogPostList>
            </>
          )}
        </S.Container>
      </S.Wrapper>

      <Pagination
        currentPage={response?.currentPage ?? 1}
        totalPages={response?.totalPages ?? 1}
        hasPrevPage={response?.hasPrevPage ?? false}
        hasNextPage={response?.hasNextPage ?? false}
      />
    </>
  );
}
