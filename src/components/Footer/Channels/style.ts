import styled from '@emotion/styled';
import Image from 'next/image';

interface WrapProps {
  isFooter: boolean;
}

export const ChannelButtonsWrap = styled.div<WrapProps>`
  display: grid;
  grid-template-columns: ${(props: WrapProps) =>
    props.isFooter ? 'repeat(5, minmax(30rem, auto))' : 'repeat(3, minmax(30rem, auto))'};
  column-gap: ${(props: WrapProps) => (props.isFooter ? '10rem' : '16rem')};
  row-gap: 16rem;

  width: ${(props: WrapProps) => (props.isFooter ? '190rem' : '152rem')};
  height: ${(props: WrapProps) => (props.isFooter ? '30rem' : '96rem')};
  margin-top: 15rem;
`;

export const ClickableChannelButton = styled(Image)`
  cursor: pointer;
`;
