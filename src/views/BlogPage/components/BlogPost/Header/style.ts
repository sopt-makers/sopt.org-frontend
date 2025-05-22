import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import Image from 'next/image';

export const Header = styled.div`
  display: flex;
  height: 23px;
  margin-bottom: 4px;

  color: ${colors.gray200};
  font-size: 14rem;
  font-weight: 400;
  line-height: 160%;
  letter-spacing: -0.21px;

  & > * {
    font-size: 100%;
  }

  /* 모바일 뷰 */
  @media (max-width: 47.9375rem) {
    height: 16px;
    margin-bottom: 0;

    font-size: 12rem;
    font-weight: 500;
    line-height: 135%; /* 16.2px */
    letter-spacing: -0.18px;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  & > * {
    font-size: 100%;
  }
`;

export const ProfileImage = styled(Image)`
  border-radius: 18px;

  /* 모바일 뷰 */
  @media (max-width: 47.9375rem) {
    width: 15px;
    height: 15px;
  }
`;

export const Divider = styled.div`
  padding: 0 2px 0 2px;
`;

export const Part = styled.div`
  display: flex;
  align-items: center;
`;