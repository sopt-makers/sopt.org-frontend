import styled from '@emotion/styled';

export const TabBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
`;

export const Tab = styled.div<{ selected: boolean }>`
  cursor: pointer;
  text-align: center;
  padding: 20px 0;
  border-radius: 10px;
  color: ${({ selected }) => (selected ? '#FFFFFF' : '#cccccc')};
  background-color: ${({ selected }) => (selected ? '#FFFFFF1A' : 'inherit')};
  font-size: 18px;

  min-width: 160px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  /* 태블릿 뷰 */
  @media (max-width: 765.9px) {
    min-width: 72px;
    padding: 12px 0;
    font-size: 12px;
  }
`;
