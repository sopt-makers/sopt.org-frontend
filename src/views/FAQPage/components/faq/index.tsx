import styled from '@emotion/styled';
import { useState } from 'react';
import { questionList } from '../../lib/constants';
import QuestionBox from './QuestionBox';

function FAQ() {
  const [status, setStatus] = useState(new Set());

  const toggleBox = (index: number) => {
    const updatedStatus = new Set(status);

    status.has(index) ? updatedStatus.delete(index) : updatedStatus.add(index);
    setStatus(updatedStatus);
  };

  return (
    <Styled.Root>
      <div>
        <Styled.Title>FAQ</Styled.Title>
        <Styled.Caption>자주 묻는 질문</Styled.Caption>
      </div>

      <Styled.FAQWrapper>
        {questionList.map((info, index) => (
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
    & > div {
      margin-bottom: 1rem;
    }
  `,
  Title: styled.h1`
    font-family: 'SUIT';
    font-weight: 800;
    font-size: 45px;
    line-height: 60px;
    letter-spacing: -0.01em;
    color: #ffffff;
    margin-bottom: 2.4rem;
  `,
  Caption: styled.p`
    font-family: 'Pretendard';
    font-weight: 400;
    font-size: 30px;
    line-height: 30px;
    letter-spacing: -0.01em;
    color: #787878;
  `,
  FAQWrapper: styled.div`
    display: flex;
    flex-direction: column;
  `,
};
