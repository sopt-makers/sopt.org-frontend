import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { fontsObject } from '@sopt-makers/fonts';
import { ReactComponent as IcArrowMore } from '@src/assets/icons/ic_arrow_more.svg';

const boxBase = `
  border: 1px solid ${colors.gray600};
  border-radius: 10px;
  transition: background 0.2s ease;
`;

export const LabelBox = styled.div`
  ${boxBase}
  display: flex;
  align-items: center;
  height: 40px;
  padding: 8px 16px;
  color: ${colors.gray10};
  ${fontsObject.BODY_3_14_M}
  white-space: nowrap;
`;

export const IconBox = styled.div`
  ${boxBase}
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
`;

export const Root = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;

  &:hover ${LabelBox},
  &:hover ${IconBox} {
    background: rgba(255, 255, 255, 0.08);
  }

  &:hover ${LabelBox} {
    ${fontsObject.LABEL_3_14_SB}
  }
`;

export const Arrow = styled(IcArrowMore)`
  width: 13px;
  height: 13px;
  color: ${colors.gray10};
  flex-shrink: 0;
`;
