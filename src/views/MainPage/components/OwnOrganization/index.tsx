import { OWN_ORGANIZATION_LIST } from '@src/lib/constants/main';
import OwnOrganizationCard from './Card';
import * as S from './style';

export default function OwnOrganization() {
  return (
    <S.Wrapper>
      {OWN_ORGANIZATION_LIST.map((organization) => (
        <OwnOrganizationCard key={organization.nameEng} {...organization} />
      ))}
    </S.Wrapper>
  );
}
