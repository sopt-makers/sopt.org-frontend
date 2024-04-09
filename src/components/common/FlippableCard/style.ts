import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const CardWrapper = styled(motion.div)`
  transition: 0.2s;
  display: inline-grid;
  transform: perspective(800px) rotateY(0deg);
  transform-style: preserve-3d;
`;

export const SideCardWrapper = styled.div`
  grid-area: 1 / 1 / 1 / 1;
  backface-visibility: hidden;
`;

export const FrontSideCardWrapper = styled(SideCardWrapper)``;

export const BackSideCardWrapper = styled(SideCardWrapper)`
  transform: rotateY(180deg);
`;
