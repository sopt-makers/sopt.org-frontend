import SectionTop from '@src/views/AboutPage/components/@common/SectionTop';
import TeamCard from '@src/views/AboutPage/components/InternalTeams/Card';
import * as S from './style';

export type TeamKey = 'media' | 'makers';

export const INTERNAL_TEAMS: TeamKey[] = ['media', 'makers'];

const InternalTeams = () => {
  return (
    <S.Wrapper>
      <SectionTop
        engTitle="Teams"
        korTitle="솝트 자체 기구"
        description="솝트에는 보다 유연하고 열정적인 경험을 위해 자체적으로 운영하는 두 가지의 팀이 있어요."
      />
      <S.CardList>
        {INTERNAL_TEAMS.map((team) => (
          <TeamCard key={team} team={team} />
        ))}
      </S.CardList>
    </S.Wrapper>
  );
};

export default InternalTeams;
