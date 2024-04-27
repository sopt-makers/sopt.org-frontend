import styled from '@emotion/styled';

export const PartButton = styled.button<{ isSelected: boolean }>`
  width: 144px;
  height: 50px;
  border-radius: 12px;
  background: ${({ isSelected }) => (isSelected ? '#242B46' : '#ecf0f5')};

  color: ${({ isSelected }) => (isSelected ? '#fff' : '#909fac')};
  font-family: SUIT;
  font-size: 21px;
  font-style: normal;
  font-weight: 500;
  line-height: 26.083px; /* 124.206% */
  letter-spacing: -0.84px;

  cursor: pointer;

  @media (max-width: 48rem) {
    width: 118.982px;
    height: 41.313px;

    font-size: 17.352px;
    line-height: 21.552px; /* 124.206% */
    letter-spacing: -0.694px;
  }

  @media (max-width: 26.75rem) {
    width: 68.38px;
    height: 23.743px;
    border-radius: 5.698px;

    font-size: 10px;
    line-height: 12.386px; /* 123.859% */
    letter-spacing: -0.4px;
  }
`;
