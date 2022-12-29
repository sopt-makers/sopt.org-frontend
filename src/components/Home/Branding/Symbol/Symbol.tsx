import { useIsDesktop } from '@src/hooks/useIsDesktop';
import Image from 'next/image';

import * as S from './Symbol.style';

interface SymbolProps {
  imgSrc: string;
  name: string;
}

function Symbol({ imgSrc, name }: SymbolProps) {
  const isDesktop = useIsDesktop();

  return (
    <S.Root>
      <Image
        src={imgSrc}
        width={isDesktop ? '140px' : '100px'}
        height={isDesktop ? '140px' : '100px'}
        alt="브랜딩 심볼 이미지"
        blurDataURL={imgSrc}
        placeholder="blur"
      />
      <S.RoundName>{name}</S.RoundName>
    </S.Root>
  );
}

export default Symbol;
