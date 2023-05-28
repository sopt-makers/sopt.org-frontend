import styled from '@emotion/styled';

const Root = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  width: 100%;
  @media (max-width: 1199px) and (min-width: 766px) {
    width: 676px;
    gap: 24px;
  }
  @media (max-width: 765.9px) {
    width: 328px;
    gap: 48px;
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
