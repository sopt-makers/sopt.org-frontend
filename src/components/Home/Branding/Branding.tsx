import React from 'react';
import Fade from 'react-reveal/Fade';
import { basicInfo } from '@src/assets/replaceMe/basicInfo';
import symbol1 from '@src/assets/replaceMe/branding/symbol(1).svg';
import RoundButton from '@src/components/common/RoundButton';
import UnderlinedTitle from '@src/components/common/UnderlinedTitle';
import { useRouter } from 'next/router';

import SoptMarquee from '../SoptMarquee';

import * as S from './Branding.style';
import Symbol from './Symbol';

function Branding() {
  const title = `${basicInfo.number}기 ${basicInfo.title} SOPT`;
  const description = `SOPT는 매 기수마다 브랜딩을 진행합니다.\n\n매기수 핵심 가치와 부제를 선정하고\n한 학기 활동의 운영 원리로 삼아,\n\nIT벤처창업 분야에서 함께 성장할 수 있도록 합니다.\n\n현 ${basicInfo.number}기는 ${basicInfo.title} SOPT라는 이름으로\n${basicInfo.coreValue[0]}•${basicInfo.coreValue[1]}•${basicInfo.coreValue[2]}을 핵심 가치로 삼아 활동하고 있습니다.`;
  const router = useRouter();
  const handleClick = () => {
    router.push('/history');
  };

  return (
    <S.Root>
      <S.Wrap>
        <Fade top>
          <UnderlinedTitle>{title}</UnderlinedTitle>
        </Fade>
        <S.ContentWrap>
          <Fade delay={300}>
            <S.SymbolsWrap>
              <Symbol imgSrc={symbol1} name={basicInfo.coreValue[0]} />
              <Symbol imgSrc={symbol1} name={basicInfo.coreValue[1]} />
              <Symbol imgSrc={symbol1} name={basicInfo.coreValue[2]} />
            </S.SymbolsWrap>
          </Fade>
          <S.TextWrap>
            <Fade delay={600}>
              <S.DescriptionLabel>{description}</S.DescriptionLabel>
            </Fade>
            <Fade delay={1000}>
              <RoundButton onClick={handleClick}>SOPT 기수별 브랜딩 보기</RoundButton>
            </Fade>
          </S.TextWrap>
        </S.ContentWrap>
      </S.Wrap>
      <SoptMarquee isReverse={true} />
    </S.Root>
  );
}

export default Branding;
