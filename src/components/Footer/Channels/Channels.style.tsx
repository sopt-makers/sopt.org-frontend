import styled from '@emotion/styled';

interface WrapProps {
  isFooter: boolean;
}

export const ChannelButtonsWrap = styled.div<WrapProps>`
  display: grid;
  grid-template-columns: ${(props: WrapProps) =>
    props.isFooter ? 'repeat(5, minmax(30px, auto))' : 'repeat(3, minmax(30px, auto))'};
  column-gap: ${(props: WrapProps) => (props.isFooter ? '10px' : '16px')};
  row-gap: 16px;

  width: ${(props: WrapProps) => (props.isFooter ? '190px' : '152px')};
  height: ${(props: WrapProps) => (props.isFooter ? '30px' : '96px')};
  margin-top: 15px;
`;

export const ChannelButton = styled.img`
  cursor: pointer;
`;
