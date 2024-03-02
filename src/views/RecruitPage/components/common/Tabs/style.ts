import styled from '@emotion/styled';

export const TabBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;

  @media (max-width: 765.9px) {
    gap: 10px;
  }
`;

export const Tab = styled.div<{ selected: boolean }>`
  cursor: pointer;
  text-align: center;
  padding: 20px 0;
  border-radius: 10px;
  color: ${({ selected }) => (selected ? '#FFFFFF' : '#cccccc')};
  background-color: ${({ selected }) => (selected ? '#222220' : 'inherit')};
  font-size: 23px;

  min-width: 121px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 1299px) and (min-width: 766px) {
    padding: 12px 0;
    font-size: 14px;
  }

  @media (max-width: 765.9px) {
    min-width: 101px;
    padding: 12px 0;
    font-size: 16px;
  }
`;
