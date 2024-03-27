import styled from '@emotion/styled';

export const TabBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25rem;

  @media (max-width: 765.9rem) {
    gap: 10rem;
  }
`;

export const Tab = styled.div<{ selected: boolean }>`
  cursor: pointer;
  text-align: center;
  padding: 20rem 0;
  border-radius: 10rem;
  color: ${({ selected }) => (selected ? '#FFFFFF' : '#cccccc')};
  background-color: ${({ selected }) => (selected ? '#222220' : 'inherit')};
  font-size: 23rem;

  min-width: 121rem;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 1299rem) and (min-width: 766rem) {
    padding: 12rem 0;
    font-size: 14rem;
  }

  @media (max-width: 765.9rem) {
    min-width: 101rem;
    padding: 12rem 0;
    font-size: 16rem;
  }
`;
