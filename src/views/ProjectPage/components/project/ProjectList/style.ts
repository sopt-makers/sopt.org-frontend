import styled from '@emotion/styled';
import { ProjectCategoryType } from '@src/lib/types/project';
import { BREAKPOINT } from '@src/lib/styles/breakpoint';

export const ProjectListHeader = styled.div<{ selectedCategory: ProjectCategoryType }>`
  display: flex;
  justify-content: ${({ selectedCategory }) =>
    selectedCategory === ProjectCategoryType.ALL ? 'end' : 'space-between'};
  margin-bottom: 30px;

  /* 모바일 뷰 */
  @media (max-width: ${BREAKPOINT.MOBILE_MAX_WIDTH}) {
    flex-direction: column;
    gap: 20px;
    margin-bottom: 28px;
  }
`;

export const SpinnerWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50rem 0;
`;
