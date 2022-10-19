import facebookLogo from '@src/assets/icons/facebook_logo.svg';
import instagramLogo from '@src/assets/icons/instagram_logo.svg';
import kakaoLogo from '@src/assets/icons/kakao_logo.svg';
import mailLogo from '@src/assets/icons/mail_logo.svg';
import youtubeLogo from '@src/assets/icons/youtube_logo.svg';

import * as S from './Channels.style';

interface ChannelsProps {
  isFooter?: boolean;
}

function Channels({ isFooter = false }: ChannelsProps) {
  /**
   *     mailLogo.src,
    facebookLogo.src,
    instagramLogo.src,
    youtubeLogo.src,
    kakaoLogo.src,
   */
  const channelsList = [
    { image: mailLogo.src, id: 'mail' },
    { image: facebookLogo.src, id: 'facebook' },
    { image: instagramLogo.src, id: 'instagram' },
    { image: youtubeLogo.src, id: 'youtube' },
    { image: kakaoLogo.src, id: 'kakaotalk' },
  ];

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log('>>e.currentTarget.id', e.currentTarget.id);
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
      {channelsList.map((item) => (
        <S.ChannelButton key={item.id} src={item.image} onClick={handleClick} id={item.id} />
      ))}
    </S.ChannelButtonsWrap>
  );
}

export default Channels;
