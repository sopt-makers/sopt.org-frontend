import styled from '@emotion/styled';
import { ReactComponent as IcArrow } from '@src/assets/icons/ic_arrow_right_white.svg';
import { FAQType } from '@src/lib/types/faq';

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
    <Styled.Root isOpened={status}>
      <Styled.QuestionWrapper isOpened={status}>
        <Styled.Title>{question}</Styled.Title>
        <Styled.IconWrapper isOpened={status}>
          <IcArrow />
        </Styled.IconWrapper>
      </Styled.QuestionWrapper>
      {status && <Styled.Content>{answer}</Styled.Content>}
    </Styled.Root>
  );
}

export default QuestionBox;

const Styled = {
  Root: styled.div<{ isOpened: boolean }>`
    transition: 0.2s;
    display: flex;
    flex-direction: column;
    background: ${({ isOpened }) => (isOpened ? '#222220' : '#181818')};
    border-radius: 30rem;
    padding: 40rem 50rem;
    cursor: pointer;
    /* 태블릿 뷰 */
    @media (max-width: 1919.9px) and (min-width: 766px) {
      font-size: 25rem;
      padding: 32rem 40rem;
      border-radius: 20rem;
    }
    /* 모바일 뷰 */
    @media (max-width: 765.9px) {
      padding: 18rem 30rem;
      border-radius: 20rem;
    }
  `,
  QuestionWrapper: styled.div<{ isOpened: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* 태블릿 뷰 */
    @media (max-width: 1919.9px) and (min-width: 766px) {
      margin-bottom: ${({ isOpened }) => (isOpened ? '16rem' : '0')};
    }
  `,
  Title: styled.h1`
    font-weight: 600;
    font-size: 24rem;
    line-height: 100%;
    color: #ffffff;
    &::before {
      content: 'Q. ';
      color: #bdec00;
    }

    /* 모바일 뷰 */
    @media (max-width: 765.9px) {
      font-size: 16rem;
      line-height: 24rem;
    }
  `,
  IconWrapper: styled.div<{ isOpened: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40rem;
    height: 40rem;
    /* 태블릿 뷰 */
    @media (max-width: 1919.9px) and (min-width: 766px) {
      transform: ${({ isOpened }) => (isOpened ? 'rotate(180deg)' : 'rotate(0deg)')} scale(0.9);
      transform-origin: center;
    }
    /* 모바일 뷰 */
    @media (max-width: 765.9px) {
      transform: ${({ isOpened }) => (isOpened ? 'rotate(180deg)' : 'rotate(0deg)')} scale(0.7);
      transform-origin: center;
    }
  `,
  Content: styled.div`
    font-weight: 400;
    font-size: 25rem;
    line-height: 40rem;
    word-break: keep-all;
    color: rgba(253, 253, 253, 0.8);
    margin-top: 12rem;

    &::before {
      content: 'A. ';
      color: #bdec00;
    }
    /* 태블릿 뷰 */
    @media (max-width: 1919.9px) and (min-width: 766px) {
      font-size: 22rem;
    }
    /* 모바일 뷰 */
    @media (max-width: 765.9px) {
      font-size: 14rem;
      line-height: 22rem;
    }
  `,
};
