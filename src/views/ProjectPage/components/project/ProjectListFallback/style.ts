import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { BREAKPOINT } from '@src/lib/styles/breakpoint';

export const ProjectListHeader = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-bottom: 30px;

  /* 모바일 뷰 */
  @media (max-width: ${BREAKPOINT.MOBILE_MAX_WIDTH}) {
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

  @media (max-width: ${BREAKPOINT.TABLET_MAX_WIDTH}) and (min-width: ${BREAKPOINT.TABLET_MIN_WIDTH}) {
    width: 33px;
  }
`;
