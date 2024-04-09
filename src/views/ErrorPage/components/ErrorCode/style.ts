import styled from '@emotion/styled';
import { motion } from 'framer-motion';

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
