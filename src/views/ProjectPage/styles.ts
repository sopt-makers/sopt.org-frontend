import styled from '@emotion/styled';
import theme from '@src/styles/theme';

export const Styled = {
  Root: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;

    & span {
      margin-top: 99px;
      margin-bottom: 99px;
      line-height: 56px;
      color: ${theme.colors.soptWhite};
      font-family: 'SUIT', arial, sans-serif;
      font-size: 45px;
      font-weight: 400;
      font-style: normal;
      @media (max-width: 769px) {
        font-size: 24px;
      }
    }
  `,
};
