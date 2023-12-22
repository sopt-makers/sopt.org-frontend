import styled from '@emotion/styled';

export const Wrapper = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  display: flex;
  flex-direction: column;
  height: 480px;
  border-radius: 21px;
  padding: 42px 40px;

  font-family: SUIT;
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: 33.3px; /* 177.5% */
  letter-spacing: -0.8px;

  @media (max-width: 520px) {
    height: 280px;
    border-radius: 12px;
    padding: 24px 20px;
    font-size: 12.669px;
    font-style: normal;
    font-weight: 400;
    line-height: 20.85px; /* 164.575% */
    letter-spacing: -0.507px;
  }
`;

export const Footer = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  gap: 8px;
  font-weight: 600;
`;
