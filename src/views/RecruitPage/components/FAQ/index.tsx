import styled from '@emotion/styled';
import { useContext, useState } from 'react';
import { questionList } from '@src/lib/constants/faq';
import { PartQuestionType, QnAType } from '@src/lib/types/admin';
import { ExtraPart, PartExtraType } from '@src/lib/types/universal';
import { parseStringToPart } from '@src/lib/utils/parseStringToPart';
import { BrandingColorContext } from '../..';
import TabBar from '../common/Tabs';
import { SectionTitle, SectionTitleTranslate, SectionTitleWrapper } from '../common/style';
import QuestionBox from './QuestionBox';

const FaqInfo = ({ info }: { info: PartQuestionType[] }) => {
  const { main } = useContext(BrandingColorContext);
  const [selectedTab, setSelectedTab] = useState<ExtraPart>(PartExtraType.ALL);
  const [status, setStatus] = useState(new Set());

  const infoMap = info.reduce(
    (acc, { part, questions }) => {
      acc[parseStringToPart(part)] = questions;
      return acc;
    },
    {
      ALL: questionList,
    } as Record<ExtraPart, QnAType[]>,
  );

  const toggleBox = (index: number) => {
    const updatedStatus = new Set(status);
    status.has(index) ? updatedStatus.delete(index) : updatedStatus.add(index);
    setStatus(updatedStatus);
  };

  return (
    <W>
      <Wrapper>
        <SectionTitleWrapper>
          <SectionTitleTranslate mainColor={'#' + main}>FAQ</SectionTitleTranslate>
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
        {infoMap[selectedTab].map((info, index) => (
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
  gap: 16px;
`;

const W = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  /* 태블릿 뷰 */
  @media (max-width: 81.1875rem) and (min-width: 47.875rem) {
    gap: 40px;
  }
  /* 모바일 뷰 */
  @media (max-width: 47.86875rem) {
    gap: 24px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* 태블릿 뷰 */
  @media (max-width: 81.1875rem) and (min-width: 47.875rem) {
    gap: 20px;
  }
  /* 모바일 뷰 */
  @media (max-width: 47.86875rem) {
    gap: 2px;
  }
`;

export default FaqInfo;
