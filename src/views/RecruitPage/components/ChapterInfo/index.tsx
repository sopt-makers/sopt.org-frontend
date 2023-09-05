import styled from '@emotion/styled';
import { useState } from 'react';
import Flex from '@src/components/common/Flex';
import { Part } from '@src/lib/types/universal';
import { parsePartToKorean } from '@src/views/MainPage/components/ActivityReview/utils/parsePartToKorean';
import TabBar from '../common/Tabs';
import { SectionTitle, SectionTitleTranslate, SectionTitleWrapper } from '../common/styles';
import { infoMap } from './constants';

const ChapterInfo = () => {
  const [selectedTab, setSelectedTab] = useState<Part>(Part.PLAN);

  return (
    <Wrapper>
      <SectionTitleWrapper>
        <SectionTitleTranslate>Positions</SectionTitleTranslate>
        <SectionTitle>{'SOPT는 33기는 총 6개의 파트로\n이루어져 있어요.'}</SectionTitle>
      </SectionTitleWrapper>
      <TabBar type="without-all" onTabClick={setSelectedTab} selectedTab={selectedTab} />
      <Flex dir="column" gap="15px">
        <BlueChip>{parsePartToKorean(selectedTab)} 파트가 배우는 것</BlueChip>
        <InfoWrapper>{infoMap[selectedTab].info}</InfoWrapper>
      </Flex>
      <Flex dir="column" gap="15px">
        <GreenChip>이런 분이면 좋아요!</GreenChip>
        <FitWrapper>
          {infoMap[selectedTab].fit.map((fit, idx) => (
            <div key={idx}>{fit}</div>
          ))}
        </FitWrapper>
      </Flex>
    </Wrapper>
  );
};

const BaseChip = styled.div`
  border-radius: 30px;
  align-self: flex-start;
  border-width: 2px;
  border-style: solid;
  padding: 13px 28px;
  line-height: 22px;
  font-size: 22px;

  @media (max-width: 765.9px) {
    padding: 6px 10px;
    line-height: 18px;
    font-size: 12px;
    border-width: 1px;
  }
`;

const BlueChip = styled(BaseChip)`
  border-color: #51c0ff;
  color: #51c0ff;
  background: #1b2530;
  &:before {
    content: '✏️';
    padding-right: 10px;
  }
`;

const GreenChip = styled(BaseChip)`
  border-color: #1deda2;
  color: #1deda2;
  background: #172928;
  &:before {
    content: '👍';
    padding-right: 10px;
  }
`;

const Wrapper = styled.div`
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
  font-size: 24px;
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
  border-radius: 30px;
  background: #1b2530;
  padding: 48px 80px;

  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    padding: 24px 40px;
    border-radius: 24px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    padding: 18px 30px;
    border-radius: 20px;
  }
`;

const FitWrapper = styled(BaseText)`
  border-radius: 30px;
  background: #172928;
  padding: 60px 80px;
  display: flex;
  flex-direction: column;
  line-height: 40px;
  gap: 12px;
  & div::before {
    content: '✅';
    padding-right: 10px;
  }
  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    padding: 30px 40px;
    border-radius: 24px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    padding: 21px 28px;
    gap: 8px;
    border-radius: 20px;
  }
`;

export default ChapterInfo;
