import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import Image from 'next/image';
import Link from 'next/link';

export const Post = styled(Link)`
  display: flex;
  justify-content: space-between;
  gap: 36px;

  cursor: pointer;
  transition: opacity 0.2s linear;
  &:hover {
    opacity: 0.8;
  }

  /* 모바일 뷰 */
  @media (max-width: 767px) {
    gap: 16px;
  }
`;

export const Body = styled.div`
  height: 94px;

  /* 모바일 뷰 */
  @media (max-width: 767px) {
    display: flex;
    align-items: center;
    height: 53px;
  }
`;

export const Title = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;

  max-height: 72px;

  color: ${colors.white};
  font-size: 24px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.48px;

  /* 모바일 뷰 */
  @media (max-width: 767px) {
    font-size: 16px;
    letter-spacing: -0.24px;
  }
`;

export const Description = styled.div<{ descriptionLine: number }>`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${({ descriptionLine }) => descriptionLine};
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;

  color: ${colors.gray200};
  font-size: 16px;
  font-weight: 400;
  line-height: 160%;
  letter-spacing: -0.24px;

  /* 모바일 뷰 */
  @media (max-width: 767px) {
    display: none;
  }
`;

export const TagList = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 10px;

  /* 모바일 뷰 */
  @media (max-width: 767px) {
    margin-top: 18px;
  }
`;

export const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 28px;
  padding: 0px 6px;
  border-radius: 6px;
  background: ${colors.gray700};

  color: ${colors.gray50};
  font-size: 12px;
  font-weight: 500;
  line-height: 135%; /* 16.2px */
  letter-spacing: -0.18px;

  /* 모바일 뷰 */
  @media (max-width: 767px) {
    height: 20px;

    font-size: 11px;
    font-weight: 600;
    letter-spacing: -0.165px;
  }
`;

export const ThumbnailWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  width: 239px;

  /* 모바일 뷰 */
  @media (max-width: 767px) {
    width: 105px;
  }
`;

export const Thumbnail = styled(Image)`
  border-radius: 8px;
  object-fit: cover;

  /* 모바일 뷰 */
  @media (max-width: 767px) {
    width: 105px;
    height: 70px;
    border-radius: 5px;
  }
`;
