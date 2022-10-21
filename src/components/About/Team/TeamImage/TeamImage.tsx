import InstagramIcon from '@src/assets/icons/instagram_icon.svg';
import YoutubeIcon from '@src/assets/icons/youtube_icon.svg';
import Team1 from '@src/assets/images/team1.png';
import Team2 from '@src/assets/images/team2.png';
import BorderRoundButton from '@src/components/common/BorderRoundButton';
import Image from 'next/image';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

import * as S from './TeamImage.style';

function TeamImage() {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1280px)',
  });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    switch (e.currentTarget.id) {
      case 'timi':
        window.open('https://www.instagram.com/sopt_timi_tmi/');
        break;
      default:
        window.open('https://www.youtube.com/c/SOPTMEDIA');
        break;
    }
  };

  return (
    <S.Root>
      <S.ImageWrapper>
        <Image
          src={Team1}
          layout={'fixed'}
          width={isDesktop ? 250 : 147}
          height={isDesktop ? 200 : 147}
          alt="운영팀"
          blurDataURL={Team1.src}
          placeholder="blur"
        />
        <S.Tag># 이벤트_대장_운영팀</S.Tag>
        <BorderRoundButton id="timi" className="timi__button" onClick={handleClick}>
          <Image
            src={InstagramIcon}
            width={isDesktop ? 24 : 18}
            height={isDesktop ? 24 : 18}
            alt="인스타 아이콘"
            blurDataURL={InstagramIcon}
            placeholder="blur"
          />
          운영팀 일상 보기
        </BorderRoundButton>
      </S.ImageWrapper>
      <S.ImageWrapper>
        <Image
          src={Team2}
          layout={'fixed'}
          width={isDesktop ? 250 : 147}
          height={isDesktop ? 200 : 147}
          alt="미디어팀"
          blurDataURL={Team2.src}
          placeholder="blur"
        />
        <S.Tag># 각종_소식을_전하는_미디어팀</S.Tag>
        <BorderRoundButton id="media" className="media__button" onClick={handleClick}>
          <Image
            src={YoutubeIcon}
            width={isDesktop ? 26 : 18}
            height={isDesktop ? 18 : 13}
            alt="유튜브 아이콘"
            blurDataURL={YoutubeIcon}
            placeholder="blur"
          />
          미디어팀 콘텐츠 보기
        </BorderRoundButton>
      </S.ImageWrapper>
    </S.Root>
  );
}

export default TeamImage;
