import styled from '@emotion/styled';
import { useState } from 'react';
import Flex from '@src/components/common/Flex';
import { Part } from '@src/lib/types/universal';
import { parsePartToKorean } from '@src/lib/utils/parsePartToKorean';
import TabBar from '../common/Tabs';
import { SectionTitle, SectionTitleTranslate, SectionTitleWrapper } from '../common/styles';
import { infoMap } from './constants';

const ChapterInfo = () => {
  const [selectedTab, setSelectedTab] = useState<Part>(Part.PLAN);

  return (
    <Wrapper id="chapter-info">
      <SectionTitleWrapper>
        <SectionTitleTranslate>Positions</SectionTitleTranslate>
        <SectionTitle>{'SOPT 34기는 총 6개의 파트로 이루어져 있어요.'}</SectionTitle>
      </SectionTitleWrapper>
      <TabBar
        type="without-all"
        onTabClick={setSelectedTab}
        selectedTab={selectedTab}
        amplitudeTrackingName={'click_recruit_description_part'}
      />
      <Flex dir="column" gap="15px">
        <BlueChip>{parsePartToKorean(selectedTab)} 파트는 이런 걸 배워요</BlueChip>
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
  line-height: 42px;
  font-size: 22px;

  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    font-size: 18px;
  }

  @media (max-width: 765.9px) {
    line-height: 18px;
    font-size: 12px;
  }
`;

const BlueChip = styled(BaseChip)`
  color: #fff;
  &:before {
    content: '✏️';
    padding: 0px 10px;
  }
`;

const GreenChip = styled(BaseChip)`
  color: #BDEC00;
  &:before {
    content: '👍';
    padding: 0px 10px;
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
  background: #222220;
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
  background: #21270F;
  padding: 60px 80px;
  display: flex;
  flex-direction: column;
  line-height: 40px;
  gap: 12px;
  & div::before {
    content: '-';
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
