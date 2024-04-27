import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import Image from 'next/image';

export const BlogPost = styled.section`
  display: flex;
  justify-content: space-between;
  max-width: 900px;
  width: 100%;
  gap: 36px;

  cursor: pointer;
  transition: opacity 0.2s linear;
  &:hover {
    opacity: 0.7;
  }

  /* 모바일 뷰 */
  @media (max-width: 47.9375rem) {
    gap: 16px;
    width: 100%;
  }
`;

export const Body = styled.div`
  height: 94px;

  /* 모바일 뷰 */
  @media (max-width: 47.9375rem) {
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
  font-size: 24rem;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.48px;

  /* 모바일 뷰 */
  @media (max-width: 47.9375rem) {
    font-size: 16rem;
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
  font-size: 16rem;
  font-weight: 400;
  line-height: 160%;
  letter-spacing: -0.24px;

  /* 모바일 뷰 */
  @media (max-width: 47.9375rem) {
    display: none;
  }
`;

export const TagList = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 10px;

  /* 모바일 뷰 */
  @media (max-width: 47.9375rem) {
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
  font-size: 12rem;
  font-weight: 500;
  line-height: 135%; /* 16.2px */
  letter-spacing: -0.18px;

  /* 모바일 뷰 */
  @media (max-width: 47.9375rem) {
    height: 20px;

    font-size: 11rem;
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
  @media (max-width: 47.9375rem) {
    width: 105px;
  }
`;

export const Thumbnail = styled(Image)`
  border-radius: 8px;
  object-fit: cover;

  /* 모바일 뷰 */
  @media (max-width: 47.9375rem) {
    width: 105px;
    height: 70px;
    border-radius: 5px;
  }
`;
