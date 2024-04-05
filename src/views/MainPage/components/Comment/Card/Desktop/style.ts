import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 712rem;
  height: 324rem;
  border-radius: 19rem;
  padding: 32rem 46rem;

  font-family: SUIT;
  font-size: 20rem;
  font-style: normal;
  font-weight: 400;
  line-height: 35.5rem; /* 177.5% */
  letter-spacing: -0.8rem;
  @media (max-width: 1600px) {
    width: 660rem;
    height: 324rem;
    padding: 32rem 36rem;
  }

  @media (max-width: 976px) {
    width: 520rem;
    height: 324rem;
    padding: 32rem 36rem;
    font-size: 18rem;
    line-height: 30rem;
  }

  @media (max-height: 860px) and (max-width: 1480px) {
    height: 280rem;
    padding: 20rem 28rem;
  }

  & > * {
    font-size: 100%;
  }
`;

export const Footer = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  gap: 8rem;
  font-weight: 600;

  & > * {
    font-size: 100%;
  }
`;
