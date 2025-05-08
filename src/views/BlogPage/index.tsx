import { css } from '@emotion/react';
import { Suspense } from 'react';
import PageLayout from '@src/components/common/PageLayout';
import useStorage from '@src/hooks/useStorage';
import { activeGenerationCategoryList } from '@src/lib/constants/tabs';
import { PartCategoryType, SortType } from '@src/lib/types/blog';
import { ActivitySelectType } from '@src/lib/types/main';
import BlogPostSkeletonUI from '@src/views/BlogPage/components/BlogPostSkeletonUI';
import BlogPostList from './components/BlogPostList';
import BlogTab from './components/BlogTab';
import { BlogTabType } from './components/BlogTab/types';

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
  const [selectedActivity, setSelectedActivity] = useStorage(
    'selectedActivity',
    'sessionStorage',
    ActivitySelectType.ALL,
  );

  const [selectedSort, setSelectedSort] = useStorage(
    'selectedSort',
    'sessionStorage',
    SortType.LATEST,
  );

  const selected = { selectedTab, selectedMajorCategory, selectedSubCategory, selectedActivity };

  return (
    <PageLayout
      showScrollTopButton
      moreStyle={css`
        justify-content: space-between;
        height: 100vh;
      `}
    >
      <BlogTab
        selected={selected}
        setSelectedTab={setSelectedTab}
        setMajorCategory={setMajorCategory}
        setSubCategory={setSubCategory}
        setSelectedActivity={setSelectedActivity}
      />
      <Suspense fallback={<BlogPostSkeletonUI />}>
        <BlogPostList
          selected={selected}
          selectedTab={selectedTab}
          selectedSort={selectedSort}
          setMajorCategory={setMajorCategory}
          setSubCategory={setSubCategory}
          setSelectedSort={setSelectedSort}
        />
      </Suspense>
    </PageLayout>
  );
}
