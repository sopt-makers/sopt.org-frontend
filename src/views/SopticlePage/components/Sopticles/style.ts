import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { textSingularLineEllipsis } from '@src/styles/textEllipsis';

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
    margin-top: 52px;
    margin-bottom: 144px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    width: 360px;
    margin-top: 52px;
    margin-bottom: 84px;
    row-gap: 42px;
  }
`;

export const Card = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 380px;
  height: 354px;

  /* 태블릿 뷰 */
  @media (max-width: 1199px) and (min-width: 766px) {
    gap: 16px;
    width: 316px;
    height: 342px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    gap: 16px;
    width: 380px;
    height: 306px;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;

  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    gap: 8px;
  }
`;

export const LastSection = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const AuthorThumbnail = styled(Image)`
  border-radius: 14px;
  object-fit: cover;
`;

export const DeemedText = styled.div`
  color: #ffffff4d;
`;

export const ThumbnailWrapper = styled.div`
  width: 100%;
  position: relative;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 216px;
  overflow: hidden;
  /* 태블릿 뷰 */
  @media (max-width: 1199px) and (min-width: 766px) {
    height: 180px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    height: 186px;
  }
`;

export const Thumbnail = styled(Image)``;

export const ChipWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  position: absolute;
  top: 20px;
  left: 22px;
  /* 태블릿 뷰 */
  @media (max-width: 1199px) and (min-width: 766px) {
    top: 17px;
    left: 21.5px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    top: 20px;
    left: 16px;
  }
`;

export const Chip = styled.div`
  color: #ffffff;
  font-size: 16px;
  padding: 10px 12px;
  background-color: #000000;
  border-radius: 10px;
`;

export const Title = styled.div`
  line-height: 100%;
  font-weight: 700;
  font-size: 28px;
  color: #ffffff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* 태블릿 뷰 */
  @media (max-width: 1199px) and (min-width: 766px) {
    font-size: 23px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    font-size: 20px;
  }
  ${textSingularLineEllipsis}
  ${Card}:hover & {
    opacity: 0.8;
  }
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

export const ColSeparator = styled.div`
  width: 1px;
  height: 1em;
  background-color: #ffffff4d;
`;

export const LikeSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 6px;
`;
