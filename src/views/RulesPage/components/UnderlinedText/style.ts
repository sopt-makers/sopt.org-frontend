import styled from '@emotion/styled';
import { TitleProps } from '.';

export const Root = styled.h1<TitleProps>`
  border-bottom: 10px solid #fcfcfc;
  padding-bottom: 10px;

  width: max-content;
  line-height: 44px;

  white-space: pre-line;

  font-size: ${({ fontSize }) => fontSize};
  font-weight: 800;

  @media (max-width: 1279px) {
    border-bottom: 6px solid #fcfcfc;
    padding-bottom: 5px;

    line-height: 31px;
    font-size: 25px;
    font-weight: 900;
  }
`;
