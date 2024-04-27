import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 712px;
  height: 324px;
  border-radius: 19px;
  padding: 32px 46px;

  font-family: SUIT;
  font-size: 20rem;
  font-style: normal;
  font-weight: 400;
  line-height: 35.5px; /* 177.5% */
  letter-spacing: -0.8px;
  @media (max-width: 100rem) {
    width: 660px;
    height: 324px;
    padding: 32px 36px;
  }

  @media (max-width: 61rem) {
    width: 520px;
    height: 324px;
    padding: 32px 36px;
    font-size: 18rem;
    line-height: 30px;
  }

  @media (max-height: 53.75rem) and (max-width: 92.5rem) {
    height: 280px;
    padding: 20px 28px;
  }

  & > * {
    font-size: 100%;
  }
`;

export const Footer = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  gap: 8px;
  font-weight: 600;

  & > * {
    font-size: 100%;
  }
`;
