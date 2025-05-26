import { useEffect } from 'react';
import { activeGenerationCategoryList } from '@src/lib/constants/tabs';
import { BlogCategoryType, PartCategoryType } from '@src/lib/types/blog';
import { ActivitySelectType } from '@src/lib/types/main';
import { BlogTabType, SelectedType } from '../BlogTab/types';
import * as S from './style';

interface EmptyBlogPostListProps {
  selected: SelectedType;
  setSelected: (newValue: SelectedType) => void;
  selectedTab: BlogTabType;
  selectedReviewTag: BlogCategoryType;
}

export default function EmptyBlogPostList({
  selected,
  setSelected,
  selectedTab,
  selectedReviewTag,
}: EmptyBlogPostListProps) {
  const showTotalPost = () => {
    if (selectedTab === BlogTabType.REVIEW) {
      if (selectedReviewTag === BlogCategoryType.DOCUMENT_INTERVIEW) {
        showTotalApplyReview();
      } else {
        showTotalActivityReview();
      }
    }
  };

  const showTotalApplyReview = () => {
    setSelected({
      ...selected,
      selectedMajorCategory: activeGenerationCategoryList[0],
      selectedSubCategory: PartCategoryType.ALL,
    });
  };

  const showTotalActivityReview = () => {
    setSelected({
      ...selected,
      selectedActivity: ActivitySelectType.ALL,
      selectedMajorCategory: activeGenerationCategoryList[0],
      selectedSubCategory: PartCategoryType.ALL,
    });
  };

  const isApplyReview =
    selectedTab === BlogTabType.REVIEW && selectedReviewTag === BlogCategoryType.DOCUMENT_INTERVIEW;
  const isActivityReview =
    selectedTab === BlogTabType.REVIEW && selectedReviewTag === BlogCategoryType.ALL_ACTIVITIES;

  return (
    <S.EmptyBlogPostListWrapper>
      <S.EmptyBlogPostList>
        {`아직 올라온 ${
          selectedTab === BlogTabType.ARTICLE
            ? '아티클이'
            : isApplyReview
            ? '서류/면접 후기가'
            : isActivityReview && '활동후기가'
        } 없어요`}
      </S.EmptyBlogPostList>
      <S.Total onClick={showTotalPost}>{`${
        selectedTab === BlogTabType.ARTICLE
          ? '아티클'
          : isApplyReview
          ? '서류/면접 후기'
          : isActivityReview && '활동후기'
      } 전체 보기`}</S.Total>
    </S.EmptyBlogPostListWrapper>
  );
}
