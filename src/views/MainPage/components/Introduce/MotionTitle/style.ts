import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const MotionTitle = styled(motion.span)`
  position: absolute;
  left: 0;

  :before {
    content: attr(data-text);
    display: inline-block;
    background: linear-gradient(93deg, #c9d8dd 78.65%, #fff 128.82%, #c9d8dd 137.19%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
