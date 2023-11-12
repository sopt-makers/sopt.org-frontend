import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';

export const Backgroud = styled.section`
  display: flex;
  max-width: 1920px;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: ${colors.gray950};

  /* 모바일 뷰 */
  @media (max-width: 375px) {
    padding: 0px 32px;
    display: flex;
    justify-content: flex-start;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: linear-gradient(93deg, #c9d8dd -34.77%, #fff -20.17%, #636770 6.12%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  /* 모바일 뷰 */
  @media (max-width: 375px) {
    font-size: 28px;
    width: 250px;
    word-break: keep-all;
    text-align: left;
  }
`;
