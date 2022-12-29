import React from 'react';
import Description from './Description';
import IconBanner from './IconBanner';
import * as S from './Introduce.style';

function Introduce() {
  return (
    <S.Wrap>
      <IconBanner />
      <Description />
    </S.Wrap>
  );
}

export default Introduce;
