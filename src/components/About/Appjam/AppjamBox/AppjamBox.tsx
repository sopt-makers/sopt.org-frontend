import AppStoreBtn from '@src/assets/icons/apple_appstore.svg';
import GooglePlayStoreBtn from '@src/assets/icons/google_playstore.svg';
import DotImg from '@src/assets/images/DotImg.svg';
import { APPJAM_INFO } from '@src/constants/about';
import Image from 'next/image';
import React from 'react';

import * as S from './AppjamBox.style';

function AppjamBox() {
  return (
    <S.AppjamBox>
      <S.AppjamInfoWrapper>
        <h2>{APPJAM_INFO.RELEASE.EN}</h2>
        <Image
          src={DotImg}
          width={25}
          height={5}
          alt="split dot"
          blurDataURL={DotImg}
          placeholder="blur"
        />
        <div className="top__info">
          <h2>{APPJAM_INFO.RELEASE.KO}</h2>
          <h2>{APPJAM_INFO.RELEASE.COUNT}</h2>
          <h2>팀</h2>
        </div>
      </S.AppjamInfoWrapper>
      <S.DownloadBtnWrapper>
        <Image
          src={GooglePlayStoreBtn}
          width={202}
          height={74}
          alt="구글 플레이스토어"
          role="button"
          tabIndex={0}
          id="playstore"
          blurDataURL={GooglePlayStoreBtn}
          placeholder="blur"
        />
        <Image
          src={AppStoreBtn}
          width={202}
          height={74}
          alt="앱스토어"
          role="button"
          tabIndex={0}
          id="appstore"
          blurDataURL={AppStoreBtn}
          placeholder="blur"
        />
      </S.DownloadBtnWrapper>
      <S.AppjamInfoWrapper>
        <h2>{APPJAM_INFO.FOUNDATION.EN}</h2>
        <Image
          src={DotImg}
          width={25}
          height={5}
          alt="split dot"
          blurDataURL={DotImg}
          placeholder="blur"
        />
        <div className="bottom__info">
          <h2>{APPJAM_INFO.FOUNDATION.KO}</h2>
          <h2>{APPJAM_INFO.FOUNDATION.COUNT}</h2>
          <h2>팀</h2>
        </div>
      </S.AppjamInfoWrapper>
    </S.AppjamBox>
  );
}

export default AppjamBox;
