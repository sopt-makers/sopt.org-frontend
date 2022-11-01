import appstore from '@src/assets/icons/appstore_icon.svg';
import github from '@src/assets/icons/github_icon.svg';
import googleplay from '@src/assets/icons/googleplay_icon.svg';
import instagram from '@src/assets/icons/instagram_icon.svg';
import media from '@src/assets/icons/media_icon.svg';
import website from '@src/assets/icons/website_icon.svg';

export const getLinkNameAndSrcWithType = (type: string) => {
  switch (type) {
    case 'website':
      return { name: '웹사이트', src: website };
    case 'playstore':
      return { name: '플레이스토어', src: googleplay };
    case 'appstore':
      return { name: '앱스토어', src: appstore };
    case 'github':
      return { name: 'Github', src: github };
    case 'instagram':
      return { name: '인스타그램', src: instagram };
    default:
      return { name: '발표영상', src: media };
  }
};
