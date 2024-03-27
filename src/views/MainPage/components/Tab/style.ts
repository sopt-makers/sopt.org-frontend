import styled from '@emotion/styled';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 31rem;

  /* 태블릿 뷰 */
  @media (max-width: 768px) {
    margin-bottom: 26rem;
  }
  /* 모바일 뷰 */
  @media (max-width: 376px) {
    margin-bottom: 14rem;
  }
`;

export const Tab = styled.h2`
  color: #5b88f8;
  font-family: SUIT;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 10rem;
  font-size: 20rem;
  line-height: 46.311rem; /* 257.282% */
  letter-spacing: -2%;
  z-index: 1;

  @media (max-width: 376px) {
    font-size: 11rem;
    line-height: 26.615rem; /* 241.956% */
    letter-spacing: -0.22rem;
    margin-bottom: 0rem;
  }
`;

export const Title = styled.h1`
  color: #30324d;
  font-family: SUIT;
  font-size: 45rem;
  font-style: normal;
  font-weight: 600;
  line-height: 50.64rem; /* 112.534% */
  letter-spacing: -1.35rem;

  margin-bottom: 16rem;
  word-break: keep-all;

  @media (max-width: 768px) {
    font-size: 36rem;
    letter-spacing: -1.08rem;
  }

  @media (max-width: 376px) {
    font-size: 21rem;
    line-height: 29.103rem; /* 138.588% */
    letter-spacing: -0.63rem;
    margin-bottom: 3.5rem;
  }
`;

export const Description = styled.p`
  color: #727272;
  font-family: SUIT;
  font-size: 17rem;
  font-style: normal;
  font-weight: 400;
  line-height: 28rem; /* 164.706% */
  letter-spacing: -0.68rem;
  word-break: keep-all;
  white-space: pre-line;

  @media (max-width: 768px) {
    font-size: 16rem;
    line-height: 26rem; /* 162.5% */
    letter-spacing: -0.64rem;
  }

  @media (max-width: 376px) {
    font-size: 10rem;
    line-height: 14.942rem; /* 149.424% */
    letter-spacing: -0.4rem;
  }
`;
