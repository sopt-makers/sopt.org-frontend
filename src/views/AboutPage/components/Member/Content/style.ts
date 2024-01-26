import styled from '@emotion/styled';

export const CardContainer = styled.div`
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  gap: 34px;
  width: 1200px;

  @media (max-width: 1440px) and (min-width: 766px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    width: 576px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    width: 350px;
  }
`;

export const OvalSpinnerWrapper = styled.div`
  width: 100%;
  height: 100vh;

  padding-top: 200px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
