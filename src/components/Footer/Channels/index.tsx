import { EXTERNAL_LINKS } from '@src/lib/constants/routes';
import facebookLogo from '@src/assets/icons/ic_facebook_filled.svg';
import instagramLogo from '@src/assets/icons/ic_instagram_filled.svg';
import kakaoLogo from '@src/assets/icons/ic_kakao_filled.svg';
import mailLogo from '@src/assets/icons/ic_mail.svg';
import youtubeLogo from '@src/assets/icons/ic_youtube_filled.svg';
import * as S from './style';

interface ChannelsProps {
  isFooter?: boolean;
}

function Channels({ isFooter = false }: ChannelsProps) {
  const handleClick = (e: React.MouseEvent) => {
    switch (e.currentTarget.id) {
      case 'mail':
        window.location.href = `mailto:${EXTERNAL_LINKS.EMAIL}`;
        break;
      case 'facebook':
        window.open(EXTERNAL_LINKS.FACEBOOK);
        break;
      case 'instagram':
        window.open(EXTERNAL_LINKS.INSTAGRAM);
        break;
      case 'youtube':
        window.open(EXTERNAL_LINKS.YOUTUBE);
        break;
      default:
        window.open(EXTERNAL_LINKS.KAKAO);
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
