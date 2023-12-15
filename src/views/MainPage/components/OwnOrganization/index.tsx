import { OWN_ORGANIZATION_LIST } from '@src/lib/constants/main';
import Tab from '../Tab';
import OwnOrganizationCard from './Card';
import * as S from './style';

export default function OwnOrganization() {
  return (
    <div>
      <Tab
        tab={'(3) 자체 운영 기구'}
        title={'SOPT를 운영하는 자체 기구'}
        description={
          'SOPT에는 솝트를 자체적으로 운영하는 두 가지의 기구가 존재합니다. 한 기수 이상 활동한\n사람들이 모여, 솝트가 보다 유연하고 열정적인 경험으로 채워질 수 있도록 노력하죠.'
        }
      />
      <S.Wrapper>
        {OWN_ORGANIZATION_LIST.map((organization) => (
          <OwnOrganizationCard key={organization.nameEng} {...organization} />
        ))}
      </S.Wrapper>
    </div>
  );
}
