import SectionLabel from '@src/components/common/SectionLabel';
import makersLogo from '@src/assets/images/img_team_makers.png';
import mediaLogo from '@src/assets/images/img_team_media.png';
import { EXTERNAL_LINKS } from '@src/lib/constants/routes';
import * as S from './style';

const teams = [
  {
    name: '미디어팀',
    subtitle: 'Media Team',
    description:
      '미디어팀은 SOPT의 이야기를 기록하고 알리는 팀입니다. 블로그, 인스타그램, 유튜브 콘텐츠를 기획하고 제작하며, 기수의 활동이 더 많은 사람에게 닿도록 돕습니다.',
    team: 'media' as const,
    logo: mediaLogo,
    href: EXTERNAL_LINKS.INSTAGRAM,
  },
  {
    name: '메이커스팀',
    subtitle: 'makers Team',
    description:
      '메이커스팀은 SOPT 구성원을 위한 서비스를 직접 만드는 프로덕트 팀입니다. 공식 홈페이지와 내부 플랫폼을 기획·디자인·개발하고, 출시 이후 운영까지 책임집니다.',
    team: 'makers' as const,
    logo: makersLogo,
    href: EXTERNAL_LINKS.MAKERS,
  },
];

interface TeamsSectionProps {
  mainColor: string;
}

export default function TeamsSection({ mainColor }: TeamsSectionProps) {
  return (
    <S.Section aria-labelledby="teams-title">
      <S.Heading>
        <SectionLabel label="Teams" color={mainColor} />
        <S.Title id="teams-title">SOPT 자체 기구</S.Title>
      </S.Heading>
      <S.Cards>
        {teams.map(({ name, subtitle, description, team, logo, href }) => (
          <S.Card key={name}>
            <S.LogoPanel team={team}>
              <S.Logo
                src={logo.src}
                width={logo.width}
                height={logo.height}
                loading="lazy"
                alt=""
              />
            </S.LogoPanel>
            <S.Name>
              {name}
              <S.Subtitle lang="en">{subtitle}</S.Subtitle>
            </S.Name>
            <S.Description>{description}</S.Description>
            <S.Link href={href} target="_blank" rel="noopener noreferrer" mainColor={mainColor}>
              <S.LinkLabel>{name} 더 알아보기</S.LinkLabel>
              <S.LinkIcon>
                <S.Arrow aria-hidden="true" />
              </S.LinkIcon>
            </S.Link>
          </S.Card>
        ))}
      </S.Cards>
    </S.Section>
  );
}
