import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import arrowLeft from '@src/assets/icons/arrow_left_28x28.svg';
import arrowRight from '@src/assets/icons/arrow_right_28x28.svg';
import { HideScrollbar } from '@src/lib/styles/scrollbar';
import { CarouselArrowType } from '@src/lib/types/universal';

const Wrapper = styled(HideScrollbar)`
  width: 100%;
  position: relative;
`;

const Arrow = styled.div<{ type: CarouselArrowType }>`
  ${({ type }) => type === CarouselArrowType.None && 'display: hidden;'}
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
}>`
  width: ${({ itemWidth, itemCount }) => itemWidth * itemCount}px;
  display: grid;
  grid-template-columns: ${({ itemWidth, itemCount }) => `repeat(${itemCount}, ${itemWidth}px)`};
  transition: transform 0.5s ease-in-out;
  transform: ${({ translateX }) => `translateX(${translateX}px)`};
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
  background: linear-gradient(
    to right,
    transparent 10px,
    ${colors.background} 50px,
    ${colors.background}
  );
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
