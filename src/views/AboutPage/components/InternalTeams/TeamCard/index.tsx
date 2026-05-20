import { colors } from '@sopt-makers/colors';
import { Tag } from '@sopt-makers/ui';
import type { StaticImageData } from 'next/image';
import { useContext } from 'react';
import imgTeamMakers from '@src/assets/images/img_team_makers.png';
import imgTeamMedia from '@src/assets/images/img_team_media.png';
import { BrandingColorContext } from '@src/views/AboutPage';
import { TeamKey } from '@src/views/AboutPage/components/InternalTeams';
import * as S from './style';

interface TeamConfig {
  tagLabel: string;
  logo: StaticImageData;
  gradientColor?: string;
}

const TEAM_CONFIG: Record<TeamKey, TeamConfig> = {
  media: {
    tagLabel: '미디어팀',
    logo: imgTeamMedia,
  },
  makers: {
    tagLabel: '메이커스팀',
    logo: imgTeamMakers,
    gradientColor: colors.secondary,
  },
};

interface Props {
  team: TeamKey;
}

const TeamCard = ({ team }: Props) => {
  const { main } = useContext(BrandingColorContext);
  const { tagLabel, logo, gradientColor } = TEAM_CONFIG[team];

  const resolvedGradientColor = gradientColor ?? `#${main}`;
  const TeamLogoComponent = S.TeamLogo[team];

  return (
    <S.Card gradientColor={resolvedGradientColor}>
      <TeamLogoComponent src={logo} alt={tagLabel} />
      <S.TagWrapper>
        <Tag size="lg" variant="default" shape="rect" type="line">
          {tagLabel}
        </Tag>
      </S.TagWrapper>
    </S.Card>
  );
};

export default TeamCard;
