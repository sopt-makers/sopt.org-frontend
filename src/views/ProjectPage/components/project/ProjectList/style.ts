import styled from '@emotion/styled';
import { ProjectCategoryType } from '@src/lib/types/project';

export const ProjectListHeader = styled.div<{ selectedCategory: ProjectCategoryType }>`
  display: flex;
  justify-content: ${({ selectedCategory }) =>
    selectedCategory === ProjectCategoryType.ALL ? 'end' : 'space-between'};
  margin-bottom: 30rem;

  /* 모바일 뷰 */
  @media (max-width: 899px) {
    flex-direction: column;
    gap: 20rem;
    margin-bottom: 28rem;
  }
`;

export const SpinnerWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50rem 0;
`;
