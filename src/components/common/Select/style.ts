import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import arrowDown from '@src/assets/icons/arrow_down.svg';

const SelectWrapper = styled.div`
  position: relative;
`;

const SelectTrigger = styled.button<{ isSelectionExist: boolean; isOpened: boolean }>`
  cursor: pointer;
  position: relative;
  width: 110px;
  font-size: 16px;
  font-weight: 500;
  padding: 9px 22px;
  text-align: left;
  color: white;
  border-radius: 20px;
  background-color: ${({ isSelectionExist }) =>
    isSelectionExist ? colors.gray700 : colors.gray600};
  border: 1px solid;
  border-color: ${({ isSelectionExist }) => (isSelectionExist ? colors.gray200 : colors.gray700)};
  &::after {
    content: '';
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    right: 22px;
    top: 9px;
    transition: 0.2s;
    width: 10px;
    height: 18px;
    background-image: url(${arrowDown});
    transform: ${({ isOpened }) => (isOpened ? 'rotate(180deg)' : 'none')};
  }
`;

const SelectItem = styled.div<{ isSelected: boolean }>`
  background-color: ${({ isSelected }) => (isSelected ? colors.gray400 : 'transparent')};
  padding: 6px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.1s;
  color: ${colors.gray30};
`;

const SelectItemWrapper = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  background-color: ${colors.gray600};
  z-index: 200;
  width: 110px;
  border-radius: 20px;
  padding: 9px 12px;
  margin-top: 8px;
  gap: 8px;

  &:hover {
    ${SelectItem} {
      background-color: transparent;
      &:hover {
        background-color: ${colors.gray400};
      }
    }
  }
`;

export const S = { SelectWrapper, SelectTrigger, SelectItem, SelectItemWrapper };
