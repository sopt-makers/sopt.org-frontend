import styled from '@emotion/styled';

const Root = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const JobPostingsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  /* 태블릿 뷰 */
  @media (max-width: 1199px) and (min-width: 766px) {
    width: 660px;
    gap: 32px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    width: 314px;
    gap: 16px;
  }
`;

export const St = {
  Root,
  JobPostingsContainer,
};
