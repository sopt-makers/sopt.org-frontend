import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import Image from 'next/image';

export const Background = styled.main`
  width: 286px;
  height: 381px;
  border-radius: 14px;
  margin-top: 51px;
  margin-right: 27px;
  position: relative;
  flex-shrink: 0;

  cursor: pointer;

  transition: all 0.2s linear;

  @media (max-width: 48rem) {
    height: 315px;
    width: 237px;
  }

  @media (max-width: 27.75rem) {
    margin-top: 24px;
    width: 136px;
    height: 182px;
    margin-right: 12px;
  }
`;

export const Title = styled.h1`
  color: ${colors.white};
  font-family: SUIT;
  font-size: 20rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.6px;

  position: absolute;
  top: 0;
  margin: 18px;

  z-index: 2;

  @media (max-width: 26.75rem) {
    font-size: 9rem;
    letter-spacing: -0.285px;
    margin: 14px;
  }
`;

export const CardImage = styled(Image)`
  object-fit: cover;
  border-radius: 14px;
`;
