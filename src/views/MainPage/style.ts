import styled from '@emotion/styled';
import { colors } from '@sopt-mds/design-tokens';

export const Main = styled.main`
  position: relative;
  isolation: isolate;
  background: ${colors.bg.layer.basement};
`;

export const Content = styled.div`
  background: linear-gradient(#00000000 0, #00000066 120px, #000000d1 420px, #000000e0 100%);
`;
