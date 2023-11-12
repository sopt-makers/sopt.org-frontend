import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import chevronDown from '@src/assets/icons/chevronDown.svg';

const SelectWrapper = styled.div`
  position: relative;
`;

const SelectTrigger = styled.button<{
  isSelectionExist: boolean;
  isOpened: boolean;
  isWide: boolean;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  position: relative;
  min-width: 110px;
  width: ${({ isWide }) => isWide && 'auto'};
  padding: 9px 22px;
  text-align: left;
  color: ${({ isSelectionExist }) => (isSelectionExist ? colors.white : colors.gray200)};
  border-radius: 20px;
  background-color: ${({ isSelectionExist }) =>
    isSelectionExist ? colors.gray800 : colors.gray700};
  border: 1px solid;
  border-color: ${({ isSelectionExist }) => (isSelectionExist ? colors.gray400 : colors.gray700)};

  @media (max-width: 899px) {
    padding: 8px 12px;
    border-radius: 99px;
    font-size: 13px;
    line-height: 150%;
    letter-spacing: -0.13px;
  }
`;

const Arrow = styled.div<{
  isOpened: boolean;
}>`
  background-repeat: no-repeat;
  background-position: center;
  transition: 0.2s;
  width: 10px;
  height: 18px;
  background-image: url(${chevronDown});
  transform: ${({ isOpened }) => (isOpened ? 'rotate(180deg)' : 'none')};
`;

const SelectItem = styled.div<{ isSelected: boolean }>`
  background-color: ${({ isSelected }) => (isSelected ? colors.gray600 : 'transparent')};
  padding: 8px 5px;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.1s;
  color: ${colors.gray30};
`;

const SelectTriggerContent = styled.p<{
  isSelectionExist: boolean;
}>`
  color: ${({ isSelectionExist }) => (isSelectionExist ? colors.white : colors.gray200)};
  margin-right: 8px;
  font-size: 16px;
  font-weight: 500;
`;

const SelectItemContent = styled.p<{
  isWide: boolean;
}>`
  margin-right: ${({ isWide }) => isWide && '42px'};
  @media (max-width: 899px) {
    margin-right: ${({ isWide }) => isWide && '22px'};
  }
`;

const SelectItemWrapper = styled.div<{ isWide: boolean }>`
  display: flex;
  flex-direction: column;

  position: absolute;
  background-color: ${colors.gray700};
  z-index: 200;
  min-width: 110px;
  width: ${({ isWide }) => isWide && 'auto'};
  max-height: 262px;
  overflow-y: scroll;
  border-radius: 13px;
  padding: 7px;
  padding-right: ${({ isWide }) => isWide && '5px'};
  margin-top: 8px;
  /* gap: 8px; */

  &:hover {
    ${SelectItem} {
      background-color: transparent;
      &:hover {
        background-color: ${colors.gray400};
      }
    }
  }
`;

export const S = {
  SelectWrapper,
  Arrow,
  SelectTrigger,
  SelectItem,
  SelectTriggerContent,
  SelectItemContent,
  SelectItemWrapper,
};
