import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';

export const Background = styled.section`
  margin-top: 505rem;
  margin-bottom: 600rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1440px) {
    margin-top: 349rem;
    margin-bottom: 375rem;
  }

  @media (max-width: 768px) {
    margin-top: 221rem;
    margin-bottom: 221rem;
  }

  @media (max-width: 376px) {
    margin-top: 154rem;
    margin-bottom: 150rem;
  }
`;

export const Title = styled.h1`
  color: ${colors.white};
  text-align: center;
  font-family: SUIT;
  font-size: 40rem;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 56rem */
  letter-spacing: -2%;
  margin-bottom: 11rem;

  @media (max-width: 768px) {
    font-size: 34rem;
  }

  @media (max-width: 376px) {
    font-size: 20rem;
  }
`;

export const Description = styled.p`
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  font-family: SUIT;
  font-size: 24rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 33.6rem */
  letter-spacing: -2%;
  margin-bottom: 75rem;

  @media (max-width: 768px) {
    font-size: 21rem;
    line-height: 142%; /* 17.04rem */
    margin-bottom: 59rem;
  }

  @media (max-width: 376px) {
    font-size: 12rem;
    margin-bottom: 34rem;
  }
`;

export const GoToRecruit = styled.a`
  cursor: pointer;
  border-radius: 25rem;
  box-shadow: 0 0 0 2.218rem #5b88f8 inset;
  background: #40578d;
  width: 281rem;
  height: 83rem;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #e8f1ff;
  font-family: SUIT;
  font-size: 30rem;
  font-style: normal;
  font-weight: 500;
  line-height: 30rem; /* 100% */
  letter-spacing: -0.6rem;

  @media (max-width: 768px) {
    width: 216rem;
    height: 64rem;

    border-radius: 19.221rem;
    box-shadow: 0 0 0 1.705rem #5b88f8 inset;

    font-size: 23rem;
    line-height: 23.065rem; /* 100.282% */
    letter-spacing: -0.46rem;
  }

  @media (max-width: 376px) {
    width: 124rem;
    height: 36rem;
    border-radius: 11.046rem;
    box-shadow: 0 0 0 0.98rem #5b88f8 inset;

    font-size: 13.218rem;
    line-height: 13.256rem; /* 100.282% */
    letter-spacing: -0.264rem;
  }
`;
