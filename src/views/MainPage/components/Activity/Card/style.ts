import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const Background = styled(motion.main)`
  max-width: 465px;
  width: 100%;
  height: 295px;
  border-radius: 19px;

  cursor: pointer;
  position: relative;
  z-index: 2;
`;

export const Gradient = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 19px;
  background: linear-gradient(0deg, rgba(70, 108, 166, 0) 51.31%, #2e4e80 100%);
  position: relative;
  z-index: 1;
`;

export const CardImage = styled(Image)`
  object-fit: cover;
  border-radius: 19px;
`;

export const CardKorNav = styled.nav`
  display: inline-flex;
  padding: 11.75px 30.43px;
  justify-content: center;
  align-items: center;
  gap: 5.83px;
  border-radius: 13.763px;
  border: 1.278px solid rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.33);
  backdrop-filter: blur(2.949289321899414px);

  color: ${colors.white};
  font-family: SUIT;
  font-size: 21px;
  font-style: normal;
  font-weight: 600;
  line-height: 28.288px; /* 134.707% */
  letter-spacing: -0.84px;

  position: absolute;
  top: 0;
  left: 0;
  margin-left: 26px;
  margin-top: 26px;
  z-index: 3;

  /* 태블릿 뷰 */
  @media (max-width: 768px) and (min-width: 376px) {
  }

  /* 모바일 뷰 */
  @media (max-width: 375px) {
    font-size: 12px;
    line-height: 16.258px; /* 135.48% */
    letter-spacing: -0.48px;

    padding: 6.753px 17.488px;
    margin-left: 14px;
    margin-top: 14px;
  }
`;

export const Blur = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;

  border-radius: 19px;
  background: rgba(38, 51, 70, 0.74);
  backdrop-filter: blur(6.881675720214844px);
  z-index: 2;

  padding: 26px;

  /* 태블릿 뷰 */
  @media (max-width: 768px) and (min-width: 376px) {
  }

  /* 모바일 뷰 */
  @media (max-width: 375px) {
    padding: 14px;
  }
`;

export const CardEngNav = styled.p`
  color: rgba(255, 255, 255, 0.7);
  text-align: right;
  font-family: SUIT;
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: 28.288px; /* 148.887% */
  letter-spacing: -0.38px;
`;

export const ContentWrapper = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  word-break: keep-all;
`;

export const Content = styled.span<{ color: string }>`
  color: ${({ color }) => (color === 'yellow' ? '#ffe454' : '#fff')};
  font-family: SUIT;
  font-size: 17.696px;
  font-style: normal;
  font-weight: 400;
  line-height: 30.476px;
  letter-spacing: -0.708px;
`;
