import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { ProjectCategoryDescriptionProps } from '@src/views/ProjectPage/components/project/ProjectCategoryDescription';

export const Description = styled.div<ProjectCategoryDescriptionProps>`
  color: ${colors.gray100};

  /* Body/1_Medium_18 */
  font-family: SUIT;
  font-size: 18rem;
  font-style: normal;
  font-weight: 500;
  line-height: 165%; /* 29.7rem */
  letter-spacing: -0.27rem;

  /* 모바일 뷰 */
  @media (max-width: 899rem) {
    padding: 16rem;
    border-radius: 12rem;
    background: ${colors.gray800};

    color: ${colors.gray30};

    /* Body/3_Medium_14 */
    font-family: SUIT;
    font-size: 14rem;
    font-style: normal;
    font-weight: 500;
    line-height: 165%; /* 23.1rem */
    letter-spacing: -0.21rem;
  }
`;
