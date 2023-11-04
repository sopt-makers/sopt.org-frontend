import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';

export const ProjectListHeader = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-bottom: 30px;

  /* 모바일 뷰 */
  @media (max-width: 899px) {
    flex-direction: column;
    gap: 20px;
    margin-bottom: 28px;
  }
`;

export const ProjectListCountSkeletonUI = styled.div`
  width: 89px;
  height: 23px;
  background-color: ${colors.gray900};
  border-radius: 8px;

  @media (max-width: 1279px) and (min-width: 900px) {
    width: 33px;
  }
`;
