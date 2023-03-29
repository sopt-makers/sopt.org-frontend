import { css } from '@emotion/react';

export const textSingularLineEllipsis = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const textpluralLinesEllipsis = (lines: number) => css`
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${lines};
  word-break: break-all;
`;
