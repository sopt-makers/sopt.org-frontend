import { css } from '@emotion/react';
import { Suspense } from 'react';
import PageLayout from '@src/components/common/PageLayout';
import useStorage from '@src/hooks/useStorage';
import { activeGenerationCategoryList } from '@src/lib/constants/tabs';
import { PartCategoryType } from '@src/lib/types/blog';
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

  const selected = { selectedTab, selectedMajorCategory, selectedSubCategory };

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
      />
      <Suspense fallback={<BlogPostSkeletonUI />}>
        <BlogPostList
          selected={selected}
          setMajorCategory={setMajorCategory}
          setSubCategory={setSubCategory}
        />
      </Suspense>
    </PageLayout>
  );
}
