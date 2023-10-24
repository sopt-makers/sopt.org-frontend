import styled from '@emotion/styled';
import { colors } from '@src/lib/styles/colors';

const FlexWrapper = styled.div`
  width: 568px;
  display: flex;
  background-color: ${colors.gray800};
  border-radius: 12px;
  gap: 16px;
  padding: 24px;
  margin-left: 20px;
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    width: 305px;
  }
`;

const MarginWrapper = styled.div`
  padding-right: 20px;
`;

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const DetailFooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  align-items: flex-end;
`;

const TextName = styled.div``;

const TextSummary = styled.div``;
const Chip = styled.div``;
const TryLink = styled.a``;

export const S = {
  FlexWrapper,
  MarginWrapper,
  TextName,
  TextSummary,
  Chip,
  TryLink,
  DetailWrapper,
  DetailFooterWrapper,
};
