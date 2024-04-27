import styled from '@emotion/styled';
import { ProjectCategoryType } from '@src/lib/types/project';

export const ProjectListHeader = styled.div<{ selectedCategory: ProjectCategoryType }>`
  display: flex;
  justify-content: ${({ selectedCategory }) =>
    selectedCategory === ProjectCategoryType.ALL ? 'end' : 'space-between'};
  margin-bottom: 30px;

  /* 모바일 뷰 */
  @media (max-width: 56.1875rem) {
    flex-direction: column;
    gap: 20px;
    margin-bottom: 28px;
  }
`;
