import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import Image from 'next/image';
import { css } from '@emotion/react';
import icArrowStickRight from '@src/assets/icons/ic_arrow_stick_right.svg';
import { textpluralLinesEllipsis } from '@src/lib/styles/textEllipsis';

const GridWrapper = styled.div`
  width: 544px;
  display: grid;
  grid-template-areas: 'img detail' 'img footer';
  grid-template-columns: 116px auto;
  column-gap: 16px;
  background-color: ${colors.gray900};
  border-radius: 12px;
  padding: 24px;

  /* 모바일 뷰 */
  @media (max-width: 899px) {
    width: 320px;
    height: 139px;
    grid-template-areas:
      'img detail'
      'footer footer';
    grid-template-columns: 48px auto;
    gap: 16px 10px;
    padding: 16px;
  }
`;

const MarginWrapper = styled.div`
  padding-right: 20px;
`;

const DetailWrapper = styled.div`
  grid-area: detail;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ThumbnailImage = styled(Image)`
  grid-area: img;
  border-radius: 10px;

  /* 모바일 뷰 */
  @media (max-width: 899px) {
    width: 48px;
    height: 48px;
  }
`;

const DetailFooterWrapper = styled.div`
  grid-area: footer;
  display: flex;
  justify-content: space-between;
  flex: 1;
  align-items: flex-end;
  height: 26px;
`;

const TextName = styled.div`
  color: ${colors.gray30};
  font-size: 24px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -0.48px;

  /* 모바일 뷰 */
  @media (max-width: 899px) {
    font-size: 16px;
    letter-spacing: -0.24px;
  }
`;

const TextSummary = styled.div`
  display: -webkit-box;
  ${textpluralLinesEllipsis(2)}
  height: 39px;

  color: ${colors.gray100};
  max-width: 408px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
  letter-spacing: -0.21px;

  /* 모바일 뷰 */
  @media (max-width: 899px) {
    font-size: 13px;
    font-weight: 400;
    letter-spacing: -0.195px;
    max-width: 234px;
  }
`;

const Chip = styled.div`
  padding: 5px 8px;
  border-radius: 6px;
  background-color: ${colors.gray700};
  color: ${colors.gray100};
  font-size: 12px;
  font-weight: 500;
  line-height: 135%;
  letter-spacing: -0.18px;

  /* 모바일 뷰 */
  @media (max-width: 899px) {
    height: 26px;
    padding: 5px 8px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: -0.165px;
  }
`;

const tryArrowBaseCss = css`
  content: '';
  position: absolute;
  border-radius: 50%;
  border: 1px solid ${colors.gray30};
  top: 50%;
  transform: translateY(-50%);
  background-image: url(${icArrowStickRight});
`;

const TryLink = styled.a`
  cursor: pointer;
  position: relative;
  color: ${colors.gray30};
  font-size: 16px;
  font-weight: 500;
  line-height: 165%;
  letter-spacing: -0.24px;
  padding-left: 10px;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-right: 36px;
  border-radius: 15px;
  transition: 200ms;

  &::after {
    right: 11px;
    width: 18px;
    height: 18px;
    ${tryArrowBaseCss}
  }

  &:hover {
    background-color: ${colors.gray700};

    &::after {
      right: 11px;
      width: 18px;
      height: 18px;
      ${tryArrowBaseCss}
      transform: translateY(-50%) rotate(-45deg);
    }
  }

  /* 모바일 뷰 */
  @media (max-width: 899px) {
    font-size: 14px;
    letter-spacing: -0.21px;
    border-radius: 13px;
    &::after {
      content: '';
      right: 9px;
      width: 14px;
      height: 14px;
      position: absolute;
      border-radius: 50%;
      border: 1px solid ${colors.gray30};
      top: 50%;
      transform: translateY(-50%);
      background-image: url(${icArrowStickRight});
      background-size: cover;
    }
    &:hover {
      &::after {
        right: 9px;
        width: 14px;
        height: 14px;
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
