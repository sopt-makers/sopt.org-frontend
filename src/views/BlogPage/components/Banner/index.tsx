import { BlogTabType } from '@src/views/BlogPage/components/BlogTab/types';
import * as S from './style';
import reviewBanner from '@src/assets/images/img_review_banner.png';
import reviewBannerMobile from '@src/assets/images/img_review_banner_mobile.png';
import reviewBannerDesktopTablet from '@src/assets/images/img_review_banner_responsive.png';
import storyBannerDesktopTablet from '@src/assets/images/img_story_banner_responsive.png';
import reviewBannerTablet from '@src/assets/images/img_review_banner_tablet.png';
import storyBanner from '@src/assets/images/img_story_banner.png';
import storyBannerMobile from '@src/assets/images/img_story_banner_mobile.png';
import storyBannerTablet from '@src/assets/images/img_story_banner_tablet.png';
import { useIsDesktop, useIsTablet } from '@src/hooks/useDevice';
import { useIsMobile } from '@src/hooks/useDevice';

const DESKTOP_WIDTH = '940px';
const TABLET_MAX_WIDTH = '768px';
const TABLET_MIN_WIDTH = '376px';
const MOBILE_WIDTH = '375px';

const Banner = ({ selectedTab }: { selectedTab: BlogTabType }) => {
  const isDesktop = useIsDesktop(DESKTOP_WIDTH);
  const isDesktopTablet = useIsTablet(TABLET_MAX_WIDTH, DESKTOP_WIDTH);
  const isTablet = useIsTablet(TABLET_MIN_WIDTH, TABLET_MAX_WIDTH);
  const isMobile = useIsMobile(MOBILE_WIDTH);

  const getReviewBannerImage = () => {
    if (isDesktop) {
      return reviewBanner.src;
    } else if (isDesktopTablet) {
      return reviewBannerDesktopTablet.src;
    } else if (isTablet) {
      return reviewBannerTablet.src;
    } else if (isMobile) {
      return reviewBannerMobile.src;
    }
  };

  const getStoryBannerImage = () => {
    if (isDesktop) {
      return storyBanner.src;
    } else if (isDesktopTablet) {
      return storyBannerDesktopTablet.src;
    } else if (isTablet) {
      return storyBannerTablet.src;
    } else if (isMobile) {
      return storyBannerMobile.src;
    }
  };

  return (
    <>
      {
        selectedTab === BlogTabType.REVIEW ? (
          <S.BannerImage src={getReviewBannerImage()} />
        ) : (
          <S.BannerImage src={getStoryBannerImage()} />
        )
      }
    </>
  );
};

export default Banner;
