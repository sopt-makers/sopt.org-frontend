import { useState } from 'react';
import * as S from './style';
import { BlogTabList } from './types';

export default function Navigation() {
  const [selectTab, setSelectTab] = useState<keyof BlogTabList>('REVIEW');
  const blogTabList: BlogTabList = {
    REVIEW: {
      title: '활동후기',
      description: '회원들의 진솔한 후기를 통해 SOPT를 미리 만나보세요.  ',
    },
    ARTICLE: {
      title: '아티클',
      description: '회원들의 아티클을 통해 SOPT에서 얻은 인사이트를 확인해보세요.',
    },
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.TabContainer>
          {Object.entries(blogTabList).map(([blogTab, tabInfo]) => {
            return (
              <S.TabTitle
                key={blogTab}
                onClick={() => setSelectTab(blogTab as keyof BlogTabList)}
                isSelected={selectTab === blogTab}
              >
                {tabInfo.title}
              </S.TabTitle>
            );
          })}
        </S.TabContainer>
        <S.TabDescription>{blogTabList[selectTab]?.description}</S.TabDescription>
        <p>드롭다운 들어가는 부분</p>
      </S.Container>
    </S.Wrapper>
  );
}
