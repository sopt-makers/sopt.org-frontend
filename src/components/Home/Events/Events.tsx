import { useRouter } from 'next/router';
import Fade from 'react-reveal/Fade';
import AppjamImage from '@src/assets/replaceMe/MainImg/img_appjam.png';
import SopkathonImage from '@src/assets/replaceMe/MainImg/img_sopkathon.png';
import SoptTermImage from '@src/assets/replaceMe/MainImg/img_sopt-term.png';
import { appjamInfo, sopkathonInfo, soptTermInfo } from '@src/assets/replaceMe/statistics';
import RoundButton from '@src/components/common/RoundButton';
import SoptMarquee from '../SoptMarquee';
import Event from './Event/Event';
import * as S from './Events.style';

function Events() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/projects');
  };

  return (
    <S.Root>
      <S.Wrap>
        <S.EventWrap>
          <Fade left>
            <Event
              titleKorean="앱잼"
              titleEnglish="Appjam"
              imageSrc={AppjamImage.src}
              eventDetails={appjamInfo}
            />
          </Fade>
          <Fade left delay={300}>
            <Event
              titleKorean="솝커톤"
              titleEnglish="Sopkathon"
              imageSrc={SopkathonImage.src}
              eventDetails={sopkathonInfo}
            />
          </Fade>
          <Fade left delay={600}>
            <Event
              titleKorean="솝텀프로젝트"
              titleEnglish="SOPT-term"
              imageSrc={SoptTermImage.src}
              eventDetails={soptTermInfo}
            />
          </Fade>
        </S.EventWrap>
        <Fade delay={1000}>
          <RoundButton onClick={handleClick}>SOPT 서비스 구경하기</RoundButton>
        </Fade>
      </S.Wrap>
      <SoptMarquee />
    </S.Root>
  );
}

export default Events;
