import styled from '@emotion/styled';
import { ReactComponent as IToggle } from '@src/assets/images/toggle.svg';
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

  console.log(status);

  return (
    <Styled.Root>
      <Styled.QuestionWrapper>
        <Styled.Title>{question}</Styled.Title>
        <Styled.IconWrapper isOpened={status}>
          <IToggle />
        </Styled.IconWrapper>
      </Styled.QuestionWrapper>

      {status && (
        <Styled.Content>
          {answer.split('\n').map((text) => (
            <div key={text}>{text}</div>
          ))}
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
    width: 120rem;
    background: #262626;
    border-radius: 1rem;
    padding: 5.6rem;
    &:not(:last-child) {
      margin-bottom: 3rem;
    }
  `,
  QuestionWrapper: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  Title: styled.h1`
    font-family: 'SUIT';
    font-weight: 700;
    font-size: 30px;
    line-height: 100%;
    letter-spacing: -0.01em;
    color: #ffffff;
    margin-bottom: 3.7rem; ;
  `,
  IconWrapper: styled.div<{ isOpened: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
    transform: ${({ isOpened }) => (isOpened ? 'rotate(90deg)' : 'rotate(0deg')};
  `,
  Content: styled.p`
    font-family: 'Pretendard';
    font-weight: 400;
    font-size: 25px;
    line-height: 40px;
    letter-spacing: -0.01em;
    color: rgba(253, 253, 253, 0.8);
  `,
};
