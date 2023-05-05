import styled from '@emotion/styled';

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  /* 태블릿 뷰 */
  @media (max-width: 1199px) and (min-width: 766px) {
    gap: 20px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    gap: 10px;
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
