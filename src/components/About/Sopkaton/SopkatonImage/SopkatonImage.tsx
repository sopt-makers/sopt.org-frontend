import RightArrow from '@src/assets/icons/rightArrow.svg';
import SopkatonImage1 from '@src/assets/images/sopkaton1.png';
import SopkatonImage2 from '@src/assets/images/sopkaton2.png';
import RoundButton from '@src/components/common/RoundButton';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

import * as S from './SopkatonImage.style';

function SopkatonImage() {
  const router = useRouter();

  const isDesktop = useMediaQuery({
    query: '(min-width: 1280px)',
  });

  const handleClick = () => {
    router.push('/projects');
  };

  return (
    <S.Root>
      <S.ImageWrapper>
        <Image
          src={SopkatonImage1}
          width={isDesktop ? 200 : 132}
          height={isDesktop ? 200 : 132}
          alt="솝커톤"
          blurDataURL={SopkatonImage1.src}
          placeholder="blur"
        />
        <Image
          src={SopkatonImage2}
          width={isDesktop ? 300 : 198}
          height={isDesktop ? 200 : 132}
          alt="솝커톤"
          blurDataURL={SopkatonImage2.src}
          placeholder="blur"
        />
      </S.ImageWrapper>
      <RoundButton isReverse={true}>
        <S.ButtonContents onClick={handleClick}>
          솝커톤 프로젝트 보기
          <Image
            src={RightArrow}
            width={50}
            height={5}
            alt="오른쪽 화살표"
            blurDataURL={RightArrow}
            placeholder="blur"
          />
        </S.ButtonContents>
      </RoundButton>
    </S.Root>
  );
}

export default SopkatonImage;
