import reset from 'emotion-reset';
import { css } from '@emotion/react';

export const global = css`
  ${reset}
  
  html {
    -webkit-touch-callout: none;
    /* -webkit-user-select:none; */
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    font-family: 'SUIT';
    scroll-behavior: smooth;
  }

  * {
    box-sizing: border-box;
    font-family: 'SUIT', 'Pretendard', arial, sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    color: #fcfcfc;
  }

  body {
    background-color: #181818;
    font-family: 'SUIT', 'Pretendard';
  }

  button {
    outline: 0;
    border: 0;
    background: none;
    padding: 0;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;
