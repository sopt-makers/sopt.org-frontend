import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';

export const CardWrapper = styled.div<{ background: string }>`
  background: ${({ background }) => background};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 19rem;
  padding: 39rem 0;
  max-width: 712rem;
  width: 100%;
  height: 380rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (max-width: 1440rem) {
    max-width: 511rem;
  }

  @media (max-width: 768rem) {
    max-width: 511rem;
    height: 434rem;
  }

  @media (max-width: 376rem) {
    max-width: 294rem;
    height: 249rem;
  }
`;

export const FooterKorName = styled.div`
  width: 144rem;
  text-align: center;
  padding: 16rem 0;
  color: ${colors.white};
  border: 1rem solid rgba(255, 255, 255, 0.5);
  background: rgba(117, 97, 79, 0.33);
  backdrop-filter: blur(2.949289321899414rem);
  border-radius: 14rem;

  font-size: 22rem;
  font-weight: 600;
  line-height: 28rem;
  letter-spacing: -0.904rem;

  @media (max-width: 1440rem) {
    width: 128rem;
    padding: 12rem 0;
    font-size: 21rem;
    line-height: 24.425rem;
  }

  @media (max-width: 512rem) {
    border-radius: 12rem;
    width: 96rem;
    padding: 10rem 0;
    font-size: 18rem;
    line-height: 24.425rem;
    font-size: 18rem;
    line-height: 20rem;
    letter-spacing: -0.904rem;
  }

  @media (max-width: 428rem) {
    border-radius: 6rem;
    width: 74rem;
    padding: 7rem 0;
    font-size: 12rem;
    line-height: 13rem;

    font-size: 11rem;
    font-style: normal;
    font-weight: 700;
    line-height: 19rem;
    letter-spacing: -0.44rem;
  }
`;

export const FooterEngName = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-family: SUIT;
  font-size: 20rem;
  font-style: normal;
  font-weight: 400;
  line-height: 28.288rem; /* 138.027% */
  letter-spacing: -1.025rem;
  padding-bottom: 4rem;

  @media (max-width: 1440rem) {
    font-size: 19rem;
    line-height: 13.9rem;
  }

  @media (max-width: 512rem) {
    font-size: 17rem;
  }

  @media (max-width: 428rem) {
    font-size: 11rem;
    line-height: 14.9rem;
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-left: 30rem;
  padding-right: 42rem;

  @media (max-width: 1440rem) {
    padding-left: 25rem;
    padding-right: 27rem;
  }

  @media (max-width: 428rem) {
    padding-left: 14rem;
    padding-right: 15rem;
  }
`;

export const ContentWrapper = styled.div`
  padding: 0 41rem;
  flex: 1;
  word-break: keep-all;

  @media (max-width: 428rem) {
    padding: 0 20rem;
  }
`;

export const TextWrapper = styled.span<{ weight: 'normal' | 'bold' }>`
  font-size: 20rem;
  color: ${colors.white};
  font-weight: ${({ weight }) => weight};
  line-height: 35rem; /* 175% */
  letter-spacing: -0.8rem;

  @media (max-width: 1440rem) {
    font-size: 18rem;
    line-height: 31rem; /* 172.222% */
    letter-spacing: -0.72rem;
  }

  @media (max-width: 512rem) {
    font-size: 16rem;
    line-height: 26rem;
  }

  @media (max-width: 428rem) {
    font-size: 11rem;
    line-height: 18.103rem; /* 164.575% */
    letter-spacing: -0.44rem;
  }
`;
