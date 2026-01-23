import styled from '@emotion/styled';
import { BREAKPOINT } from '@src/lib/styles/breakpoint';
import Link from 'next/link';

export const Wrapper = styled.div`
  padding-top: 104px;

  @media (max-width: ${BREAKPOINT.TABLET_MAX_WIDTH}) {
    padding-top: 125px;
  }

  @media (max-width: ${BREAKPOINT.MOBILE_MAX_WIDTH}) {
    padding-top: 74px;
  }
`;

export const ContentWrapper = styled.div`
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

  @media (max-width: ${BREAKPOINT.TABLET_MAX_WIDTH}) {
    width: 776px;
    gap: 12.39px;
  }

  @media (max-width: ${BREAKPOINT.MOBILE_MAX_WIDTH}) {
    width: 446px;
    gap: 7.12px;
  }
`;

export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 19px;

  @media (max-width: ${BREAKPOINT.MOBILE_MAX_WIDTH}) {
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
  font-size: 17rem;
  font-style: normal;
  font-weight: 400;
  line-height: 162%; /* 32.4px */
  letter-spacing: -0.8px;
  text-decoration-line: underline;

  @media (max-width: ${BREAKPOINT.TABLET_MAX_WIDTH}) {
    text-align: center;
    font-size: 15rem;
  }

  @media (max-width: ${BREAKPOINT.MOBILE_MAX_WIDTH}) {
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

  @media (max-width: ${BREAKPOINT.TABLET_MAX_WIDTH}) {
    width: 26px;
  }

  @media (max-width: ${BREAKPOINT.MOBILE_MAX_WIDTH}) {
    width: 15.293px;
    & > img {
      height: 24.138px;
    }
  }
`;

export const LeftArrow = styled(Arrow)`
  left: 1.5625vw;

  @media (max-width: ${BREAKPOINT.TABLET_MAX_WIDTH}) {
    left: 0;
  }
`;

export const RightArrow = styled(Arrow)`
  right: 1.5625vw;

  @media (max-width: ${BREAKPOINT.TABLET_MAX_WIDTH}) {
    right: 0;
  }
`;
