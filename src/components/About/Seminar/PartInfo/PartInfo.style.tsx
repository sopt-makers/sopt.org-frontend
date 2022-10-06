import styled from '@emotion/styled';

import { PartInfoStyle } from './PartInfo';

export const Root = styled.div<PartInfoStyle>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  mix-blend-mode: normal;
  background: ${({ theme }) => theme.colors.black40};

  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

export const Title = styled.h2`
  margin-bottom: 15px;
  border-radius: 100px;
  /* brand/30-THE */

  background: ${({ theme }) => theme.colors.mainColor};
  padding: 5px 30px;
  text-align: center;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  line-height: 20px;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.soptWhite};
  font-family: 'SUIT', arial, sans-serif;
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
`;

export const Contents = styled.p`
  text-align: center;
  line-height: 180%;
  letter-spacing: -0.03em;
  white-space: pre-line;
  color: ${({ theme }) => theme.colors.soptWhite};
  font-family: 'SUIT', arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
`;
