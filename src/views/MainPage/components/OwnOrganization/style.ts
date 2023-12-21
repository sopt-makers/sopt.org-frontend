import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';

export const Wrapper = styled.div`
  display: flex;
  gap: 28px;
  overflow-x: hidden;

  @media (max-width: 1440px) {
    gap: 24px;
    overflow-x: scroll;
  }

  @media (max-width: 428px) {
    gap: 14px;
  }
`;
