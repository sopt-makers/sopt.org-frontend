import styled from '@emotion/styled';

export const Wrapper = styled.div`
  padding-top: 104px;

  @media (max-width: 48rem) {
    padding-top: 125px;
  }

  @media (max-width: 23.5rem) {
    padding-top: 74px;
  }
`;

export const ContentWrapper = styled.div`
  display: grid;
  gap: 28px;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 90rem) {
    grid-template-columns: repeat(auto-fit, minmax(385px, 1fr));
    gap: 24px;
  }

  @media (max-width: 48rem) {
    display: flex;
    overflow-x: scroll;
  }

  @media (max-width: 32rem) {
    gap: 16px;
  }

  @media (max-width: 26.75rem) {
    gap: 14px;
  }
`;

export const CarouselWrapper = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 19px;
`;

export const Carousel = styled.div`
  display: flex;
  column-gap: 20px;
`;

export const Slide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 100%;
  height: 428px;
  padding: 0 6.5vw;
  border-radius: 19px;

  @media (max-width: 48rem) {
    height: 434px;
  }

  @media (max-width: 23.5rem) {
    height: 249px;
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

  @media (max-width: 48rem) {
    width: 26px;
  }

  @media (max-width: 26.75rem) {
    width: 15.293px;
    & > img {
      height: 24.138px;
    }
  }
`;

export const LeftArrow = styled(Arrow)`
  left: 0;
`;

export const RightArrow = styled(Arrow)`
  right: 0;
`;
