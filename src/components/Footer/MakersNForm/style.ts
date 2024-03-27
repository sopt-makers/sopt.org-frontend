import styled from '@emotion/styled';
import Link from 'next/link';
import { css } from '@emotion/react';

const FooterForm = styled.div<{ hide: boolean }>`
  display: flex;
  position: fixed;
  bottom: 0;

  width: 100%;

  padding: 0 0 0 38rem;

  border-top: 1rem solid #3c3d40;
  background-color: #1c1d1e;

  transition: transform 0.3s;
  z-index: 100;

  ${({ hide }) =>
    hide
      ? css`
          transform: translateY(100%);
        `
      : ''}

  /* 모바일 뷰 */
  @media (max-width: 765rem) {
    padding: 0 0 0 10rem;
  }
`;

const FooterLink = styled(Link)`
  padding: 17rem 10rem;

  color: #c0c5c9;
  line-height: normal;

  &:hover {
    cursor: pointer;
    color: #ffffff;
  }
`;
const FooterButton = styled.button`
  padding: 17rem 10rem;

  color: #c0c5c9;
  font-size: 100%;

  &:hover {
    cursor: pointer;
    color: #ffffff;
  }
`;

const St = {
  FooterForm,
  FooterLink,
  FooterButton,
};

export default St;
