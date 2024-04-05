import styled from '@emotion/styled';
import { TitleProps } from '.';

export const Root = styled.h1<TitleProps>`
  border-bottom: 10rem solid #fcfcfc;
  padding-bottom: 10rem;

  width: max-content;
  line-height: 44rem;

  white-space: pre-line;

  font-size: ${({ fontSize }) => fontSize};
  font-weight: 800;

  @media (max-width: 1279px) {
    border-bottom: 6rem solid #fcfcfc;
    padding-bottom: 5rem;

    line-height: 31rem;
    font-size: 25rem;
    font-weight: 900;
  }
`;
