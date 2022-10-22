import { css } from '@emotion/react';
import reset from 'emotion-reset';

export const global = css`
  ${reset}
  html {
    -webkit-touch-callout: none;
    /* -webkit-user-select:none; */
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    font-family: 'SUIT';
  }
  * {
    box-sizing: border-box;
    font-family: 'SUIT';
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
    font-family: 'SUIT';
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
