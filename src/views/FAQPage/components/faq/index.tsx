import styled from '@emotion/styled';
import { useState } from 'react';
import { useIsDesktop, useIsMobile, useIsTablet } from '@src/hooks/useDevice';
import { questionList, questionListMobile, questionListTablet } from '../../lib/constants';
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
    @media (max-width: 1919.9px) and (min-width: 766px) {
      align-items: center;
    }
  `,
  Header: styled.div`
    margin-bottom: 100px;
    /* 태블릿 뷰 */
    @media (max-width: 1919.9px) and (min-width: 766px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    /* 모바일 뷰 */
    @media (max-width: 766px) {
      margin-bottom: 24px;
    }
  `,
  Title: styled.h1`
    font-weight: 800;
    font-size: 45px;
    line-height: 60px;

    color: #ffffff;
    margin-bottom: 24px;
    /* 모바일 뷰 */
    @media (max-width: 766px) {
      font-size: 20px;
      line-height: 28px;
      margin-bottom: 4px;
    }
  `,
  Caption: styled.p`
    font-weight: 400;
    font-size: 30px;
    line-height: 30px;
    color: #787878;
    /* 태블릿 뷰 */
    @media (max-width: 1919.9px) and (min-width: 766px) {
      font-size: 25px;
    }
    /* 모바일 뷰 */
    @media (max-width: 766px) {
      font-size: 16px;
      line-height: 20px;
    }
  `,
  FAQWrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 1200px;
    margin-bottom: 240px;
    & > div:not(:last-child) {
      margin-bottom: 30px;
    }
    /* 태블릿 뷰 */
    @media (max-width: 1919.9px) and (min-width: 766px) {
      padding-left: 38.5px;
      padding-right: 41.5px;
      width: 766px;
    }
    /* 모바일 뷰 */
    @media (max-width: 766px) {
      width: 360px;
      padding-left: 16px;
      padding-right: 16px;
    }
  `,
};
