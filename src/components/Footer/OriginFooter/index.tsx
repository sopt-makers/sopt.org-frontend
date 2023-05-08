import { useRouter } from 'next/router';
import { FC } from 'react';
import { ReactComponent as ArrowRight } from '@src/assets/icons/arrow-right-16x16.svg';
import Channels from '@src/components/Footer/Channels';
import * as St from './style';

const OriginFooter: FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/rules');
  };

  return (
    <St.Root>
      <St.ContentWrap>
        <div>
          <St.TitleButton onClick={handleClick}>
            <span>SOPT 회칙</span>
            <ArrowRight />
          </St.TitleButton>
          <St.CopyrightText>
            SOPT (솝트, 대학생연합 IT벤처창업 동아리)
            <br />
            Copyrightⓒ2022.SOPT. All rights reserved.
          </St.CopyrightText>
        </div>
        <St.ChannelsWrap>
          <St.ChannelTitleText>SOPT 채널 바로가기</St.ChannelTitleText>
          <Channels isFooter={true} />
        </St.ChannelsWrap>
      </St.ContentWrap>
    </St.Root>
  );
};

export default OriginFooter;
