import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { ProjectCategoryType } from '@src/lib/types/project';

export const ProjectListHeader = styled.div<{ selectedCategory: ProjectCategoryType }>`
  display: flex;
  justify-content: ${({ selectedCategory }) =>
    selectedCategory === ProjectCategoryType.ALL ? 'end' : 'space-between'};
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
