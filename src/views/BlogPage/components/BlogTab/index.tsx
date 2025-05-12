import { track } from '@amplitude/analytics-browser';
import Select from '@src/components/common/Select';
import { pageBreakPoint } from '@src/lib/constants/project';
import {
  activeGenerationCategoryList,
  activePartCategoryList,
  activities,
  activitySelectLabel,
  generationCategoryLabel,
  partCategoryLabel,
} from '@src/lib/constants/tabs';
import { PartCategoryType } from '@src/lib/types/blog';
import { ActivitySelectType } from '@src/lib/types/main';
import { PageType } from '@src/lib/types/universal';
import * as S from './style';
import { BlogTabMap, BlogTabType, SelectedType } from './types';

interface BlogTabProps {
  selected: SelectedType;
  setSelected: (newValue: SelectedType) => void;
  setSelectedTab: (newValue: BlogTabType) => void;
  setMajorCategory: (newValue: number) => void;
  setSubCategory: (newValue: PartCategoryType) => void;
  setSelectedActivity: (newValue: ActivitySelectType) => void;
}

export default function BlogTab({
  selected,
  setSelected,
  setSelectedTab,
  setMajorCategory,
  setSubCategory,
  setSelectedActivity,
}: BlogTabProps) {
  const { selectedTab, selectedMajorCategory, selectedSubCategory, selectedActivity } = selected;

  const handleTagClick = (tag: SelectedType['tag']) => {
    if (selected.tag === tag) return;

    setSelected({
      ...selected,
      tag,
    });
  };

  const blogTabList: BlogTabMap = {
    review: 'SOPT 후기',
    article: 'SOPT 이야기',
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.TabContainer>
          {Object.entries(blogTabList).map(([blogTab, tabInfo]) => {
            return (
              <S.TabTitle
                key={blogTab}
                onClick={() => {
                  setSelectedTab(blogTab as BlogTabType);
                  track(`click_${blogTab}_part`, { part: selectedSubCategory });
                }}
                isSelected={selectedTab === blogTab}
              >
                {tabInfo}
              </S.TabTitle>
            );
          })}
        </S.TabContainer>
        <S.Layout>
          {selectedTab === BlogTabType.REVIEW && (
            <>
              <S.TagContainer>
                <S.Tag
                  isSelected={selected.tag === 'recruit'}
                  onClick={() => handleTagClick('recruit')}
                  aria-label="서류/면접 후기"
                >
                  서류/면접 후기
                </S.Tag>
                <S.Tag
                  isSelected={selected.tag === 'activity'}
                  onClick={() => handleTagClick('activity')}
                  aria-label="활동 후기"
                >
                  활동 후기
                </S.Tag>
                {selected.tag === 'activity' && (
                  <Select
                    options={activities}
                    labels={activitySelectLabel}
                    baseLabel="전체 활동"
                    selectedValue={selectedActivity}
                    setSelectedValue={setSelectedActivity}
                    baseValue={ActivitySelectType.ALL}
                    breakPoint={pageBreakPoint[PageType.BLOG]}
                    variant="square"
                  />
                )}
              </S.TagContainer>
              <S.SelectContainer>
                <Select
                  options={activeGenerationCategoryList}
                  labels={generationCategoryLabel}
                  baseLabel="기수"
                  selectedValue={selectedMajorCategory}
                  setSelectedValue={setMajorCategory}
                  baseValue={activeGenerationCategoryList[0]}
                  breakPoint={'0px'}
                  variant="square"
                />
                <Select
                  options={activePartCategoryList}
                  labels={partCategoryLabel}
                  baseLabel="파트"
                  selectedValue={selectedSubCategory}
                  setSelectedValue={setSubCategory}
                  baseValue={PartCategoryType.ALL}
                  breakPoint={'0px'}
                  variant="square"
                />
              </S.SelectContainer>
            </>
          )}
        </S.Layout>
      </S.Container>
    </S.Wrapper>
  );
}
