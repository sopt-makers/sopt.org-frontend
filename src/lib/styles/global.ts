import { colors } from '@sopt-makers/colors';
import { css } from '@emotion/react';
import font from './font';

export const global = css`
  ${font}

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  html {
    -webkit-touch-callout: none;
    /* -webkit-user-select:none; */
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    scroll-behavior: smooth;
  }

  * {
    box-sizing: border-box;
    font-family: 'SUIT', arial, sans-serif;
    letter-spacing: -0.01em;
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
    background-color: ${colors.background};
    line-height: 1;
  }

  button {
    outline: 0;
    border: 0;
    background: none;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;
