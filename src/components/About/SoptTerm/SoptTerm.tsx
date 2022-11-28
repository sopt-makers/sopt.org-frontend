import SoptTermServices from '@src/assets/images/sopterm_service.png';
import UnderlinedTitle from '@src/components/common/UnderlinedTitle';
import { ABOUT_INFO } from '@src/constants/about';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

import AboutWrapper from '../AboutWrapper';
import * as S from './SoptTerm.style';
import SoptTermImage from './SoptTermImage';

function SoptTerm() {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1280px)',
  });

  return (
    <AboutWrapper>
      <AboutWrapper.Top
        leftTitleProps={
          <>
            <S.Description>{ABOUT_INFO.SOPTTERM.description}</S.Description>
            <UnderlinedTitle fontSize="40px">{ABOUT_INFO.SOPTTERM.title}</UnderlinedTitle>
          </>
        }
        leftDescriptionProps={
          <S.Contents>
            {isDesktop ? ABOUT_INFO.SOPTTERM.pc_contents : ABOUT_INFO.SOPTTERM.mobile_contents}
            <br />
            <br />
            <strong>#한기수이상_수료자만_가능</strong>
          </S.Contents>
        }
        rightProps={<SoptTermImage />}
      />
      <S.ImageWrapper>
        <S.Filter />
        <Image
          src={SoptTermServices}
          width={isDesktop ? 1020 : 485}
          height={isDesktop ? 165 : 80}
          alt="솝텀 서비스들"
          blurDataURL={SoptTermServices.src}
          placeholder="blur"
        />
      </S.ImageWrapper>
    </AboutWrapper>
  );
}

export default SoptTerm;
