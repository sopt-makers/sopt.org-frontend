import FacebookLogo from '@src/assets/logo/facebook.svg';
import InstagramLogo from '@src/assets/logo/instagram.svg';
import KakaoLogo from '@src/assets/logo/kakao.svg';
import MailLogo from '@src/assets/logo/mail.svg';
import YoutubeLogo from '@src/assets/logo/youtube.svg';

import * as S from './Channels.style';

interface ChannelsProps {
  isFooter?: boolean;
}

function Channels({ isFooter = false }: ChannelsProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    switch (e.currentTarget.id) {
      case 'mail':
        window.location.href = 'mailto:president@sopt.org';
        break;
      case 'facebook':
        window.open('https://www.facebook.com/clubsopt/');
        break;
      case 'instagram':
        window.open('https://www.instagram.com/sopt_timi_tmi/');
        break;
      case 'youtube':
        window.open('https://www.youtube.com/c/SOPTMEDIA');
        break;
      default:
        window.open('http://pf.kakao.com/_JdTKd');
        break;
    }
  };

  return (
    <S.ChannelButtonsWrap isFooter={isFooter}>
      <MailLogo id={'mail'} onClick={handleClick} />
      <FacebookLogo id={'facebook'} onClick={handleClick} />
      <InstagramLogo id={'instagram'} onClick={handleClick} />
      <KakaoLogo id={'kakao'} onClick={handleClick} />
      <YoutubeLogo id={'youtube'} onClick={handleClick} />
    </S.ChannelButtonsWrap>
  );
}

export default Channels;
