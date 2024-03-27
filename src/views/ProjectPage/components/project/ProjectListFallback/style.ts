import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';

export const ProjectListHeader = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-bottom: 30rem;

  /* 모바일 뷰 */
  @media (max-width: 899rem) {
    flex-direction: column;
    gap: 20rem;
    margin-bottom: 28rem;
  }
`;

export const ProjectListCountSkeletonUI = styled.div`
  width: 89rem;
  height: 23rem;
  background-color: ${colors.gray900};
  border-radius: 8rem;

  @media (max-width: 1279rem) and (min-width: 900rem) {
    width: 33rem;
  }
`;
