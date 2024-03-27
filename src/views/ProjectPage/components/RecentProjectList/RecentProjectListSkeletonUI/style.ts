import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { HideScrollbar } from '@src/lib/styles/scrollbar';

export const Wrapper = styled(HideScrollbar)`
  width: 100%;
  position: relative;
`;
export const CarouselWrapper = styled.div`
  width: 1088rem;
  display: grid;
  grid-template-columns: repeat(2, 544rem);
  gap: 24rem;
  @media (max-width: 899rem) {
    width: 654rem;
    grid-template-columns: repeat(2, 320rem);
    gap: 14rem;
  }
`;
export const CarouselViewport = styled.div`
  width: 100%;
`;
export const DotWrapper = styled.div`
  margin-top: 24rem;
  display: flex;
  justify-content: center;
  gap: 12rem;
`;
export const Dot = styled.div`
  position: relative;
  width: 8rem;
  height: 8rem;
  background-color: ${colors.gray900};
  border-radius: 50%;
  cursor: pointer;
  ::before {
    content: '';
    position: absolute;
    top: -4rem;
    left: -4rem;
    right: -4rem;
    bottom: -4rem;
    border-radius: 50%;
  }
`;
export const GridWrapper = styled.div`
  width: 544rem;
  height: 164rem;
  display: grid;
  grid-template-areas: 'img detail' 'img footer';
  grid-template-columns: 116rem auto;
  column-gap: 16rem;
  background-color: ${colors.gray900};
  border-radius: 12rem;
  padding: 24rem;
  margin-right: 20rem;
  /* 모바일 뷰 */
  @media (max-width: 899rem) {
    width: 320rem;
    height: 122rem;
    grid-template-areas:
      'img detail'
      'footer footer';
    grid-template-columns: 48rem auto;
    gap: 16rem 10rem;
    padding: 16rem;
  }
`;
export const MarginWrapper = styled.div`
  padding-right: 20rem;
`;
export const Title = styled.div`
  border-radius: 6rem;
  width: 100rem;
  height: 36rem;
  margin-bottom: 6rem;
  background-color: ${colors.gray700};
  /* 모바일 뷰 */
  @media (max-width: 899rem) {
    height: 24rem;
  }
`;
export const Description = styled.div`
  border-radius: 6rem;
  width: 150rem;
  height: 21rem;
  background-color: ${colors.gray700};
  /* 모바일 뷰 */
  @media (max-width: 899rem) {
    height: 19.5rem;
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
  border-radius: 10rem;
  background-color: ${colors.gray700};
  /* 모바일 뷰 */
  @media (max-width: 899rem) {
    width: 48rem;
    height: 48rem;
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
  width: 40rem;
  height: 28rem;
  padding: 5rem 8rem;
  border-radius: 6rem;
  background-color: ${colors.gray700};
  /* 모바일 뷰 */
  @media (max-width: 899rem) {
    height: 26rem;
    padding: 5rem 8rem;
  }
`;
