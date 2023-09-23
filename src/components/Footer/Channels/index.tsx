import facebookLogo from '@src/assets/icons/facebook.svg';
import instagramLogo from '@src/assets/icons/instagram.svg';
import kakaoLogo from '@src/assets/icons/kakao.svg';
import mailLogo from '@src/assets/icons/mail.svg';
import youtubeLogo from '@src/assets/icons/youtube.svg';
import * as S from './style';

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
      <S.ClickableChannelButton
        src={mailLogo}
        width={30}
        height={30}
        id="mail"
        alt="메일"
        onClick={handleClick}
      />
      <S.ClickableChannelButton
        src={facebookLogo}
        width={30}
        height={30}
        id="facebook"
        alt="페이스북"
        onClick={handleClick}
      />
      <S.ClickableChannelButton
        src={instagramLogo}
        width={30}
        height={30}
        id="instagram"
        alt="인스타그램"
        onClick={handleClick}
      />
      <S.ClickableChannelButton
        src={youtubeLogo}
        width={30}
        height={30}
        id="youtube"
        alt="유튜브"
        onClick={handleClick}
      />
      <S.ClickableChannelButton
        src={kakaoLogo}
        width={30}
        height={30}
        id="kakao"
        alt="카카오톡 채널"
        onClick={handleClick}
      />
    </S.ChannelButtonsWrap>
  );
}

export default Channels;
