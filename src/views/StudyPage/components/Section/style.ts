import styled from '@emotion/styled';

export const Wrapper = styled.div`
  padding-top: 80px;
  padding-bottom: 240px;

  /* 태블릿 뷰 */
  @media (max-width: 1199px) and (min-width: 766px) {
    padding-top: 36px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    padding-top: 28px;
  }
`;

export const SpanWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Span = styled.span`
  font-size: 30px;
  line-height: 30px;
  letter-spacing: -1%;

  /* 태블릿 뷰 */
  @media (max-width: 1199px) and (min-width: 766px) {
    font-size: 26px;
    line-height: 26px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    font-size: 15px;
    line-height: 25px;
  }
`;

export const SpanHighlighted = styled(Span)`
  color: white;
  font-weight: 600;
`;

export const SpanNormal = styled(Span)`
  color: #787878;
`;
