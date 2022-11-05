import appstore from '@src/assets/icons/appstore_icon.svg';
import github from '@src/assets/icons/github_icon.svg';
import googleplay from '@src/assets/icons/googleplay_icon.svg';
import instagram from '@src/assets/icons/instagram_icon.svg';
import media from '@src/assets/icons/media_icon.svg';
import website from '@src/assets/icons/website_icon.svg';
import { LinkDetailType } from '../types';

const LinkMap = {
  웹사이트: website,
  '구글 플레이스토어': googleplay,
  '앱 스토어': appstore,
  Github: github,
  instagram,
  발표영상: media,
};

export const getLinkNameAndSrcWithType = (title: LinkDetailType) => {
  switch (title) {
    case '웹사이트':
      return website;
    case '구글 플레이스토어':
      return googleplay;
    case '앱 스토어':
      return appstore;
    case 'Github':
      return github;
    case 'instagram':
      return instagram;
    case '발표영상':
      return media;
  }
  // return LinkMap[title];
};
