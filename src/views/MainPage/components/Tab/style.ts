import styled from '@emotion/styled';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 31px;

  /* 태블릿 뷰 */
  @media (max-width: 48rem) {
    margin-bottom: 26px;
  }
  /* 모바일 뷰 */
  @media (max-width: 23.5rem) {
    margin-bottom: 14px;
  }
`;

export const Tab = styled.h2`
  color: #5b88f8;
  font-family: SUIT;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 20px;
  line-height: 46.311px; /* 257.282% */
  letter-spacing: -2%;
  z-index: 1;

  @media (max-width: 23.5rem) {
    font-size: 11px;
    line-height: 26.615px; /* 241.956% */
    letter-spacing: -0.22px;
    margin-bottom: 0px;
  }
`;

export const Title = styled.h1`
  color: #30324d;
  font-family: SUIT;
  font-size: 45px;
  font-style: normal;
  font-weight: 600;
  line-height: 50.64px; /* 112.534% */
  letter-spacing: -1.35px;

  margin-bottom: 16px;
  word-break: keep-all;

  @media (max-width: 48rem) {
    font-size: 36px;
    letter-spacing: -1.08px;
  }

  @media (max-width: 23.5rem) {
    font-size: 21px;
    line-height: 29.103px; /* 138.588% */
    letter-spacing: -0.63px;
    margin-bottom: 3.5px;
  }
`;

export const Description = styled.p`
  color: #727272;
  font-family: SUIT;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 164.706% */
  letter-spacing: -0.68px;
  word-break: keep-all;
  white-space: pre-line;

  @media (max-width: 48rem) {
    font-size: 16px;
    line-height: 26px; /* 162.5% */
    letter-spacing: -0.64px;
  }

  @media (max-width: 23.5rem) {
    font-size: 10px;
    line-height: 14.942px; /* 149.424% */
    letter-spacing: -0.4px;
  }
`;
