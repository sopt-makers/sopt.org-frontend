import { CSSProperties } from 'react';

type DummyDivProps = {
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
};

function DummyDiv({ width, height }: DummyDivProps) {
  return <div css={{ width, height }}></div>;
}

export default DummyDiv;
