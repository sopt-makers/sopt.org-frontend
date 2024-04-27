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
    border-radius: 30px;
    padding: 40px 50px;
    cursor: pointer;
    /* 태블릿 뷰 */
    @media (max-width: 119.99375rem) and (min-width: 47.875rem) {
      font-size: 25px;
      padding: 32px 40px;
      border-radius: 20px;
    }
    /* 모바일 뷰 */
    @media (max-width: 47.86875rem) {
      padding: 18px 30px;
      border-radius: 20px;
    }
  `,
  QuestionWrapper: styled.div<{ isOpened: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* 태블릿 뷰 */
    @media (max-width: 119.99375rem) and (min-width: 47.875rem) {
      margin-bottom: ${({ isOpened }) => (isOpened ? '16px' : '0')};
    }
  `,
  Title: styled.h1`
    font-weight: 600;
    font-size: 24px;
    line-height: 100%;
    color: #ffffff;
    &::before {
      content: 'Q. ';
      color: #bdec00;
    }

    /* 모바일 뷰 */
    @media (max-width: 47.86875rem) {
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
    @media (max-width: 119.99375rem) and (min-width: 47.875rem) {
      transform: ${({ isOpened }) => (isOpened ? 'rotate(180deg)' : 'rotate(0deg)')} scale(0.9);
      transform-origin: center;
    }
    /* 모바일 뷰 */
    @media (max-width: 47.86875rem) {
      transform: ${({ isOpened }) => (isOpened ? 'rotate(180deg)' : 'rotate(0deg)')} scale(0.7);
      transform-origin: center;
    }
  `,
  Content: styled.div`
    font-weight: 400;
    font-size: 25px;
    line-height: 40px;
    word-break: keep-all;
    color: rgba(253, 253, 253, 0.8);
    margin-top: 12px;

    &::before {
      content: 'A. ';
      color: #bdec00;
    }
    /* 태블릿 뷰 */
    @media (max-width: 119.99375rem) and (min-width: 47.875rem) {
      font-size: 22px;
    }
    /* 모바일 뷰 */
    @media (max-width: 47.86875rem) {
      font-size: 14px;
      line-height: 22px;
    }
  `,
};
