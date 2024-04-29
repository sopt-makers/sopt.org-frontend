import styled from '@emotion/styled';

export const Ul = styled.ul`
  margin-top: 130px;
  li {
    &:last-child {
      border: none;
    }
  }
  @media screen and (max-width: 80rem) {
    margin-top: 31px;
  }
`;
