import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import Image from 'next/image';

export const Background = styled.main`
  width: 286rem;
  height: 381rem;
  border-radius: 14rem;
  margin-top: 51rem;
  margin-right: 27rem;
  position: relative;
  flex-shrink: 0;

  cursor: pointer;

  transition: all 0.2s linear;

  @media (max-width: 768rem) {
    height: 315rem;
    width: 237rem;
  }

  @media (max-width: 444rem) {
    margin-top: 24rem;
    width: 136rem;
    height: 182rem;
    margin-right: 12rem;
  }
`;

export const Title = styled.h1`
  color: ${colors.white};
  font-family: SUIT;
  font-size: 20rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.6rem;

  position: absolute;
  top: 0;
  margin: 18rem;

  z-index: 2;

  @media (max-width: 428rem) {
    font-size: 9rem;
    letter-spacing: -0.285rem;
    margin: 14rem;
  }
`;

export const CardImage = styled(Image)`
  object-fit: cover;
  border-radius: 14rem;
`;
