import styled from '@emotion/styled';

interface StyleProps {
  isReverse?: boolean;
}

export const Root = styled.button<StyleProps>`
  border-radius: 24.5px;
  background: ${(props: StyleProps) =>
    props.isReverse
      ? ({ theme }) => theme.colors.mainColor
      : ({ theme }) => theme.colors.soptWhite};
  cursor: pointer;

  padding: 12px 40px;
  line-height: 25px;
  color: ${(props: StyleProps) =>
    props.isReverse
      ? ({ theme }) => theme.colors.soptWhite
      : ({ theme }) => theme.colors.mainColor};

  font-size: 20px;
  font-weight: 700;

  @media (max-width: 1279px) {
    border-radius: 24px;
    font-size: 18px;
  }
`;
