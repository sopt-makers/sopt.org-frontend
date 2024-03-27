import styled from '@emotion/styled';

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
  display: grid;
  gap: 28rem;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 1440rem) {
    grid-template-columns: repeat(auto-fit, minmax(385rem, 1fr));
    gap: 24rem;
  }

  @media (max-width: 768rem) {
    display: flex;
    overflow-x: scroll;
  }

  @media (max-width: 512rem) {
    gap: 16rem;
  }

  @media (max-width: 428rem) {
    gap: 14rem;
  }
`;

export const CarouselWrapper = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 19rem;
`;

export const Carousel = styled.div`
  display: flex;
  column-gap: 20rem;
`;

export const Slide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 100%;
  height: 428rem;
  padding: 0 6.5vw;
  border-radius: 19rem;

  @media (max-width: 768rem) {
    height: 434rem;
  }

  @media (max-width: 376rem) {
    height: 249rem;
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

  @media (max-width: 768rem) {
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
  left: 0;
`;

export const RightArrow = styled(Arrow)`
  right: 0;
`;
