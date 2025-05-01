import { track } from '@amplitude/analytics-browser';
import Select from '@src/components/common/Select';
import { pageBreakPoint } from '@src/lib/constants/project';
import {
  activeGenerationCategoryList,
  activePartCategoryList,
  generationCategoryLabel,
  partCategoryLabel,
} from '@src/lib/constants/tabs';
import { PartCategoryType } from '@src/lib/types/blog';
import { PageType } from '@src/lib/types/universal';
import * as S from './style';
import { BlogTabMap, BlogTabType, selectedType } from './types';

interface BlogTabProps {
  selected: selectedType;
  setSelectedTab: (newValue: BlogTabType) => void;
  setMajorCategory: (newValue: number) => void;
  setSubCategory: (newValue: PartCategoryType) => void;
}

export default function BlogTab({
  selected,
  setSelectedTab,
  setMajorCategory,
  setSubCategory,
}: BlogTabProps) {
  const { selectedTab, selectedMajorCategory, selectedSubCategory } = selected;

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
            <S.TagContainer>
              <S.Tag isSelected={selectedSubCategory === PartCategoryType.ALL}>
                서류/면접 후기
              </S.Tag>
              <S.Tag isSelected={selectedSubCategory !== PartCategoryType.ALL}>활동 후기</S.Tag>
            </S.TagContainer>
          )}
          <S.SelectContainer>
            <Select
              options={activeGenerationCategoryList}
              labels={generationCategoryLabel}
              baseLabel="기수"
              selectedValue={selectedMajorCategory}
              setSelectedValue={setMajorCategory}
              baseValue={activeGenerationCategoryList[0]}
              breakPoint={pageBreakPoint[PageType.BLOG]}
            />
            <Select
              options={activePartCategoryList}
              labels={partCategoryLabel}
              baseLabel="파트"
              selectedValue={selectedSubCategory}
              setSelectedValue={setSubCategory}
              baseValue={PartCategoryType.ALL}
              breakPoint={pageBreakPoint[PageType.BLOG]}
            />
          </S.SelectContainer>
        </S.Layout>
      </S.Container>
    </S.Wrapper>
  );
}
