import styled from '@emotion/styled';
import Link from 'next/link';

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

  @media (max-width: 1200px) {
    width: 776px;
    gap: 12.39px;
  }

  @media (max-width: 428px) {
    width: 446px;
    gap: 7.12px;
  }
`;

export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 19px;

  @media (max-width: 428px) {
    border-radius: 10.919px;
  }
`;

export const Carousel = styled.div`
  display: flex;
  column-gap: 20px;
`;

export const RequiredAbility = styled(Link)`
  color: #415678;
  text-align: right;
  font-family: SUIT;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: 162%; /* 32.4px */
  letter-spacing: -0.8px;
  text-decoration-line: underline;

  @media (max-width: 1200px) {
    text-align: center;
    font-size: 15px;
  }

  @media (max-width: 428px) {
    font-size: 10px;
  }
`;

export const Arrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 99;

  & > img:hover {
    cursor: pointer;
  }

  @media (max-width: 1200px) {
    width: 26px;
  }

  @media (max-width: 428px) {
    width: 15.293px;
    & > img {
      height: 24.138px;
    }
  }
`;

export const LeftArrow = styled(Arrow)`
  left: 1.5625vw;

  @media (max-width: 1200px) {
    left: 0;
  }
`;

export const RightArrow = styled(Arrow)`
  right: 1.5625vw;

  @media (max-width: 1200px) {
    right: 0;
  }
`;
