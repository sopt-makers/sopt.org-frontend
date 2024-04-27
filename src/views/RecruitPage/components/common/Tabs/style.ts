import styled from '@emotion/styled';

export const TabBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;

  @media (max-width: 47.86875rem) {
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
  font-size: 23rem;

  min-width: 121px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 81.1875rem) and (min-width: 47.875rem) {
    padding: 12px 0;
    font-size: 14rem;
  }

  @media (max-width: 47.86875rem) {
    min-width: 101px;
    padding: 12px 0;
    font-size: 16rem;
  }
`;
