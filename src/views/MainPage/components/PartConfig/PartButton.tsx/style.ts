import styled from '@emotion/styled';

export const PartButton = styled.button<{ isSelected: boolean }>`
  width: 144rem;
  height: 50rem;
  border-radius: 12rem;
  background: ${({ isSelected }) => (isSelected ? '#242B46' : '#ecf0f5')};

  color: ${({ isSelected }) => (isSelected ? '#fff' : '#909fac')};
  font-family: SUIT;
  font-size: 21rem;
  font-style: normal;
  font-weight: 500;
  line-height: 26.083rem; /* 124.206% */
  letter-spacing: -0.84rem;

  cursor: pointer;

  @media (max-width: 768rem) {
    width: 118.982rem;
    height: 41.313rem;

    font-size: 17.352rem;
    line-height: 21.552rem; /* 124.206% */
    letter-spacing: -0.694rem;
  }

  @media (max-width: 428rem) {
    width: 68.38rem;
    height: 23.743rem;
    border-radius: 5.698rem;

    font-size: 10rem;
    line-height: 12.386rem; /* 123.859% */
    letter-spacing: -0.4rem;
  }
`;
