import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';

export const Background = styled.section`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #090b12 6.18%, #090b12 98.83%);
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  color: ${colors.white};
  text-align: center;
  font-family: SUIT;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 56px */
  letter-spacing: -0.8px;
  margin-bottom: 11px;

  @media (max-width: 768px) and (min-width: 429px) {
    font-size: 34px;
    letter-spacing: -0.68px;
  }
  @media (max-width: 428px) {
    font-size: 20px;
    letter-spacing: -0.4px;
  }
`;

export const Description = styled.p`
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  font-family: SUIT;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 33.6px */
  letter-spacing: -0.48px;
  margin-bottom: 75px;

  @media (max-width: 768px) and (min-width: 429px) {
    font-size: 22px;
    line-height: 142%; /* 17.04px */
    letter-spacing: -0.24px;
    margin-bottom: 34px;
  }
  @media (max-width: 428px) {
    font-size: 12px;
    margin-bottom: 34px;
  }
`;

export const GoToRecruit = styled.a`
  cursor: pointer;
  border-radius: 25px;
  border: 2.218px solid #5b88f8;
  background: #40578d;
  height: 83.701px;
  padding: 27px 44px;
  justify-content: center;
  align-items: center;

  color: #e8f1ff;
  font-family: SUIT;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 100% */
  letter-spacing: -0.6px;

  @media (max-width: 768px) and (min-width: 429px) {
    padding: 20.758px 33.828px;
    border-radius: 19.221px;
    border: 1.705px solid #5b88f8;
    height: 64.352px;

    font-size: 23px;
    line-height: 23.065px; /* 100.282% */
    letter-spacing: -0.46px;
  }
  @media (max-width: 428px) {
    padding: 11.93px 19.441px;
    border-radius: 11.046px;
    border: 0.98px solid #5b88f8;
    height: 36.983px;

    font-size: 13.218px;
    line-height: 13.256px; /* 100.282% */
    letter-spacing: -0.264px;
  }
`;
