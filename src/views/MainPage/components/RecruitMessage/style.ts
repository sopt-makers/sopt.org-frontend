import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';

export const Background = styled.section`
  margin-top: 505px;
  margin-bottom: 600px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 90rem) {
    margin-top: 349px;
    margin-bottom: 375px;
  }

  @media (max-width: 48rem) {
    margin-top: 221px;
    margin-bottom: 221px;
  }

  @media (max-width: 23.5rem) {
    margin-top: 154px;
    margin-bottom: 150px;
  }
`;

export const Title = styled.h1`
  color: ${colors.white};
  text-align: center;
  font-family: SUIT;
  font-size: 40rem;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 56px */
  letter-spacing: -2%;
  margin-bottom: 11px;

  @media (max-width: 48rem) {
    font-size: 34rem;
  }

  @media (max-width: 23.5rem) {
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
  line-height: 140%; /* 33.6px */
  letter-spacing: -2%;
  margin-bottom: 75px;

  @media (max-width: 48rem) {
    font-size: 21rem;
    line-height: 142%; /* 17.04px */
    margin-bottom: 59px;
  }

  @media (max-width: 23.5rem) {
    font-size: 12rem;
    margin-bottom: 34px;
  }
`;

export const GoToRecruit = styled.a`
  cursor: pointer;
  border-radius: 25px;
  box-shadow: 0 0 0 2.218px #5b88f8 inset;
  background: #40578d;
  width: 281px;
  height: 83px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #e8f1ff;
  font-family: SUIT;
  font-size: 30rem;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 100% */
  letter-spacing: -0.6px;

  @media (max-width: 48rem) {
    width: 216px;
    height: 64px;

    border-radius: 19.221px;
    box-shadow: 0 0 0 1.705px #5b88f8 inset;

    font-size: 23rem;
    line-height: 23.065px; /* 100.282% */
    letter-spacing: -0.46px;
  }

  @media (max-width: 23.5rem) {
    width: 124px;
    height: 36px;
    border-radius: 11.046px;
    box-shadow: 0 0 0 0.98px #5b88f8 inset;

    font-size: 13.218rem;
    line-height: 13.256px; /* 100.282% */
    letter-spacing: -0.264px;
  }
`;
