import RightArrow from '@src/assets/icons/rightArrow.svg';
import SoptTermImage1 from '@src/assets/images/sopterm1.png';
import SoptTermImage2 from '@src/assets/images/sopterm2.png';
import RoundButton from '@src/components/common/RoundButton';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

import * as S from './SoptTermImage.style';

function SoptTermImage() {
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
          src={SoptTermImage1}
          width={isDesktop ? 200 : 132}
          height={isDesktop ? 200 : 132}
          alt="솝커톤"
          blurDataURL={SoptTermImage1.src}
          placeholder="blur"
        />
        <Image
          src={SoptTermImage2}
          width={isDesktop ? 300 : 198}
          height={isDesktop ? 200 : 132}
          alt="솝커톤"
          blurDataURL={SoptTermImage2.src}
          placeholder="blur"
        />
      </S.ImageWrapper>
      <RoundButton isReverse={true}>
        <S.ButtonContents onClick={handleClick}>
          솝텀 프로젝트 보기
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

export default SoptTermImage;
