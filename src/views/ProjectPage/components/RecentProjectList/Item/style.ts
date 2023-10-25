import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import Image from 'next/image';
import icArrowStickRight from '@src/assets/icons/ic_arrow_stick_right.svg';
import { textSingularLineEllipsis } from '@src/lib/styles/textEllipsis';

const GridWrapper = styled.div`
  width: 568px;
  display: grid;
  grid-template-areas: 'img detail' 'img footer';
  grid-template-columns: 116px auto;
  column-gap: 16px;
  background-color: ${colors.gray800};
  border-radius: 12px;
  padding: 24px;
  margin-right: 20px;
  /* 모바일 뷰 */
  @media (max-width: 767px) {
    width: 325px;
    grid-template-areas: 'img detail' 'footer footer';
    grid-template-columns: 48px auto;
    column-gap: 10px;
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
  @media (max-width: 767px) {
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
`;

const TextName = styled.div`
  color: ${colors.gray30};
  font-size: 24px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -0.48px;

  /* 모바일 뷰 */
  @media (max-width: 767px) {
    font-size: 16px;
    letter-spacing: -0.24px;
  }
`;

const TextSummary = styled.div`
  ${textSingularLineEllipsis}
  color: ${colors.gray100};
  max-width: 408px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
  letter-spacing: -0.21px;

  /* 모바일 뷰 */
  @media (max-width: 767px) {
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
  @media (max-width: 767px) {
    height: 26px;
    padding: 5px 8px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: -0.165px;
  }
`;

const TryLink = styled.a`
  cursor: pointer;
  position: relative;
  color: ${colors.gray30};
  font-size: 16px;
  font-weight: 500;
  line-height: 165%;
  letter-spacing: -0.24px;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-right: 31px;

  &::after {
    content: '';
    right: 6px;
    width: 18px;
    height: 18px;
    position: absolute;
    border-radius: 50%;
    border: 1px solid ${colors.gray30};
    top: 50%;
    transform: translateY(-50%);
    background-image: url(${icArrowStickRight});
  }

  /* 모바일 뷰 */
  @media (max-width: 767px) {
    font-size: 14px;
    letter-spacing: -0.21px;
    &::after {
      content: '';
      right: 4px;
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
