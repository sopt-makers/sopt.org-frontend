import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { motion } from 'framer-motion';

export const Background = styled.section`
  display: flex;
  height: 135vh;
  justify-content: center;
  align-items: flex-start;
  background: ${colors.gray950};
  position: relative;
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
  font-size: 50rem;
  font-style: normal;
  font-weight: 700;
  line-height: 73px;
  white-space: pre-line;

  @media (max-width: 90rem) {
    font-size: 40rem;
    line-height: normal;
  }

  @media (max-width: 48.375rem) {
    font-size: 25rem;
    line-height: 38px;
    letter-spacing: -2%;
    word-break: keep-all;
  }
`;

export const MotionTitle = styled(motion.span)`
  position: absolute;
  left: 0;
  opacity: 0;
  font-size: 100%;

  ::before {
    content: attr(data-text);
    display: inline-block;
    background: linear-gradient(93deg, #c9d8dd 78.65%, #fff 128.82%, #c9d8dd 137.19%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const BackgroundTitle = styled.span`
  font-size: 100%;
  background: linear-gradient(93deg, #c9d8dd -34.77%, #fff -14.77%, #636770 6.12%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
