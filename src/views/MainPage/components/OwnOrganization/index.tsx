import { Ref, forwardRef } from 'react';
import { OWN_ORGANIZATION_LIST } from '@src/lib/constants/main';
import Tab from '../Tab';
import OwnOrganizationCard from './Card';
import * as S from './style';

function OwnOrganization(_props: unknown, ref: Ref<HTMLDivElement>) {
  return (
    <S.Wrapper id="team" ref={ref}>
      <Tab
        title={'솝트가 운영하는 자체 기구'}
        description={
          '솝트에는 자체적으로 운영하는 네 가지의 팀이 있습니다.\n솝트의 보다 유연하고 열정적인 경험을 위해 노력하죠.'
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

export default forwardRef(OwnOrganization);
