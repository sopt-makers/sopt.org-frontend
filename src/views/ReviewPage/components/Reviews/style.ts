import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { textSingularLineEllipsis, textpluralLinesEllipsis } from '@src/styles/textEllipsis';

export const Wrapper = styled.div`
  display: flex;
  column-gap: 30px;
  row-gap: 80px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 72px;
  margin-bottom: 212px;

  /* 태블릿 뷰 */
  @media (max-width: 1199px) and (min-width: 766px) {
    row-gap: 52px;
    margin-top: 52px;
    margin-bottom: 144px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    width: 360px;
    margin-top: 52px;
    margin-bottom: 84px;
  }
`;

export const Card = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 380px;

  /* 태블릿 뷰 */
  @media (max-width: 1199px) and (min-width: 766px) {
    gap: 16px;
    width: 316px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    gap: 16px;
    width: 380px;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  /* 태블릿 뷰 */
  @media (max-width: 1199px) and (min-width: 766px) {
    gap: 12px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    gap: 12px;
  }
`;

export const ThumbnailWrapper = styled.div`
  width: 100%;
  position: relative;
  background-color: #000000;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Thumbnail = styled(Image)``;

export const ChipWrapper = styled.div`
  display: flex;
  gap: 8px;
`;
export const Chip = styled.div`
  color: #ffffff;
  font-size: 16px;
  padding: 10px 12px;
  background-color: #000000;
  border-radius: 10px;
`;

export const Title = styled.div`
  line-height: 140%;
  font-weight: 700;
  font-size: 28px;
  color: #ffffff;

  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    font-size: 20px;
  }

  ${textpluralLinesEllipsis(2)}
`;

export const Desc = styled.div`
  color: #bebebe;
  font-size: 18px;

  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    font-size: 15px;
  }
  ${textSingularLineEllipsis}
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
`;
