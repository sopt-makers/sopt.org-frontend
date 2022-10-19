import { css } from '@emotion/react';
import reset from 'emotion-reset';

export const global = css`
  ${reset}
  html {
    -webkit-touch-callout: none;
    /* -webkit-user-select:none; */
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  * {
    box-sizing: border-box;
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

  @font-face {
    font-family: 'SUIT', arial, sans-serif;
    font-weight: 100;
    src: url('./fonts/SUIT-Thin.woff2') format('woff2'),
      url('./fonts/SUIT-Thin.otf') format('truetype');
  }
  @font-face {
    font-family: 'SUIT', arial, sans-serif;
    font-weight: 200;
    src: url('./fonts/SUIT-ExtraLight.woff2') format('woff2'),
      url('./fonts/SUIT-ExtraLight.otf') format('truetype');
  }
  @font-face {
    font-family: 'SUIT', arial, sans-serif;
    font-weight: 300;
    src: url('./fonts/SUIT-Light.woff2') format('woff2'),
      url('./fonts/SUIT-Light.otf') format('truetype');
  }
  @font-face {
    font-family: 'SUIT', arial, sans-serif;
    font-weight: 400;
    src: url('./fonts/SUIT-Regular.woff2') format('woff2'),
      url('./fonts/SUIT-Regular.otf') format('truetype');
  }
  @font-face {
    font-family: 'SUIT', arial, sans-serif;
    font-weight: 500;
    src: url('./fonts/SUIT-Medium.woff2') format('woff2'),
      url('./fonts/SUIT-Medium.otf') format('truetype');
  }
  @font-face {
    font-family: 'SUIT', arial, sans-serif;
    font-weight: 600;
    src: url('./fonts/SUIT-SemiBold.woff2') format('woff2'),
      url('./fonts/SUIT-SemiBold.otf') format('truetype');
  }
  @font-face {
    font-family: 'SUIT';
    font-weight: 700;
    src: url('./fonts/SUIT-Bold.woff2') format('woff2'),
      url('./fonts/SUIT-Bold.otf') format('truetype');
  }
  @font-face {
    font-family: 'SUIT';
    font-weight: 800;
    src: url('./fonts/SUIT-ExtraBold.woff2') format('woff2'),
      url('./fonts/SUIT-Thin.otf') format('truetype');
  }
  @font-face {
    font-family: 'SUIT';
    font-weight: 900;
    src: url('./fonts/SUIT-Heavy.woff2') format('woff2'),
      url('./fonts/SUIT-Heavy.otf') format('truetype');
  }
`;
