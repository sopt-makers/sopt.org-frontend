import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { css } from '@emotion/react';
import { SVGProps } from 'react';

export const SelectTrigger = styled.button<{
  isSelectionExist: boolean;
  isOpened: boolean;
  isWide: boolean;
  breakPoint: string;
  variant: 'round' | 'square';
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  position: relative;
  width: ${({ isWide }) => isWide && 'auto'};
  text-align: left;
  color: ${({ isSelectionExist }) => (isSelectionExist ? colors.white : colors.gray200)};
  background-color: ${({ isSelectionExist }) =>
    isSelectionExist ? colors.gray800 : colors.gray700};
  border: 1px solid;
  border-color: ${({ isOpened }) => (isOpened ? colors.gray400 : colors.gray800)};

  ${({ variant }) =>
    variant === 'round'
      ? css`
          min-width: 110px;
          padding: 9px 22px;
          border-radius: 20px;
        `
      : variant === 'square' &&
        css`
          min-width: 130px;
          padding: 11px 12px;
          border-radius: 10px;
          background-color: ${colors.gray800};
        `}

  @media (max-width: ${({ breakPoint }) => breakPoint}) {
    min-width: 76px;
    padding: 8px 12px;
    border-radius: 99px;
    font-size: 13rem;
    line-height: 150%;
    letter-spacing: -0.13px;
  }
`;

export const Arrow = styled.div<{
  isOpened: boolean;
  icon: SVGProps<SVGSVGElement>;
}>`
  background-repeat: no-repeat;
  background-position: center;
  transition: 0.2s;
  width: 18px;
  height: 18px;
  background-image: ${({ icon }) => `url(${icon})`};
  transform: ${({ isOpened }) => (isOpened ? 'rotate(180deg)' : 'none')};
`;

export const SelectItem = styled.div<{ isSelected: boolean; variant: 'round' | 'square' }>`
  background-color: ${({ isSelected }) => (isSelected ? colors.gray600 : 'transparent')};
  padding: ${({ variant }) => (variant === 'round' ? '8px 5px' : '8px 12px')};
  border-radius: 6px;
  cursor: pointer;
  transition: 0.1s;
  color: ${colors.gray30};
`;

export const SelectTriggerContent = styled.p<{
  isSelectionExist: boolean;
  breakPoint: string;
}>`
  color: ${({ isSelectionExist }) => (isSelectionExist ? colors.white : colors.gray200)};
  margin-right: 8px;
  font-size: 16rem;
  font-weight: 500;
  white-space: nowrap;

  @media (max-width: ${({ breakPoint }) => breakPoint}) {
    font-size: 13rem;
  }
`;

export const SelectItemContent = styled.p<{ isWide: boolean; breakPoint: string }>`
  margin-right: ${({ isWide }) => isWide && '42px'};

  font-size: 16rem;

  @media (max-width: ${({ breakPoint }) => breakPoint}) {
    margin-right: ${({ isWide }) => isWide && '22px'};
    font-size: 13rem;
  }
`;

export const SelectItemWrapper = styled.div<{
  isWide: boolean;
  breakPoint: string;
  variant: 'round' | 'square';
}>`
  display: flex;
  flex-direction: column;

  position: absolute;

  z-index: 200;
  width: ${({ isWide }) => isWide && 'auto'};
  overflow-y: scroll;
  padding: 7px;
  padding-right: ${({ isWide }) => isWide && '5px'};
  margin-top: 8px;
  font-size: 100%;

  ${({ variant }) =>
    variant === 'round' &&
    css`
      border-radius: 13px;
      min-width: 110px;
      max-height: 262px;
      background-color: ${colors.gray700};

      &:hover {
        ${SelectItem} {
          background-color: transparent;
          &:hover {
            background-color: ${colors.gray400};
          }
        }
      }
    `}
  ${({ variant }) =>
    variant === 'square' &&
    css`
      padding: 8px;
      border-radius: 8px;
      min-width: 130px;
      max-height: 346px;
      background-color: ${colors.gray800};

      &:hover {
        ${SelectItem} {
          background-color: transparent;
          &:hover {
            background-color: ${colors.gray700};
          }
          &:active {
            background-color: ${colors.gray600};
          }
        }
      }
    `}

  @media (max-width: ${({ breakPoint }) => breakPoint}) {
    min-width: 76px;
  }
`;
