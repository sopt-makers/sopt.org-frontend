import styled from '@emotion/styled';

export const Wrapper = styled.div`
  padding-top: 104px;
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;

  /* @media (max-width: 1580px) {
    overflow-x: scroll;
  } */

  @media (max-width: 1440px) {
    gap: 24px;
  }
  @media (max-width: 512px) {
    gap: 16px;
  }

  @media (max-width: 428px) {
    gap: 14px;
  }
`;
