import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import Image from 'next/image';

export const Background = styled.main`
  width: 286px;
  height: 380px;
  border-radius: 14px;
  margin-top: 72px;
  margin-right: 27px;
  position: relative;

  cursor: pointer;

  transition: all 0.2s linear;

  @media (max-width: 768px) and (min-width: 429px) {
    height: 315px;
    width: 237px;
  }

  @media (max-width: 428px) {
    margin-top: 24px;
    width: 136px;
    height: 182px;
    margin-right: 12px;
  }
`;

export const Title = styled.h1`
  color: ${colors.white};
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.6px;

  position: absolute;
  top: 0;
  margin: 18px;

  z-index: 2;

  @media (max-width: 428px) {
    font-size: 9px;
    letter-spacing: -0.285px;
  }
`;

export const CardImage = styled(Image)`
  object-fit: cover;
  border-radius: 14px;
`;
