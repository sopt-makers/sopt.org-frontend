import { CSSProperties } from 'react';

type DummyDivProps = {
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  backgroundColor?: CSSProperties['backgroundColor'];
};

function DummyDiv({ width, height, backgroundColor }: DummyDivProps) {
  return <div style={{ width, height, backgroundColor }}></div>;
}

export default DummyDiv;
