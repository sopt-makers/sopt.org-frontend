import styled from '@emotion/styled';

export const CardWrapper = styled.div`
  width: 100%;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  height: 240px;
  padding: 18px;

  /* 태블릿, 모바일 뷰 */
  @media (max-width: 1199px) {
    height: 202px;
    padding: 16px;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    padding: 0 10px;
  }
`;

export const SpanWrapper = styled.div``;

const Span = styled.span`
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -1%;

  /* 태블릿 뷰 */
  @media (max-width: 1199px) and (min-width: 766px) {
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    font-size: 16px;
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

const Chip = styled.div`
  background-color: #313131;
  padding: 9px 12px;
  border-radius: 10px;
  font-size: 18px;
  letter-spacing: -1%;

  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    padding: 6px 12px;
    font-size: 14px;
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
  font-size: 26px;
  letter-spacing: -1%;
  line-height: 130%;

  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    font-size: 20px;
  }
`;
