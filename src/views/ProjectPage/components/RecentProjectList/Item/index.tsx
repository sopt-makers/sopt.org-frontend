import { useDeviceType } from '@src/hooks/useDevice';
import { LinkType, ProjectLinkType, ProjectType, StaticProjectType } from '@src/lib/types/project';
import { S } from './style';

type RecentProjectListItemProps = ProjectType | StaticProjectType;

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
): string | undefined => {
  if (link.length === 0) return;
  if (link.length === 1) return link[0].url;

  const linkRecord = linkToRecord(link);
  if (deviceType === 'iOS' && linkRecord['appStore']) {
    return linkRecord['appStore'];
  } else if (deviceType === 'Android' && linkRecord['googlePlay']) {
    return linkRecord['googlePlay'];
  } else if (deviceType === 'desktop' && linkRecord['website']) {
    return linkRecord['website'];
  }
  return linkRecord.appStore || link[0].url;
};

export default function RecentProjectListItem(props: RecentProjectListItemProps) {
  const deviceType = useDeviceType();
  const tryLink = getTryLink(props.links, deviceType);

  return (
    <S.MarginWrapper>
      <S.GridWrapper>
        <S.ThumbnailImage src={props.logoImage} width={116} height={116} alt={props.name} />
        <S.DetailWrapper>
          <S.TextName>{props.name}</S.TextName>
          <S.TextSummary>{props.summary}</S.TextSummary>
        </S.DetailWrapper>
        <S.DetailFooterWrapper>
          <S.Chip>{props.generation}기</S.Chip>
          {tryLink && (
            <S.TryLink href={tryLink} target="_blank">
              사용해보기
            </S.TryLink>
          )}
        </S.DetailFooterWrapper>
      </S.GridWrapper>
    </S.MarginWrapper>
  );
}
