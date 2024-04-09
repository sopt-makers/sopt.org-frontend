import styled from '@emotion/styled';

export const CardContainer = styled.div`
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  gap: 34px;
  width: 1200px;

  @media (max-width: 1280px) and (min-width: 1170px) {
    width: calc(100% - 40px);
  }

  @media (max-width: 1170px) and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    width: 752px;
  }

  @media (max-width: 768px) and (min-width: 584px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    width: 576px;
  }
  /* 모바일 뷰 */
  @media (max-width: 584px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    width: max(350px, 100% - 40px);
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
