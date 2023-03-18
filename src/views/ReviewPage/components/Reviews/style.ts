import styled from '@emotion/styled';
import Image from 'next/image';
import { css } from '@emotion/react';

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

export const Card = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  gap: 28px;

  width: 360px;

  /* 태블릿 뷰 */
  @media (max-width: 1199px) and (min-width: 766px) {
    width: 316px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    width: 360px;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ThumbnailWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const Thumbnail = styled(Image)`
  width: 100%;
  border-radius: 5px;
`;

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

const textEllipsis = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 28px;
  color: #ffffff;

  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    font-size: 20px;
  }

  ${textEllipsis}
`;

export const Desc = styled.div`
  color: #bebebe;
  font-size: 18px;

  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    font-size: 15px;
  }
  ${textEllipsis}
`;