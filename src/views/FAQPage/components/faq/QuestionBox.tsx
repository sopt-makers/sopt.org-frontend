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

  const makeBoldText = (text: string) => {
    const regex = 'Shout Our Passion Together!';
    if (text.includes(regex)) {
      const index = text.indexOf(regex);
      const rest = text.slice(0, index);
      return (
        <>
          {rest} <span style={{ fontWeight: '700' }}>{regex}</span>
        </>
      );
    }
    return text;
  };

  return (
    <Styled.Root>
      <Styled.QuestionWrapper isOpened={status}>
        <Styled.Title>
          {question.split('\n').map((text) => (
            <div key={text}>{text}</div>
          ))}
        </Styled.Title>
        <Styled.IconWrapper isOpened={status}>
          <IToggle />
        </Styled.IconWrapper>
      </Styled.QuestionWrapper>

      {status && (
        <Styled.Content>
          {answer.split('\n').map((text) => (
            <div key={text}>{makeBoldText(text)}</div>
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
    background: #262626;
    border-radius: 10px;
    padding: 56px;
    padding-right: 54px;
    cursor: pointer;
    /* 태블릿 뷰 */
    @media (max-width: 1919.9px) and (min-width: 766px) {
      font-size: 25px;
      padding: 48px;
    }
    /* 모바일 뷰 */
    @media (max-width: 765.9px) {
      padding: 28px;
    }
  `,
  QuestionWrapper: styled.div<{ isOpened: boolean }>`
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    margin-bottom: ${({ isOpened }) => (isOpened ? '37px' : '0')};
    /* 태블릿 뷰 */
    @media (max-width: 1919.9px) and (min-width: 766px) {
      margin-bottom: ${({ isOpened }) => (isOpened ? '16px' : '0')};
    }
  `,
  Title: styled.h1`
    font-weight: 700;
    font-size: 30px;
    line-height: 100%;
    letter-spacing: -0.01em;
    color: #ffffff;

    /* 태블릿 뷰 */
    @media (max-width: 1919.9px) and (min-width: 766px) {
      font-size: 25px;
    }
    /* 모바일 뷰 */
    @media (max-width: 765.9px) {
      font-size: 16px;
      line-height: 24px;
    }
  `,
  IconWrapper: styled.div<{ isOpened: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    /* 태블릿 뷰 */
    @media (max-width: 1919.9px) and (min-width: 766px) {
      width: 32px;
      height: 32px;
    }
    /* 모바일 뷰 */
    @media (max-width: 765.9px) {
      width: 24px;
      height: 24px;
    }
    & > svg {
      width: 25px;
      height: 18.33px;
      /* 태블릿 뷰 */
      @media (max-width: 1919.9px) and (min-width: 766px) {
        width: 20px;
        height: 14.67px;
      }
      /* 모바일 뷰 */
      @media (max-width: 765.9px) {
        width: 15px;
        height: 11px;
      }
    }
    transform: ${({ isOpened }) => (isOpened ? 'rotate(90deg)' : 'rotate(0deg')};
  `,
  Content: styled.div`
    font-weight: 400;
    font-size: 25px;
    line-height: 40px;
    letter-spacing: -0.01em;
    color: rgba(253, 253, 253, 0.8);
    /* 태블릿 뷰 */
    @media (max-width: 1919.9px) and (min-width: 766px) {
      font-size: 22px;
    }
    /* 모바일 뷰 */
    @media (max-width: 765.9px) {
      font-size: 14px;
      line-height: 22px;
    }
  `,
};
