import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { motion } from 'framer-motion';

export const Background = styled.section`
  display: flex;
  height: 200vh;
  justify-content: center;
  align-items: flex-start;
  background: ${colors.gray950};
  position: relative;

  @media (max-width: 768px) and (min-width: 376px) {
    width: 100vw;
    justify-content: flex-start;
  }

  /* 모바일 뷰 */
  @media (max-width: 375px) {
    padding: 0px 32px;
    display: flex;
    justify-content: flex-start;
  }
`;

export const Wrapper = styled.section`
  height: 100vh;
  top: 0;
  position: -webkit-sticky;
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const TextContainer = styled(motion.span)`
  position: relative;
  overflow: hidden;
  display: block;
  text-align: center;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 768px) and (min-width: 433px) {
    font-size: 28px;
    width: 433px;
    word-break: keep-all;
    text-align: left;
    margin: auto;
  }

  /* 모바일 뷰 */
  @media (max-width: 432px) {
    font-size: 28px;
    width: 250px;
    word-break: keep-all;
    text-align: left;
    margin: auto;
  }
`;

export const MotionTitle = styled(motion.span)`
  position: absolute;
  left: 0;
  opacity: 0;

  :before {
    content: attr(data-text);
    display: inline-block;
    background: linear-gradient(93deg, #c9d8dd 78.65%, #fff 128.82%, #c9d8dd 137.19%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const BackgroundTitle = styled.span`
  background: linear-gradient(93deg, #c9d8dd -34.77%, #fff -14.77%, #636770 6.12%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
