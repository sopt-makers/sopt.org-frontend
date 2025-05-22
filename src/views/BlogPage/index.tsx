import { css } from '@emotion/react';
import { Suspense } from 'react';
import PageLayout from '@src/components/common/PageLayout';
import useStorage from '@src/hooks/useStorage';
import { activeGenerationCategoryList } from '@src/lib/constants/tabs';
import { PartCategoryType, SortType } from '@src/lib/types/blog';
import { ActivitySelectType } from '@src/lib/types/main';
import BlogPostSkeletonUI from '@src/views/BlogPage/components/BlogPostSkeletonUI';
import styled from '@emotion/styled';
import { BlogTabType, SelectedType } from './components/BlogTab/types';
import Banner from '@src/views/BlogPage/components/Banner';
import BlogTab from '@src/views/BlogPage/components/BlogTab';
import BlogPostList from '@src/views/BlogPage/components/BlogPostList';


const initialState: SelectedType = {
  selectedTab: BlogTabType.REVIEW,
  selectedMajorCategory: activeGenerationCategoryList[0],
  selectedSubCategory: PartCategoryType.ALL,
  selectedActivity: ActivitySelectType.ALL,
  tag: 'recruit',
};

export default function BlogPage() {
  const [selected, setSelected] = useStorage<SelectedType>(
    'selected',
    'sessionStorage',
    initialState,
  );
  const [selectedSort, setSelectedSort] = useStorage(
    'selectedSort',
    'sessionStorage',
    SortType.LATEST,
  );

  const updateSelected = <K extends keyof SelectedType>(key: K, value: SelectedType[K]) => {
    setSelected({
      ...selected,
      [key]: value,
    });
  };

  return (
    <PageLayout
      showScrollTopButton
      moreStyle={css`
        justify-content: space-between;
        height: 100vh;
      `}
    >
      <PageContainer>
        <Banner selectedTab={selected.selectedTab} />
        <BlogTab
          selected={selected}
          setSelected={setSelected}
          setSelectedTab={(value) => updateSelected('selectedTab', value)}
          setMajorCategory={(value) => updateSelected('selectedMajorCategory', value)}
          setSubCategory={(value) => updateSelected('selectedSubCategory', value)}
          setSelectedActivity={(value) => updateSelected('selectedActivity', value)}
        />
        <Suspense fallback={<BlogPostSkeletonUI />}>
          <BlogPostList
            selected={selected}
            selectedTab={selected.selectedTab}
            selectedSort={selectedSort}
            setMajorCategory={(value) => updateSelected('selectedMajorCategory', value)}
            setSubCategory={(value) => updateSelected('selectedSubCategory', value)}
            setSelectedSort={setSelectedSort}
          />
        </Suspense>
      </PageContainer>
    </PageLayout>
  );
}

const PageContainer = styled.div`
  margin-top: 80px;

  @media (max-width: 767px) {
    margin-top: 48px;
  }

  @media (max-width: 375px) {
    margin-top: 48px;
  }
`;
