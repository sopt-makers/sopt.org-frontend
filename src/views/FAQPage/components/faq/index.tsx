import styled from '@emotion/styled';
import { useState } from 'react';
import { useIsDesktop, useIsMobile, useIsTablet } from '@src/hooks/useDevice';
import { questionList, questionListMobile, questionListTablet } from '@src/lib/constants/faq';
import QuestionBox from './QuestionBox';

function FAQ() {
  const [status, setStatus] = useState(new Set());
  const isDesktop = useIsDesktop();
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();

  const toggleBox = (index: number) => {
    const updatedStatus = new Set(status);
    status.has(index) ? updatedStatus.delete(index) : updatedStatus.add(index);
    setStatus(updatedStatus);
  };

  return (
    <Styled.Root>
      <Styled.Header>
        <Styled.Title>FAQ</Styled.Title>
        <Styled.Caption>자주 묻는 질문</Styled.Caption>
      </Styled.Header>

      <Styled.FAQWrapper>
        {isDesktop &&
          questionList.map((info, index) => (
            <div key={index} onClick={() => toggleBox(index)}>
              <QuestionBox info={info} status={status.has(index)} />
            </div>
          ))}
        {isTablet &&
          questionListTablet.map((info, index) => (
            <div key={index} onClick={() => toggleBox(index)}>
              <QuestionBox info={info} status={status.has(index)} />
            </div>
          ))}
        {isMobile &&
          questionListMobile.map((info, index) => (
            <div key={index} onClick={() => toggleBox(index)}>
              <QuestionBox info={info} status={status.has(index)} />
            </div>
          ))}
      </Styled.FAQWrapper>
    </Styled.Root>
  );
}

export default FAQ;

const Styled = {
  Root: styled.div`
    display: flex;
    flex-direction: column;
    /* 태블릿 뷰 */
    @media (max-width: 1919.9rem) and (min-width: 766rem) {
      align-items: center;
    }
  `,
  Header: styled.div`
    margin-bottom: 100rem;
    /* 태블릿 뷰 */
    @media (max-width: 1919.9rem) and (min-width: 766rem) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    /* 모바일 뷰 */
    @media (max-width: 766rem) {
      margin-bottom: 24rem;
    }
  `,
  Title: styled.h1`
    font-weight: 800;
    font-size: 45rem;
    line-height: 60rem;

    color: #ffffff;
    margin-bottom: 24rem;
    /* 모바일 뷰 */
    @media (max-width: 766rem) {
      font-size: 20rem;
      line-height: 28rem;
      margin-bottom: 4rem;
    }
  `,
  Caption: styled.p`
    font-weight: 400;
    font-size: 30rem;
    line-height: 30rem;
    color: #787878;
    /* 태블릿 뷰 */
    @media (max-width: 1919.9rem) and (min-width: 766rem) {
      font-size: 25rem;
    }
    /* 모바일 뷰 */
    @media (max-width: 766rem) {
      font-size: 16rem;
      line-height: 20rem;
    }
  `,
  FAQWrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 1200rem;
    margin-bottom: 240rem;
    & > div:not(:last-child) {
      margin-bottom: 30rem;
    }
    /* 태블릿 뷰 */
    @media (max-width: 1919.9rem) and (min-width: 766rem) {
      padding-left: 38.5rem;
      padding-right: 41.5rem;
      width: 766rem;
    }
    /* 모바일 뷰 */
    @media (max-width: 766rem) {
      width: 360rem;
      padding-left: 16rem;
      padding-right: 16rem;
    }
  `,
};
