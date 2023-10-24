import Image from 'next/image';
import { useDeviceType } from '@src/hooks/useDevice';
import { LinkType, ProjectLinkType, ProjectType } from '@src/lib/types/project';
import { S } from './style';

type RecentProjectListItemProps = ProjectType;

const linkToRecord = (links: ProjectLinkType[]): Record<LinkType, string | undefined> => {
  const record: Record<LinkType, string | undefined> = {
    [LinkType.Github]: undefined,
    [LinkType.instagram]: undefined,
    [LinkType.웹사이트]: undefined,
    [LinkType.발표영상]: undefined,
    [LinkType['구글 플레이스토어']]: undefined,
    [LinkType['앱 스토어']]: undefined,
    [LinkType['기타 관련자료']]: undefined,
  };

  for (const link of links) {
    record[link.title] = link.url;
  }

  return record;
};

const getTryLink = (
  link: ProjectLinkType[],
  deviceType?: 'desktop' | 'iOS' | 'Android',
): string => {
  const linkRecord = linkToRecord(link);
  if (deviceType === 'iOS' && linkRecord['appStore']) {
    return linkRecord['appStore'];
  }
  if (deviceType === 'Android' && linkRecord['googlePlay']) {
    return linkRecord['googlePlay'];
  }
  return (
    linkRecord['website'] ??
    linkRecord['media'] ??
    linkRecord['github'] ??
    linkRecord['instagram'] ??
    ''
  );
};

function RecentProjectListItem(props: RecentProjectListItemProps) {
  const deviceType = useDeviceType();
  const tryLink = getTryLink(props.link, deviceType);

  return (
    <S.MarginWrapper>
      <S.FlexWrapper>
        <Image src={props.logoImage} width={116} height={116} alt={props.name} />
        <S.DetailWrapper>
          <S.TextName>{props.name}</S.TextName>
          <S.TextSummary>{props.summary}</S.TextSummary>
          <S.DetailFooterWrapper>
            <S.Chip>{props.generation}기</S.Chip>
            <S.TryLink href={tryLink}>사용해보기</S.TryLink>
          </S.DetailFooterWrapper>
        </S.DetailWrapper>
      </S.FlexWrapper>
    </S.MarginWrapper>
  );
}

export default RecentProjectListItem;
