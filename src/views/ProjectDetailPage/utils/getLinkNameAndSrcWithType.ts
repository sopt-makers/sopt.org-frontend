import appstore from '@src/assets/icons/appstore_icon.svg';
import github from '@src/assets/icons/github_icon.svg';
import googleplay from '@src/assets/icons/googleplay_icon.svg';
import media from '@src/assets/icons/media_icon.svg';
import website from '@src/assets/icons/website_icon.svg';
import instagram from '@src/assets/logo/instagram.svg';
import { LinkDetailType } from '../types';

const LinkMap: Record<LinkDetailType, { name: string; src: string }> = {
  website: { name: '웹사이트', src: website },
  googlePlay: { name: '플레이스토어', src: googleplay },
  appStore: { name: '앱스토어', src: appstore },
  github: { name: 'Github', src: github },
  instagram: { name: '인스타그램', src: instagram },
  media: { name: '발표영상', src: media },
};

export const getLinkNameAndSrcWithType = (title: LinkDetailType) => {
  return LinkMap[title];
};
