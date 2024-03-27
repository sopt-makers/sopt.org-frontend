import styled from '@emotion/styled';

export const Wrapper = styled.div`
  padding-top: 80rem;
  padding-bottom: 240rem;

  /* 태블릿 뷰 */
  @media (max-width: 1199rem) and (min-width: 766rem) {
    padding-top: 36rem;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9rem) {
    padding-top: 28rem;
  }
`;

export const SpanWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Span = styled.span`
  font-size: 30rem;
  line-height: 30rem;
  letter-spacing: -1%;

  /* 태블릿 뷰 */
  @media (max-width: 1199rem) and (min-width: 766rem) {
    font-size: 26rem;
    line-height: 26rem;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9rem) {
    font-size: 15rem;
    line-height: 25rem;
  }
`;

export const SpanHighlighted = styled(Span)`
  color: white;
  font-weight: 600;
`;

export const SpanNormal = styled(Span)`
  color: #787878;
`;
