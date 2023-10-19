import styled from '@emotion/styled';
import { mainColor } from '@src/lib/styles/colors';

interface StyleProps {
  isReverse?: boolean;
}

export const Root = styled.button<StyleProps>`
  border-radius: 24.5px;
  background: ${(props: StyleProps) =>
    props.isReverse ? mainColor.mainColor : mainColor.soptWhite};
  cursor: pointer;

  padding: 12px 40px;
  line-height: 25px;
  color: ${(props: StyleProps) => (props.isReverse ? mainColor.soptWhite : mainColor.mainColor)};

  font-size: 20px;
  font-weight: 700;

  @media (max-width: 1279px) {
    border-radius: 24px;
    font-size: 18px;
  }
`;
