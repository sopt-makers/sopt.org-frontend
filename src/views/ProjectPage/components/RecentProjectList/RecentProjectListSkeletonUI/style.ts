import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import arrowRight from '@src/assets/icons/arrow_right_28x28.svg';
import { HideScrollbar } from '@src/lib/styles/scrollbar';

export const Wrapper = styled(HideScrollbar)`
  width: 100%;
  position: relative;
`;

export const RightArrow = styled.div`
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
  right: -50px;
  background-image: url(${arrowRight});
`;

export const CarouselWrapper = styled.div<{
  itemWidth: number;
  itemCount: number;
}>`
  width: ${({ itemWidth, itemCount }) => itemWidth * itemCount}px;
  display: grid;
  grid-template-columns: ${({ itemWidth, itemCount }) => `repeat(${itemCount}, ${itemWidth}px)`};
`;

export const CarouselViewport = styled.div`
  width: 100%;
`;

export const Blur = styled.div`
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

export const RightBlur = styled(Blur)`
  right: calc(50% - 50vw);
`;

export const DotWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: center;
  gap: 12px;
`;

export const Dot = styled.div`
  position: relative;
  width: 8px;
  height: 8px;
  background-color: ${colors.gray900};

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

export const GridWrapper = styled.div`
  width: 568px;
  height: 164px;
  display: grid;
  grid-template-areas: 'img detail' 'img footer';
  grid-template-columns: 116px auto;
  column-gap: 16px;
  background-color: ${colors.gray800};
  border-radius: 12px;
  padding: 24px;
  margin-right: 20px;
  /* 모바일 뷰 */
  @media (max-width: 899px) {
    width: 325px;
    height: 122px;
    grid-template-areas:
      'img detail'
      'footer footer';
    grid-template-columns: 48px auto;
    gap: 16px 10px;
    padding: 16px;
  }
`;

export const MarginWrapper = styled.div`
  padding-right: 20px;
`;

export const Title = styled.div`
  border-radius: 10px;
  width: 100px;
  height: 36px;
  margin-bottom: 6px;
  background-color: ${colors.gray900};

  /* 모바일 뷰 */
  @media (max-width: 899px) {
    height: 24px;
  }
`;

export const Description = styled.div`
  border-radius: 10px;
  width: 150px;
  height: 21px;
  background-color: ${colors.gray900};

  /* 모바일 뷰 */
  @media (max-width: 899px) {
    height: 19.5px;
  }
`;

export const DetailWrapper = styled.div`
  grid-area: detail;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ThumbnailImage = styled.div`
  grid-area: img;
  border-radius: 10px;
  background-color: ${colors.gray900};

  /* 모바일 뷰 */
  @media (max-width: 899px) {
    width: 48px;
    height: 48px;
  }
`;

export const DetailFooterWrapper = styled.div`
  grid-area: footer;
  display: flex;
  justify-content: space-between;
  flex: 1;
  align-items: flex-end;
`;

export const Chip = styled.div`
  width: 40px;
  height: 28px;
  padding: 5px 8px;
  border-radius: 6px;
  background-color: ${colors.gray900};

  /* 모바일 뷰 */
  @media (max-width: 899px) {
    height: 26px;
    padding: 5px 8px;
  }
`;
