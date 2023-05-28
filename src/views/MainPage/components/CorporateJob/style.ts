import styled from '@emotion/styled';

const Root = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;

  @media (max-width: 1199px) and (min-width: 766px) {
  }
  @media (max-width: 765.9px) {
  }
`;

const Title = styled.h3`
  font-size: 45px;

  width: 100%;
  font-size: 45px;
  line-height: 60px;
`;

export const St = {
  Root,
  Title,
};
