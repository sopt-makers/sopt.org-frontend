import styled from '@emotion/styled';
import { css } from '@emotion/react';

const FooterForm = styled.div<{ hide: boolean }>`
  display: flex;
  position: fixed;
  bottom: 0;

  width: 100%;

  padding: 0 0 0 38px;

  border-top: 1px solid #3c3d40;
  background-color: #1c1d1e;

  transition: transform 0.3s;
  z-index: 10;

  ${({ hide }) =>
    hide
      ? css`
          transform: translateY(100%);
        `
      : ''}

  /* 모바일 뷰 */
  @media (max-width: 765px) {
    padding: 0 0 0 10px;
  }
`;

const FooterLink = styled.a`
  padding: 17px 10px;

  color: #c0c5c9;

  &:hover {
    cursor: pointer;
    color: #ffffff;
  }
`;

const St = {
  FooterForm,
  FooterLink,
};

export default St;
