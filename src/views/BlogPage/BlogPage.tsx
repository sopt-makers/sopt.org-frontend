import { useState } from 'react';
import PageLayout from '@src/components/common/PageLayout';
import { activeGenerationCategoryList } from '@src/lib/constants/tabs';
import { ExtraPart, PartExtraType } from '@src/lib/types/universal';
import { OvalSpinner } from '@src/views/ProjectPage/components';
import BlogPostList from './components/BlogPostList';
import BlogTab from './components/BlogTab';
import { BlogTabType } from './components/BlogTab/types';
import useFetch from './hooks/useFetch';
import * as S from './style';

export default function BlogPage() {
  const [selectedTab, setSelectedTab] = useState<BlogTabType>(BlogTabType.REVIEW);
  const [selectedMajorCategory, setMajorCategory] = useState<number>(
    activeGenerationCategoryList[0],
  );
  const [selectedSubCategory, setSubCategory] = useState<ExtraPart>(PartExtraType.ALL);

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
    <PageLayout>
      <BlogTab
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        selectedMajorCategory={selectedMajorCategory}
        setMajorCategory={setMajorCategory}
        selectedSubCategory={selectedSubCategory}
        setSubCategory={setSubCategory}
      />
      <BlogPostList selectedTap={selectedTab} blogPostList={response.data} />
      {(canGetMoreResponse || response._TAG === 'LOADING') && (
        <S.SpinnerWrapper ref={canGetMoreResponse ? ref : undefined}>
          <OvalSpinner />
        </S.SpinnerWrapper>
      )}
    </PageLayout>
  );
}
