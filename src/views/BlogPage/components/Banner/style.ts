import styled from '@emotion/styled';

export const BannerImage = styled.img`
  width: 100%;
  height: 288px;

  object-fit: cover;

  @media (max-width: 767px) {
    height: 200px;
  }

  @media (max-width: 375px) {
    height: 100%;
  }
`;