import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';

export const BlogPostListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  padding-left: 20rem;
  padding-right: 20rem;
  margin-bottom: 108rem;
`;

export const BlogPostList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80rem;
  max-width: 900rem;
  width: 100%;

  margin-top: 30rem;

  /* 모바일 뷰 */
  @media (max-width: 767px) {
    width: 100%;
    margin-top: 24rem;
    gap: 36rem;
  }
`;

export const BlogPost = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 36rem;

  transition: opacity 0.2s linear;

  /* 모바일 뷰 */
  @media (max-width: 767px) {
    gap: 16rem;
  }
`;

export const HeaderWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  height: 23rem;
  width: 30rem;
  border-radius: 6rem;
  margin-bottom: 4rem;
  background-color: ${colors.gray800};

  /* 모바일 뷰 */
  @media (max-width: 767px) {
    height: 16rem;
    margin-bottom: 0;
  }
`;

export const Body = styled.div`
  height: 94rem;
  width: 100%;

  /* 모바일 뷰 */
  @media (max-width: 767px) {
    display: flex;
    align-items: center;
    height: 53rem;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 6rem;
`;

export const ProfileImage = styled.div`
  border-radius: 18rem;
  width: 18rem;
  height: 18rem;
  background-color: ${colors.gray800};

  /* 모바일 뷰 */
  @media (max-width: 767px) {
    width: 15rem;
    height: 15rem;
  }
`;

export const Divider = styled.div`
  padding: 0 2rem 0 2rem;
`;

export const Title = styled.div`
  height: 36rem;
  background-color: ${colors.gray800};
  border-radius: 6rem;
  margin-bottom: 5rem;
  width: 100%;

  @media (max-width: 767px) {
    height: 24rem;
  }
`;

export const Description = styled.div`
  display: -webkit-box;
  border-radius: 6rem;

  background-color: ${colors.gray800};
  height: 52rem;

  /* 모바일 뷰 */
  @media (max-width: 767px) {
    display: none;
  }
`;

export const TagList = styled.div`
  display: flex;
  gap: 8rem;
  margin-top: 10rem;

  /* 모바일 뷰 */
  @media (max-width: 767px) {
    margin-top: 18rem;
  }
`;

export const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 28rem;
  width: 24rem;

  border-radius: 6rem;
  background-color: ${colors.gray800};

  /* 모바일 뷰 */
  @media (max-width: 767px) {
    height: 20rem;
  }
`;

export const ThumbnailWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  width: 239rem;

  /* 모바일 뷰 */
  @media (max-width: 767px) {
    width: 105rem;
  }
`;

export const Thumbnail = styled.div`
  border: 1rem solid ${colors.gray900};
  border-radius: 8rem;
  object-fit: cover;
  background-color: ${colors.gray800};
  width: 239rem;
  height: 160rem;

  /* 모바일 뷰 */
  @media (max-width: 767px) {
    width: 105rem;
    height: 70rem;
    border-radius: 5rem;
  }
`;
