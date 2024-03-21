import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const Root = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  width: 100%;
  height: 100vh;
  padding-bottom: 20vh;
`;
export const TopSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 34px;

  width: 100%;
`;
export const ErrorText = styled.p`
  color: #FCFCFC;

  font-size: calc(24px + 1vw);
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.96px;
`;
export const ContactLink = styled(Link)`
  position: fixed;
  bottom: 17vh;

  color: #FFF;
  font-size: 24px;
  font-weight: 600;
  line-height: 150%; /* 36px */
  letter-spacing: -0.48px;
  text-decoration-line: underline;

  cursor: pointer;

  @media (max-width: 768px) and (min-width: 428px) {
    font-size: 20px;
  }
  @media (max-width: 428px) {
    font-size: 18px;
  }
`;
export const ErrorCode = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 6px;

  position: relative;
`;
export const ErrorIcon = styled(motion.div)`
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
`;
