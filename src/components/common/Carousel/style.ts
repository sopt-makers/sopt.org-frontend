import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { css } from '@emotion/react';
import arrowLeft from '@src/assets/icons/arrow_left_28x28.svg';
import arrowRight from '@src/assets/icons/arrow_right_28x28.svg';
import { HideScrollbar } from '@src/lib/styles/scrollbar';
import { CarouselArrowType } from '@src/lib/types/universal';

const Wrapper = styled(HideScrollbar)<{ isSliding: boolean; lastIndex: boolean }>`
  width: 100%;
  position: relative;

  ::before,
  ::after {
    content: '';
    position: absolute;
    top: 0;
    z-index: 5;

    width: 70px;
    height: 164px;
  }

  ::before {
    left: 0;
    background: linear-gradient(270deg, transparent 0%, ${colors.gray950} 100%);

    opacity: ${({ isSliding }) => (isSliding ? '1' : '0')};
    transition: opacity 0.3s ease-out;
  }

  ::after {
    right: -1px;
    background: linear-gradient(270deg, ${colors.gray950} 0%, transparent 100%);

    opacity: 0;
    ${({ isSliding }) =>
      isSliding &&
      css`
        opacity: 1;
        transition: opacity 0.3s ease-out;
      `};

    @media (max-width: 1279px) {
      opacity: ${({ lastIndex }) => (lastIndex ? 0 : 1)};
    }
  }
`;

const Arrow = styled.div<{ type: CarouselArrowType }>`
  ${({ type }) => type === CarouselArrowType.None && 'display: none;'}
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${colors.gray600};
  color: white;
  z-index: 2;
  top: calc(50% - 16px);
  transform: translateY(-50%);
  cursor: pointer;
  background-repeat: no-repeat;
  background-position: center;
`;

const LeftArrow = styled(Arrow)<{ type: CarouselArrowType }>`
  left: -50px;
  background-image: url(${arrowLeft});
`;

const RightArrow = styled(Arrow)<{ type: CarouselArrowType }>`
  right: -50px;
  background-image: url(${arrowRight});
`;

const CarouselWrapper = styled.div<{
  translateX: number;
  itemWidth: number;
  itemCount: number;
  gapWidth: number;
}>`
  width: ${({ itemWidth, itemCount }) => itemWidth * itemCount}px;
  display: grid;
  grid-template-columns: ${({ itemWidth, itemCount }) => `repeat(${itemCount}, ${itemWidth}px)`};
  transition: transform 0.5s ease-in-out;
  transform: ${({ translateX }) => `translateX(${translateX}px)`};
  gap: ${({ gapWidth }) => `${gapWidth}px`};
`;

const CarouselViewport = styled.div`
  width: 100%;
`;

const Blur = styled.div`
  z-index: 2;
  position: absolute;
  height: 100%;
  width: calc(50vw - 50%);
  top: 0;
  background: ${colors.background};
`;

const LeftBlur = styled(Blur)`
  left: calc(50% - 50vw);
  transform: rotate(180deg);
`;

const RightBlur = styled(Blur)`
  right: calc(50% - 50vw);
`;

const DotWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: center;
  gap: 12px;
  width: 100%;
`;

const Dot = styled.div<{ selected: boolean }>`
  position: relative;
  width: 8px;
  height: 8px;
  background-color: ${({ selected }) => (selected ? colors.white : colors.gray800)};
  border-radius: 50%;
  cursor: pointer;

  ::before {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    border-radius: 50%;
  }
`;

export const S = {
  Wrapper,
  LeftArrow,
  RightArrow,
  CarouselWrapper,
  CarouselViewport,
  LeftBlur,
  RightBlur,
  DotWrapper,
  Dot,
};
