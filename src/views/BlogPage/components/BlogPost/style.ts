import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import Image from 'next/image';

export const BlogPost = styled.section`
  display: flex;
  justify-content: space-between;
  max-width: 900rem;
  width: 100%;
  gap: 36rem;

  cursor: pointer;
  transition: opacity 0.2s linear;
  &:hover {
    opacity: 0.7;
  }

  /* 모바일 뷰 */
  @media (max-width: 767rem) {
    gap: 16rem;
    width: 100%;
  }
`;

export const Body = styled.div`
  height: 94rem;

  /* 모바일 뷰 */
  @media (max-width: 767rem) {
    display: flex;
    align-items: center;
    height: 53rem;
  }
`;

export const Title = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;

  max-height: 72rem;

  color: ${colors.white};
  font-size: 24rem;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.48rem;

  /* 모바일 뷰 */
  @media (max-width: 767rem) {
    font-size: 16rem;
    letter-spacing: -0.24rem;
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
  letter-spacing: -0.24rem;

  /* 모바일 뷰 */
  @media (max-width: 767rem) {
    display: none;
  }
`;

export const TagList = styled.div`
  display: flex;
  gap: 8rem;
  margin-top: 10rem;

  /* 모바일 뷰 */
  @media (max-width: 767rem) {
    margin-top: 18rem;
  }
`;

export const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 28rem;
  padding: 0rem 6rem;
  border-radius: 6rem;
  background: ${colors.gray700};

  color: ${colors.gray50};
  font-size: 12rem;
  font-weight: 500;
  line-height: 135%; /* 16.2rem */
  letter-spacing: -0.18rem;

  /* 모바일 뷰 */
  @media (max-width: 767rem) {
    height: 20rem;

    font-size: 11rem;
    font-weight: 600;
    letter-spacing: -0.165rem;
  }
`;

export const ThumbnailWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  width: 239rem;

  /* 모바일 뷰 */
  @media (max-width: 767rem) {
    width: 105rem;
  }
`;

export const Thumbnail = styled(Image)`
  border-radius: 8rem;
  object-fit: cover;

  /* 모바일 뷰 */
  @media (max-width: 767rem) {
    width: 105rem;
    height: 70rem;
    border-radius: 5rem;
  }
`;
