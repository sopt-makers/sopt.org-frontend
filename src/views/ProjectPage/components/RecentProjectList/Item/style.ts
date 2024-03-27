import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import Image from 'next/image';
import { css } from '@emotion/react';
import icArrowStickRight from '@src/assets/icons/ic_arrow_stick_right.svg';
import { textpluralLinesEllipsis } from '@src/lib/styles/textEllipsis';

const GridWrapper = styled.div`
  width: 544rem;
  display: grid;
  grid-template-areas: 'img detail' 'img footer';
  grid-template-columns: 116rem auto;
  column-gap: 16rem;
  background-color: ${colors.gray900};
  border-radius: 12rem;
  padding: 24rem;

  /* 모바일 뷰 */
  @media (max-width: 899rem) {
    width: 320rem;
    height: 139rem;
    grid-template-areas:
      'img detail'
      'footer footer';
    grid-template-columns: 48rem auto;
    gap: 16rem 10rem;
    padding: 16rem;
  }
`;

const MarginWrapper = styled.div`
  padding-right: 20rem;
`;

const DetailWrapper = styled.div`
  grid-area: detail;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ThumbnailImage = styled(Image)`
  grid-area: img;
  border-radius: 10rem;

  /* 모바일 뷰 */
  @media (max-width: 899rem) {
    width: 48rem;
    height: 48rem;
  }
`;

const DetailFooterWrapper = styled.div`
  grid-area: footer;
  display: flex;
  justify-content: space-between;
  flex: 1;
  align-items: flex-end;
  height: 26rem;
`;

const TextName = styled.div`
  color: ${colors.gray30};
  font-size: 24rem;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -0.48rem;

  /* 모바일 뷰 */
  @media (max-width: 899rem) {
    font-size: 16rem;
    letter-spacing: -0.24rem;
  }
`;

const TextSummary = styled.div`
  display: -webkit-box;
  ${textpluralLinesEllipsis(2)}
  height: 39rem;

  color: ${colors.gray100};
  max-width: 408rem;
  font-size: 14rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21rem */
  letter-spacing: -0.21rem;

  /* 모바일 뷰 */
  @media (max-width: 899rem) {
    font-size: 13rem;
    font-weight: 400;
    letter-spacing: -0.195rem;
    max-width: 234rem;
  }
`;

const Chip = styled.div`
  padding: 5rem 8rem;
  border-radius: 6rem;
  background-color: ${colors.gray700};
  color: ${colors.gray100};
  font-size: 12rem;
  font-weight: 500;
  line-height: 135%;
  letter-spacing: -0.18rem;

  /* 모바일 뷰 */
  @media (max-width: 899rem) {
    height: 26rem;
    padding: 5rem 8rem;
    font-size: 11rem;
    font-weight: 600;
    letter-spacing: -0.165rem;
  }
`;

const tryArrowBaseCss = css`
  content: '';
  position: absolute;
  border-radius: 50%;
  border: 1rem solid ${colors.gray30};
  top: 50%;
  transform: translateY(-50%);
  background-image: url(${icArrowStickRight});
`;

const TryLink = styled.a`
  cursor: pointer;
  position: relative;
  color: ${colors.gray30};
  font-size: 16rem;
  font-weight: 500;
  line-height: 165%;
  letter-spacing: -0.24rem;
  padding-left: 10rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-right: 36rem;
  border-radius: 15rem;
  transition: 200ms;

  &::after {
    right: 11rem;
    width: 18rem;
    height: 18rem;
    ${tryArrowBaseCss}
  }

  &:hover {
    background-color: ${colors.gray700};

    &::after {
      right: 11rem;
      width: 18rem;
      height: 18rem;
      ${tryArrowBaseCss}
      transform: translateY(-50%) rotate(-45deg);
      transition: 200ms ease;
    }
  }

  /* 모바일 뷰 */
  @media (max-width: 899rem) {
    font-size: 14rem;
    letter-spacing: -0.21rem;
    border-radius: 13rem;
    &::after {
      content: '';
      right: 9rem;
      width: 14rem;
      height: 14rem;
      position: absolute;
      border-radius: 50%;
      border: 1rem solid ${colors.gray30};
      top: 50%;
      transform: translateY(-50%);
      background-image: url(${icArrowStickRight});
      background-size: cover;
    }
    &:hover {
      &::after {
        right: 9rem;
        width: 14rem;
        height: 14rem;
        ${tryArrowBaseCss}
        transform: translateY(-50%) rotate(-45deg);
      }
    }
  }
`;

export const S = {
  GridWrapper,
  MarginWrapper,
  ThumbnailImage,
  TextName,
  TextSummary,
  Chip,
  TryLink,
  DetailWrapper,
  DetailFooterWrapper,
};
