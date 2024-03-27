import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';

export const Wrapper = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  display: flex;
  flex-direction: column;
  height: 480rem;
  border-radius: 21rem;
  padding: 42rem 40rem;

  font-family: SUIT;
  font-size: 19rem;
  font-style: normal;
  font-weight: 400;
  line-height: 33.3rem; /* 177.5% */
  letter-spacing: -0.8rem;
  color: ${colors.white};

  @media (max-width: 520px) {
    height: 280rem;
    border-radius: 12rem;
    padding: 24rem 20rem;
    font-size: 12.669rem;
    font-style: normal;
    font-weight: 400;
    line-height: 20.85rem; /* 164.575% */
    letter-spacing: -0.507rem;
  }
`;

export const Footer = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  gap: 8rem;
  font-weight: 600;
`;
