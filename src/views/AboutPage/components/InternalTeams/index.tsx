import { Tag } from '@sopt-makers/ui';
import imgTeamMakers from '@src/assets/images/img_team_makers.png';
import imgTeamMedia from '@src/assets/images/img_team_media.png';
import SectionTop from '@src/views/AboutPage/components/@common/SectionTop';
import * as S from './style';

const TEAMS = [
  { tagLabel: '미디어팀', image: imgTeamMedia },
  { tagLabel: '메이커스팀', image: imgTeamMakers },
];

const InternalTeams = () => {
  return (
    <S.Wrapper>
      <SectionTop
        engTitle="Teams"
        korTitle="솝트 자체 기구"
        description="솝트에는 보다 유연하고 열정적인 경험을 위해 자체적으로 운영하는 두 가지의 팀이 있어요."
      />
      <S.CardList>
        {TEAMS.map(({ tagLabel, image }) => (
          <S.Card key={tagLabel}>
            <S.TeamImage src={image} alt={tagLabel} />
            <S.TagWrapper>
              <Tag size="lg" variant="default" shape="rect" type="line">
                {tagLabel}
              </Tag>
            </S.TagWrapper>
          </S.Card>
        ))}
      </S.CardList>
    </S.Wrapper>
  );
};

export default InternalTeams;
