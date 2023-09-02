import styled from '@emotion/styled';
import { useState } from 'react';
import { Part } from '@src/lib/types/universal';
import TabBar from '../common/Tabs';
import { SectionTitle } from '../common/styles';
import { infoMap } from './constants';

const ChapterInfo = () => {
  const [selectedTab, setSelectedTab] = useState<Part>(Part.PLAN);

  return (
    <W>
      <SectionTitle>{'SOPT는 33기는 총 6개의 파트로\n이루어져 있어요.'}</SectionTitle>
      <TabBar type="without-all" onTabClick={setSelectedTab} selectedTab={selectedTab} />
      <InfoWrapper>{infoMap[selectedTab].info}</InfoWrapper>
      <FitWrapper>
        {infoMap[selectedTab].fit.map((fit, idx) => (
          <div key={idx}>- {fit}</div>
        ))}
      </FitWrapper>
    </W>
  );
};

const W = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    gap: 40px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    gap: 24px;
  }
`;

const BaseText = styled.div`
  color: #fff;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px; /* 142.857% */
  letter-spacing: -0.28px;
  white-space: pre-line;
  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 27px */
    letter-spacing: -0.18px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 27px */
    letter-spacing: -0.18px;
  }
`;
const InfoWrapper = styled(BaseText)`
  border-radius: 10px;
  background: #504ebf;
  padding: 48px 80px;

  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    padding: 24px 40px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    padding: 18px 30px;
  }
`;

const FitWrapper = styled(BaseText)`
  border-radius: 10px;
  background: #000;
  padding: 60px 80px;
  display: flex;
  flex-direction: column;
  line-height: 40px;
  gap: 12px;
  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    padding: 30px 40px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    padding: 21px 28px;
    gap: 8px;
  }
`;

export default ChapterInfo;
