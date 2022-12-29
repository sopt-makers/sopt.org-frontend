import React, { useState } from 'react';

import * as S from './CollapseLi.style';

interface CollapseLiProps {
  title: string;
  contents: string;
}

function CollapseLi({ title, contents }: CollapseLiProps) {
  const [isOpened, setIsOpened] = useState(false);

  const handleClick = () => {
    setIsOpened((prev) => !prev);
  };

  return (
    <S.Root>
      <S.Section onClick={handleClick}>
        <S.TItle>{title}</S.TItle>
        <S.Button isOpened={isOpened} />
      </S.Section>
      <S.Contents isOpened={isOpened}>{contents}</S.Contents>
    </S.Root>
  );
}

export default CollapseLi;
