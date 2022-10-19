import AppjamBackgrouondPc from '@src/assets/images/appjam_background.svg';
import UnderlinedTitle from '@src/components/common/UnderlinedTitle';
import { ABOUT_INFO } from '@src/constants/about';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

import AboutWrapper from '../AboutWrapper';
import * as S from './Appjam.style';
import AppjamBox from './AppjamBox';
import AppjamStep from './AppjamStep';

function Appjam() {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1280px)',
  });

  return (
    <S.AppjamWrapper>
      <S.ImageWrapper>
        {isDesktop && (
          <Image src={AppjamBackgrouondPc} width={454} height={319} alt="background flower" />
        )}
      </S.ImageWrapper>
      <AboutWrapper>
        <AboutWrapper.Top
          leftTitleProps={
            <>
              <S.Description>{ABOUT_INFO.APPJAM.description}</S.Description>
              <UnderlinedTitle fontSize="40px">{ABOUT_INFO.APPJAM.title}</UnderlinedTitle>
            </>
          }
          leftDescriptionProps={
            <S.Contents>
              {isDesktop ? ABOUT_INFO.APPJAM.pc_contents : ABOUT_INFO.APPJAM.mobile_contents}
            </S.Contents>
          }
          rightProps={<AppjamBox />}
        />
        <AboutWrapper.Content>
          <AppjamStep />
        </AboutWrapper.Content>
      </AboutWrapper>
    </S.AppjamWrapper>
  );
}

export default Appjam;
