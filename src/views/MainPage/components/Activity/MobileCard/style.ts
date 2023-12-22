import styled from '@emotion/styled';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow: hidden;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
`;

export const PartButtonList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5px;
`;

export const DotButton = styled.div<{ isSelected: boolean }>`
  width: 7px;
  height: 7px;
  background-color: ${({ isSelected }) => (isSelected ? '#2D4C79' : '#2d4c791a')};
  border-radius: 50%;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 428px) {
    width: 4px;
    height: 4px;
  }
`;

export const Carousel = styled.div`
  display: flex;
  column-gap: 20px;
`;

export const Slide = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 100%;
  align-items: center;
  height: auto;
  justify-content: center;
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

  @media (max-width: 768px) {
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
  left: 0;
`;

export const RightArrow = styled(Arrow)`
  right: 0;
`;

export const CarouselWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 19px;
`;
