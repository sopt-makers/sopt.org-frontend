import { useState } from 'react';
import Select from '@src/components/common/Select';
import {
  activeGenerationCategoryList,
  activePartCategoryList,
  generationCategoryLabel,
  partCategoryLabel,
} from '@src/lib/constants/tabs';
import { ExtraPart, PartExtraType } from '@src/lib/types/universal';
import * as S from './style';
import { BlogTabMap, BlogTabType } from './types';

export default function BlogTab() {
  const [selectedTab, setSelectedTab] = useState<BlogTabType>(BlogTabType.REVIEW);
  const [selectedMajorCategory, setMajorCategory] = useState<number>(
    activeGenerationCategoryList[0],
  );
  const [selectedSubCategory, setSubCategory] = useState<ExtraPart>(PartExtraType.ALL);

  const blogTabList: BlogTabMap = {
    review: {
      title: '활동후기',
      description: '회원들의 진솔한 후기를 통해 SOPT를 미리 만나보세요.  ',
    },
    article: {
      title: '아티클',
      description: '회원들의 아티클을 통해 SOPT에서 얻은 인사이트를 확인해보세요.',
    },
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.TabContainer>
          {Object.entries(blogTabList).map(([blogTab, tabInfo]) => {
            console.log(blogTab);
            console.log(tabInfo);
            return (
              <S.TabTitle
                key={blogTab}
                onClick={() => setSelectedTab(blogTab as BlogTabType)}
                isSelected={selectedTab === blogTab}
              >
                {tabInfo.title}
              </S.TabTitle>
            );
          })}
        </S.TabContainer>
        <S.TabDescription>{blogTabList[selectedTab]?.description}</S.TabDescription>
        <S.SlectContainer>
          <Select
            options={activeGenerationCategoryList}
            labels={generationCategoryLabel}
            baseLabel="기수"
            selectedValue={selectedMajorCategory}
            setSelectedValue={setMajorCategory}
            baseValue={activeGenerationCategoryList[0]}
          />
          <Select
            options={activePartCategoryList}
            labels={partCategoryLabel}
            baseLabel="파트"
            selectedValue={selectedSubCategory}
            setSelectedValue={setSubCategory}
            baseValue={PartExtraType.ALL}
          />
        </S.SlectContainer>
      </S.Container>
    </S.Wrapper>
  );
}
