import styled from '@emotion/styled';

export const CardContainer = styled.div`
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  gap: 34rem;
  width: 1200rem;

  @media (max-width: 1280rem) and (min-width: 1170rem) {
    width: calc(100% - 40rem);
  }

  @media (max-width: 1170rem) and (min-width: 768rem) {
    grid-template-columns: repeat(2, 1fr);
    width: 752rem;
  }

  @media (max-width: 768rem) and (min-width: 584rem) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24rem;
    width: 576rem;
  }
  /* 모바일 뷰 */
  @media (max-width: 584rem) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15rem;
    width: max(350rem, 100% - 40rem);
  }
`;

export const OvalSpinnerWrapper = styled.div`
  width: 100%;
  height: 100vh;

  padding-top: 200rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
