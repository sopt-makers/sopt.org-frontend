import Channels from '@src/components/Footer/Channels';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';
import { ReactComponent as ArrowRight } from '@src/assets/icons/arrow-right-16x16.svg';

import * as S from './Footer.style';

export function Footer() {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1280px)',
  });

  const router = useRouter();

  const handleClick = () => {
    router.push('/rules');
  };

  return (
    <S.Root>
      <S.ContentWrap>
        <div>
          <S.TitleButton onClick={handleClick}>
            <span>SOPT 회칙</span>
            <ArrowRight />
          </S.TitleButton>
          <S.CopyrightText>
            SOPT (솝트, 대학생연합 IT벤처창업 동아리)
            <br />
            Copyrightⓒ2022.SOPT. All rights reserved.
          </S.CopyrightText>
        </div>
        <S.ChannelsWrap>
          {isDesktop && <S.ChannelTitleText>SOPT 채널 바로가기</S.ChannelTitleText>}
          <Channels isFooter={true} />
        </S.ChannelsWrap>
      </S.ContentWrap>
    </S.Root>
  );
}
