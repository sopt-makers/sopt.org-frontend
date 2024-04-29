import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';

export const BlogPostListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 108px;
`;

export const BlogPostList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
  max-width: 900px;
  width: 100%;

  margin-top: 30px;

  /* 모바일 뷰 */
  @media (max-width: 47.9375rem) {
    width: 100%;
    margin-top: 24px;
    gap: 36px;
  }
`;

export const BlogPost = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 36px;

  transition: opacity 0.2s linear;

  /* 모바일 뷰 */
  @media (max-width: 47.9375rem) {
    gap: 16px;
  }
`;

export const HeaderWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  height: 23px;
  width: 30px;
  border-radius: 6px;
  margin-bottom: 4px;
  background-color: ${colors.gray800};

  /* 모바일 뷰 */
  @media (max-width: 47.9375rem) {
    height: 16px;
    margin-bottom: 0;
  }
`;

export const Body = styled.div`
  height: 94px;
  width: 100%;

  /* 모바일 뷰 */
  @media (max-width: 47.9375rem) {
    display: flex;
    align-items: center;
    height: 53px;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const ProfileImage = styled.div`
  border-radius: 18px;
  width: 18px;
  height: 18px;
  background-color: ${colors.gray800};

  /* 모바일 뷰 */
  @media (max-width: 47.9375rem) {
    width: 15px;
    height: 15px;
  }
`;

export const Divider = styled.div`
  padding: 0 2px 0 2px;
`;

export const Title = styled.div`
  height: 36px;
  background-color: ${colors.gray800};
  border-radius: 6px;
  margin-bottom: 5px;
  width: 100%;

  @media (max-width: 47.9375rem) {
    height: 24px;
  }
`;

export const Description = styled.div`
  display: -webkit-box;
  border-radius: 6px;

  background-color: ${colors.gray800};
  height: 52px;

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
  width: 24px;

  border-radius: 6px;
  background-color: ${colors.gray800};

  /* 모바일 뷰 */
  @media (max-width: 47.9375rem) {
    height: 20px;
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

export const Thumbnail = styled.div`
  border: 1px solid ${colors.gray900};
  border-radius: 8px;
  object-fit: cover;
  background-color: ${colors.gray800};
  width: 239px;
  height: 160px;

  /* 모바일 뷰 */
  @media (max-width: 47.9375rem) {
    width: 105px;
    height: 70px;
    border-radius: 5px;
  }
`;
