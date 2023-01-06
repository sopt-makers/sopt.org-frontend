import styled from '@emotion/styled';
import Image from 'next/image';
import IToggle from '@src/assets/images/toggle.svg';
import { FAQType } from '../../types';

interface QuestionBoxProps {
  info: FAQType;
  status: boolean;
}

function QuestionBox(props: QuestionBoxProps) {
  const {
    info: { question, answer },
    status,
  } = props;

  return (
    <Styled.Root>
      <Styled.QuestionWrapper>
        <Styled.Title isOpened={status}>{question}</Styled.Title>
        <Styled.IconWrapper isOpened={status}>
          <Image src={IToggle} alt="toggle button" width={25} height={18.33} />
        </Styled.IconWrapper>
      </Styled.QuestionWrapper>

      {status && (
        <Styled.Content>
          {answer.split('\n').map((text) => {
            return <div key={text}>{text}</div>;
          })}
        </Styled.Content>
      )}
    </Styled.Root>
  );
}

export default QuestionBox;

const Styled = {
  Root: styled.div`
    display: flex;
    flex-direction: column;
    width: 1200px;
    background: #262626;
    border-radius: 10px;
    padding: 56px;
    padding-right: 54px;
  `,
  QuestionWrapper: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  Title: styled.h1<{ isOpened: boolean }>`
    font-family: 'SUIT';
    font-weight: 700;
    font-size: 30px;
    line-height: 100%;
    letter-spacing: -0.01em;
    color: #ffffff;
    margin-bottom: ${({ isOpened }) => (isOpened ? '37px' : '0')};
  `,
  IconWrapper: styled.div<{ isOpened: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    transform: ${({ isOpened }) => (isOpened ? 'rotate(90deg)' : 'rotate(0deg')};
  `,
  Content: styled.div`
    font-family: 'Pretendard';
    font-weight: 400;
    font-size: 25px;
    line-height: 40px;
    letter-spacing: -0.01em;
    color: rgba(253, 253, 253, 0.8);
  `,
};
