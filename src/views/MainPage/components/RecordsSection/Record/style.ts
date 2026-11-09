import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { colorFg, typography } from '@sopt-mds/design-tokens';
import { media } from '@src/lib/styles/breakpoints';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
`;

export const ValueRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 16px;
  padding-left: 30px;

  ${media.mobile} {
    gap: 8px;
    padding-left: 16px;
  }
`;

export const Number = styled.div`
  width: 150px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  // @TODO 추후에 typograpy.display토큰으로 교체
  font-size: 100px;
  font-weight: 700;
  line-height: 130px;
  letter-spacing: -2px;
  color: ${colorFg.neutral.bold};

  ${media.tablet} {
    width: 120px;
    height: 80px;
  }

  ${media.mobile} {
    width: 100px;
    height: 80px;
    font-size: 48px;
    line-height: 72px;
  }
`;

export const Unit = styled.span<{ mainColor: string }>`
  // @TODO 추후에 typograpy.display토큰으로 교체
  font-size: 56px;
  font-weight: 700;
  line-height: 72px;
  letter-spacing: -1.12px;

  color: ${({ mainColor }) => mainColor};
  flex-shrink: 0;

  ${media.mobile} {
    ${typography.heading2}
  }
`;

export const Label = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: -0.4px;
  color: ${colors.gray100};
  white-space: nowrap;

  ${media.tablet} {
    font-size: 16px;
    line-height: 24px;
  }

  ${media.mobile} {
    font-size: 14px;
    line-height: 22px;
  }
`;
