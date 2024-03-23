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
  min-height: 400px;
  padding-bottom: 20vh;

  overflow: scroll;
`;
export const TopSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 34px;

  width: 100%;
`;
export const ErrorText = styled.p`
  color: #fcfcfc;

  font-size: calc(24px + 1vw);
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.96px;
`;
export const ContactLink = styled(Link)`
  position: absolute;
  bottom: 17vh;

  color: #fff;
  font-size: 24px;
  font-weight: 600;
  line-height: 150%; /* 36px */
  letter-spacing: -0.48px;
  text-decoration-line: underline;

  cursor: pointer;

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
