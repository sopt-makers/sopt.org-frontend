import styled from '@emotion/styled';
import { colors } from '@src/lib/styles/colors';

export const Wrapper = styled.header`
  width: 100%;
  min-height: 80px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  background-color: ${colors.gray900};
  backdrop-filter: blur(20px);
  z-index: 100;
  padding: 0 20px;
  top: 0;

  /* 태블릿 + 데스크탑 뷰 */
  @media (min-width: 768px) {
    height: 48px;
  }

  /* 모바일 뷰 */
  @media (max-width: 767px) {
    height: 48px;
    min-height: 48px;

    justify-content: space-between;
  }
`;
