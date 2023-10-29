import { useEffect } from 'react';
import PageLayout from '@src/components/common/PageLayout';
import useStorage from '@src/hooks/useStorage';
import { activeGenerationCategoryList } from '@src/lib/constants/tabs';
import { PartCategoryType } from '@src/lib/types/blog';
import BlogPostSkeletonUI from '@src/views/BlogPage/components/BlogPostSkeletonUI';
import { OvalSpinner } from '@src/views/ProjectPage/components';
import BlogPostList from './components/BlogPostList';
import BlogTab from './components/BlogTab';
import { BlogTabType } from './components/BlogTab/types';
import useFetch from './hooks/useFetch';
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

  const {
    state: response,
    ref,
    canGetMoreResponse,
  } = useFetch({
    selectedTab,
    selectedMajorCategory,
    selectedSubCategory,
  });

  if (!(response._TAG === 'OK' || response._TAG === 'LOADING')) return null;

  return (
    <PageLayout showScrollTopButton>
      <BlogTab
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        selectedMajorCategory={selectedMajorCategory}
        setMajorCategory={setMajorCategory}
        selectedSubCategory={selectedSubCategory}
        setSubCategory={setSubCategory}
      />
      {response.data.length === 0 ? (
        response._TAG === 'LOADING' && <BlogPostSkeletonUI />
      ) : (
        <>
          <BlogPostList
            selectedTap={selectedTab}
            setMajorCategory={setMajorCategory}
            setSubCategory={setSubCategory}
            blogPostList={response.data}
          />
          {(canGetMoreResponse || response._TAG === 'LOADING') && (
            <S.SpinnerWrapper ref={canGetMoreResponse ? ref : undefined}>
              <OvalSpinner />
            </S.SpinnerWrapper>
          )}
        </>
      )}
    </PageLayout>
  );
}
