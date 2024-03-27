import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import Image from 'next/image';

export const Header = styled.div`
  display: flex;
  height: 23rem;
  margin-bottom: 4rem;

  color: ${colors.gray200};
  font-size: 14rem;
  font-weight: 400;
  line-height: 160%;
  letter-spacing: -0.21rem;

  /* 모바일 뷰 */
  @media (max-width: 767rem) {
    height: 16rem;
    margin-bottom: 0;

    font-size: 12rem;
    font-weight: 500;
    line-height: 135%; /* 16.2rem */
    letter-spacing: -0.18rem;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 6rem;
`;

export const ProfileImage = styled(Image)`
  border-radius: 18rem;

  /* 모바일 뷰 */
  @media (max-width: 767rem) {
    width: 15rem;
    height: 15rem;
  }
`;

export const Divider = styled.div`
  padding: 0 2rem 0 2rem;
`;
