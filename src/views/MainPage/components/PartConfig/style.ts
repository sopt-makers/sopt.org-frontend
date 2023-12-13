import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import Link from 'next/link';

export const Background = styled.section`
  background-color: ${colors.white};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20.39px;
`;

export const PartConfig = styled.section`
  display: flex;
  flex-direction: column;
  gap: 23.61px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  overflow-x: scroll;

  &:hover {
    cursor: grab;
  }
`;

export const PartButtonList = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 768px) {
    width: 776px;
    gap: 12.39px;
  }

  @media (max-width: 428px) {
    width: 446px;
    gap: 7.12px;
  }
`;

export const CarouselWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const Carousel = styled.div`
  display: flex;
  column-gap: 20px;
`;

export const RequiredAbility = styled(Link)`
  color: #415678;
  text-align: right;
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 162%; /* 32.4px */
  letter-spacing: -0.8px;
  text-decoration-line: underline;
`;
