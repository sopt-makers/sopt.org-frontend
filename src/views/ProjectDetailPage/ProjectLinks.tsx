import apple from '@src/assets/icons/ic_apple.svg';
import arrow from '@src/assets/icons/ic_arrow_up_right.svg';
import github from '@src/assets/icons/ic_github_filled.svg';
import globe from '@src/assets/icons/ic_globe.svg';
import play from '@src/assets/icons/ic_google_play.svg';
import instagram from '@src/assets/icons/ic_instagram_outline.svg';
import media from '@src/assets/icons/ic_media.svg';
import { ProjectLinkType } from '@src/lib/types/project';
import * as S from './style';

const linkDetails = {
  website: { name: 'Website', icon: globe },
  appStore: { name: 'AppStore', icon: apple },
  googlePlay: { name: 'PlayStore', icon: play },
  github: { name: 'Github', icon: github },
  instagram: { name: '인스타그램', icon: instagram },
  media: { name: '발표영상', icon: media },
};

interface ProjectLinksProps {
  type: 'service' | 'channel';
  links: ProjectLinkType[];
}

export default function ProjectLinks({ type, links }: ProjectLinksProps) {
  if (!links.length) return null;

  const isService = type === 'service';
  const List = isService ? S.ServiceLinks : S.ChannelLinks;
  const Link = isService ? S.ServiceLink : S.ChannelLink;
  const iconSize = isService ? 16 : 40;

  return (
    <List>
      {links.map(({ title, url }) => (
        <Link key={url} href={url} target="_blank" rel="noopener noreferrer">
          <img src={linkDetails[title]?.icon ?? media} alt="" width={iconSize} height={iconSize} />
          {linkDetails[title]?.name ?? title}
          {isService && <S.ExternalArrow src={arrow} width="10" height="10" alt="" />}
        </Link>
      ))}
    </List>
  );
}
