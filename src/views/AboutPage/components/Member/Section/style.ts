import styled from '@emotion/styled';

export const MarginTop = styled.div`
  height: 275px;
  @media (max-width: 90rem) and (min-width: 47.875rem) {
    height: 190px;
  }
  /* 모바일 뷰 */
  @media (max-width: 47.86875rem) {
    height: 120px;
  }
`;

export const CardContainer = styled.div`
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  gap: 34px;
  width: 1200px;

  @media (max-width: 80rem) and (min-width: 73.125rem) {
    width: calc(100% - 40px);
  }

  @media (max-width: 73.125rem) and (min-width: 48rem) {
    grid-template-columns: repeat(2, 1fr);
    width: 752px;
  }

  @media (max-width: 48rem) and (min-width: 36.5rem) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    width: 576px;
  }
  /* 모바일 뷰 */
  @media (max-width: 36.5rem) {
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
