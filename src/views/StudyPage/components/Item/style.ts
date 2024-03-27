import styled from '@emotion/styled';

export const CardWrapper = styled.div`
  width: 100%;
  position: relative;
  border-radius: 10rem;
  overflow: hidden;
  height: 240rem;
  padding: 18rem;

  /* 태블릿, 모바일 뷰 */
  @media (max-width: 1199rem) {
    height: 202rem;
    padding: 16rem;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8rem;
  /* 모바일 뷰 */
  @media (max-width: 765.9rem) {
    padding: 0 10rem;
  }
`;

export const SpanWrapper = styled.div``;

const Span = styled.span`
  font-size: 18rem;
  line-height: 26rem;
  letter-spacing: -1%;

  /* 태블릿 뷰 */
  @media (max-width: 1199rem) and (min-width: 766rem) {
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9rem) {
    font-size: 16rem;
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

const Chip = styled.div`
  background-color: #313131;
  padding: 9rem 12rem;
  border-radius: 10rem;
  font-size: 18rem;
  letter-spacing: -1%;

  /* 모바일 뷰 */
  @media (max-width: 765.9rem) {
    padding: 6rem 12rem;
    font-size: 14rem;
    line-height: 120%;
  }
`;

export const ChipHighlighted = styled(Chip)`
  color: white;
`;

export const ChipNormal = styled(Chip)`
  color: rgba(255, 255, 255, 60%);
`;

export const Title = styled.div`
  color: white;
  font-size: 26rem;
  letter-spacing: -1%;
  line-height: 130%;

  /* 모바일 뷰 */
  @media (max-width: 765.9rem) {
    font-size: 20rem;
  }
`;
