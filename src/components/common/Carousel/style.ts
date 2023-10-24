import styled from '@emotion/styled';
import arrowLeft from '@src/assets/icons/arrow_left_28x28.svg';
import arrowRight from '@src/assets/icons/arrow_right_28x28.svg';
import { colors } from '@src/lib/styles/colors';
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
  top: 50%;
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
  overflow: hidden;
`;

const RightBlur = styled.div`
  z-index: 2;
  position: absolute;
  height: 100%;
  right: 0;
  top: 0;
  width: 160px;
  background: linear-gradient(to right, transparent, ${colors.background}, ${colors.background});

  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    width: 40px;
    background: linear-gradient(to right, transparent, ${colors.background});
  }
`;

export const S = { Wrapper, LeftArrow, RightArrow, CarouselWrapper, CarouselViewport, RightBlur };
