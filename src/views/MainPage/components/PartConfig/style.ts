import styled from '@emotion/styled';
import Link from 'next/link';

export const Wrapper = styled.div`
  padding-top: 104rem;

  @media (max-width: 768rem) {
    padding-top: 125rem;
  }

  @media (max-width: 376rem) {
    padding-top: 74rem;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20.39rem;
`;

export const PartConfig = styled.section`
  display: flex;
  flex-direction: column;
  gap: 23.61rem;
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
  gap: 15rem;

  @media (max-width: 1200rem) {
    width: 776rem;
    gap: 12.39rem;
  }

  @media (max-width: 428rem) {
    width: 446rem;
    gap: 7.12rem;
  }
`;

export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 19rem;

  @media (max-width: 428rem) {
    border-radius: 10.919rem;
  }
`;

export const Carousel = styled.div`
  display: flex;
  column-gap: 20rem;
`;

export const RequiredAbility = styled(Link)`
  color: #415678;
  text-align: right;
  font-family: SUIT;
  font-size: 17rem;
  font-style: normal;
  font-weight: 400;
  line-height: 162%; /* 32.4rem */
  letter-spacing: -0.8rem;
  text-decoration-line: underline;

  @media (max-width: 1200rem) {
    text-align: center;
    font-size: 15rem;
  }

  @media (max-width: 428rem) {
    font-size: 10rem;
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

  @media (max-width: 1200rem) {
    width: 26rem;
  }

  @media (max-width: 428rem) {
    width: 15.293rem;
    & > img {
      height: 24.138rem;
    }
  }
`;

export const LeftArrow = styled(Arrow)`
  left: 1.5625vw;

  @media (max-width: 1200rem) {
    left: 0;
  }
`;

export const RightArrow = styled(Arrow)`
  right: 1.5625vw;

  @media (max-width: 1200rem) {
    right: 0;
  }
`;
