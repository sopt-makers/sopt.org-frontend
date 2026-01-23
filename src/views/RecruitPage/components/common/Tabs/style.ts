import styled from '@emotion/styled';
import { BREAKPOINT } from '@src/lib/styles/breakpoint';

export const TabBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;

  @media (max-width: ${BREAKPOINT.MOBILE_MAX_WIDTH}) {
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

  @media (max-width: ${BREAKPOINT.TABLET_MAX_WIDTH}) and (min-width: ${BREAKPOINT.TABLET_MIN_WIDTH}) {
    padding: 12px 0;
    font-size: 14rem;
  }

  @media (max-width: ${BREAKPOINT.MOBILE_MAX_WIDTH}) {
    min-width: 101px;
    padding: 12px 0;
    font-size: 16rem;
  }
`;
