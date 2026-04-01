import styled from '@emotion/styled';

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const CloseButtonWrapper = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  padding: 10px;
  display: flex;
  align-items: start;
`;

export const Divider = styled.hr`
  width: 100%;
  margin: 20px 0;
  border: 1px solid #2e2e37;
`;

export const Description = styled.p`
  display: flex;
  width: 100%;
  white-space: pre-line;
  word-break: keep-all;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.21px;
`;
