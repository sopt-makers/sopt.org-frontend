import styled from '@emotion/styled';

export const Wrapper = styled.div`
  padding-top: 104px;
`;

export const ContentWrapper = styled.div`
  display: grid;
  gap: 28px;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 1440px) {
    grid-template-columns: repeat(auto-fit, minmax(385px, 1fr));
    gap: 24px;
  }

  @media (max-width: 768px) {
    display: flex;
    overflow-x: scroll;
  }

  @media (max-width: 512px) {
    gap: 16px;
  }

  @media (max-width: 428px) {
    gap: 14px;
  }
`;
