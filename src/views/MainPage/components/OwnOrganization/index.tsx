import { OWN_ORGANIZATION_LIST } from '@src/lib/constants/main';
import Tab from '../Tab';
import OwnOrganizationCard from './Card';
import * as S from './style';

export default function OwnOrganization() {
  return (
    <S.Wrapper id="team">
      <Tab
        title={'솝트가 운영하는 자체 기구'}
        description={
          '솝트에는 솝트를 자체적으로 운영하는 네 가지의 팀이 존재합니다. 한 기수 이상 활동한\n사람들이 모여, 솝트가 보다 유연하고 열정적인 경험으로 채워질 수 있도록 노력하죠.'
        }
      />
      <S.ContentWrapper>
        {OWN_ORGANIZATION_LIST.map((organization) => (
          <OwnOrganizationCard key={organization.nameEng} {...organization} />
        ))}
      </S.ContentWrapper>
    </S.Wrapper>
  );
}
