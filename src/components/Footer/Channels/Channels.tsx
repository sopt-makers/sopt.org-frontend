import facebookLogo from '@src/assets/logo/facebook.svg';
import instagramLogo from '@src/assets/logo/instagram.svg';
import kakaoLogo from '@src/assets/logo/kakao.svg';
import mailLogo from '@src/assets/logo/mail.svg';
import youtubeLogo from '@src/assets/logo/youtube.svg';
import * as S from './Channels.style';

interface ChannelsProps {
  isFooter?: boolean;
}

function Channels({ isFooter = false }: ChannelsProps) {
  const handleClick = (e: React.MouseEvent) => {
    switch (e.currentTarget.id) {
      case 'mail':
        window.location.href = 'mailto:president@sopt.org';
        break;
      case 'facebook':
        window.open('https://www.facebook.com/clubsopt/');
        break;
      case 'instagram':
        window.open('https://www.instagram.com/sopt_official/');
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
      <S.ChannelButton src={mailLogo} id={'mail'} onClick={handleClick} />
      <S.ChannelButton src={facebookLogo} id={'facebook'} onClick={handleClick} />
      <S.ChannelButton src={instagramLogo} id={'instagram'} onClick={handleClick} />
      <S.ChannelButton src={kakaoLogo} id={'kakao'} onClick={handleClick} />
      <S.ChannelButton src={youtubeLogo} id={'youtube'} onClick={handleClick} />
    </S.ChannelButtonsWrap>
  );
}

export default Channels;
