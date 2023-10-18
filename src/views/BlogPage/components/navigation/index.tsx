import { useState } from 'react';
import * as S from './style';
import { BlogTabList } from './types';

function Navigation() {
  const [selectTab, setSelectTab] = useState<keyof BlogTabList>('REVIEW');
  const blogTabList: BlogTabList = {
    REVIEW: { title: '활동후기', description: 'SOPT 회원들의 생생한 활동 후기 마치 생생정보통' },
    ARTICLE: { title: '아티클', description: 'SOPT 회원들의 멋있는 아티클들' },
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

export default Navigation;
