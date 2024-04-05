import styled from '@emotion/styled';
import { useState } from 'react';
import { ExtraPart, PartExtraType } from '@src/lib/types/universal';
import TabBar from '../common/Tabs';
import { SectionTitle, SectionTitleTranslate, SectionTitleWrapper } from '../common/style';
import QuestionBox from './QuestionBox';
import { faqMap } from './constant';

const FaqInfo = () => {
  const [selectedTab, setSelectedTab] = useState<ExtraPart>(PartExtraType.ALL);
  const [status, setStatus] = useState(new Set());

  const toggleBox = (index: number) => {
    const updatedStatus = new Set(status);
    status.has(index) ? updatedStatus.delete(index) : updatedStatus.add(index);
    setStatus(updatedStatus);
  };

  return (
    <W>
      <Wrapper>
        <SectionTitleWrapper>
          <SectionTitleTranslate>FAQ</SectionTitleTranslate>
          <SectionTitle>자주 묻는 질문</SectionTitle>
        </SectionTitleWrapper>
      </Wrapper>
      <TabBar
        type="with-all"
        onTabClick={setSelectedTab}
        selectedTab={selectedTab}
        amplitudeTrackingName={'click_recruit_faq_part'}
      />
      <FaqWrapper>
        {faqMap[selectedTab].map((info, index) => (
          <div key={index} onClick={() => toggleBox(index)}>
            <QuestionBox info={info} status={status.has(index)} />
          </div>
        ))}
      </FaqWrapper>
    </W>
  );
};

const FaqWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16rem;
`;

const W = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70rem;
  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    gap: 40rem;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    gap: 24rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20rem;
  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    gap: 20rem;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    gap: 2rem;
  }
`;

export default FaqInfo;
