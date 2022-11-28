import SoptDefaultLogo from '@src/assets/images/sopt_default_logo.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

import * as S from './HistoryCard.style';

export interface HistoryCardProps {
  backgroundImage?: string;
  mainLogo?: string;
  signature?: string;
  mainColor?: string;
  year: string;
  number: number;
}

function HistoryCard({
  backgroundImage,
  mainLogo,
  signature,
  mainColor,
  year,
  number,
}: HistoryCardProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    router.push(`/history/${e.currentTarget.id}?current=0`);
  };

  return (
    <S.Li
      mainColor={mainColor}
      backgroundImage={backgroundImage}
      onClick={handleClick}
      id={number.toString()}
    >
      <S.TitleContainer>
        <Image
          src={mainLogo ? mainLogo : SoptDefaultLogo}
          width={98}
          height={36}
          alt="솝트 로고"
          blurDataURL={mainLogo ? mainLogo : SoptDefaultLogo}
          placeholder="blur"
        />
      </S.TitleContainer>
      <S.Info>
        <S.Semester>{year}</S.Semester>
        <S.Title mainColor={mainColor}>
          <b>{number}</b>기 {signature && <b className="signatureColor">{signature}</b>} <b>SOPT</b>
        </S.Title>
      </S.Info>
      <S.Line />
    </S.Li>
  );
}

export default HistoryCard;
