import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { css } from '@emotion/react';
import icPolygon from '@src/assets/icons/ic_polygon.svg';

export const Wrapper = styled(motion.section)`
  display: flex;
  gap: 12.25rem;

  width: 100%;
  padding: 104rem 2.86vw 0;
  background-color: ${colors.white};

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const FloatingMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9.27rem;
  position: sticky;
  top: 104rem;

  height: fit-content;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuWrapper = styled(motion.div)<{ isInView?: boolean }>`
  position: relative;

  background-color: #fbfcfe;
  border-radius: 10rem;
  border: 1.2rem solid rgba(196, 199, 211, 0.3);

  color: rgba(168, 172, 186, 0.88);
  text-align: center;
  font-family: SUIT;
  font-size: 19.46rem;
  font-style: normal;
  font-weight: 500;
  line-height: 53.54rem; /* 275.126% */
  letter-spacing: -0.584rem;

  ${({ isInView }) =>
    isInView &&
    css`
      border-color: transparent;
      background-color: #24314d !important;
      color: #fff !important;

      &::after {
        content: '';
        position: absolute;
        top: 50%;
        right: -8rem;
        transform: translateY(-50%);
        z-index: 99;

        width: 8rem;
        height: 11rem;
        background-image: url(${icPolygon});
        background-repeat: no-repeat;
      }
    `};
`;

export const Menu = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 190rem;
  height: 72rem;

  font-size: 100%;

  @media (max-width: 1440px) {
    width: 152rem;
  }
`;

export const Layout = styled(motion.div)`
  flex: 1;
  width: 80%;
  padding: 0 4vw;
  border-radius: 20.946rem 20.946rem 0 0;
  background: #f6f8fc;
  z-index: 1;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 6.25vw 0 6.25vw;
  }

  @media (max-width: 428px) {
    padding: 0 6.54vw 0 6.54vw;
  }
`;
